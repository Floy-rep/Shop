<?php

namespace App\DataFixtures;

use App\Entity\Order;
use App\Entity\OrderGood;
use App\Entity\User;
use App\Repository\GoodsRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;
    private $repository;

    public function __construct(UserPasswordEncoderInterface $encoder, GoodsRepository $repository){
        $this->encoder = $encoder;
        $this->repository = $repository;
    }

    public function load(ObjectManager $manager)
    {
//        $entity = new User();
//        $entity->setEmail("sad@mail.ru");
//        $entity->setPassword($this->encoder->encodePassword($entity,"123123"));
//
//        $order = new Order();
//        $order->setOrderId($entity);
//        $orderGood = new OrderGood();
//        $orderGood->setOrder($order);
//        $orderGood->setGood($this->repository->find('14'));
//
//        $entity->addOrder($order);
//        $manager->persist($entity);
//        $manager->flush();
    }
}
