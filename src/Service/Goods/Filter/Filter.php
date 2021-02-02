<?php


namespace App\Service\Goods\Filter;


class Filter
{
    private $filters;

    public function filterAll($qb, $filters)
    {
        $this->filters = $filters;
        $this->priceFilter($qb);
        $this->categoryFilter($qb);
        $this->countFilter($qb);
    }

    public function priceFilter($qb)
    {
        $filter = new PriceFilter();
        $filter->filter($this->filters, $qb);
    }

    public function categoryFilter($qb)
    {
        $filter = new CategoryFilter();
        $filter->filter($this->filters, $qb);
    }

    public function countFilter($qb)
    {
        $filter = new CountFilter();
        $filter->filter($this->filters, $qb);
    }
}