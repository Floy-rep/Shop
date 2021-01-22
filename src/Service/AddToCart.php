<?php


namespace App\Service;


use App\Entity\OrderGood;
use App\Repository\GoodsRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Constraints\Json;

class AddToCart
{
    private $goods;
    private $session;
    private $order;
    private $manager;

    public function __construct(GoodsRepository $goods, SessionInterface $session, OrderRepository $order, EntityManagerInterface $manager)
    {
        $this->order = $order;
        $this->goods = $goods;
        $this->session = $session;
        $this->manager = $manager;
    }

    public function add(int $id, array $data, string $method){
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        if ($id == $data["id"]){
            $good_by_id = $this->goods->find($id);
            $count_rep = $good_by_id->getCount();
            if ($good_by_id){
                if ($data["taken"] <= $count_rep && $data["taken"] > 0){
                    if ($method == "session")
                        $this->addToSession($data, $serializer->normalize($good_by_id, null, [AbstractNormalizer::IGNORED_ATTRIBUTES => ['orderGood']]));
                    elseif ($method == "database")
                        $this->addToDataBase($data);

                    return $serializer->serialize($good_by_id, "json",[AbstractNormalizer::IGNORED_ATTRIBUTES => ['orderGood']]);
                }
                else
                    return $serializer->serialize(["Error" => "Not valid count"], "json");
            }
            else
                return $serializer->serialize(["Error" => "Not valid id"], "json");
        }
        else
            return $serializer->serialize(["Error" => "Not valid id"], "json");
    }

    public function addToSession(array $data, array $good_array)
    {
        $cart = [];
        if ($this->session->get('cart') != null) {
            foreach ($this->session->get('cart') as $cart_ses) {
                array_push($cart, $cart_ses);
            }
        }
        unset($good_array["id"]);
        array_push($cart, array_merge(["unicId" => count($cart)], $data, $good_array));
        $this->session->set('cart', $cart);
    }

    public function addToDataBase(array $data)
    {
        $orderGood = new OrderGood();

        $userOrderGood = $this->order->findOneBy(array("order_id" => $data["user"]->getId()));

        $orderGood->setOrder($userOrderGood);
        $orderGood->setGood($this->goods->find($data["id"]));
        $orderGood->setTaken($data["taken"]);
        $orderGood->setUnicId(count($userOrderGood->getOrderGood()));

        $this->manager->persist($orderGood);
        $this->manager->flush();
    }
}