<?php


namespace App\Service\Goods\Sort;


interface SortInterface
{
    public function sort($sort_data, $data):array;
}