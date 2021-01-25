<?php

namespace App\Controller;

use App\Repository\OrderGoodRepository;
use App\Service\Cart;
use App\Service\ShowCart;
use App\Service\ShowGoods;
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

class CartController extends AbstractController
{
    /**
     * @Route("/cart", name="cart")
     */
    public function index(SessionInterface $session, OrderGoodRepository $ordergood): Response
    {
        if ($this->getUser())
        {
            $data = $ordergood->findAll();
            $encoder = [new JsonEncoder()];
            $normalizer = [new ObjectNormalizer()];
            $serializer = new Serializer($normalizer, $encoder);
            $cart = $serializer->normalize($data, null, [AbstractNormalizer::IGNORED_ATTRIBUTES => ['order','good']]);
        }
        else{
            $cart = $session->get('cart');
        }

        return $this->render('view_cart/index.html.twig', [
                "cart" => $cart
        ]);
    }

    /**
     * @Route("/getcart", name="getCart", methods={"GET"}, options={"expose"=true})
     * @param Request $request
     * @param ShowCart $cart
     * @return Response
     */
    public function getGoods(Request $request, ShowCart $cart)
    {
        if ($request->isXmlHttpRequest()){
            if ($this->getUser()){
                return new JsonResponse($cart->showByDataBase($this->getUser()), 200, [], true);
            }
            else{
                return new JsonResponse($cart->showBySession(), 200, [], true);
            }
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    public function add(Request $request, Cart $cart)
    {
        $productId = $request->get('product_id');

        $amount = $request->get('amount');

        $cart->add([
            'product_id' => $productId,
            'amount' => $amount
        ]);

        $cart->save();

        return new JsonResponse([
            'message' => 'ура добавилось'
        ]);
    }

    public function getCartItems(Cart $cart)
    {
        return new JsonResponse($cart->getItems());
    }
}
