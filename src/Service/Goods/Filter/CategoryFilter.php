<?php


namespace App\Service\Goods\Filter;


use Doctrine\ORM\QueryBuilder;

class CategoryFilter implements FilterInterface
{
    public function filter($filters, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        $qb->andWhere('category.id = :categoryId');
        $qb->setParameter("categoryId", $filters['category']);
    }

    public function canFilter($filters): bool
    {
        return array_key_exists('category', (array)$filters) && $filters['category'] != null;
    }
}