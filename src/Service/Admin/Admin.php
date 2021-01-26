<?php


namespace App\Service\Admin;


use App\Repository\UserRepository;
use App\Service\Admin\Goods\GoodsDataBaseStorage;
use App\Service\Admin\Goods\GoodsInterface;
use App\Service\Admin\Users\UsersInterface;
use App\Service\Cart\Cart;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class Admin
{

    private $goods;
    private $users;
    private $userRepository;
    private $cart;
    private $security;
    public function __construct(
        GoodsInterface $goods,
        UsersInterface $users,
        Security $security,
        UserRepository $userRepository,
        Cart $cart
    )
    {
        foreach ($security->getUser()->getRoles() as $value){
            if ($value == "ROLE_ADMIN")
                $this->goods = $goods;
        }
        $this->userRepository = $userRepository;
        $this->cart = $cart;
        $this->users = $users;
        $this->security = $security;
    }

    public function addGood($data): bool
    {
        $this->goods->save($data);
        return true;
    }

    public function removeGood($int): bool
    {
        $this->goods->delete($int);
        foreach ($this->userRepository->findAll() as $user){
            $this->cart->user($user);
            $this->cart->remove($int);
            $this->cart->save();
        }
        return true;
    }

    public function getUsers(): array
    {
        $users = $this->userRepository->findAll();
        for ($i = 0; $i < count($users); $i++){
            if ($users[$i]->getId() == $this->security->getUser()->getId()){
                unset($users[$i]);
                }
        }
        return $users;
    }

    public function removeUser($int): bool
    {
        $this->users->remove($int);
        return true;
    }

    public function promtUser($int): bool
    {
        $this->users->promt($int);
        return true;
    }

}