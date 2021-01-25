<?php

namespace App\Service\Cart\Storage;

use Symfony\Component\HttpFoundation\Session\SessionInterface;

class CartSessionStorage
{
    private $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    public function save(array $items)
    {
        $this->session->set('cart', $items);
    }

    public function load(): array
    {
        return $this->session->get('cart', []);
    }
}