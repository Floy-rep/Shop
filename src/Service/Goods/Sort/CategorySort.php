<?php


namespace App\Service\Goods\Sort;


use Doctrine\ORM\QueryBuilder;

class CategorySort implements SortInterface
{
    public function filter($filters, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        if (array_key_exists('category', (array)$filters)) {
            $qb->join('goods.category', 'category');
            $qb->andWhere('category.category_name = :name');
            $qb->setParameter("name", $filters['category']);
        } else
            $qb->leftJoin('goods.category', 'category');
    }
}