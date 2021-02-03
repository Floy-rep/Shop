<?php


namespace App\Service\Goods\Filter;


interface FilterInterface
{
    public function filter($filters, $qb);
    public function canFilter($filters): bool;
}