<?php


namespace App\Service\Admin\Users;


use App\Repository\OrderRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

class UsersActions implements UsersInterface
{
    private $manager;
    private $users;
    private $orders;
    public function __construct(EntityManagerInterface $manager, UserRepository $users, OrderRepository $orders)
    {
        $this->manager = $manager;
        $this->users = $users;
        $this->orders = $orders;
    }

    public function promt($int)
    {
        $user = $this->users->find($int);
        $user->setRoles(array('ROLE_ADMIN'));
        $this->manager->persist($user);
        $this->manager->flush();
    }
    public function remove($int)
    {
        $this->manager->remove($this->orders->find($int));
        $this->manager->remove($this->users->find($int));
        $this->manager->flush();
    }
}