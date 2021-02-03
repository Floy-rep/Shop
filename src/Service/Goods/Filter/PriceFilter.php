<?php


namespace App\Service\Goods\Filter;


use Doctrine\ORM\QueryBuilder;

class PriceFilter implements FilterInterface
{
    public function filter($filters, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        $qb->andWhere('goods.price >= :min');
        $qb->andWhere('goods.price <= :max');
        $qb->setParameter('min', $filters['price']['min']);
        $qb->setParameter('max', $filters['price']['max']);
    }

    public function canFilter($filters): bool
    {
        return array_key_exists('price', (array)$filters);
    }

}