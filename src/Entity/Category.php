<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\Pure;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
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
    private $category_name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Goods", mappedBy="category", fetch="EAGER")
     */
    private $goods;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EavAttribute", mappedBy="category", fetch="EAGER",cascade={"persist"})
     */
    private $attribute;

    public function __construct()
    {
        $this->goods = new ArrayCollection();
        $this->attribute = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategoryName(): ?string
    {
        return $this->category_name;
    }

    public function setCategoryName(string $category_name): self
    {
        $this->category_name = $category_name;

        return $this;
    }

    /**
     * @return Collection|Goods[]
     */
    public function getGoods(): Collection
    {
        return $this->goods;
    }

    public function addGood(Goods $good): self
    {
        if (!$this->goods->contains($good)) {
            $this->goods[] = $good;
            $good->setCategory($this);
        }

        return $this;
    }

    public function removeGood(Goods $good): self
    {
        if ($this->goods->removeElement($good)) {
            // set the owning side to null (unless already changed)
            if ($good->getCategory() === $this) {
                $good->setCategory(null);
            }
        }

        return $this;
    }

    #[Pure] public function __toString(): string
    {
        return $this->getCategoryName();
    }

    /**
     * @return Collection|EavAttribute[]
     */
    public function getAttribute(): Collection
    {
        return $this->attribute;
    }

    public function addAttribute(EavAttribute $attribute): self
    {
        if (!$this->attribute->contains($attribute)) {
            $this->attribute[] = $attribute;
            $attribute->setCategory($this);
        }

        return $this;
    }

    public function removeAttribute(EavAttribute $attribute): self
    {
        if ($this->attribute->removeElement($attribute)) {
            // set the owning side to null (unless already changed)
            if ($attribute->getCategory() === $this) {
                $attribute->setCategory(null);
            }
        }

        return $this;
    }
}
