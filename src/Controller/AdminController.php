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
    private $admin;
    public function __construct(Admin $admin)
    {
        $this->admin = $admin;
    }

    /**
     * @Route("/admin", name="admin")
     */
    public function admin(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        return $this->render('admin/index.html.twig', [
            'users' => $this->admin->getUsers(),
        ]);
    }

    /**
     * @Route("/admin/addgood", name="addGood", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function addGood(Request $request): JsonResponse
    {
        $data = explode(',' ,$request->request->get('data'));
        $res = $this->admin->addGood($data);
        if ($request->isXmlHttpRequest() && $res){
            return new JsonResponse(["Success" => "success"]);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/admin/removegood/{id}", name="removeGood", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function removeGood(Request $request): JsonResponse
    {
        $res = $this->admin->removeGood($request->request->get('id'));
        if ($request->isXmlHttpRequest() && $res){
            return new JsonResponse(["Success" => "success"]);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/admin/removeuser/{id}", name="removeUser", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function removeUser(Request $request): JsonResponse
    {
        $res = $this->admin->removeUser($request->request->get('id'));
        if ($request->isXmlHttpRequest() && $res){
            return new JsonResponse(["Success" => "success"]);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/admin/promtuser/{id}", name="promtUser", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function promtUser(Request $request): JsonResponse
    {
        $res = $this->admin->promtUser($request->request->get('id'));
        if ($request->isXmlHttpRequest() && $res){
            return new JsonResponse(["Success" => "success"]);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }
}
