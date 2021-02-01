<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Goods;
use App\Entity\OrderGood;
use App\Repository\CategoryRepository;
use App\Repository\GoodsRepository;
use App\Repository\OrderGoodRepository;
use App\Repository\OrderRepository;
use App\Repository\UserRepository;
use App\Service\Goods\GoodsService;
use App\Service\Goods\Sort\PriceSort;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\AST\Functions\AvgFunction;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class GoodsController extends AbstractController
{
    private $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @Route("/", name="viewGoods", methods={"GET"})
     * @return Response
     */
    public function viewGoods(Request $request): Response
    {

        return $this->render('view_items/index.html.twig', [
            "categories" => $this->manager->getRepository(Category::class)->findAll()
        ]);
    }

    /**
     * @Route("/getgoods", name="getGoods", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @param GoodsService $service
     * @return Response
     */
    public function getGoods(Request $request, GoodsService $service, EntityManagerInterface $manager)
    {
        /**
         * @var GoodsRepository $goodsRepository
         */
//        $goodsRepository = $manager->getRepository(Goods::class);
//        $qb = $goodsRepository->createQueryBuilder('goods');
//        $qb->select('goods.name, category.category_name AS categoryName, goods.price');
//        $qb->join('goods.category','category');
//        $this->categoryFilter($qb, 2);
//        $this->priceFilter($qb, 2,6);
//        $goods = $qb->getQuery()->getResult();
//        dump($goods);

        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        $data = $service->filterAll(json_decode($request->getContent(), true));
        $res = [];
        foreach ($data as $value)
            array_push($res, $this->renderView('good.html.twig', ['good' => $value]));
        return new JsonResponse($serializer->serialize($res, 'json'), 200, [], true);
    }

    public function categoryFilter($qb, $int){
        /**
         * @var $qb QueryBuilder
         */
        $qb
        ->andWhere('category.id = :category_id')
        ->setParameter('category_id', $int);
    }

    public function priceFilter($qb, $min, $max){
        /**
         * @var $qb QueryBuilder
         */
        $qb
            ->andWhere('goods.price >= :min_price')
            ->andWhere('goods.price <= :max_price')
            ->setParameter('min_price', $min)
            ->setParameter('max_price', $max);
    }
}
