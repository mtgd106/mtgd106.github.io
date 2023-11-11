import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a}from"./app-a89b456a.js";const i="/assets/image-20231106104228812-37d7cfbc.png",d="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTQ2NTM5NQ___size_16_color_FFFFFF_t_70-63d3ea03.png",t={},r=a(`<h2 id="文件处理命令" tabindex="-1"><a class="header-anchor" href="#文件处理命令" aria-hidden="true">#</a> 文件处理命令</h2><h4 id="ls-list" tabindex="-1"><a class="header-anchor" href="#ls-list" aria-hidden="true">#</a> <strong>ls(list)</strong></h4><p><strong>信息说明：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>d 目录   - 文件   l 软连接文件   c 字符设备文件

b 块设备文件   p 命令管道文件   s 套接字文件

u 所属者  g 所属组   o其他人

r 可读   w 可写   x 可执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>–l    列出详细信息<span class="token punctuation">(</span>包括文件类型，权限，大小，所属者，所属组，修改日期<span class="token punctuation">)</span>

–ld   只显示当前目录信息<span class="token punctuation">(</span>将目录像文件一样显示,而不显示目录下的文件<span class="token punctuation">)</span>

–i    文件或目录身份证

–a    显示所有文件，包括以.开头的文件

–h    单独使用是展示文件名称<span class="token punctuation">;</span>和 <span class="token parameter variable">-l</span> 一起使用可以用易于阅读的方式展示文件大小,如,1K、1M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mkdir-make-directories" tabindex="-1"><a class="header-anchor" href="#mkdir-make-directories" aria-hidden="true">#</a> <strong>mkdir(make directories)</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span>     创建一个或多个目录，用空格分开

<span class="token function">mkdir</span> –p  （递归创建）在不存在的目录下再创建一个目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cd-change-directories" tabindex="-1"><a class="header-anchor" href="#cd-change-directories" aria-hidden="true">#</a> <strong>cd(change directories)</strong></h4><p>切换目录</p><h4 id="pwd-print-working-directory" tabindex="-1"><a class="header-anchor" href="#pwd-print-working-directory" aria-hidden="true">#</a> <strong>pwd(print working directory)</strong></h4><p>显示当前目录</p><h4 id="rmdir-remove-empty-directories" tabindex="-1"><a class="header-anchor" href="#rmdir-remove-empty-directories" aria-hidden="true">#</a> <strong>rmdir(remove empty directories)</strong></h4><p>删除空目录</p><h4 id="cp-copy" tabindex="-1"><a class="header-anchor" href="#cp-copy" aria-hidden="true">#</a> <strong>cp(copy)</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span>   复制一个或多个文件到另一个目录

<span class="token function">cp</span> –r 复制一个或多个目录到另一个目录

<span class="token function">cp</span> <span class="token parameter variable">-p</span> 保留文件属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mv-move" tabindex="-1"><a class="header-anchor" href="#mv-move" aria-hidden="true">#</a> <strong>mv(move)</strong></h4><p>移动文件或目录，且可同时改名</p><h4 id="rm-remove" tabindex="-1"><a class="header-anchor" href="#rm-remove" aria-hidden="true">#</a> <strong>rm(remove)</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span>   删除文件

<span class="token function">rm</span> –r  删除目录

<span class="token function">rm</span> <span class="token parameter variable">-f</span> 强制删除，系统不再询问

<span class="token function">rm</span> <span class="token parameter variable">-i</span>  删除前需要确认
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="touch" tabindex="-1"><a class="header-anchor" href="#touch" aria-hidden="true">#</a> <strong>touch</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建一个或多个空文件，用空格分开

若文件名含有空格，则用“ ”引上，表示一个整体

除 / 外，大部分符号可作为文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stat-文件名-查看文件详细信息" tabindex="-1"><a class="header-anchor" href="#stat-文件名-查看文件详细信息" aria-hidden="true">#</a> <strong>stat +文件名   查看文件详细信息</strong></h4><p><strong>du 统计当前目录的磁盘使用情况</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a        显示所有文件的大小

-h        人性化方式显示

-s        显示文件的总大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> <strong>cat</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看文件内容

–n 显示行号

tac 倒序显示文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="more-文件名" tabindex="-1"><a class="header-anchor" href="#more-文件名" aria-hidden="true">#</a> <strong>more +文件名</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>分页显示文件内容

空格或f  翻页

enter   换行

q或Q   退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="less-文件名" tabindex="-1"><a class="header-anchor" href="#less-文件名" aria-hidden="true">#</a> <strong>less +文件名</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>分页显示文件内容

空格或f  翻页

enter    换行

q或Q    退出

pgup    向上整页翻

向上的箭头 向上翻一行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="head-文件名" tabindex="-1"><a class="header-anchor" href="#head-文件名" aria-hidden="true">#</a> <strong>head +文件名</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>显示文件前几行，默认为10行

–n +数字x   显示文件前x行

head -2 test.txt  显示文件前两行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tail-文件名" tabindex="-1"><a class="header-anchor" href="#tail-文件名" aria-hidden="true">#</a> <strong>tail +文件名</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>显示文件后几行，默认为10行

–n +数字x   显示文件后x-1行

–f     动态显示文件末尾内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ln" tabindex="-1"><a class="header-anchor" href="#ln" aria-hidden="true">#</a> <strong>ln</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> 源文件名 目标文件名

<span class="token number">1</span>. 生成指定文件的硬链接文件
  特点:1.cp –p +同步更新,与源文件有同一个i节点 <span class="token number">2</span>.因为两个文件指向的是同一个inode号,所以不能跨分区操作 <span class="token number">3</span>.不能针对目录
   
   
   所谓的删除文件,只是删除的指向该文件的路径,该文件依然存在,只是无法通过一般方法访问,再向该文件所在的分区存入
   其他数据时,该文件就有可能被覆盖,从而彻底消失。

<span class="token number">2</span>. –s  生成指定文件的软连接<span class="token punctuation">(</span>符号链接 symbolic <span class="token function">link</span><span class="token punctuation">)</span>文件，类似于快捷键。
   特点：1.所有生成的链接文件都是 lrwxrwxrwx,但权限没有任何意义  <span class="token number">2</span>.文件非常小  <span class="token number">3</span>.都指向源文件
   生成的软连接文件的block区存储的是源文件的绝对路径,所以源文件的绝对路径占多少个字节,软连接文件就会占多少个字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sort-对文本文件内容-以行为单位进行排序输出-不改变原文件的内容" tabindex="-1"><a class="header-anchor" href="#sort-对文本文件内容-以行为单位进行排序输出-不改变原文件的内容" aria-hidden="true">#</a> <strong>sort 对文本文件内容，以行为单位进行排序输出(不改变原文件的内容)</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-f     忽略大小写

-r     反向排序

-n     以数值型进行排序

-t     指定分隔符,默认为制表符

-k n[,m]  指定字段排序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wc-统计指定文本的行数、字数、字节数" tabindex="-1"><a class="header-anchor" href="#wc-统计指定文本的行数、字数、字节数" aria-hidden="true">#</a> <strong>wc 统计指定文本的行数、字数、字节数</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>统计结果会显示输入命令中的文件名称

-l     只显示行数

-w     只显示单词数

-c     只显示字节数 

只使用wc 时显示的分别是行,单词数,大小,完整文件名

 例: # wc /etc/passwd

     # 43 86 2237 /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="diff-比较多个文本文件的差异" tabindex="-1"><a class="header-anchor" href="#diff-比较多个文本文件的差异" aria-hidden="true">#</a> <strong>diff 比较多个文本文件的差异</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--brief   显示比较结果

-c        描述文件内容具体的不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dd-按照指定数据块的大小和个数来复制文件或转换文件" tabindex="-1"><a class="header-anchor" href="#dd-按照指定数据块的大小和个数来复制文件或转换文件" aria-hidden="true">#</a> <strong>dd 按照指定数据块的大小和个数来复制文件或转换文件</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if        输入的文件名称
 
of        输出的文件名称

bs        设置每个块的大小

count     设置要复制块的个数 

例: dd if=/dev/zero of=560-file count=1 bs=560M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="权限管理命令" tabindex="-1"><a class="header-anchor" href="#权限管理命令" aria-hidden="true">#</a> 权限管理命令</h2><p><strong>权限的数字表示：</strong> r------4    w------2   x------1</p><h4 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> <strong>chmod</strong></h4><p>(change the permissions mode of a file)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.chmod + <span class="token punctuation">[</span>ugoa<span class="token punctuation">]</span> + <span class="token punctuation">[</span>+-<span class="token operator">=</span><span class="token punctuation">]</span> + <span class="token punctuation">[</span>rwx<span class="token punctuation">]</span> + <span class="token punctuation">[</span>文件名或目录名<span class="token punctuation">]</span>   修改文件或目录的权限

  例:chmod <span class="token number">777</span> +文件名 

<span class="token number">2</span>. –R  递归修改，修改目录权限的同时会修改目录下所有文件和子目录的权限，使之与目录权限相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> <strong>chown</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(change file ownership)(只有root 能改)

chown + [用户名] + [文件名或目录名]   改变文件或目录的所有者或所属组  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="chgrp" tabindex="-1"><a class="header-anchor" href="#chgrp" aria-hidden="true">#</a> <strong>chgrp</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(change file group ownership)

chgrp + [用户组] + [文件名或目录名]   改变文件或目录所属组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="umask" tabindex="-1"><a class="header-anchor" href="#umask" aria-hidden="true">#</a> <strong>umask</strong></h4><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(当创建一个文件或目录时的默认权限)(每一个进程都有一个umask)
                                             
直接输入 umask 可以查看umask的值,使用umask -S 查看文件或目录的默认值

其中,第一个0与特殊权限有关，后面三位与普通权限(rwx)有关;

第二个0与所有者有关,表示从所有者的权限中减去0,也就是权限不变;第一个2与所属组有关,第二个2与其他用户有关.
  (文件和目录一样,文件刚开始的权限时-rw-rw-rw-,目录是drwxrwxrwx)

在配置文件/etc/bashrc 中添加umask=(数字) 可永久修改创建时的默认权限; 在/etc/profile中也可修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acl权限-access-control-list" tabindex="-1"><a class="header-anchor" href="#acl权限-access-control-list" aria-hidden="true">#</a> <strong>ACL权限(access control list)</strong></h4><p><strong>使用 ls 命令查看文件信息时，如果文件的权限后有+，说明文件有acl权限。</strong></p><p><strong>说明：</strong></p><p>  <strong>当要给一个用户的权限与文件属主、属组和其他人权限都不相同的时候使用</strong>，也就是说，这个用户对于这个文件</p><p>  的权限不属于三种身份中的任何一种，是属于第四种身份，这时就需要使用ACL权限去给他赋予单独的权限。</p><p><strong>命令：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getfacl +文件名        查看文件的acl权限

setfacl -b             删除所有的acl权限

setfacl –b +文件名       删除指定文件的所有acl权限

setfacl –x u:+用户名 +文件名   删除指定文件中指定用户的acl权限

setfacl –x g:+组名 +文件名     删除指定文件中指定组的acl权限

  

setfacl –m d:u:用户名:权限 +目录名 为目录设置默认递归权限(管着以后新建的文件 d:default,权限往下继承)

setfacl –m u:用户名:权限 +文件名   添加用户acl权限

setfacl –m g:组名:权限 +文件名     添加组acl权限
  
  例:setfacl –m u:用户名:权限 –R +目录名   对某一目录设置递归权限(在该命令设置之后 新建的文件不遵守)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mask权限" tabindex="-1"><a class="header-anchor" href="#mask权限" aria-hidden="true">#</a> <strong>mask权限</strong></h4><p>临时决定了除所有者和其他人外的最高权限(包括所属组)，只对修改mask值之前添加的用户或组有效，对之后添加的用户和组无效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setfacl –m m:rx +文件名      修改最大有效权限

setfacl –R                  递归设定acl权限(只针对该目录下现有文件)

当在设置了mask之后,又添加了其他的用户或组,则mask的值自动还原,为能取到的最大值(即除所有者和其他人之外的最大权限),
mask的值只有限制作用,没有提高作用.  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏属性" tabindex="-1"><a class="header-anchor" href="#隐藏属性" aria-hidden="true">#</a> <strong>隐藏属性 + -</strong></h4><p><strong>使用lsattr可以查看文件的隐藏属性，隐藏属性显示在普通权限(rwx)的后面。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chattr

  +i     1.对文件:锁定文件,不可删除,不可更改,只可查看

         2.对目录:只允许修改目录下文件的数据,不可新建、删除文件

  +a     1.对文件只允许在后面追加

         2.对目录,只允许建立和修改文件,不允许删除

  e属性    大多数文件都有e属性,表明是使用ext文件系统进行储存的,不能删除

lsattr

  -a   显示所有文件和目录的隐藏属性(包括隐藏文件)

  -d   若目标是目录,则只列出目录的属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊权限" tabindex="-1"><a class="header-anchor" href="#特殊权限" aria-hidden="true">#</a> <strong>特殊权限</strong></h4><p><strong>共有12个权限位，其中最开始的三位对应特殊权限位</strong></p><p><strong>suid-----4   sgid------2   sticky------1</strong></p><p><strong>suid 给普通用户提权 (针对文件)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>若一个文件被设置了suid或sgid,会分别表现在所有者或所属组的可执行位上,即s会把x覆盖,
如果是s,说明x依然存在,如果是S,说明没有x权限.只有当文件有x权限时,高级权限才有效.

一些可执行文件(如/usr/bin/passwd)只有root用户(所有者)有执行权限,如果给该文件加上suid权限,那么普通用户就可以
以root的身份执行该文件.

例:在进程文件(二进制,可执行)上增加suid权限

   # chmod u+s /usr/bin/cat  chmod 4755 /usr/bin/rm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>sgid 当一个目录有该权限时，在该目录下新建的文件和目录都会继承该目录所属的组 (针对目录)</strong></p><p>  例：chmod g+s filename(设置suid权限) chmod 2755 filename(去掉suid权限)</p><p><strong>sticky 在有该权限的目录下用户只能删除自己建立的文件，只有root用户和目录的所有者可以删除所有的文件(针对目录)</strong></p><p>  例：chmod o+t filename     chome 1755 filename</p><h4 id="sudo-给一些用户root-的权限" tabindex="-1"><a class="header-anchor" href="#sudo-给一些用户root-的权限" aria-hidden="true">#</a> <strong>sudo(给一些用户root 的权限)</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-h   列出帮助信息

-l   列出当前用户可执行的命令

-p    更改询问密码的提示语

-b    在后台执行指定的命令

修改配置文件/etc/sudoers 可以为普通用户提权

文件的语法相当于 who　　where　　whom　　command 表示哪个用户可以在哪个主机以谁的身份来执行哪些命令。

例:root ALL=(ALL) ALL   NOPASS=ALL

   root: 表示root用户

   ALL： 表示在任何主机上都可以

   (ALL)：表示以任何身份

　 ALL: 表示可以执行任何命令

　 NOPASS: 表示执行时不需要输入密码

 若为一个用户组修改权限,需要在组名前加上%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件搜索命令" tabindex="-1"><a class="header-anchor" href="#文件搜索命令" aria-hidden="true">#</a> 文件搜索命令</h2><h4 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> <strong>find</strong></h4><p><strong>任何一个表达式前面都可以加一个 <code>!</code> ，表示取反操作</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.-name    通过名字搜索，区分大小写(所有子目录)

  例：find /etc –name init     搜索etc目录下名为init的文件和目录
      find /etc –name *init*   搜索etc目录下名字含有init四个字母的文件和目录(使用通配符)

2.-iname    根据名字搜索，不区分大小写

3.-size     根据大小搜索

  +n大于   -n 小于   n 等于(n为数据块)

  1数据块=512字节=0.5k

  例:find / -size +204800   在根目录下查找大于100M的文件

4.–user     根据所有者查找

  例:find /home –user vkls    在根目录下查找所有者为vkls的文件

5.-amin访问时间   –cmin 文件属性    -mmin 文件内容

  例:find /etc –cmin -5   在etc下查找5分钟内被修改过属性的文件和目录

6.–type    根据类型查找

  f文件  d目录  l软连接文件   b块设备   c字符设备   p管道文件  s套接字

7.-a(and)两个条件都满足  -o(or)两个条件满足任意一个

  例:find /etc –size +163840 –a –size -204800   查找etc下大于80M小于100M的文件

8.-exec/-ok … {} \\;   
  
  exec或ok后面输入自定义的shell命令  {}表示前面找到的内容; &quot;\\;&quot;是固定语法;当后面有删除等操作时,-ok会发出提示信息 

  例:find /etc -name abc –exec ls –l {} \\;     在etc目录下查找abc文件并显示其信息

     find /etc -name abc -exec cp -rvf {} /tmp \\;  将找到的abc文件拷贝到/tmp

9.-inum        根据节点查找

10.-user或 -group  按照属主或属组查找

   例:find /home -user jack        查找属主是jack 的文件

   例:find /home -user jack -a -group hr 查找属主是jack且属组是hr的文件

11.-maxdepth levels        指定查找的目录深度

12.-nouser 或 -nogroup      没有属主或属组

13.-perm     按照文件权限找

   例:find . -perm 644  在当前目录下查找权限为644的文件(必须是644)

   find . -perm -444    在当前目录下查找权限至少为444的文件(可以是444) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="locat-快速定位文件路径" tabindex="-1"><a class="header-anchor" href="#locat-快速定位文件路径" aria-hidden="true">#</a> <strong>locat 快速定位文件路径</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 在文件资料库中查找，但找不到tmp目录下的文件  updatedb命令可更新文件资料库

2. –i  不区分文件名大小写    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="which" tabindex="-1"><a class="header-anchor" href="#which" aria-hidden="true">#</a> <strong>which</strong></h4><p>查找命令所在目录及别名信息</p><h4 id="whereis" tabindex="-1"><a class="header-anchor" href="#whereis" aria-hidden="true">#</a> <strong>whereis</strong></h4><p>查找命令所在目录及帮助文档路径</p><h4 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> <strong>grep</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. +字符串   在文件中搜索字串匹配的行并输出

2. –i        不区分大小写

3. -n        显示匹配行的行号

4. -r        递归查找子目录中的文件

5. -l        只打印匹配的文件名

6. -c        只打印匹配的行数

7. –v        排除指定字串

  例:grep –v # /etc/inittab  输出除有#字符的行

     grep –v ^# /etc/inittab  输出除以#开头的行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h2><h4 id="man" tabindex="-1"><a class="header-anchor" href="#man" aria-hidden="true">#</a> <strong>man</strong></h4><p>查看命令和配置文件的帮助信息</p><p>  例：man ls   查看ls的帮助信息</p><p>​       man services    查看文件services的帮助信息(只输入文件名，不能输入文件的绝对路径)</p><h4 id="whatis" tabindex="-1"><a class="header-anchor" href="#whatis" aria-hidden="true">#</a> <strong>whatis</strong></h4><p>只得到命令的一句话解释</p><h4 id="命令-help" tabindex="-1"><a class="header-anchor" href="#命令-help" aria-hidden="true">#</a> <strong>命令 + -- help</strong></h4><p>得到命令的常用选项</p><h4 id="help-命令" tabindex="-1"><a class="header-anchor" href="#help-命令" aria-hidden="true">#</a> <strong>help +命令</strong></h4><p>获得shell内置命令的帮助信息</p><h2 id="用户管理命令" tabindex="-1"><a class="header-anchor" href="#用户管理命令" aria-hidden="true">#</a> 用户管理命令</h2><p>useradd   添加新用户</p><p>passwd    设置用户密码</p><p>who    查看登录用户信息 （tty 本地终端 pts 远程终端）</p><p>id +用户名    查询用户信息</p><p>su +用户名     切换用户</p><p>w    得到登录用户详细信息</p><p>whoami    我是谁</p><p>userdel 用户名    删除用户,保留家目录</p><p>  -f   强制删除</p><p>  -r   删除用户及用户家目录</p><p>groupadd     创建用户组</p><p>groupmod    修改用户组</p><p>  -g 修改组ID</p><p>  -n 修改组名  groupmod –n 新组名 原组名</p><p>groupdel +组名    删除用户组(改组不能有初始用户,可有附加用户)</p><p>gpasswd -a 用户名 + 组名    把用户加入组(作为附加用户)</p><p>gpasswd –d 用户名 + 组名    把用户从组中删除</p><h4 id="passwd" tabindex="-1"><a class="header-anchor" href="#passwd" aria-hidden="true">#</a> <strong>passwd</strong></h4><p>  -S   查询用户密码的密码状态(仅root用户可用)</p><p>  -l   暂时锁定用户(仅root用户可用)</p><p>  -u   解锁用户(仅root可用)</p><p>  -d   使该用户可用空密码登录系统</p><p>  -e   强制用户在下次登录时修改密码</p><p>  --stdin   可将通过管道符输入的数据作为用户密码</p><p>     echo “123” | passwd –stdin 1220</p><h4 id="usermod-修改用户属性" tabindex="-1"><a class="header-anchor" href="#usermod-修改用户属性" aria-hidden="true">#</a> <strong>usermod   修改用户属性</strong></h4><p>  -c   填写用户账户的备注信息</p><p>  -d –m   连用,可重新指定用户的家目录,并把旧的数据转移过去</p><p>  -e   用户的到期时间,格式为：YYY-MM-DD</p><p>  -g   更改初始用户组</p><p>  -G   更该扩展用户组</p><p>  -L   锁定用户</p><p>  -U   解锁用户</p><p>  -s   更改默认终端</p><p>  -u   修改用户UID</p><h4 id="chage-修改用户密码状态" tabindex="-1"><a class="header-anchor" href="#chage-修改用户密码状态" aria-hidden="true">#</a> <strong>chage   修改用户密码状态</strong></h4><p>  -l   列出用户详细密码状态</p><p>   -d   shadow 3字段</p><p>  -m   4字段</p><p>  -M   5字段</p><p>  -W   6字段</p><p>  -I    7字段</p><p>  -E    8字段</p><h2 id="用户管理文件" tabindex="-1"><a class="header-anchor" href="#用户管理文件" aria-hidden="true">#</a> 用户管理文件</h2><h4 id="etc-passwd" tabindex="-1"><a class="header-anchor" href="#etc-passwd" aria-hidden="true">#</a> <strong>/etc/passwd</strong></h4><p>  第一字段: 用户名称</p><p>  第二字段: 密码标志</p><p>  第三字段: UID(用户ID)</p><p>    0   超级用户</p><p>    1-999   系统用户(伪用户)</p><p>    1000-   普通用户</p><p>  第四字段：用户初始组ID</p><p>    初始组： 用户一登陆就拥有这个组的相关权限,每个用户的初始组只能有一个，组名一般和用户名相同</p><p>    附加组： 用户可以加入多个其他的用户组，并拥有这些组的权限</p><p>  第五字段： 用户说明</p><p>  第六字段： 家目录</p><p>    普通用户： /home/用户名/</p><p>    超级用户： /root/</p><p>  第七字段： 登录后的shell</p><h4 id="etc-shadow" tabindex="-1"><a class="header-anchor" href="#etc-shadow" aria-hidden="true">#</a> <strong>/etc/shadow</strong></h4><p>  第一字段： 用户名</p><p>  第二字段： 加密密码</p><p>    加密算法为SHA512散列加密算法</p><p>    如果密码位是 &quot;!!&quot; 或 &quot;*&quot;，代表没有密码，不能登录</p><p>  第三字段： 密码最后一次修改日期</p><p>    使用1970年1月1日作为标准时间</p><p>  第四字段： 两次密码的修改间隔时间(和第三字段相比)</p><p>  第五字段： 密码有效期(和第三字段相比) (可进行更改)</p><p>  第六字段： 密码修改到期前的警告天数(和第五字段相比)</p><p>  第七字段： 密码过期后的宽限天数(和第五字段相比)</p><p>    0： 密码过期后立即失效</p><p>    -1： 密码永不失效</p><p>  第八字段： 账号失效时间(用时间戳表示)</p><p>  第九字段： 保留</p><h4 id="etc-group" tabindex="-1"><a class="header-anchor" href="#etc-group" aria-hidden="true">#</a> <strong>/etc/group</strong></h4><p>  第一字段： 组名</p><p>  第二字段： 组密码标志</p><p>  第三字段： GID</p><p>  第四字段： 组中附加用户</p><h4 id="etc-gshadow" tabindex="-1"><a class="header-anchor" href="#etc-gshadow" aria-hidden="true">#</a> <strong>/etc/gshadow</strong></h4><p>  第一字段： 组名</p><p>  第二字段： 组密码</p><p>  第三字段： 组管理员用户名</p><p>  第四字段： 组中附加用户</p><p>  用户默认值文件： /etc/login.defs /etc/default/useradd</p><h2 id="进程管理命令" tabindex="-1"><a class="header-anchor" href="#进程管理命令" aria-hidden="true">#</a> 进程管理命令</h2><p><strong>显示系统当前运行的进程</strong></p><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps
 
  -a       显示现行终端机下的所有程序，包括其他用户的程序。
 
  -c       列出程序时，显示每个程序真正的指令名称，而不包含路径，参数或常驻服务的标示。

  -H       显示树状结构，表示程序间的相互关系。

  -N       显示所有的程序，除了执行ps指令终端机下的程序之外。

   s       采用程序信号的格式显示程序状况。

   S       列出程序时，包括已中断的子程序资料。

   -t      &lt;终端机编号&gt; 指定终端机编号，并列出属于该终端机的程序的状况。

   u       显式进程的用户及内存等信息

   x       显示所有程序，不以终端机来区分

   -l      长格式显示更加详细的信息；比如优先级、父进程的PPID等

   -f      显示程序间的关系

   -e      显示所有进程 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段含义：</p><p>​ USER   进程所有者的用户名</p><p>​ PID   进程ID（Process ID）</p><p>​ START   进程启动时间</p><p>​ %CPU   进程的cpu占用率</p><p>​ %MEM   进程使用内存的百分比</p><p>​ VSZ   进程使用的虚拟内存大小，以K为单位</p><p>​ RSS   驻留空间的大小。显示当前常驻内存的程序的K字节数。</p><p>​ TTY   与进程关联的终端（tty）</p><p>​ STAT   进程状态，</p><p>​ TIME   进程使用的总CPU时间</p><p>​ COMMAND   被执行的命令行</p><p>​ NI   进程的优先级值，较小的数字意味着占用较少的CPU时间</p><p>​ PRI   进程优先级</p><p>​ PPID  父进程ID</p><p>​ WCHAN   进程等待的内核事件名</p><p>状态包括：</p><p>​ D   不可中断    Uninterruptible sleep (usually IO)</p><p>​ R   正在运行，或在队列中的进程</p><p>​ S   处于休眠状态</p><p>​ T   停止或被追踪</p><p>​ Z   僵尸进程</p><p>​ W   进入内存交换（从内核2.6开始无效）</p><p>​ X   死掉的进程</p><p>​ &lt;   高优先级</p><p>​ N   低优先级</p><p>​ L   有些页被锁进内存</p><p>​ s   包含子进程</p><p>​ +   位于后台的进程组；</p><p>​ l   多线程，克隆线程</p><p>最常用的方法是ps aux，然后再通过管道使用grep命令过滤查找特定的进程，然后再对特定的进程进行操作。</p><ul><li><p>pstree：以树状显示正在运行的进程。树的根节点为pid或init。如果指定了用户名，进程树将以用户所拥有的进程作为根节点。</p></li><li><p>pgrep：根据名称查找进程ID，返回的是进程ID，若存在多个进程，则分为不同的行返回ID（默认实现）。</p><p><strong>ps是显示瞬间进程的状态，并不动态连续，如果想对进程进行实时监控应该用top命令。</strong></p></li></ul><h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> <strong>命令</strong></h4><p>ps aux --sort %cpu     按照CPU的使用率排序(从小到大)</p><p>ps aux --sort -%cpu    按照CPU的使用率排序(从大到小)</p><p>ps -ef    简单显示(包括PPID)</p><p>ps axo user,pid,ppid,%mem    自定义显示字段</p><p>ps axo user,pid,%mem --sort -%cpu    自定义显示字段，并按CPU使用率降序排序</p><p>查看某一进程的情况：</p><ol><li><p>top -p pid</p></li><li><p>ps -aux | grep process_name</p></li></ol><h3 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h3><p>作用：<strong>实时显示系统运行状态，包括处理器、内存、服务、进程等重要资源信息。</strong></p><p>参数：</p><p>​ -a    按内存使用情况排序</p><p>​ -c    使用显示模式</p><p>​ -d    设置显示的更新速度，即，多长时间刷新一次</p><p>​ -i    不显示任何闲置或僵死的行程</p><p>​ -M    显示内存单位</p><p>​ -n    设置显示的总次数，完成后自动退出</p><p>​ -p    仅显示指定进程 ID 的信息</p><p>​ -u    仅显示与指定用户 ID 匹配的进程</p><p>​ -w    设置显示的宽度</p><p>top命令显示的页面还可以输入以下按键执行相应的功能（注意大小写区分的）</p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>？</td><td>显示在top当中可以输入的命令</td></tr><tr><td>P</td><td>按CPU的使用量排序显示</td></tr><tr><td>M</td><td>按内存的使用量排序显示</td></tr><tr><td>N</td><td>以pid排序显示</td></tr><tr><td>T</td><td>按进程使用的时间累计排序显示</td></tr><tr><td>k</td><td>给某一个pid一个信号,可以用来杀死进程(9)</td></tr><tr><td>r</td><td>给某个pid重新定制一个nice值（即优先级)</td></tr><tr><td>q</td><td>退出top（用ctrl+c也可以退出top）</td></tr></tbody></table><p>参数含义：</p><p>​ <img src="`+d+`" alt="在这里插入图片描述" style="zoom:70%;"></p><p>​ 1、top前五条信息解释</p><p>​    top - 14:49:28 up 1:33, 1 user, load average: 0.00, 0.00, 0.00</p><table><thead><tr><th>内容</th><th>含义</th></tr></thead><tbody><tr><td>14:49:28</td><td>表示当前时间</td></tr><tr><td>up 1:33</td><td>系统远行时间，格式为时：分</td></tr><tr><td>1 user</td><td>当前登陆用户数</td></tr><tr><td>load average: 0.00, 0.00, 0.00</td><td>系统负载，即任务队列的平均长度。 三个数值分别为 1分钟、5分钟、15分钟前到现在的平均值</td></tr></tbody></table><p>​ Tasks: 80 total, 2 running, 78 sleeping, 0 stopped, 0 zombie</p><table><thead><tr><th>内容</th><th>含义</th></tr></thead><tbody><tr><td>Tasks: 80 total</td><td>进程总数</td></tr><tr><td>2 running</td><td>正在运行的进程数</td></tr><tr><td>78 sleeping</td><td>睡眠的进程数</td></tr><tr><td>0 stopped</td><td>停止的进程数</td></tr><tr><td>0 zombie</td><td>僵尸进程数</td></tr></tbody></table><p>​ Cpu(s): 0.0%us, 0.0%sy, 0.0%ni,100.0%id, 0.0%wa, 0.0%hi, 0.0%si, 0.0%st</p><table><thead><tr><th>内容</th><th>含义</th></tr></thead><tbody><tr><td>0.0%us</td><td>用户空间占用CPU百分比</td></tr><tr><td>0.0%sy</td><td>内核空间占用CPU百分比</td></tr><tr><td>0.0%ni</td><td>用户进程空间内改变过优先级的进程占用CPU百分比</td></tr><tr><td>100.0%id</td><td>空闲CPU百分比</td></tr><tr><td>0.0%wa</td><td>等待输入输出的CPU时间百分比</td></tr><tr><td>0.0%hi</td><td>硬中断（Hardware IRQ）占用CPU的百分比</td></tr><tr><td>0.0%si</td><td>软中断（Software Interrupts）占用CPU的百分比</td></tr><tr><td>0.0 st</td><td>用于有虚拟cpu的情况，用来指示被虚拟机偷掉的cpu时间</td></tr></tbody></table><p>​ Mem: 1922488k total, 406936k used, 1515552k free, 11940k buffers</p><table><thead><tr><th>内容</th><th>含义</th></tr></thead><tbody><tr><td>1922488k total</td><td>物理内存总量</td></tr><tr><td>406936k used</td><td>使用的物理内存总量</td></tr><tr><td>1515552k free</td><td>空闲内存总量</td></tr><tr><td>11940k buffers</td><td>用作内核缓存的内存量</td></tr></tbody></table><p>​ Swap: 835576k total, 0k used, 835576k free, 111596k cached</p><table><thead><tr><th>内容</th><th>含义</th></tr></thead><tbody><tr><td>835576k total</td><td>交换区总量</td></tr><tr><td>0k used</td><td>使用的交换区总量</td></tr><tr><td>835576k free</td><td>空闲交换区总量</td></tr><tr><td>111596k cached</td><td>缓冲的交换区总量</td></tr></tbody></table><p>进程信息：</p><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody><tr><td>PID</td><td>进程id</td></tr><tr><td>USER</td><td>进程所有者的用户名</td></tr><tr><td>PR</td><td>优先级</td></tr><tr><td>NI</td><td>nice值，负值表示高优先级，正值表示低优先级</td></tr><tr><td>VIRT</td><td>进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES</td></tr><tr><td>RES</td><td>进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA</td></tr><tr><td>SHR</td><td>共享内存大小，单位kb</td></tr><tr><td>S</td><td>进程状态。 D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程</td></tr><tr><td>%CPU</td><td>上次更新到现在的CPU时间占用百分比</td></tr><tr><td>%MEM</td><td>进程使用的物理内存百分比</td></tr><tr><td>TIME+</td><td>进程使用的CPU时间总计，单位1/100秒</td></tr><tr><td>COMMAND</td><td>命令名/命令行</td></tr></tbody></table><p><strong>默认进入top时，各进程是按照CPU的占用量来排序的。</strong></p><h2 id="信号控制进程" tabindex="-1"><a class="header-anchor" href="#信号控制进程" aria-hidden="true">#</a> 信号控制进程</h2><h3 id="信号类型" tabindex="-1"><a class="header-anchor" href="#信号类型" aria-hidden="true">#</a> 信号类型</h3><p>1    SIGHUP     重新加载配置</p><p>2    SIGINT    键盘中断</p><p>3    SIGQUIT    键盘退出</p><p>9    SIGKILL    强制终止</p><p>15    SIGTERM    终止(正常结束),默认信号</p><p>18    SIGCONT    继续</p><p>19    SIGSTOP    停止</p><p>20    SIGTSTP    暂停</p><h3 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h3><p>kill -l     列出所有支持的信号</p><p>kill +进程PID     给进程发送停止信号(默认信号)</p><p>kill -1 +进程PID     给进程发送1信号</p><p>killall vim     给所有vim进程发送信号</p><p>killall http     给所有http进程发送信号</p><p>pkill -u +用户名   删除用户</p><p>pkill -t pts/2       终止pts/2终端上所有的进程</p><p>pkill -9 -t pts/2     终止pts/2上的所有进程,并结束该pts/2终端</p><p><strong>重启会改变进程的PID，重新加载不会改变进程的PID</strong></p><h2 id="任务调度命令" tabindex="-1"><a class="header-anchor" href="#任务调度命令" aria-hidden="true">#</a> 任务调度命令</h2><h3 id="简述" tabindex="-1"><a class="header-anchor" href="#简述" aria-hidden="true">#</a> 简述</h3><p>任务调度：系统在某个时间执行的特定的命令或程序。</p><p>任务调度分类：</p><ol><li><p>系统工作：有些重要工作必须周而复始地执行。如病毒扫描等</p></li><li><p>用户工作：个别用户可能希望周期性地或一段时间后执行某些程序。比如对MySQL进行备份等。</p></li></ol><h3 id="一次性任务调度" tabindex="-1"><a class="header-anchor" href="#一次性任务调度" aria-hidden="true">#</a> 一次性任务调度</h3><p>使用 at 命令。</p><p>安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> at 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用：</p><p><strong>at + 时间</strong></p><p>例：</p><p>at</p><p>  now +5min    #五分钟之后</p><p>  16:00 tomorrow    #明天16点钟</p><p>例：</p><ol><li><p>一分钟后添加一个新用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>at now +1min

at<span class="token operator">&gt;</span>useradd Alice

at<span class="token operator">&gt;</span> <span class="token punctuation">(</span>按Ctrl+d 结束<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>一分钟后创建一个以时间命名的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> at.job
<span class="token comment">#写入</span>
<span class="token function">touch</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%F<span class="token variable">\`</span></span>.txt 

at now +1min <span class="token operator">&lt;</span> at.job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>atq   查看是否有未执行的任务</strong></p><h3 id="循环任务调度" tabindex="-1"><a class="header-anchor" href="#循环任务调度" aria-hidden="true">#</a> 循环任务调度</h3><h4 id="cron命令" tabindex="-1"><a class="header-anchor" href="#cron命令" aria-hidden="true">#</a> <strong>cron命令</strong></h4><p>crond进程每分钟会处理一次计划任务</p><p>​ #systemctl status crond.service    查看该服务的状态</p><p>​ #ls /var/spool/cron/    计划任务存储位置(该目录中会有一个和用户名相同的文件来存储用户的计划任务)</p><p>​ #vim /etc/cron.deny    在该文件中写入的用户名无法创建计划任务</p><p>crontab [选项]</p><p>​   -e    编辑crontab定时任务</p><p>​   -l    查询当前用户的crontab任务</p><p>​   -r    删除当前用户所有的crontab任务</p><p>​   -u +username    root用户可以查看其它用户的任务</p><h4 id="五个占位符" tabindex="-1"><a class="header-anchor" href="#五个占位符" aria-hidden="true">#</a> <strong>五个占位符</strong></h4><table><thead><tr><th style="text-align:center;">位置</th><th style="text-align:center;">含义</th><th style="text-align:center;">范围</th></tr></thead><tbody><tr><td style="text-align:center;">第一个*</td><td style="text-align:center;">一小时中的第几分钟</td><td style="text-align:center;">0-59</td></tr><tr><td style="text-align:center;">第二个*</td><td style="text-align:center;">一天中的第几个小时</td><td style="text-align:center;">0-23</td></tr><tr><td style="text-align:center;">第三个*</td><td style="text-align:center;">一个月中的第几天</td><td style="text-align:center;">1-31</td></tr><tr><td style="text-align:center;">第四个*</td><td style="text-align:center;">一年中的第几个月</td><td style="text-align:center;">1-12</td></tr><tr><td style="text-align:center;">第五个*</td><td style="text-align:center;">一周中的星期几</td><td style="text-align:center;">0-7 (0和7都代表周日)</td></tr></tbody></table><h4 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号" aria-hidden="true">#</a> <strong>特殊符号</strong></h4><table><thead><tr><th style="text-align:center;">特殊符号</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">*</td><td style="text-align:center;">代表任何时间。比如，第一个*就代表每一分钟都执行一次</td></tr><tr><td style="text-align:center;">,</td><td style="text-align:center;">逗号，代表不连续的时间。比如，0 8,12,16 * * * 表示每天的8点、12点和16点都执行一次命令</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;">代表连续的时间范围。比如，0 5 * * 1-6，表示每周1到周六的凌晨5点执行命令</td></tr><tr><td style="text-align:center;">*/n</td><td style="text-align:center;">代表每隔多久执行一次。比如，*/10 * * * * ,表示每隔10分钟就执行一次命令</td></tr></tbody></table><p><strong>例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">45</span> <span class="token number">22</span> * * *         每天的22点45分执行

<span class="token number">0</span> <span class="token number">17</span> * * <span class="token number">1</span>          每周1的17点0分执行

*/10 <span class="token number">4</span> * * *        每天的4点,每隔10分钟执行一次
       
<span class="token number">0</span> <span class="token number">2</span> <span class="token number">2</span> * <span class="token number">5</span>           每月2号的两点和每月星期五的两点执行  <span class="token punctuation">(</span>星期和日 是或的关系<span class="token punctuation">)</span>
      
<span class="token number">0</span> <span class="token number">2</span> <span class="token number">5</span> <span class="token number">3</span> <span class="token number">7</span>           每年3月7号两点或者每周日两点执行
       
<span class="token number">0</span> <span class="token number">2</span> <span class="token number">1,4</span>,6 * *       每月的1号,4号和6号的两点执行
       
<span class="token number">0</span> <span class="token number">2</span> <span class="token number">5</span>-9 * *         每月5号到9号的两点执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：每天凌晨两点将某个文件进行备份</p><ol><li><p>根据任务编写Shell脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> task.sh

/usr/locla/test.txt <span class="token operator">&lt;</span> /temp/test.txt   <span class="token comment">#备份文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>给脚本文件执行权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">744</span> task.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建定时任务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>

<span class="token comment">#写入</span>
<span class="token number">0</span> <span class="token number">2</span> * * *  ./task.sh    <span class="token comment">#每天两点执行该脚本文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="文件压缩命令" tabindex="-1"><a class="header-anchor" href="#文件压缩命令" aria-hidden="true">#</a> 文件压缩命令</h2><p>gzip + 文件名   压缩文件，压缩后文件格式为.gz(只能压缩文件，不保留原文件)</p><p>gunzip + 文件名( = gzip –d +文件名)   解开压缩文件</p><p>tar [压缩后文件名] [想要压缩的目录]   打包目录</p><p>  -c   打包</p><p>  -v   显示详细信息</p><p>  -f   指定文件名</p><p>  -z   打包同时压缩</p><p>    例：tar –zcf 123 456</p><p>  -x   解包</p><p>  -v   显示详细信息</p><p>  -f   指定解压文件</p><p>  -z   解压缩</p><p>    例：tar –zxvf 123</p><p>zip + [压缩后文件名] +[文件或目录]</p><p>  压缩文件或目录，压缩后文件格式为.zip(可保留原文件)</p><p>  -r 压缩目录</p><p>unzip   解压.zip的压缩文件(不分文件和目录)</p><p>bzip2   压缩文件，压缩后格式为.bz2 (不能压缩目录)</p><p>​   -k   压缩后保留源文件</p><p>bunzip2 解压缩文件</p><p>​   -k   解压缩后保留源文件</p><h2 id="网络命令" tabindex="-1"><a class="header-anchor" href="#网络命令" aria-hidden="true">#</a> 网络命令</h2><p>write   给指定用户发信息，以ctrl +D保存结束</p><p>wall (write all)+message   同时给所有用户发信息</p><p>ping   测试网络联通性</p><p>​   -c +数字   指定发送次数(与windows不同)</p><p>last   查询目前与过去登录系统的用户信息</p><p>lastlog   可检查特定用户上次登陆的时间</p><p>traceroute   显示到某网站的路径</p><p>netstat   显示网络相关信息</p><p>​   -t   TCP协议</p><p>​   -u   UDP协议</p><p>​   -l   监听</p><p>​   -r   路由</p><p>​   -n   显示IP地址和端口号</p><p>  例：netstat –tuln   查看本机监听的端口</p><p>  netstat –an   查看本机所有的网络连接</p><p>  netstat –rn   查看本机路由表</p><h2 id="关机重启命令" tabindex="-1"><a class="header-anchor" href="#关机重启命令" aria-hidden="true">#</a> 关机重启命令</h2><p>shutdown</p><p>  -c   取消</p><p>  -h   关机</p><p>  -r   重启</p><p>关机命令：halt poweroff init 0</p><p>重启命令：reboot init 6</p><p>logout 退出登录</p>`,368),l=[r];function c(p,v){return n(),s("div",null,l)}const m=e(t,[["render",c],["__file","基础命令.html.vue"]]);export{m as default};
