<?php


namespace App\Service\Goods\Sort;


use Doctrine\ORM\QueryBuilder;

class CountSort implements SortInterface
{
    public function sort($sorts, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        if (array_key_exists('type', (array)$sorts))
            if ($sorts['type'] == 'count')
                $qb->orderBy('goods.count', $sorts['order']);
    }
}