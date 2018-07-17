<?php
namespace app\api\controller;

use think\Db;
use think\Controller;

class BannerController extends BaseController {
    private $article = 'zxcms_banner';

    public function index(){

    }

    public function get_banner(){
        $banner_list = Db::table($this->article)->alias('g')->field('*')->where('status=1')->select();

        return json_encode($banner_list);

    }
}