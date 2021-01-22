<?php


namespace App\Service;


use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class RemoveFromCart
{
    private $session;
    private $manager;
    private $order;
    public function __construct(SessionInterface $session, EntityManagerInterface $manager, OrderRepository $order)
    {
        $this->session = $session;
        $this->manager = $manager;
        $this->order = $order;
    }
    public function remove(int $id, array $data, string $method){
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        if ($id == $data["id"]) {
            if ($method == "session")
                $this->removeFromSession($data["id"]);
            elseif ($method == "database")
                $this->removeFromDataBase($data);
            
            return $serializer->serialize(["unicId" => $data["id"]], "json");
        }
        else
            return $serializer->serialize(["Error" => "Not valid id"], "json");
    }

    public function removeFromSession(int $id){
        $cart = [];
        if ($this->session->get('cart') != null) {
            foreach ($this->session->get('cart') as $cart_ses) {
                if ($cart_ses['unicId'] != $id)
                    array_push($cart, $cart_ses);
            }
        }
        $this->session->set('cart', $cart);
    }
    public function removeFromDataBase(array $data){
        $userOrderGood = $this->order->findOneBy(array("order_id" => $data["user"]->getId()))->getOrderGood()->getValues();
        foreach ($userOrderGood as $value){
            if ($value->getUnicId() == $data["id"]){
                $this->manager->remove($value);
                $this->manager->flush();
            }
        }
    }
}