<?php

/**
 *  后台继承类
 * @file   Admin.php  
 * @date   2016-8-23 19:45:21 
 * @author AshtonPan<228397671@qq.com>  
 * @version    SVN:$Id:$ 
 */

namespace app\admin\controller;

use think\Loader;
use think\Db;
//轮播图控制器
class BannerController extends CommonController {

	protected $table = 'zxcms_banner';//定义数据表

    public function index() {
        
        }

     //添加轮播图
    public function add_banner(){
        return $this->fetch();
    }
    //保存添加
    public function save_banner(){
    		//从提交表单中获取数据
        $data = input('post.');
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('img');
        // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads'.DS.'banner');
        if($info){
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            // 成功上传后 返回上传信息
            $path= $info->getSaveName();
        }else{

        }


        //保存数据
        $result=Db::table($this->table)->insert(['name'=>$data['name'],'image'=>$path,'url'=>$data['url'],'status'=>1,'create_time'=>time()]);
        //设置返回数据的初始值
        $status = 0;
        $message = '添加失败,请检查';
        //检测更新结果,将结果返回给grade_edit模板中的ajax提交回调处理
        if ($result) {
            $status = 1;
            $message = '恭喜, 添加成功~~';
            $this->success('添加成功','banner/banner_list');

        //自动转为json格式返回
        // return json(array('status'=>$status, 'message'=>$message));

        }

    }

    //轮播图列表
    public function banner_list(){
    	$banner_list = Db::table($this->table)->select();

    	$this->assign('banner_list', $banner_list);
    	return $this->fetch();
    }
    //编辑轮播图(轮播图详情)
    public function edit_banner(){
    	$data = input('get.');
    	$banner_list = Db::table($this->table)->where('id',$data['id'])->find();

    	$this->assign('banner_list', $banner_list);
    	return $this->fetch();


    }
    //保存编辑的轮播图
    public function save_edit_banner(){
    	$data = input('post.');
    	$data['create_time'] = time();
    	$result = Db::table($this->table)->where('id',$data['id'])->update($data);
    	if($result){
    		$this->success('更新成功','banner/banner_list');
    	}

    }
    //删除轮播图
    public function del_banner(){
    	$data = input('get.');
    	$result = Db::table($this->table)->where('id',$data['id'])->delete();
        $image = Db::table($this->table)->where('id',$data['id'])->field('image')->find();
        if($image){
            @unlink(ROOT_PATH . 'public'.DS.'uploads'.DS.'banner'.DS.$image['image']);
            $path = ROOT_PATH . 'public'.DS.'uploads'.DS.'banner';
            Loader::model('Banner')->rm_empty_dir($path);//删除空目录
        }
    	if($result){
    		$this->success('删除成功','banner/banner_list');
    	}
    }

}
