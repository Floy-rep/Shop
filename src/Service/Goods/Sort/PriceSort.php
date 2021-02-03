<?php


namespace App\Service\Goods\Sort;


use Doctrine\ORM\QueryBuilder;

class PriceSort implements SortInterface
{
    public function sort($sorts, $qb)
    {
        /**
         * @var $qb QueryBuilder
         */
        $qb->orderBy('goods.price', $sorts['order']);
    }

    public function canSort($sorts): bool
    {
        return array_key_exists('type', (array)$sorts) && $sorts['type'] == 'price';
    }
}