<?php

namespace App\Controller;

use App\Entity\Goods;
use App\Entity\OrderGood;
use App\Form\ViewGoodsType;
use App\Repository\GoodsRepository;
use App\Repository\OrderGoodRepository;
use App\Repository\OrderRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ShowGoods;

class GoodsController extends AbstractController
{
    private $manager;
    private $goods;
    public function __construct(EntityManagerInterface $manager, GoodsRepository $goods)
    {
        $this->manager = $manager;
        $this->goods = $goods;
    }


    /**
     * @Route("/", name="viewGoods", methods={"GET"})
     * @return Response
     */
    public function viewGoods(OrderRepository $order, UserRepository $user, OrderGoodRepository $goodRepository, SessionInterface $session) : Response
    {
        $data =$this->goods->findAll();
        return $this->render('view_items/index.html.twig', [
            "goods" => $data
        ]);
    }

    /**
     * @Route("/getgoods", name="getGoods", methods={"GET"}, options={"expose"=true})
     * @param Request $request
     * @param ShowGoods $showgoods
     * @return Response
     */
    public function getGoods(Request $request, ShowGoods $showgoods)
    {
        if ($request->isXmlHttpRequest()){
            return new JsonResponse($showgoods->show(), 200, [], true);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/addgood", name="addGood", methods={"GET"})
     */
    public function addGoods(){

    }
}
