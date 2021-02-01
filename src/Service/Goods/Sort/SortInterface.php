<?php


namespace App\Service\Goods\Sort;


interface SortInterface
{
    public function filter($filters, $qb);
}