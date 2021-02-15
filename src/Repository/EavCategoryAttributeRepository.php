<?php

namespace App\Repository;

use App\Entity\EavCategoryAttribute;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EavCategoryAttribute|null find($id, $lockMode = null, $lockVersion = null)
 * @method EavCategoryAttribute|null findOneBy(array $criteria, array $orderBy = null)
 * @method EavCategoryAttribute[]    findAll()
 * @method EavCategoryAttribute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EavCategoryAttributeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EavCategoryAttribute::class);
    }

    // /**
    //  * @return EavCategoryAttribute[] Returns an array of EavCategoryAttribute objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EavCategoryAttribute
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
