<?php


namespace App\Service\Admin\Goods;


use App\Entity\Goods;
use App\Repository\GoodsRepository;
use Doctrine\ORM\EntityManagerInterface;

class GoodsDataBaseStorage implements GoodsInterface
{
    private $manager;
    private $goods;
    public function __construct(EntityManagerInterface $manager, GoodsRepository $goodsRepository)
    {
        $this->manager = $manager;
        $this->goods = $goodsRepository;
    }

    public function save(array $data)
    {
        $good = new Goods();
        $good->setName($data[0]);
        $good->setPrice((int)$data[1]);
        $good->setColor($data[2]);
        $good->setDescription($data[3]);
        $good->setCount((int)$data[4]);
        if ($data[5] != "null")
            $good->setCategory($data[5]);
        $this->manager->persist($good);
        $this->manager->flush();
    }

    public function delete(int $id)
    {
        $this->manager->remove($this->goods->find($id));
        $this->manager->flush();
    }
}