<?php

namespace App\Controller;

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
    private $goods;
    private $categories;
    public function __construct(EntityManagerInterface $manager, GoodsRepository $goods, CategoryRepository $categories)
    {
        $this->manager = $manager;
        $this->goods = $goods;
        $this->categories = $categories;
    }


    /**
     * @Route("/", name="viewGoods", methods={"GET"})
     * @return Response
     */
    public function viewGoods() : Response
    {
        $data =$this->goods->findAll();
        $categories = $this->categories->findAll();
        return $this->render('view_items/index.html.twig', [
            "goods" => $data,
            "categories" => $categories
        ]);
    }

    /**
     * @Route("/getgoods", name="getGoods", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @param GoodsService $service
     * @return Response
     */
    public function getGoods(Request $request, GoodsService $service)
    {
//        $array = new GoodsService(new PriceSort($request->request->get('data')));

        if ($request->isXmlHttpRequest()){
            return new JsonResponse($service->sortAll((array)json_decode($request->request->get('data'),true))
                ,200, [], true);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }
}
