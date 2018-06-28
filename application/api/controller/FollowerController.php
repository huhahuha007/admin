<?php

/**
 *  后台继承类
 * @file   Admin.php  
 * @date   2016-8-23 19:45:21 
 * @author Zhenxun Du<5552123@qq.com>  
 * @version    SVN:$Id:$ 
 */

namespace app\api\controller;

use think\Db;

class FollowerController{



    //保存号码
    public function save_phone(){
        $data = input();
        $appid = 'wx323b7d391b29c1c8';
        $secret = '70318e2f4de19bed771271c966d98fe6';
        $url="https://api.weixin.qq.com/sns/jscode2session?appid=".$appid."&secret=".$secret."&js_code=".$data['code']."&grant_type=authorization_code";  
        $html = file_get_contents($url);
        $arr = json_decode($html,true);
        Vendor('weixin.wxBizDataCrypt.wxBizDataCrypt');//引入微信解密手机号类
        
        
        $sessionKey =$arr['session_key']; //'coqSq2JbGh2KNVyvQPAZ6w==';

        $encryptedData=$data['encryptedData'];//"aoNrv6J2HtY4H2LjObVy2YHk8KxRidy7M/vxp0nM/hLrYEVNBe9e5yb1dMFpV7Q9eyeyMsk6vDXOxiaCKW1QOQlymR3vIRmFo9ARHkn6qEiOv+ooOFPdvoDybxVxYAc/exvak9VVskUnuvaEfdnr8mMHO4AzuT4LRbfjOcmhgOk+h13Hb/QZlBRChrZy0pddvgvHY4KBuPWd5s+Jk5Ojaw==";

        $iv =$data['iv'];// 'rFAfSmFUnsoGhnHXwoEhHw==';

        $pc = new \WXBizDataCrypt($appid, $sessionKey);
        $errCode = $pc->decryptData($encryptedData, $iv, $data );
        // $arr = json_decode($data,false);
        // print_r($arr);
        if ($errCode == 0) {
            print($data . "\n");
        } else {
            print($errCode . "\n");
        }
        //$result = Db::table('zxcms_follower')->insert($data);
    }
}
