<?php


namespace App\Service;


use App\Repository\OrderRepository;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ShowCart
{
    private $session;
    private $order;
    public function __construct(SessionInterface $session, OrderRepository $order){
        $this->session = $session;
        $this->order = $order;
    }

    public function showBySession(){
        $data = $this->session->get('cart');
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);
        return $serializer->serialize($data, "json", [AbstractNormalizer::IGNORED_ATTRIBUTES => ['orderGood']]);
    }

    public function  showByDataBase(object $user){
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer, $encoder);

        $user_order = $this->order->findOneBy(array("order_id" => $user->getId()))->getOrderGood()->getValues();
        $res = [];
        foreach ($user_order as $value){
            $toRes = $value->getGood();
            array_push($res, array_merge(array("unicId" => $value->getUnicId(), "taken" => $value->getTaken()) ,$serializer->normalize($toRes, null, [AbstractNormalizer::IGNORED_ATTRIBUTES => ['orderGood']])));
        }
        return $serializer->serialize($res, "json");
    }
}