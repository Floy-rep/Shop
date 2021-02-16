<?php

namespace App\Entity;

use App\Repository\EavValueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EavValueRepository::class)
 */
class EavValue
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $value_string;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $value_integer;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $value_bool;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Goods", mappedBy="good", fetch="EAGER")
     */
    private $goods;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EavCategoryAttribute", mappedBy="values", fetch="EAGER")
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

    public function getValueString(): ?string
    {
        return $this->value_string;
    }

    public function setValueString(?string $value_string): self
    {
        $this->value_string = $value_string;

        return $this;
    }

    public function getValueInteger(): ?int
    {
        return $this->value_integer;
    }

    public function setValueInteger(?int $value_integer): self
    {
        $this->value_integer = $value_integer;

        return $this;
    }

    public function getValueBool(): ?bool
    {
        return $this->value_bool;
    }

    public function setValueBool(?bool $value_bool): self
    {
        $this->value_bool = $value_bool;

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
            $good->setGood($this);
        }

        return $this;
    }

    public function removeGood(Goods $good): self
    {
        if ($this->goods->removeElement($good)) {
            // set the owning side to null (unless already changed)
            if ($good->getGood() === $this) {
                $good->setGood(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|EavCategoryAttribute[]
     */
    public function getAttribute(): Collection
    {
        return $this->attribute;
    }

    public function addAttribute(EavCategoryAttribute $attribute): self
    {
        if (!$this->attribute->contains($attribute)) {
            $this->attribute[] = $attribute;
            $attribute->setValues($this);
        }

        return $this;
    }

    public function removeAttribute(EavCategoryAttribute $attribute): self
    {
        if ($this->attribute->removeElement($attribute)) {
            // set the owning side to null (unless already changed)
            if ($attribute->getValues() === $this) {
                $attribute->setValues(null);
            }
        }

        return $this;
    }
}
