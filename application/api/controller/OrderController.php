<?php
namespace app\api\controller;

use think\Db;

class OrderController extends BaseController{
    protected $order = 'zxcms_order';


    public function socket(){
        $message = input('post.');
        $wx_info = file_get_contents("https://api.weixin.qq.com/sns/jscode2session?appid=wx323b7d391b29c1c8&secret=70318e2f4de19bed771271c966d98fe6&js_code=".$message['code']."&grant_type=authorization_code");
        file_put_contents("./eee.txt",$wx_info);
        file_put_contents("./ee.txt",$message['code']);
        $arr=json_decode($wx_info,true);
        $add['open_id']=$arr['openid'];
        $ordercode=date("YmdHis",time()).sprintf("%02d",rand(1,99));
        $add['order_num']=$ordercode;
        $add['goodstotal']=$message['goodstotal'];
        $add['goods']=json_encode($message['gwc']);
        $add['addtime']=date("Y-m-d H:i",time());
        $add['table']=$message['table'];
        file_put_contents("./e.txt",json_encode($add['goods']));
        $result = Db::table($this->order)->insert($add);
        if($result){
            $suc='成功';
        }else{
            $suc='失败';
        }

        // 指明给谁推送，为空表示向所有在线用户推送
        $to_uid = "123";
        // 推送的url地址，使用自己的服务器地址
        $push_api_url = "http://www.admin.com:2121/";
        $post_data = array(
            "type" => "publish",
            "content" =>json_encode($message),
            "to" => $to_uid,
        );
        $ch = curl_init ();
        curl_setopt ( $ch, CURLOPT_URL, $push_api_url );
        curl_setopt ( $ch, CURLOPT_POST, 1 );
        curl_setopt ( $ch, CURLOPT_HEADER, 0 );
        curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post_data );
        curl_setopt ($ch, CURLOPT_HTTPHEADER, array("Expect:"));
        $return = curl_exec ( $ch );
        curl_close ( $ch );
        var_export($return);

        //打印机
        header("Content-type: text/html; charset=utf-8");
        define('USER', 'xcjhxp@yeah.net');	//*必填*：飞鹅云后台注册账号
        define('UKEY', 'Vxc9ZLaSFZPYVwVf');	//*必填*: 飞鹅云注册账号后生成的UKEY
        define('SN', '918514243');	    //*必填*：打印机编号，必须要在管理后台里添加打印机或调用API接口添加之后，才能调用API
        define('IP','api.feieyun.cn');			//接口IP或域名
        define('PORT',80);						//接口IP端口
        define('PATH','/Api/Open/');		//接口路径
        define('STIME', time());			    //公共参数，请求时间
        define('SIG', sha1(USER.UKEY.STIME));   //公共参数，请求公钥


        $snlist = "918514243#pvcg3zb7#测试打印机#";
        $this->addprinter($snlist);

        $orderInfo = '<CB>'.$message['table'].'</CB><BR>';
        $orderInfo .= '名称'."\t\t".'单价  数量 金额<BR>';
        $orderInfo .= '--------------------------------<BR>';
        foreach ($message['gwc'] as $k=>$v){
            $orderInfo .= $v['goods_name']."\t\t".$v['goods_price'].'  '.$v['count'].'  '.$v[total]."\n";
            }
        $orderInfo .= '备注：加辣<BR>';
        $orderInfo .= '--------------------------------<BR>';
        $orderInfo .= '合计：'.$message['goodstotal'].'元<BR>';
        $orderInfo .= '送货地点：广州市南沙区xx路xx号<BR>';
        $orderInfo .= '联系电话：13888888888888<BR>';
        $orderInfo .= '订餐时间：'.$add['addtime'].' <BR>';
        $orderInfo .= '<QR>http://www.dzist.com</QR>';//把二维码字符串用标签套上即可自动生成二维码

        $this->wp_print(SN,$orderInfo,1);

        unset($orderInfo);
        unset($message);
        //===========方法2.查询某订单是否打印成功=============
        //***接口返回值说明***
        //正确例子：
        //已打印：{"msg":"ok","ret":0,"data":true,"serverExecutedTime":6}
        //未打印：{"msg":"ok","ret":0,"data":false,"serverExecutedTime":6}

        //打开注释可测试
        $orderid = "xxxxxxxx_xxxxxxxxxx_xxxxxxxx";//订单ID，从方法1返回值中获取
        $this->queryOrderState($orderid);




        //===========方法3.查询指定打印机某天的订单详情============
        //***接口返回值说明***
        //正确例子：{"msg":"ok","ret":0,"data":{"print":6,"waiting":1},"serverExecutedTime":9}

        //打开注释可测试
        $date = "2017-04-02";//注意时间格式为"yyyy-MM-dd",如2016-08-27
        $this->queryOrderInfoByDate(SN,$date);




        //===========方法4.查询打印机的状态==========================
        //***接口返回值说明***
        //正确例子：
        //{"msg":"ok","ret":0,"data":"离线","serverExecutedTime":9}
        //{"msg":"ok","ret":0,"data":"在线，工作状态正常","serverExecutedTime":9}
        //{"msg":"ok","ret":0,"data":"在线，工作状态不正常","serverExecutedTime":9}

        //打开注释可测试
        $this->queryPrinterStatus(SN);

        return $suc;
    }
    public function addprinter($snlist){

        $content = array(
            'user'=>USER,
            'stime'=>STIME,
            'sig'=>SIG,
            'apiname'=>'Open_printerAddlist',

            'printerContent'=>$snlist
        );
        Vendor('Order.HttpClient');
        $client = new \HttpClient(IP,PORT);
        if(!$client->post(PATH,$content)){
            echo 'error';
        }
        else{
            echo $client->getContent();
        }

    }

    /*
        *  方法1
           拼凑订单内容时可参考如下格式
           根据打印纸张的宽度，自行调整内容的格式，可参考下面的样例格式
       */
    public function wp_print($printer_sn,$orderInfo,$times){

        $content = array(
            'user'=>USER,
            'stime'=>STIME,
            'sig'=>SIG,
            'apiname'=>'Open_printMsg',

            'sn'=>$printer_sn,
            'content'=>$orderInfo,
            'times'=>$times//打印次数
        );
        Vendor('Order.HttpClient');
        $client = new \HttpClient(IP,PORT);
        if(!$client->post(PATH,$content)){
            echo 'error';
        }
        else{
            //服务器返回的JSON字符串，建议要当做日志记录起来
            echo $client->getContent();
        }

    }
    /*
        *  方法2
           根据订单索引,去查询订单是否打印成功,订单索引由方法1返回
       */
    public function queryOrderState($index){
        $msgInfo = array(
            'user'=>USER,
            'stime'=>STIME,
            'sig'=>SIG,
            'apiname'=>'Open_queryOrderState',

            'orderid'=>$index
        );
        Vendor('Order.HttpClient');
        $client = new \HttpClient(IP,PORT);
        if(!$client->post(PATH,$msgInfo)){
            echo 'error';
        }
        else{
            $result = $client->getContent();
            echo $result;
        }

    }
    /*
        *  方法3
           查询指定打印机某天的订单详情
       */
    public function queryOrderInfoByDate($printer_sn,$date){
        $msgInfo = array(
            'user'=>USER,
            'stime'=>STIME,
            'sig'=>SIG,
            'apiname'=>'Open_queryOrderInfoByDate',

            'sn'=>$printer_sn,
            'date'=>$date
        );
        Vendor('Order.HttpClient');
        $client = new \HttpClient(IP,PORT);
        if(!$client->post(PATH,$msgInfo)){
            echo 'error';
        }
        else{
            $result = $client->getContent();
            echo $result;
        }

    }

    /*
     *  方法4
        查询打印机的状态
    */
    public function queryPrinterStatus($printer_sn){

        $msgInfo = array(
            'user'=>USER,
            'stime'=>STIME,
            'sig'=>SIG,
            'apiname'=>'Open_queryPrinterStatus',

            'sn'=>$printer_sn
        );
        Vendor('Order.HttpClient');
        $client = new \HttpClient(IP,PORT);
        if(!$client->post(PATH,$msgInfo)){
            echo 'error';
        }
        else{
            $result = $client->getContent();
            echo $result;
        }
    }


}