import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as s}from"./app-a89b456a.js";const i={},l=s(`<h2 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷" aria-hidden="true">#</a> 数据卷</h2><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p><strong>容器与数据耦合的问题</strong></p><ol><li><p>不便于修改，当我们要修改Nginx的html内容时，需要进入容器内部修改，很不方便。</p></li><li><p>数据不可复用，在容器内的修改对外是不可见的。所有修改对新创建的容器是不可复用的。</p></li><li><p>升级维护困难，数据在容器内，如果要升级容器必然删除旧容器，所有数据都跟着删除了。</p></li></ol><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><ol><li><p>Docker容器产生的数据，如果不通过docker commit命令生成新的镜像，使得数据做为镜像的一部分保存下来，</p><p>那么当容器删除后，数据自然也就没有了。为了能保存数据，在docker中可以使用数据卷。</p></li><li><p><strong>卷(volume)就是目录或文件，存在于一个或多个容器中</strong>，由docker挂载到容器，但不属于联合文件系统，因此能够绕过UnionFS。</p></li></ol><p>​ <strong>卷的设计目的就是数据的持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。</strong></p><p>特点：</p><ol><li><p>数据卷可在容器之间共享或重用数据</p></li><li><p>卷中的更改可以直接生效</p></li><li><p>数据卷中的更改不会包含在镜像的更新中</p></li><li><p>数据卷的生命周期一直持续到没有容器使用它为止</p></li></ol><h3 id="数据卷操作" tabindex="-1"><a class="header-anchor" href="#数据卷操作" aria-hidden="true">#</a> 数据卷操作</h3><p><strong>docker volume [COMMAND]</strong></p><p>  docker volume命令是数据卷操作，根据命令后跟随的command来确定下一步的操作：</p><p>  create    创建一个volume</p><p>  inspect   显示一个或多个volume的信息</p><p>  ls    列出所有的volume</p><p>  rm   删除一个或多个指定的volume</p><p>  prune   删除未使用的volume</p><p>  </p><h3 id="添加数据卷" tabindex="-1"><a class="header-anchor" href="#添加数据卷" aria-hidden="true">#</a> 添加数据卷</h3><h4 id="命令添加" tabindex="-1"><a class="header-anchor" href="#命令添加" aria-hidden="true">#</a> 命令添加</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /本机绝对路径:/容器绝对路径 +镜像名    

  如果容器或本机中的目录不存在,则会自动创建,权限默认为可读可写
  
  
  
  Docker挂载主机目录访问如果出现cannot <span class="token function">open</span> directory .: Permission denied
   
	  解决办法：在挂载目录后多加一个--privileged<span class="token operator">=</span>true参数即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可用：docker inspect +容器ID   查看数据卷是否创建成功</p><p><strong>修改目录权限：</strong></p><p>  docker run -it -v /本机绝对路径:/容器绝对路径:ro +镜像名    (ro代表只读)</p><p>  只读，即，<strong>容器只能读取(同步)宿主机的数据，在容器中不能向该目录下新建和修改文件</strong></p><h4 id="dockfile添加" tabindex="-1"><a class="header-anchor" href="#dockfile添加" aria-hidden="true">#</a> DockFile添加</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.在 本机 / 目录下创建mydocker目录并进入

<span class="token number">2</span>.<span class="token comment"># vim Dockerfile</span>

    FROM centos          //FROM +镜像名
    
    VOLUME <span class="token punctuation">[</span><span class="token string">&quot;/dataVolumeContainer1&quot;</span>,<span class="token string">&quot;/dataVolumeContainer2&quot;</span><span class="token punctuation">]</span> //在根下创建两个数据卷,本机会默认生成
    
    CMD <span class="token builtin class-name">echo</span> &#39;finished,------success1&quot;
    
    CMD /bin/bash
    
<span class="token number">3</span>.使用build命令生成新的镜像

   <span class="token function">docker</span> build <span class="token parameter variable">-f</span> /mydocker/Dockerfile <span class="token parameter variable">-t</span> vkls/centos:1.2 <span class="token builtin class-name">.</span>   
   
     // <span class="token parameter variable">-f</span> + 上一步中新创建的文件的绝对路径   <span class="token parameter variable">-t</span> +新生成的镜像名称:版本号  
     
        <span class="token builtin class-name">.</span> 表示当前目录,如果Dockerfile文件就在当前目录下,则可以不加-f 参数 
                                                                             
        如果不加版本号,则默认显示最新版本
        
<span class="token number">4</span>.使用这个新生成的镜像创建容器
     
    <span class="token function">docker</span> run <span class="token parameter variable">-it</span> vkls/centos /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据卷容器" tabindex="-1"><a class="header-anchor" href="#数据卷容器" aria-hidden="true">#</a> 数据卷容器</h3><p>​ <strong>创建一个容器挂载数据卷，其他容器通过挂载这个容器(称为父容器)实现数据共享。</strong></p><p>​ <strong>挂载数据卷的容器，称之为数据卷容器(实现容器与容器之间的数据共享)。</strong></p><p>​ 过程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.启动一个容器

  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> dc01 vkls/centos
      
<span class="token number">2</span>.创建两个子容器实现共享

  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> dc02 --volumes-from dc01 vkls/centos   
  
  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> dc03 --volumes-from dc01 vkls/centos  
  
 <span class="token comment"># dc01,dc02,dc03之间的数据可以相互传递, 如果删除dc01,那么dc02与dc03之间依然可以共享数据, 如果创建dc04继承dc03,</span>
 
 <span class="token comment"># 再删除dc03,那么dc04与dc02之间依然可以数据共享  </span>
   
 <span class="token comment"># 即:数据卷的生命周期一直持续到没有容器使用它为止</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,33),r=[l];function d(c,o){return e(),a("div",null,r)}const v=n(i,[["render",d],["__file","数据卷.html.vue"]]);export{v as default};
