<?php


namespace App\Service\Admin;


use Symfony\Component\HttpFoundation\Request;

class Admin
{

    public function __construct(Request $request)
    {
        $data = $request->request->get('');
    }

    public function add()
    {

    }

}