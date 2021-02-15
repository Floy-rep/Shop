<?php

namespace App\Entity;

use App\Repository\EavCategoryValueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EavCategoryValueRepository::class)
 */
class EavCategoryValue
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Category", mappedBy="values", fetch="EAGER")
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EavCategoryAttribute", mappedBy="values", cascade={"persist"}, fetch="EAGER")
     */
    private $attribute;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->attribute = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
            $category->setValues($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->category->removeElement($category)) {
            // set the owning side to null (unless already changed)
            if ($category->getValues() === $this) {
                $category->setValues(null);
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
