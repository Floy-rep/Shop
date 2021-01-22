<?php

namespace App\Controller;

use App\Service\AddToCart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AddToCartController extends AbstractController
{
    /**
     * @Route("/addtocart/{id}", name="addToCard", methods={"POST"}, options={"expose" = true})
     */
    public function index($id, Request $request, AddToCart $service): JsonResponse
    {
        if ($request->isXmlHttpRequest()) {
            $data = [
                "id" => $request->request->get('id'),
                "taken" => $request->request->get('taken'),
                "user" => $this->getUser(),
            ];
            if ($this->getUser())
                return new JsonResponse($service->add($id, $data, "database"), 200, [], true);
            else
                return new JsonResponse($service->add($id, $data, "session"), 200, [], true);

        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }
}
