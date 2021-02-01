<?php

namespace App\Service\Goods;

use App\Entity\Goods;
use App\Repository\GoodsRepository;
use App\Service\Goods\Sort\CategorySort;
use App\Service\Goods\Sort\PriceSort;
use App\Service\Goods\Sort\SortInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Serializer;

class GoodsService
{
    private $goods;
    private $goodsRepository;
    private $serializer;
    private $session;
    private $sort;
    private $manager;
    private $filters;

    public function __construct(EntityManagerInterface $manager, SessionInterface $session)
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $this->serializer = new Serializer($normalizer, $encoder);

        $this->manager = $manager;
//        $this->goodsRepository = $goodsRepository;

//        $goodsTemp = $this->goodsRepository->findAll();
//        $goods = [];
//        foreach ($goodsTemp as $value) {
//            array_push($goods, $this->serializer->normalize($value, null,
//                [AbstractNormalizer::ATTRIBUTES =>
//                    ['id', 'name', 'price', 'color', 'description', 'count', 'category' => ['categoryName']]]));
//        }
//        $this->goods = $goods;
    }

    public function filterAll($filters): array
    {
        /**
         * @var $goodsRepository GoodsRepository
         */
        $this->filters = $filters['filters'];
        $goodsRepository = $this->manager->getRepository(Goods::class);
        $qb = $goodsRepository->createQueryBuilder('goods');
        $qb->select(
            'goods.id, goods.name, goods.price, goods.color, goods.description, goods.count, 
            category.category_name AS categoryName'
        );
        $this->priceFilter($qb);
        $this->categoryFilter($qb);
        return $qb->getQuery()->getResult();
//        return $this->serializer->serialize($this->goods, 'json');
    }


    public function priceFilter($qb)
    {
        $filter = new PriceSort();
        $filter->filter($this->filters, $qb);
    }

    public function categoryFilter($qb)
    {
        $filter = new CategorySort();
        $filter->filter($this->filters, $qb);
    }
}