<?php

namespace App\Entity;

use App\Repository\EavCategoryAttributeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EavCategoryAttributeRepository::class)
 */
class EavCategoryAttribute
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="attribute", fetch="EAGER")
     * @ORM\ManyToOne(targetEntity="App\Entity\EavValue", inversedBy="attribute", fetch="EAGER")
     */
    private $values;

    public function __construct()
    {
        $this->values = new ArrayCollection();
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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|EavCategoryValue[]
     */
    public function getValues(): Collection
    {
        return $this->values;
    }

    public function setValues(?EavCategoryValue $values): self
    {
        $this->values = $values;

        return $this;
    }
}
