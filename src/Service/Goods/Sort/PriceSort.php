<?php


namespace App\Service\Goods\Sort;


class PriceSort implements SortInterface
{
    public function sort($sort_data, $data): array
    {
        $sort_by_price = [];
        $sort_by = $price_data = $sort_data['sort_by_price'];
        if ($sort_by['min'] != 0 && $sort_by['max'] != 0) {
            if (!empty($data)) {
                foreach ($data as $value) {
                    if ($price_data['min'] <= $value['price'] && $price_data['max'] >= $value['price']) {
                        array_push($sort_by_price, $value);
                    }
                }
            }
        } else
            $sort_by_price = $data;
        return $sort_by_price;
    }
}