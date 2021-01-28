<?php

namespace App\Service\Goods;

use App\Entity\Goods;
use App\Repository\GoodsRepository;
use App\Service\Goods\Sort\CategorySort;
use App\Service\Goods\Sort\PriceSort;
use App\Service\Goods\Sort\SortInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
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

    public function __construct(GoodsRepository $goodsRepository, SessionInterface $session)
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $this->serializer = new Serializer($normalizer, $encoder);
        $this->goodsRepository = $goodsRepository;

        $goodsTemp = $this->goodsRepository->findAll();
        $goods = [];
        foreach ($goodsTemp as $value) {
            array_push($goods, $this->serializer->normalize($value, null,
                [AbstractNormalizer::ATTRIBUTES =>
                    ['id', 'name', 'price', 'color', 'description', 'count', 'category' => ['categoryName']]]));
        }
        $this->goods = $goods;
    }

    public function sortAll($sort_data): string
    {
        if (count($sort_data) != null) {
            $this->goods = $this->priceSort($sort_data);
            $this->goods = $this->categorySort($sort_data);
        }
        return $this->serializer->serialize($this->goods, 'json');
    }


    public function priceSort($sort_data): array
    {
        $array = new PriceSort();
        return $array->sort($sort_data, $this->goods);
    }

    public function categorySort($sort_data): array
    {
        $array = new CategorySort();
        return $array->sort($sort_data, $this->goods);
    }
}