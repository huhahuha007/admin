<?php

/**
 *  后台继承类
 * @file   Admin.php  
 * @date   2016-8-23 19:45:21 
 * @author Zhenxun Du<5552123@qq.com>  
 * @version    SVN:$Id:$ 
 */

namespace app\admin\controller;

use think\Loader;

class FollowerController extends CommonController {

    public function index() {
        
        }
    public function phone(){
        return $this->fetch();
    }

}
