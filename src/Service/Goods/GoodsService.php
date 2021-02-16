<?php

namespace App\Service\Goods;

use App\Entity\Category;
use App\Entity\Goods;
use App\Repository\GoodsRepository;
use App\Service\Goods\Filter\CategoryFilter;
use App\Service\Goods\Filter\CountFilter;
use App\Service\Goods\Filter\Filter;
use App\Service\Goods\Filter\PriceFilter;
use App\Service\Goods\Filter\FilterInterface;
use App\Service\Goods\Sort\CountSort;
use App\Service\Goods\Sort\PriceSort;
use App\Service\Goods\Sort\Sort;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Psr\Cache\InvalidArgumentException;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\Cache\ItemInterface;

class GoodsService
{
    private $manager;
    private $filters;
    private $sorts;

    private $sortService;
    private $filterService;

    private $cache;

    public function __construct(EntityManagerInterface $manager, Sort $sortService, Filter $filterService, CacheInterface $cache)
    {
        $this->manager = $manager;
        $this->sortService = $sortService;
        $this->filterService = $filterService;
        $this->cache = $cache;
    }

    public function doActions($request): Paginator
    {
        /**
         * @var $goodsRepository GoodsRepository
         */
        $this->findData($request);
        $goodsRepository = $this->manager->getRepository(Goods::class);
        $qb = $goodsRepository->createQueryBuilder('goods');
        $qb->select('goods');
        $qb->leftJoin('goods.category', 'category');

        $this->filterService->applyFilter($this->filters, $qb);
        $this->sortService->applySort($this->sorts, $qb);
        return $this->paginate($qb, $request);
    }

    public function paginate(QueryBuilder $qb, array $request): Paginator
    {
        $paginator = new Paginator($qb->getQuery());
        $limit = 6;
        $paginator->getQuery()
            ->setFirstResult($limit * ($request['page'] - 1))
            ->setMaxResults($limit);

        return $paginator;
    }

    public function findData($request)
    {
        if (array_key_exists('filters', $request))
            $this->filters = $request['filters'];
        if (array_key_exists('sorts', $request))
            $this->sorts = $request['sorts'];
    }

    public function setCache(string $key): array
    {
        return $this->cache->get($key, function (ItemInterface $item){
            $value =  $this->manager->getRepository(Category::class)->findAll();
            $item->expiresAfter(300);
            return $value;
        });
    }

    public function deleteCache(string $key): void
    {
        try {
            $this->cache->delete($key);
        } catch (InvalidArgumentException $e) {
        }
    }
}