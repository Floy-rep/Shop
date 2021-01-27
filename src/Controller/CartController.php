<?php

namespace App\Controller;

use App\Repository\OrderGoodRepository;
use App\Service\RemoveFromCart;
use App\Service\ShowCart;
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
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        if ($request->isXmlHttpRequest()) {
            return new JsonResponse($serializer->serialize($cart->getItems(), 'json'), 200, [], true);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/addtocart/{id}", name="addToCard", methods={"POST"}, options={"expose" = true})
     * @param Request $request
     * @param Cart $cart
     * @return JsonResponse
     */
    public function add(Request $request, Cart $cart): JsonResponse
    {
        $res = false;
        $productId = null;

        if ($request->isXmlHttpRequest()){
            $productId = $request->get('id');
            $amount = $request->get('amount');
            $res = $cart->add([
                'product_id' => $productId,
                'amount' => $amount
            ]);
            $cart->save();
        }
        return $res ? new JsonResponse(["id" => $productId]) :
            new JsonResponse(["ERROR" => "Incorrect JSON"]);
    }

    /**
     * @Route("/removefromcart/{id}", name="removeFromCart", methods={"POST"}, options={"expose" = true})
     */
    public function removeFromCart(Request $request, Cart $cart): JsonResponse
    {
        $res = false;
        $productId = null;
        if ($request->isXmlHttpRequest())
        {
            $productId = $request->get('id');
            $res = $cart->remove($productId);
            $cart->save();
            return new JsonResponse((string)$res, 200, [], true);
        }
        return $res ? new JsonResponse(["id" => $productId]) :
            new JsonResponse(["ERROR" => "Incorrect JSON"]);
    }

    public function getCartItems(Cart $cart)
    {
        return new JsonResponse($cart->getItems());
    }
}
