<?php
namespace app\admin\controller;

use think\Loader;
use think\Db;

class GoodsController extends CommonController{
    protected $sort = 'zxcms_goods_sort';//产品分类表

    protected $table = 'zxcms_goods';//产品表

    public function index(){

    }
    //分类列表
    public function goods_sort(){
        $goods_sort = Db::table($this->sort)->paginate(8);
        $this->assign('goods_sort',$goods_sort);

        return $this->fetch();
    }
    //添加分类
    public function add_sort(){
        $sort = Db::table($this->sort)->select();

        $this->assign('sort',$sort);
        return $this->fetch();
    }
    //保存分类
    public function save_sort(){
        $data = input('post.');
        $result = Db::table($this->sort)->insert($data);
        if($result){
            $this->success('添加成功!','goods_sort');
        }
    }
    //编辑分类
    public function edit_sort(){
        $data = input('get.');
        $info = Db::table($this->sort)->where('id',$data['id'])->find();
        $sort = Db::table($this->sort)->select();
        $this->assign('sort',$sort);
        $this->assign('info',$info);
        return $this->fetch();
    }
    //保存更新的分类
    public function save_edit_sort(){
        $data = input('post.');
        $result = Db::table($this->sort)->where('id',$data['id'])->update($data);
        if($result){
            $this->success('更新成功!','goods_sort');
        }
    }
    //删除文章分类
    public function del_sort(){
        $data = input('get.');
        $result = Db::table($this->sort)->where('id', $data['id'])->delete();
        if ($result) {
            $this->success('删除成功!', 'goods_sort');
        }
    }
    //产品列表
    public function goods_list(){
        $goods_list = Db::table($this->table)->alias('a')->join("$this->sort s",'a.goods_sort=s.id','LEFT')->field('a.status as article_status,a.*,s.name,s.id')->paginate(6);
        $this->assign('goods_list',$goods_list);
        return $this->fetch();
    }
    //添加产品
    public function add_goods(){
        $sort = Db::table($this->sort)->select();
        $this->assign('sort',$sort);
        return $this->fetch();
    }
    //保存产品
    public function save_goods(){
        $data = input('post.');
        unset($data['editorValue']);
        $data['update_time'] = $data['add_time'] = time();//时间
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('img');
        // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads'.DS.'goods');
        if($info){
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            // 成功上传后 返回上传信息
            $path= $info->getSaveName();
        }else{

        }
        $data['goods_img'] = $path;
        $result = Db::table($this->table)->insert($data);
        if($result){
            $this->success('添加成功!','goods_list');
        }
    }
    //编辑产品
    public function edit_goods(){
        $data = input('get.');
        $goods = Db::table($this->table)->alias('a')->where('goods_id',$data['id'])->join("$this->sort s",'a.goods_sort=s.id')->find();
        $sort = Db::table($this->sort)->select();
        $this->assign('sort',$sort);
        $this->assign('goods',$goods);
        return $this->fetch();

    }
    //保存编辑的产品
    public function save_edit_goods(){
        $data = input('post.');
        $data['update_time'] = time();
        unset($data['editorValue']);
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('goods_img');
        // 移动到框架应用根目录/public/uploads/ 目录下

        if($file){
            //删除文件
            @unlink(ROOT_PATH . 'public'.DS.'uploads'.DS.'goods'.DS.$data['goods_img']);
            $path = ROOT_PATH . 'public'.DS.'uploads'.DS.'article';
            Loader::model('Goods')->rm_empty_dir($path);//删除空目录
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads'.DS.'goods');
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            // 成功上传后 返回上传信息
            $path= $info->getSaveName();
            $data['goods_img'] = $path;
        }else{

        }
        $result = Db::table($this->table)->where('goods_id',$data['goods_id'])->update($data);
        if($result){
            $this->success('编辑成功','goods_list');
        }else{
            return false;
        }
    }
    //删除文章
    public function del_goods(){
        $data = input('get.');
        $image = Db::table($this->table)->where('goods_id',$data['id'])->field('goods_img')->find();
        print_r($data);
        print_r(111111);
        if($image){
            @unlink(ROOT_PATH . 'public'.DS.'uploads'.DS.'goods'.DS.$image['goods_img']);
            $path = ROOT_PATH . 'public'.DS.'uploads'.DS.'goods';
            Loader::model('Goods')->rm_empty_dir($path);//删除空目录
        }
        print_r($image);
        print_r(2);
        $result = Db::table($this->table)->where('goods_id',$data['id'])->delete();
        print_r($result);
        print_r(3);
        if($result){
            $this->success('删除成功','goods_list');
        }else{
            $this->success('删除失败','goods_list');
        }
    }
}
