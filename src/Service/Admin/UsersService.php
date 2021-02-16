<?php


namespace App\Service\Admin;


use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\Admin\Users\UsersInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class UsersService
{
    private EntityManagerInterface $manager;
    private Security $security;
    private UsersInterface $usersService;

    public function __construct(EntityManagerInterface $manager, Security $security, UsersInterface $usersService)
    {
        $this->manager = $manager;
        $this->security = $security;
        $this->usersService = $usersService;
    }

    public function getUsers(): array
    {
        $users = $this->manager->getRepository(User::class)->findAll();
        for ($i = 0; $i < count($users); $i++)
            if ($users[$i]->getId() == $this->security->getUser()->getId())
                unset($users[$i]);
        return $users;
    }

    public function removeUser($int): bool
    {
        $this->usersService->remove($int);
        return true;
    }

    public function promtUser($int): bool
    {
        $this->usersService->promt($int);
        return true;
    }
}