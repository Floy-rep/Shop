<?php

namespace App\Repository;

use App\Entity\EavValue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EavValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method EavValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method EavValue[]    findAll()
 * @method EavValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EavValueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EavValue::class);
    }

    // /**
    //  * @return EavValue[] Returns an array of EavValue objects
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
    public function findOneBySomeField($value): ?EavValue
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
