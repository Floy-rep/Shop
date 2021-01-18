<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ViewItemsController extends AbstractController
{
    /**
     * @Route("/view/items", name="view_items")
     */
    public function index(): Response
    {
        return $this->render('view_items/index.html.twig', [
            'controller_name' => 'ViewItemsController',
        ]);
    }
}
