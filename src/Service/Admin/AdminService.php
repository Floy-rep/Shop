<?php


namespace App\Service\Admin;

 class AdminService
{
    private CategoryService $categoryService;
    private GoodsService $goodsService;
    private UsersService $usersService;

    public function __construct(
        CategoryService $categoryService,
        GoodsService $goodsService,
        UsersService $usersService
    )
    {
        $this->categoryService = $categoryService;
        $this->goodsService = $goodsService;
        $this->usersService = $usersService;
    }

    /**
     * @return CategoryService
     */
    public function getCategoryService(): CategoryService
    {
        return $this->categoryService;
    }

    /**
     * @return GoodsService
     */
    public function getGoodsService(): GoodsService
    {
        return $this->goodsService;
    }

    /**
     * @return UsersService
     */
    public function getUsersService(): UsersService
    {
        return $this->usersService;
    }
}