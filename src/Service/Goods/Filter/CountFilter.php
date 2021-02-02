<?php


namespace App\Service\Goods\Filter;


use Doctrine\ORM\QueryBuilder;

class CountFilter implements FilterInterface
{
    public function filter($filters, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        if (array_key_exists('minCount', (array)$filters)) {
            $qb->andWhere('goods.count >= :minCount');
            $qb->setParameter('minCount', $filters['minCount']);
        }
    }
}