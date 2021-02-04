<?php

namespace App\Service\Goods;

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
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Serializer;

class GoodsService
{
    private $manager;
    private $filters;
    private $sorts;

    private $sortService;
    private $filterService;

    public function __construct(EntityManagerInterface $manager, Sort $sortService, Filter $filterService)
    {
        $this->manager = $manager;
        $this->sortService = $sortService;
        $this->filterService = $filterService;
    }

    public function doActions($request)
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

        // ------- PAGINATOR ------- //
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

    public function paginate($dql, $page = 1, $limit = 5)
    {
        $paginator = new Paginator($dql);

        $paginator->getQuery()
            ->setFirstResult($limit * ($page - 1)) // Offset
            ->setMaxResults($limit); // Limit

        return $paginator;
    }
}