<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
//
//    /**
//     * @ORM\Column(type="integer", nullable=true)
//     */
//    private $goodId;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="orders", fetch="EAGER")
     */
    private $order_id;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderGood", mappedBy="order", fetch="EAGER")
     */
    private $orderGood;

    public function __construct()
    {
        $this->orderGood = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderId(): ?User
    {
        return $this->order_id;
    }

    public function setOrderId(?User $order_id): self
    {
        $this->order_id = $order_id;

        return $this;
    }

    /**
     * @return Collection|OrderGood[]
     */
    public function getOrderGood(): Collection
    {
        return $this->orderGood;
    }

    public function addOrderGood(OrderGood $orderGood): self
    {
        if (!$this->orderGood->contains($orderGood)) {
            $this->orderGood[] = $orderGood;
            $orderGood->setOrder($this);
        }

        return $this;
    }

    public function removeOrderGood(OrderGood $orderGood): self
    {
        if ($this->orderGood->removeElement($orderGood)) {
            // set the owning side to null (unless already changed)
            if ($orderGood->getOrder() === $this) {
                $orderGood->setOrder(null);
            }
        }

        return $this;
    }
}
