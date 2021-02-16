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
     * @ORM\ManyToOne(targetEntity="App\Entity\Goods", inversedBy="values", fetch="EAGER")
     */
    private $good;

//    /**
//     * @ORM\OneToMany(targetEntity="App\Entity\EavAttribute", mappedBy="category", fetch="EAGER")
//     */
//    private $attribute;

    public function __construct()
    {
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

    public function getGood(): ?Goods
    {
        return $this->good;
    }

    public function setGood(?Goods $good): self
    {
        $this->good = $good;

        return $this;
    }


}
