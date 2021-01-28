<?php


namespace App\Service\Goods\Sort;


class PriceSort implements SortInterface
{
    public function sort($sort_data, $data): array
    {
        $sort_by_price = [];
        $sort_by = $sort_data['sort_by_price'];
        if ($sort_by['min'] == 0 && $sort_by['max'] == 0)
            $sort_by_price = $data;
        else {
            if (!empty($data)) {
                foreach ($data as $value) {
                    if ($sort_by['min'] <= $value['price'] && $sort_by['max'] >= $value['price']) {
                        array_push($sort_by_price, $value);
                    }
                }
            }
        }
        return $sort_by_price;
    }
}