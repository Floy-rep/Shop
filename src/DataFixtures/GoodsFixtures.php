<?php

namespace App\DataFixtures;

use App\Entity\Goods;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GoodsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $entity = new Goods();
        $entity->setName('Ananas');
        $entity->setColor('yellow');
        $entity->setprice('50');
        $entity->setCount(10);
        $entity->setDescription("Very yellow");

        $manager->persist($entity);
        $manager->flush();

    }
}
