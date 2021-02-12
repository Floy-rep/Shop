<?php


namespace App\Tests;


use App\Entity\Goods;
use App\Service\Goods\GoodsService;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;

class CartControllerTest extends WebTestCase
{
    private $manager;
    private KernelBrowser $client;

    public function setUp(): void
    {
        $this->ensureKernelShutdown();
        $client = $this->createClient();
        $this->client = $client;
        $em = $this->bootKernel()->getContainer()->get('doctrine')->getManager();
        $this->manager = $em;
    }

    public function testAddToCart(){
        $good = $this->manager->getRepository(Goods::class)->findAll()[0]->getId();
        $this->client->request(
            'POST',
            '/addtocart/'.$good,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            '{"id":'. $good . ', "amount": 10}'
        );
        $this->assertEquals($good, $this->client->getResponse()->getContent());
    }

    public function tearDown(): void
    {
        $this->manager->close();
        $this->manager = null;
    }
}