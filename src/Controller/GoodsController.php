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
use App\Service\Goods\Filter\PriceFilter;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\AST\Functions\AvgFunction;
use Doctrine\ORM\QueryBuilder;
use Exception;
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
     * @param Request $request
     * @return Response
     */
    public function viewGoods(Request $request, GoodsService $service): Response
    {
        return $this->render('view_items/index.html.twig', [
            "categories" => $this->manager->getRepository(Category::class)->findAll(),
        ]);
    }

    /**
     * @Route("/getgoods", name="getGoods", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @param GoodsService $service
     * @return Response
     * @throws Exception
     */
    public function getGoods(Request $request, GoodsService $service)
    {
        /**
         * @var GoodsRepository $goodsRepository
         */
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        $data = $service->doActions( json_decode($request->getContent(), true));
        $res = [];
        foreach ($data->getIterator() as $value)
            array_push($res, $this->renderView('good.html.twig', ['good' => $value]));
        array_push($res, $this->renderView('view_items/paginate.html.twig', [
            'thisPage' => json_decode($request->getContent(), true)['page'],
            'maxPages' => ceil($data->count() / 6)
        ]));
        return new JsonResponse($serializer->serialize($res, 'json'), 200, [], true);
    }

}
