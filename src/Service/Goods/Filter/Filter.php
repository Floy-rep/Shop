<?php


namespace App\Service\Goods\Filter;

use Symfony\Component\DependencyInjection\ServiceLocator;

class Filter
{
    private $filterLocator;

    /**
     * Filter constructor.
     * @param ServiceLocator $filterLocator
     */
    public function __construct(ServiceLocator $filterLocator)
    {
        $this->filterLocator = $filterLocator;
    }

    public function applyFilter($filterData, $qb)
    {
        $classes = array_keys($this->filterLocator->getProvidedServices());

        foreach ($classes as $filterClass) {

            $this->filterLocator->get($filterClass)->filter($filterData, $qb);
        }
    }
}