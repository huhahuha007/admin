<?php

/**
 *  后台继承类
 * @file   Admin.php  
 * @date   2018-6-25 19:45:21 
 * @author AshtonPan<228397671@qq.com>  
 * @version    SVN:$Id:$ 
 */

namespace app\admin\controller;

use think\Loader;
use think\Db;
//文章控制器
class ArticleController extends CommonController {
    protected $sort = 'zxcms_sort';

	protected $table = 'zxcms_article';//定义数据表

    public function index() {
            
    }

    //文章分类列表
    public function sort() {
        $sort_list = Db::table($this->sort)->paginate(8);
        $this->assign('sort_list',$sort_list);

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
            $this->success('添加成功!','sort');
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
            $this->success('更新成功!','sort');
        }
    }
    //删除文章分类
    public function del_sort(){
        $data = input('get.');
        $result = Db::table($this->sort)->where('id',$data['id'])->delete();
        if($result){
            $this->success('删除成功!','sort');
        }


    }
    //文章列表
    public function article_list(){
        $article_list = Db::table($this->table)->alias('a')->join("$this->sort s",'a.sort_id=s.id','LEFT')->field('a.status as article_status,a.*,s.name,s.id')->paginate(6);
        $this->assign('article_list',$article_list);
         // print_r($article_list);
        return $this->fetch();
    }
    //添加文章
    public function add_article(){
        $sort = Db::table($this->sort)->select();
        $this->assign('sort',$sort);
        return $this->fetch();
    }
    //保存文章
    public function save_article(){
        $data = input('post.');
        $data['content'] = $data['editorValue']; //富文本内容
        unset($data['editorValue']);
        $data['update_time'] = $data['add_time'] = time();//时间
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('img');
        // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads'.DS.'article');
        if($info){
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            // 成功上传后 返回上传信息
            $path= $info->getSaveName();
        }else{

        }
        $data['image'] = $path;
        $result = Db::table($this->table)->insert($data);
        if($result){
            $this->success('添加成功!','article_list');
        }
    }
    //编辑文章
    public function edit_article(){
        $data = input('get.');
        $article = Db::table($this->table)->alias('a')->where('article_id',$data['id'])->join("$this->sort s",'a.sort_id=s.id')->find();
        $sort = Db::table($this->sort)->select();
        $this->assign('sort',$sort);
        $this->assign('article',$article);
        return $this->fetch();

    }
    //保存编辑的文章
    public function save_edit_article(){
        $data = input('post.');
        $data['content'] = $data['editorValue'];
        $data['update_time'] = time();
        // print_r($data);
        unset($data['editorValue']);
        $result = Db::table($this->table)->where('article_id',$data['article_id'])->update($data);
        if($result){
            $this->success('编辑成功','article_list');
        }else{
            return false;
        }
    }
    //删除文章
    public function del_article(){
        $data = input('get.');
        $image = Db::table($this->table)->where('article_id',$data['id'])->field('image')->find();
        if($image){
            @unlink(ROOT_PATH . 'public'.DS.'uploads'.DS.'article'.DS.$image['image']);
            $path = ROOT_PATH . 'public'.DS.'uploads'.DS.'article';
            Loader::model('Article')->rm_empty_dir($path);//删除空目录
        } 
        $result = Db::table($this->table)->where('article_id',$data['id'])->delete();
        if($result){
            $this->success('删除成功','article_list');
        }
    }

}
