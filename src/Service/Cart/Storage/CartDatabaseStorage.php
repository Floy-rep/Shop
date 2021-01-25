<?php

namespace App\Service\Cart\Storage;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class CartDatabaseStorage
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

        $this->entityManager->flush();
    }

    public function load(): array
    {
        return $this->session->get('cart', []);
    }
}