<?php

namespace App\Controller;

use App\Entity\Category;
//use App\Service\Admin\AdminService;
use App\Service\Admin\AdminService;
use Doctrine\ORM\EntityManagerInterface;
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
    private AdminService $admin;
    private Serializer $serializer;
    private EntityManagerInterface $manager;

    public function __construct(AdminService $admin, EntityManagerInterface $manager)
    {
        $this->admin = $admin;
        $this->manager = $manager;
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $this->serializer = new Serializer($normalizer, $encoder);
    }

    /**
     * @Route("/admin", name="admin")
     */
    public function admin(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        return $this->render('admin/index.html.twig', [
            'users' => $this->admin->getUsersService()->getUsers(),
            'categories' => $this->manager->getRepository(Category::class)->findAll()
        ]);
    }

    /**
     * @Route("/admin/removeuser/{id}", name="removeUser", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function removeUser(Request $request): JsonResponse
    {
        $res = $this->admin->getUsersService()->removeUser($request->request->get('id'));
        if ($request->isXmlHttpRequest() && $res) {
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
        $res = $this->admin->getUsersService()->promtUser($request->request->get('id'));
        if ($request->isXmlHttpRequest() && $res) {
            return new JsonResponse(["Success" => "success"]);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/admin/addgood", name="addGood", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function addGood(Request $request): JsonResponse
    {
        $res = $this->admin->getGoodsService()->addGood((array)json_decode($request->request->get('data')));
        if ($request->isXmlHttpRequest() && $res) {
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
        $res = $this->admin->getGoodsService()->removeGood($request->request->get('id'));
        if ($request->isXmlHttpRequest() && $res) {
            return new JsonResponse(["Success" => "success"]);
        }
        return new JsonResponse([
            "ERROR" => "Incorrect JSON"
        ]);
    }

    /**
     * @Route("/admin/addcategoryfield", name="addCategoryField", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function addCategoryField(Request $request): JsonResponse
    {
        return new JsonResponse(($this->serializer->serialize((array)$this->renderView('admin/addcategoryfield.html.twig', [
            'id' => json_decode($request->getContent(), true)['id']
        ]), 'json')));
    }

    /**
     * @Route("/admin/addcategory", name="addCategory", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function addCategory(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true)['data'];
        return new JsonResponse(($this->serializer->serialize($this->admin->getCategoryService()->addCategory(
            $data['name'],
            $data['fields']
        ),'json')));
    }

    /**
     * @Route("/admin/getcategoryfields/{id}", name="getCategoryFields", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @return JsonResponse
     */
    public function getCategoryFields(Request $request): JsonResponse
    {
        $fields = $this->admin->getCategoryService()->getCategoryFields
        (json_decode($request->getContent(), true)['id']);
        return new JsonResponse($this->serializer->serialize($fields,'json'), 200, [], true);
    }


}
