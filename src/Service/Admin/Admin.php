<?php


namespace App\Service\Admin;


use App\Entity\Category;
use App\Entity\EavCategoryAttribute;
use App\Entity\EavCategoryValue;
use App\Repository\UserRepository;
use App\Service\Admin\Goods\GoodsDataBaseStorage;
use App\Service\Admin\Goods\GoodsInterface;
use App\Service\Admin\Users\UsersInterface;
use App\Service\Cart\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class Admin
{

    private $goods;
    private $users;
    private $userRepository;
    private $cart;
    private $security;
    private $manager;

    public function __construct(
        GoodsInterface $goods,
        UsersInterface $users,
        Security $security,
        UserRepository $userRepository,
        Cart $cart,
        EntityManagerInterface $manager
    )
    {
        foreach ($security->getUser()->getRoles() as $value){
            if ($value == "ROLE_ADMIN")
                $this->goods = $goods;
        }
        $this->userRepository = $userRepository;
        $this->cart = $cart;
        $this->users = $users;
        $this->security = $security;
        $this->manager = $manager;
    }

    public function addGood($data): bool
    {
        $this->goods->save($data);
        return true;
    }

    public function removeGood($int): bool
    {
        $this->goods->delete($int);
        foreach ($this->userRepository->findAll() as $user){
            $this->cart->user($user);
            $this->cart->remove($int);
            $this->cart->save();
        }
        return true;
    }

    public function getUsers(): array
    {
        $users = $this->userRepository->findAll();
        for ($i = 0; $i < count($users); $i++)
            if ($users[$i]->getId() == $this->security->getUser()->getId())
                unset($users[$i]);
        return $users;
    }

    public function addCategory(string $category_name, array $fields): int
    {
        $category = new Category();
        $values = new EavCategoryValue();

        foreach ($fields as $field){
//            dd($field);/
            $attribute = new EavCategoryAttribute();
            $attribute->setValues($values);
            $attribute->setName($field['name']);
            $attribute->setType($field['type']);
            $values->addAttribute($attribute);
        }

        $values->addCategory($category);

        $category->setCategoryName($category_name);
        $category->setValues($values);

        $this->manager->persist($category);
        $this->manager->flush();
//        dump($category);
        return $category->getId();
    }

    public function getCategoryFields(int $id): array
    {
        $fields = $this->getCategoryData($id);
        foreach ($fields as $field){

        }
        return array();
    }

    public function getCategoryData(int $id)
    {
        $categoryRepository = $this->manager->getRepository('App:Category');
        $qb = $categoryRepository->createQueryBuilder('category');
        $qb->select('attribute.name, attribute.type');
        $qb->leftJoin('category.values', 'values');
        $qb->leftJoin('values.attribute', 'attribute');
        $qb->where('category.id = :id');
        $qb->setParameter('id', $id);
        return $qb->getQuery()->getResult();
    }

    public function removeUser($int): bool
    {
        $this->users->remove($int);
        return true;
    }

    public function promtUser($int): bool
    {
        $this->users->promt($int);
        return true;
    }

}