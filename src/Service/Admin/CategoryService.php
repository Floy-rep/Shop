<?php


namespace App\Service\Admin;


use App\Entity\Category;
use App\Entity\EavAttribute;
use App\Entity\EavValue;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Environment;

class CategoryService
{
    private EntityManagerInterface $manager;
    private Environment $twig;

    public function __construct(
        EntityManagerInterface $manager,
        Environment $twig
    )
    {
        $this->manager = $manager;
        $this->twig = $twig;
    }

    public function addCategory(string $name, array $fields): int
    {
        $category = new Category();
        $category->setCategoryName($name);
        $this->setCategoryAttribute($category, $fields);

        $this->manager->persist($category);
        $this->manager->flush();
        return $category->getId();
    }

    public function setCategoryAttribute(Category $category, array $fields)
    {
        foreach ($fields as $field) {
            if ($this->checkCategoryData($field)){
                $attribute = new EavAttribute();
                $attribute->setCategory($category);
                $attribute->setName($field['name']);
                $attribute->setType($field['type']);
                $category->addAttribute($attribute);
            }
        }
    }

    public function getCategoryFields(int $id): array
    {
        $fields = $this->getCategoryData($id);
        $fieldsTwig = [];
        foreach ($fields as $field) {
            if ($this->checkCategoryData($field))
                $fieldsTwig[] = $this->twig->render
                ('admin/categoryFields/'. $field['type'] .'.html.twig', ["fieldName" => $field['name']]);
        }
        return $fieldsTwig;
    }
    
    public function checkCategoryData($field):bool
    {
        return $field['name'] != null && $field['type'] != null;
    }

    public function getCategoryData(int $id)
    {
        $categoryRepository = $this->manager->getRepository(Category::class);
        $qb = $categoryRepository->createQueryBuilder('category');
        $qb->select('attribute.name, attribute.type');
        $qb->leftJoin('category.attribute', 'attribute');
        $qb->where('category.id = :id');
        $qb->setParameter('id', $id);
        return $qb->getQuery()->getResult();
    }

}