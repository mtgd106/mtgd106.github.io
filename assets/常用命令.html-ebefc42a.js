import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-a89b456a.js";const i={},l=e(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="启动类命令" tabindex="-1"><a class="header-anchor" href="#启动类命令" aria-hidden="true">#</a> 启动类命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>启动docker： systemctl start <span class="token function">docker</span>

停止docker： systemctl stop <span class="token function">docker</span>

重启docker： systemctl restart <span class="token function">docker</span>

查看docker状态： systemctl status <span class="token function">docker</span>

开机启动： systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

查看docker概要信息： <span class="token function">docker</span> info

查看docker总体帮助文档： <span class="token function">docker</span> <span class="token parameter variable">--help</span>

查看docker命令帮助文档： <span class="token function">docker</span> 具体命令 <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像相关命令" tabindex="-1"><a class="header-anchor" href="#镜像相关命令" aria-hidden="true">#</a> 镜像相关命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.docker images          列出本机安装的镜像

     <span class="token parameter variable">-a</span>                  列出本地所有的镜像<span class="token punctuation">(</span>包括中间镜像层<span class="token punctuation">)</span>
   
     <span class="token parameter variable">-q</span>                  只显示镜像ID
           
     <span class="token parameter variable">--digests</span>           只显示镜像的主要信息
           
     --no-trunc          显示完整的镜像信息
   
信息选项说明:
           
     REPOSITORY          镜像的仓库源
       
     IMAGE ID            镜像ID
       
     CREATED             镜像创建时间
       
     SIZE                镜像大小
       
     TAG                 同一仓库源可以有多个TAG,代表这个仓库源中的不同版本,使用REPOSITORY:TAG来定义不同的镜像,
     
                         如果不指定镜像的版本标签,默认使用 :latest 镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2</span>. <span class="token function">docker</span> search <span class="token punctuation">[</span>options<span class="token punctuation">]</span> +镜像名     从dockhub官网查询镜像
                       
     --no-trunc           显示完整的镜像描述
    
     <span class="token parameter variable">-s</span> +n                列出收藏数大于n的镜像
    
     <span class="token parameter variable">--limit</span> n				    只列出n个镜像，默认25个
                       
<span class="token number">3</span>. <span class="token function">docker</span> pull  镜像名<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>     下载镜像<span class="token punctuation">(</span>如果没有加版本号,默认下载最新版本,例,docker pull ubuntu:latest<span class="token punctuation">)</span>

<span class="token number">4</span>. <span class="token function">docker</span> rmi +镜像名            删除镜像,可以删除多个镜像,以空格分开<span class="token punctuation">(</span>如果没有加版本号,默认删除最新版本<span class="token punctuation">)</span>

      <span class="token parameter variable">-f</span>                         强制删除,例,docker rmi <span class="token parameter variable">-f</span> 镜像名1:TAG,镜像名2:TAG
      
	  <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>      删除所有镜像

<span class="token number">5</span>. <span class="token function">docker</span> system <span class="token function">df</span>				查看镜像/容器/数据卷所占的空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器相关命令" tabindex="-1"><a class="header-anchor" href="#容器相关命令" aria-hidden="true">#</a> 容器相关命令</h3><ol><li><p>新建容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>options<span class="token punctuation">]</span> +镜像名或镜像ID <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
  
       <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;容器名字&quot;</span>       为容器指定一个名称<span class="token punctuation">(</span>如果不指定,系统会默认分配一个名字<span class="token punctuation">)</span>
         
          <span class="token parameter variable">-d</span>      后台运行容器，并返回容器ID，即,启动守护式容器<span class="token punctuation">(</span>后台运行<span class="token punctuation">)</span>
          
          <span class="token parameter variable">-i</span>      以交互模式运行容器，通常与-t同时使用
          
          <span class="token parameter variable">-t</span>      为容器重新分配一个伪输入终端，通常与-i同时使用
          
          <span class="token parameter variable">-P</span>      随机端口映射<span class="token punctuation">(</span>大写P<span class="token punctuation">)</span>
          
          <span class="token parameter variable">-p</span>      指定端口映射，有四种格式:
                 
                     <span class="token parameter variable">-p</span> hostPort:containerPort     端口映射 <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80
          
          					 <span class="token parameter variable">-p</span> ip:hostPort:containerPort  配置监听地址 <span class="token parameter variable">-p</span> <span class="token number">10.0</span>.0.100:8080:80   
          						 
          					 <span class="token parameter variable">-p</span> ip::containerPort    随机分配端口 <span class="token parameter variable">-p</span> <span class="token number">10.0</span>.0.100::80
                                 
                     <span class="token parameter variable">-p</span> hostPort:containerPort:udp   指定协议
                                 
                     <span class="token parameter variable">-p</span> <span class="token number">81</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443     指定多个端口
                     
          <span class="token punctuation">[</span>command<span class="token punctuation">]</span>   要在容器中执行的命令
例:
   使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令:
                                                                                                   
    <span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos /bin/bash 
    
    放在镜像名后的是命令，这里希望有个交互式 Shell，因此用的是 /bin/bash                                                                                  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看容器信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>                查看所有正在运行的容器
 
           <span class="token parameter variable">-a</span>                      显示当前正在运行的和历史上运行过的容器
           
           <span class="token parameter variable">-l</span>                      显示最近创建的容器
           
           <span class="token parameter variable">-n</span>                      显示最近n个创建的容器
           
           <span class="token parameter variable">-q</span>                      静默模式,只显示容器编号
           
           --no-trunc              显示详细信息
           
镜像信息:
           
    CONTAINER ID                     容器ID
                
    IMAGE                            来自镜像的ID
        
    COMMAND                          运行方式
        
    CREATED                          创建时间
        
    STATUS                           状态
        
    PORTS                            映射端口 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动/停止容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start +容器名或容器ID        启动容器
  
<span class="token function">docker</span> restart +容器名或容器ID      重启容器
     
<span class="token function">docker</span> stop +容器名或容器ID         停止容器
     
<span class="token function">docker</span> <span class="token function">kill</span> +容器名或容器ID         强制停止容器
     
<span class="token function">docker</span> <span class="token function">rm</span> +容器ID                  删除已停止的容器
     
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>      删除所有的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看容器日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs +容器ID         查看日志
   
      <span class="token parameter variable">-f</span>                    动态显示日志
                     
      <span class="token parameter variable">-t</span>                    显示时间戳
                     
      <span class="token parameter variable">--tail</span> +n             显示最后n条日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>attach:直接进入容器,不会启动新的进程   exec:在容器中打开新的终端,可以启动新的进程
  
     <span class="token function">docker</span> attach +容器ID                      重新进入容器
     
     <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> +容器ID /bin/bash          重新进入容器
     
     <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> +容器ID +命令              在不进入容器的前提下,执行命令<span class="token punctuation">(</span>该命令相当于在容器内部执行<span class="token punctuation">)</span>

     <span class="token builtin class-name">exit</span>                                       停止容器并退出
                
     ctrl+P+Q                                   退出但不停止容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> +容器ID                         查看容器内部运行的进程
  
<span class="token function">docker</span> inspect +容器ID                     查看容器内部细节
     
<span class="token function">docker</span> <span class="token function">cp</span> +容器ID:容器内部路径 本机路径      拷贝容器中的文件

导入和导出容器

  <span class="token builtin class-name">export</span>    导出容器的内容留作为一个tar归档文件 例,docker <span class="token builtin class-name">export</span> 容器ID <span class="token operator">&gt;</span> 文件名.tar

  <span class="token function">import</span>    从tar包中的内容创建一个新的文件系统再导入为镜像<span class="token punctuation">[</span>对应export<span class="token punctuation">]</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>注意：</strong></p><p>​ 使用镜像 centos:latest 以后台模式启动一个容器：docker run -d centos</p><p>​ 问题：使用 docker ps -a 进行查看，会发现容器已经退出</p><p>​ 原因：Docker容器后台运行，就必须有一个前台进程。</p><p>​   容器运行的命令如果不是那些一直挂起的命令（比如运行top，tail），就是会自动退出的。</p><p>​   这个是docker的机制问题，以nginx为例，正常情况下，我们配置启动服务只需要启动响应的service即可。</p><p>​   例如，service nginx start但是，这样做，nginx为后台进程模式运行，就导致docker前台没有运行的应用，这样的容器</p><p>​   后台启动后，会立即自杀因为他觉得他没事可做了。</p><p>​   所以，最佳的解决方案是，将你要运行的程序以前台进程的形式运行。</p>`,17),c=[l];function d(r,t){return s(),a("div",null,c)}const o=n(i,[["render",d],["__file","常用命令.html.vue"]]);export{o as default};
