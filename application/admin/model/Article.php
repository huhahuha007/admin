<?php

/**
 *  
 * @file   article.php  
 * @date   2018-8-30 15:22:57 
 * @author Ashton Du<228397671@qq.com>  
 * @version    SVN:$Id:$ 
 */

namespace app\admin\model;

use think\Db;

class Article extends \think\Model {

   

            /** 删除所有空目录 
        * @param String $path 目录路径 
        */
      public function rm_empty_dir($path){ 
          if(is_dir($path) && ($handle = opendir($path))!==false){ 
            while(($file=readdir($handle))!==false){// 遍历文件夹 
              if($file!='.' && $file!='..'){ 
                $curfile = $path.'/'.$file;// 当前目录 
                if(is_dir($curfile)){// 目录 
                  $this->rm_empty_dir($curfile);// 如果是目录则继续遍历 
                  if(count(scandir($curfile))==2){//目录为空,=2是因为.和..存在
                    rmdir($curfile);// 删除空目录 
                  } 
                } 
              } 
            } 
            closedir($handle); 
          } 
        } 

}
