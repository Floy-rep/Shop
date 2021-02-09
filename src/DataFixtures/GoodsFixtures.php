<?php

namespace App\DataFixtures;

use App\Entity\Goods;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GoodsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i=0; $i< 200; $i++)
        {
            $entity = new Goods();
            $entity->setName('Ananas');
            $entity->setColor('yellow');
            $entity->setprice(rand(1,100));
            $entity->setCount(rand(1,100));
            $entity->setDescription("Very yellow");
            $manager->persist($entity);
            $manager->flush();
        }
    }
}
