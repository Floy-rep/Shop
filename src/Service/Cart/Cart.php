<?php

namespace App\Service\Cart;

use App\Service\Cart\Storage\CartSessionStorage;
use App\Service\Cart\Storage\CartStorageInterface;
use Symfony\Component\Security\Core\Security;

class Cart
{
    /** @var array */
    private $items;

    private $cartStorage;

    public function __construct(
        Security $security,
        CartDatabaseStorage $cartDatabaseStorage,
        CartSessionStorage $cartSessionStorage
    )
    {
        $this->cartStorage = $security->getUser() ? $cartDatabaseStorage : $cartSessionStorage;

        $this->items = $this->cartStorage->load();
    }

    public function getItems(): array
    {
        return $this->items;
    }

    public function isEmpty(): bool
    {
        return empty($this->items);
    }

    public function contains(int $productId): bool
    {
        return isset($this->items[$productId]);
    }

    public function remove(int $productId)
    {
        if ($this->contains($productId)) {

            unset($this->items[$productId]);
        }
    }

    public function add(array $data)
    {
        $this->items[$data['product_id']] = $data['amount'];
    }

    public function save()
    {
        $this->cartStorage->save($this->items);
    }
}