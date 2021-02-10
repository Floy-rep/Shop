<?php


namespace App\Tests;


use App\Tests\FixturesTest\GoodsFixturesTest;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class GoodsControllerTest extends WebTestCase
{
    public function test(){
        $client = static::createClient();
        // TEST get Goods
        $originalRequest = $this->goRequest($client, '{"page":"1"}', true);
        // TEST sort Goods
        $sortRequestASC = $this->goRequest($client, '{"page":"1", "sorts": {"type": "price", "order": "ASC"}}', true);
        $sortRequestDESC = $this->goRequest($client, '{"page":"1", "sorts": {"type": "price", "order": "DESC"}}', true);
        $this->assertFalse(($originalRequest[0] == $sortRequestASC[0] or $originalRequest[0] == $sortRequestDESC[0]));

        // TEST price filter Goods
        $filterPriceRequest = $this->goRequest($client, '{"page":"1", "filters": {"price": {"min": "0", "max": "0"} }}', false);
        $this->assertFalse($originalRequest[0] == $filterPriceRequest[0]);
    }

    public function goRequest($client, $json, bool $checkCount){
        $client->request(
            'POST',
            '/getgoods',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            $json
        );
        $this->assertTrue($client->getResponse()->isSuccessful());
        if ($checkCount)
            $this->assertCount(7, json_decode($client->getResponse()->getContent()));
        return json_decode($client->getResponse()->getContent());
    }
}