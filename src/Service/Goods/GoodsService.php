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
//    public function __construct()
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $this->serializer = new Serializer($normalizer, $encoder);
        $this->goodsRepository = $goodsRepository;

        $goodsTemp = $this->goodsRepository->findAll();
        $goods = [];
        foreach ($goodsTemp as $value){
            array_push($goods, $this->serializer->normalize($value, null,
                [AbstractNormalizer::ATTRIBUTES =>
                    ['id','name','price','color','description','count', 'category' => ['categoryName']]]));
        }
        $this->goods = $goods;
    }

    public function sortAll($sort_data):array
    {
        $result = [];
        $this->goods = $this->priceSort($sort_data);
        $this->goods = $this->categorySort($sort_data);
        return $this->goods;
    }

    public function priceSort($sort_data):array
    {
        $array = new PriceSort();
        return $array->sort($sort_data,$this->goods);
    }

    public function categorySort($sort_data):array
    {
        $array = new CategorySort();
        return $array->sort($sort_data, $this->goods);
    }

//    public function show($data)
//    {
//
//        $sort_by_price = [];
//        $sort_by_category = [];
//        if (count($data) > 0){
//            if ($price_data = $data['sort_by_price']){
//                if ($price_data['min'] != 0 && $price_data['max'] != 0){
//                    foreach ($goods_all as $value){
//                        if ($price_data['min'] <= $value['price'] && $price_data['max'] >= $value['price']){
//                            unset($value['category']);
//                            array_push($sort_by_price, $value);
//                        }
//                    }
//                }
//            }
//$sort_by_category = [];

//            if ($category_data = $data['sort_by_category']){
//                if ($category_data['name'] != "None"){
//                    foreach ($goods_all as $value){
//                        if ($value['category'] != null){
//                            if ($category_data['name'] == $value['category']['categoryName']){
//                                unset($value['category']);
//                                array_push($sort_by_category, $value);
//                            }
//                        }
//                    }
//                }
//            }
//        }
//        dump($sort_by_price);
//        dump($sort_by_category);
//        dump(array_count_values(array_diff($sort_by_price[2], $sort_by_category[0])));
////        else
////            $res = $goods_all;
////        dump($res);
////        return $serializer->serialize($res, 'json');
//    }
}