<?php


namespace App\Service\Goods\Sort;


class CategorySort implements SortInterface
{
    public function sort($sort_data, $data): array
    {
        $sort_by_category = [];
        $sort_by = $sort_data['sort_by_category']['name'];
        dump($data);
        if ($sort_by != "None") {
            if (!empty($data)) {
                foreach ($data as $value) {
                    if ($value['category'] != null) {
                        if ($sort_by == $value['category']['categoryName']) {
                            array_push($sort_by_category, $value);
                        }
                    }
                }
            }
        } else
            $sort_by_category = $data;
        return $sort_by_category;
    }
}