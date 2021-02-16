<?php

namespace App\Entity;

use App\Repository\GoodsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GoodsRepository::class)
 */
class Goods
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $color;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="goods", fetch="EAGER")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\EavValue", inversedBy="goods", fetch="EAGER")
     */
    private $value;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderGood", mappedBy="good", fetch="EAGER")
     */
    private $orderGood;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $count;

//    /**
//     * @ORM\Column(type="integer", nullable=true)
//     */
//    private $taken;

    public function __construct()
    {
        $this->orderGood = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): self
    {
        $this->count = $count;

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
            $orderGood->setGood($this);
        }

        return $this;
    }

    public function removeOrderGood(OrderGood $orderGood): self
    {
        if ($this->orderGood->removeElement($orderGood)) {
            // set the owning side to null (unless already changed)
            if ($orderGood->getGood() === $this) {
                $orderGood->setGood(null);
            }
        }

        return $this;
    }

    public function getValue(): ?EavValue
    {
        return $this->value;
    }

    public function setValue(?EavValue $value): self
    {
        $this->value = $value;

        return $this;
    }
}
