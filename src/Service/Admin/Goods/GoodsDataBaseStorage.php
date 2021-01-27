<?php


namespace App\Service\Admin\Goods;


use App\Entity\Goods;
use App\Repository\CategoryRepository;
use App\Repository\GoodsRepository;
use Doctrine\ORM\EntityManagerInterface;

class GoodsDataBaseStorage implements GoodsInterface
{
    private $manager;
    private $goods;
    private $categoryRepository;
    public function __construct(EntityManagerInterface $manager, GoodsRepository $goodsRepository, CategoryRepository $categoryRepository)
    {
        $this->manager = $manager;
        $this->goods = $goodsRepository;
        $this->categoryRepository = $categoryRepository;
    }

    public function save(array $data)
    {
        $good = new Goods();
        $good->setName($data['name']);
        $good->setPrice((int)$data['price']);
        $good->setColor($data['color']);
        $good->setDescription($data['description']);
        $good->setCount((int)$data['count']);
        if ($data['category'] != "null"){
            $category = $this->categoryRepository->find($data['category']);
            $category->addGood($good);
            $good->setCategory($category);
        }
        $this->manager->persist($good);
        $this->manager->flush();
    }

    public function delete(int $id)
    {
        $this->manager->remove($this->goods->find($id));
        $this->manager->flush();
    }
}