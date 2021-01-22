<?php

namespace App\Service;

use App\Entity\Goods;
use App\Repository\GoodsRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Serializer;

class ShowGoods
{
    private $goods;
    private $session;

    public function __construct(GoodsRepository $goods, SessionInterface $session)
    {
        $this->goods = $goods;
        $this->session = $session;
    }

    public function show()
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        $goods_all = $this->goods->findAll();
        return $serializer->serialize($goods_all, "json",[AbstractNormalizer::IGNORED_ATTRIBUTES => ['orderGood']]);
    }


}