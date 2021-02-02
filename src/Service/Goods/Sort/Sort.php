<?php


namespace App\Service\Goods\Sort;


class Sort
{
    private $sorts;

    public function sortAll($qb, $sorts){
        $this->sorts = $sorts;
        $this->priceSort($qb);
        $this->countSort($qb);
    }

    public function priceSort($qb)
    {
        $sort = new PriceSort();
        $sort->sort($this->sorts, $qb);
    }

    public function countSort($qb)
    {
        $sort = new CountSort();
        $sort->sort($this->sorts, $qb);
    }
}