<?php
namespace app\admin\controller;

use think\Loader;
use think\Db;

class OrderController extends CommonController{
    protected $order = 'zxcms_order';

    public function order_list(){
        $order = Db::table($this->order)->order('order_id desc')->paginate(25);
        $this->assign('order',$order);
        return $this->fetch();
    }
}