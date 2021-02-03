<?php


namespace App\Service\Goods\Sort;


interface SortInterface
{
    public function sort($sorts, $qb);
    public function canSort($sorts): bool;
}