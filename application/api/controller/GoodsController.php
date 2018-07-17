<?php

/**
 *  接口继承类
 * @file   Admin.php
 * @date   2016-8-23 19:45:21
 * @author Ashton Pan<228397671@qq.com>
 * @version    SVN:$Id:$
 */

namespace app\api\controller;

use think\Db;

class GoodsController extends BaseController{
    private $goods = 'zxcms_goods';

    private $sort = 'zxcms_goods_sort';
    public function index(){

    }

    public function get_goods(){
        $goods_list = Db::table($this->goods)->alias('g')->field('*')->where('status=1')->select();

        return json_encode($goods_list);

    }
    //获取产品分类
    public function get_category(){
        $category_list = Db::table($this->sort)->select();
        return json_encode($category_list);
    }


}