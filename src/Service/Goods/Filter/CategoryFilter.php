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
        if (array_key_exists('category', (array)$filters) && $filters['category'] != "None") {
            $qb->join('goods.category', 'category');
            $qb->andWhere('category.category_name = :name');
            $qb->setParameter("name", $filters['category']);
            //$qb->andWhere('goods.category = :categoryId');
            //$qb->setParameter("categoryId", $filters['category']);
        } else
            $qb->leftJoin('goods.category', 'category');
    }
}