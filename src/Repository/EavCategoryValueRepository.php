<?php

namespace App\Repository;

use App\Entity\EavCategoryValue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EavCategoryValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method EavCategoryValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method EavCategoryValue[]    findAll()
 * @method EavCategoryValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EavCategoryValueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EavCategoryValue::class);
    }

    // /**
    //  * @return EavCategoryValue[] Returns an array of EavCategoryValue objects
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
    public function findOneBySomeField($value): ?EavCategoryValue
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
