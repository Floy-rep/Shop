<?php


namespace App\Service\Goods\Sort;


use Doctrine\ORM\QueryBuilder;

class PriceSort implements SortInterface
{
    public function filter($filters, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        if (array_key_exists('price', (array)$filters)){
            $qb->andWhere('goods.price >= :min');
            $qb->andWhere('goods.price <= :max');
            $qb->setParameter('min', $filters['price']['min']);
            $qb->setParameter('max', $filters['price']['max']);
        }
    }
}