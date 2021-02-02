<?php

namespace App\Service\Cart;

use App\Entity\Goods;
use App\Repository\GoodsRepository;
use App\Service\Cart\Storage\CartDatabaseStorage;
use App\Service\Cart\Storage\CartSessionStorage;
use App\Service\Cart\Storage\CartStorageInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class Cart
{
    /** @var array */
    private $items;

    private $cartStorage;
    private $goodsRepository;
    private $cartDatabaseUser;
    private $manager;

    public function __construct(
        Security $security,
        GoodsRepository $goodsRepository,
        CartDatabaseStorage $cartDatabaseStorage,
        CartSessionStorage $cartSessionStorage,
        EntityManagerInterface $manager
    )
    {
        $this->goodsRepository = $goodsRepository;
        $this->manager = $manager;

        $this->cartStorage = $security->getUser() ? $cartDatabaseStorage : $cartSessionStorage;
        $this->items = $this->cartStorage->load();
    }

    public function user($user)
    {
        $this->cartStorage->setUser($user);
        $this->items = $this->cartStorage->load();
    }

    public function getItems(): array
    {
        $res = [];
        for ($index = 0; $index < $this->count(); $index++) {
            $key = array_keys($this->items)[$index];
            array_push($res, array_merge(
                $this->getItem($key),
                ["amount" => $this->items[$key]]
            ));
        }
        return $res;
    }

    public function getItem(int $id, array $attr = null)
    {
        $qb = $this->manager->getRepository(Goods::class)->createQueryBuilder('goods');
        $qb->select('goods.id, goods.name, goods.price, goods.color,
         goods.description, goods.count, category.category_name AS categoryName');
        $qb->leftJoin('goods.category', 'category');
        $qb->where('goods.id = :id');
        $qb->setParameter('id', $id);
        return $qb->getQuery()->getResult()[0];
    }


    public function isEmpty(): bool
    {
        return empty($this->items);
    }

    public function count(): int
    {
        return count($this->items);
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

    public function add(array $data): bool
    {
        if ($this->getItem($data['product_id'])['count'] >= $data['amount'] && $data['amount'] > 0) {
            $this->items[$data['product_id']] = $data['amount'];
            return true;
        }
        return false;
    }

    public function save()
    {
        $this->cartStorage->save($this->items);
    }
}