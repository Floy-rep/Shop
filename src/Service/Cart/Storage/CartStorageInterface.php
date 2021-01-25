<?php

namespace App\Service\Cart\Storage;

interface CartStorageInterface
{
    public function save(array $items);

    public function load(): array;
}