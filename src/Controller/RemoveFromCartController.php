<?php

namespace App\Controller;

use App\Service\RemoveFromCart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RemoveFromCartController extends AbstractController
{
    /**
     * @Route("/removefromcart/{id}", name="removeFromCart", methods={"POST"}, options={"expose" = true})
     */
    public function index($id, Request $request, RemoveFromCart $service): Response
    {
        if ($request->isXmlHttpRequest()) {
            $data = [
                "id" => $request->request->get('id'),
                "user" => $this->getUser(),
                //csrf_token...
            ];
            if ($this->getUser())
                return new JsonResponse($service->remove($id, $data, "database"), 200, [], true);
            else
                return new JsonResponse($service->remove($id, $data, "session"), 200, [], true);

        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);

    }
}
