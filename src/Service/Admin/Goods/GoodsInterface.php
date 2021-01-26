<?php


namespace App\Service\Admin\Goods;


interface GoodsInterface
{
    public function save(array $data);

    public function delete(int $id);
}