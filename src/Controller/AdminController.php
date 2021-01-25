<?php

namespace App\Controller;

use App\Form\GoodType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

//        $form = $this->createForm('');
        return $this->render('admin/index.html.twig', [
            'form' => $form,
        ]);
    }
}
