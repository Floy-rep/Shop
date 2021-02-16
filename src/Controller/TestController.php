<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\EavAttribute;
use App\Entity\EavValue;
use App\Entity\Goods;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/test', name: 'test')]
    public function index(EntityManagerInterface $manager): Response
    {
        $attribute = new EavAttribute();
        $category = new Category();
        $value = new EavValue();


        $attribute->setName('cpu');
        $attribute->setType('string');
        $attribute->setCategory($category);
//
        $good = $manager->getRepository(Goods::class)->findAll()[0];
        $good->setCategory($manager->getRepository(Category::class)->findAll()[1]);
        dump($good->getCategory()->getAttribute()->getValues());

//        $value->setGood($good);
//        $value->setValueString('lol');

//        $category->addGood($good);
        $category->addAttribute($attribute);
        $category->setCategoryName('Laptop');

//        $manager->persist($category);
//        $manager->flush();
        return new Response('<h1>sss</h1>');
    }
}
