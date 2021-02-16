<?php


namespace App\Service\Admin;


use App\Repository\UserRepository;
use App\Service\Admin\Goods\GoodsInterface;
use App\Service\Cart\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class GoodsService
{
    private EntityManagerInterface $manager;
    private GoodsInterface $goods;
    private Cart $cart;

    public function __construct(EntityManagerInterface $manager, Security $security, GoodsInterface $goods, Cart $cart)
    {
        foreach ($security->getUser()->getRoles() as $value){
            if ($value == "ROLE_ADMIN")
            {
                $this->goods = $goods;
                $this->manager = $manager;
                $this->cart = $cart;
            }
        }
    }

    public function addGood($data): bool
    {
        $this->goods->save($data);
        return true;
    }

    public function removeGood($int): bool
    {
        $this->goods->delete($int);
        foreach ($this->manager->getRepository(UserRepository::class)->findAll() as $user){
            $this->cart->user($user);
            $this->cart->remove($int);
            $this->cart->save();
        }
        return true;
    }
}