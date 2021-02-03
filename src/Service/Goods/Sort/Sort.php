<?php


namespace App\Service\Goods\Sort;


use Symfony\Component\DependencyInjection\ServiceLocator;

class Sort
{
    private $sortLocator;

    /**
     * Filter constructor.
     * @param ServiceLocator $sortLocator
     */

    public function __construct(ServiceLocator $sortLocator)
    {
        $this->sortLocator = $sortLocator;
    }

    public function applySort($sorts, $qb){
        $classes = array_keys($this->sortLocator->getProvidedServices());
        foreach ($classes as $class)
            if ($this->sortLocator->get($class)->canSort($sorts))
                $this->sortLocator->get($class)->sort($sorts, $qb);
    }
}