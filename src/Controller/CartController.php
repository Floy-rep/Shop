<?php

namespace App\Controller;

use App\Repository\OrderGoodRepository;
//use App\Service\RemoveFromCart;
//use App\Service\ShowCart;
use App\Service\Goods;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Service\Cart\Cart;

class CartController extends AbstractController
{
    private $serializer;
    public function __construct()
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $this->serializer = new Serializer($normalizer, $encoder);
    }


    /**
     * @Route("/cart", name="cart")
     */
    public function index(Cart $cart): Response
    {
        return $this->render('view_cart/index.html.twig', [
            "cart" => $cart->getItems(),
        ]);
    }

    /**
     * @Route("/getcart", name="getCart", methods={"GET"}, options={"expose"=true})
     * @param Request $request
     * @param Cart $cart
     * @return Response
     */
    public function getGoods(Request $request, Cart $cart)
    {
        $res = [];
        foreach($cart->getItems() as $value)
            array_push($res, $this->renderView('cart.html.twig',['good' => $value]));
        return new JsonResponse($this->serializer->serialize($res, 'json'), 200, [], true);
    }

    /**
     * @Route("/addtocart/{id}", name="addToCard", methods={"POST"}, options={"expose" = true})
     * @param Request $request
     * @param Cart $cart
     * @return JsonResponse
     */
    public function add(Request $request, Cart $cart): JsonResponse
    {
        $res = $cart->add([
            'product_id' => json_decode($request->getContent(),true)['id'],
            'amount' => json_decode($request->getContent(),true)['amount']
        ]);
            $cart->save();
        return $res ? new JsonResponse(json_decode($request->getContent(),true)['id']) :
            new JsonResponse(["ERROR" => "Incorrect JSON"]);
    }

    /**
     * @Route("/removefromcart/{id}", name="removeFromCart", methods={"POST"}, options={"expose" = true})
     * @param Request $request
     * @param Cart $cart
     * @return JsonResponse
     */
    public function removeFromCart(Request $request, Cart $cart): JsonResponse
    {
        $id = json_decode($request->getContent(), true)['id'];
        $cart->remove($id);
        $cart->save();
        return new JsonResponse($this->serializer->serialize
        ($id, 'json'), 200, [], true);
    }

}
