<?php

namespace App\Entity;

use App\Repository\OrderGoodRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderGoodRepository::class)
 */
class OrderGood
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Order", inversedBy="orderGood", fetch="EAGER")
     */
    private $order;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Goods", inversedBy="orderGood", fetch="EAGER")
     */
    private $good;

    /**
     * @ORM\Column(type="integer")
     */
    private $unic_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $taken;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrder(): ?Order
    {
        return $this->order;
    }

    public function setOrder(?Order $order): self
    {
        $this->order = $order;

        return $this;
    }

    public function getGood(): ?Goods
    {
        return $this->good;
    }

    public function setGood(?Goods $good): self
    {
        $this->good = $good;

        return $this;
    }

    public function getUnicId(): ?int
    {
        return $this->unic_id;
    }

    public function setUnicId(int $unic_id): self
    {
        $this->unic_id = $unic_id;

        return $this;
    }

    public function getTaken(): ?int
    {
        return $this->taken;
    }

    public function setTaken(int $taken): self
    {
        $this->taken = $taken;

        return $this;
    }
}
