<?php

namespace App\Service\Cart\Storage;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class CartDatabaseStorage implements CartStorageInterface
{
    private $entityManager;

    private $user;

    public function __construct(Security $security, EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->user = $security->getUser();
    }

    public function save(array $items)
    {
        $this->user->setCart(serialize($items));
        $this->entityManager->persist($this->user);
        $this->entityManager->flush();
    }

    public function load(): array
    {
        if ($this->user->getCart() != null)
            return unserialize($this->user->getCart());
        else
            return [];
    }
}