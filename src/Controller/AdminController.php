<?php

namespace App\Controller;

use App\Entity\Goods;
use App\Form\GoodType;
use App\Service\Admin\Admin;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function admin(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        $good = new Goods();
        dump($good);
        $form = $this->createForm(GoodType::class,$good);
        return $this->render('admin/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/addgood", name="addGood", methods={"GET"}, options={"expose"=true})
     */
    public function addGood(Request $request, Admin $admin)
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
//        if ($request->isXmlHttpRequest()) {
//            return new JsonResponse($serializer->serialize($admin->add(), 'json'), 200, [], true);
//        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }
}
