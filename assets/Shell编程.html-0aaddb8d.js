import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c,b as n,d as s,e,a as i}from"./app-a89b456a.js";const d={},o=i(`<h2 id="echo命令和别名" tabindex="-1"><a class="header-anchor" href="#echo命令和别名" aria-hidden="true">#</a> echo命令和别名</h2><h3 id="echo命令" tabindex="-1"><a class="header-anchor" href="#echo命令" aria-hidden="true">#</a> echo命令</h3><h4 id="输出转义字符" tabindex="-1"><a class="header-anchor" href="#输出转义字符" aria-hidden="true">#</a> <strong>输出转义字符</strong></h4><p>​ -n     输出之后不换行</p><p>​ -e     支持转义字符</p><p>​ \\      输出 \\ 本身</p><p>​ \\a     警告音</p><p>​ \\n     换行符</p><p>​ \\r     回车键</p><p>​ \\t     制表符</p><p>​ \\0     按照八进制ASCII码表输出字符</p><p>​ \\x     按照十六进制ASCII码表输出字符</p><p> 例：echo -e &quot;\\a&quot; 发出警告音</p><h4 id="echo带颜色输出" tabindex="-1"><a class="header-anchor" href="#echo带颜色输出" aria-hidden="true">#</a> <strong>echo带颜色输出</strong></h4><ol><li>echo -e &quot;\\e[1;nm+输出内容&quot;    //设置前景色，以后的输出都是该颜色   n的范围是30~37</li></ol><p>   例： echo -e &quot;\\e[1;32mThis is a test.&quot;   //输入内容与m之间没有空格</p><ol start="2"><li>echo -e &quot;\\e[1;nm+输出内容\\e[0m&quot;   //仅此次输出显示颜色</li></ol><p>   例： echo -e &quot;\\e[1;32mThis is a test.\\e[0m&quot;</p><ol start="3"><li><p>echo -e &quot;\\e[1;nm+输出内容&quot;   //设置背景色，n的范围是40~47</p></li><li><p>echo -e &quot;\\033[背景颜色;文字颜色m +字符串 \\033[0m&quot; (centos6)</p></li></ol><p>   例： echo -e &quot;\\033[40;37m 黑底白字 \\033[0m&quot;</p><p><strong>在脚本和命令行中，如果输出的内容最后有 ! 号，需要在 ! 之后加空格。</strong></p><p>​   例： echo &quot;abcd! &quot;</p><h3 id="别名" tabindex="-1"><a class="header-anchor" href="#别名" aria-hidden="true">#</a> 别名</h3><h4 id="在-bashrc-中添加别名" tabindex="-1"><a class="header-anchor" href="#在-bashrc-中添加别名" aria-hidden="true">#</a> <strong>在~/.bashrc 中添加别名</strong></h4><p>alias 别名=’原命令’    设置别名</p><p>alias    查询别名</p><p>unalias +别名    删除别名</p><p>使修改生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc     

<span class="token comment">#source ~/.bashrc  = #source .bashrc  =  #. .bashrc    (在当前目录为/root 的前提下)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="别名的优先级" tabindex="-1"><a class="header-anchor" href="#别名的优先级" aria-hidden="true">#</a> <strong>别名的优先级</strong></h4><ol><li><p>用绝对路径或相对路径执行的命令</p></li><li><p>别名</p></li><li><p>Bash内部命令</p></li><li><p>按照$PATH环境变量定义的目录查找顺序找的的第一个命令</p></li></ol><h2 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h2><p><strong>fd：file description   文件描述符或文件句柄</strong></p><p>标准输入：0    (默认是键盘)   设备文件名 /dev/pts/0</p><p>正确输出：1    (默认是终端)   设备文件名 /dev/pts/1</p><p>错误输出：2    (默认是终端)   设备文件名 /dev/pts/2</p><p>​</p><p>正确输出： 1&gt; 1&gt;&gt; 等价于 &gt; &gt;&gt;</p><p>命令 &gt;文件       以覆盖的方式，如果命令正确则输出到文件，如果错误则输出在屏幕上</p><p>命令 &gt;&gt;文件      以追加的方式，如果命令正确则输出到文件，如果错误则输出在屏幕上</p><p>命令 2&gt;文件       以覆盖的方式，如果命令执行错误则将错误信息输出到文件中；如果正确则执行且会清空文件</p><p>命令 2&gt;&gt;文件      以覆盖的方式，如果命令执行错误则将错误信息输出到文件中；如果正确则执行但不会清空文件</p><p>​</p><p>命令 &gt;文件名  2&gt;&amp;1      无论命令执行错误与正确都保存到文件中，如果文件不存在，则创建文件(覆盖方式)</p><p>命令 &gt;&gt;文件名  2&gt;&amp;1     无论错误与正确都保存到文件中，如果文件不存在，则创建文件(追加方式)</p><p>​</p><p>命令 &amp;&gt;文件名      无论正确或错误都输出到同一个文件中(覆盖方式)</p><p>命令 &amp;&gt;&gt;文件名     无论正确或错误都输出到同一个文件中(追加方式)</p><p>命令 &gt;&gt;文件1 2&gt;&gt;文件2     正确的输出追加到文件1，错误的输出追加到文件2</p><h2 id="脚本运行方式" tabindex="-1"><a class="header-anchor" href="#脚本运行方式" aria-hidden="true">#</a> 脚本运行方式</h2><p>一般以.sh为文件后缀名，文件内容以 #!/bin/bash 开头</p><p>刚创建的脚本文件没有可执行权限，有两种方法执行shell脚本：</p><ol><li>赋予脚本文件可执行权限</li></ol>`,53),r={href:"http://myshell.sh",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"   然后输入相对路径 ./mysehll.sh 或绝对路径就可执行",-1),v=n("ol",{start:"2"},[n("li",null,"使用 sh 或 bash 命令+脚本")],-1),b={href:"http://myshell.sh",target:"_blank",rel:"noopener noreferrer"},m={href:"http://myshell.sh",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="历史命令" tabindex="-1"><a class="header-anchor" href="#历史命令" aria-hidden="true">#</a> 历史命令</h2><h4 id="history-查看历史命令" tabindex="-1"><a class="header-anchor" href="#history-查看历史命令" aria-hidden="true">#</a> <strong>history    查看历史命令</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-w     将本次登录使用过的命令写入文件~/.bash_history中,该文件保存在用户的家目录下,默认记录1000条,
       在配置文件/etc/profile 中可以修改,HISTSIZE=1000

-c     清空所有历史命令,包括内存中和文件中的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在命令行中：</p><p>Ctrl +p    向上翻找命令</p><p>Ctrl +n    向下翻找命令</p><p>​ !n   执行第n条命令</p><p>​ !!   执行上一条命令</p><p>​ !字符串    执行以该字符串开头的命令，如果有多条，则执行最后一条</p><p>ESC+.    引用上一个命令的最后一个参数  等于!$</p><p>ctrl +b    光标向前移动</p><p>ctrl +f    光标向后移动</p><p>ctrl +a    光标移到行首</p><p>ctrl +e    光标移到行尾</p><p>ctrl +u    删除或剪切光标之前的内容</p><p>ctrl +k    删除或剪切光标之后的内容</p><p>ctrl +y    粘贴ctrl +u 或 ctrl +k 剪切的内容</p><p>ctrl +r    通过关键字搜索历史命令</p><h4 id="多条命令执行" tabindex="-1"><a class="header-anchor" href="#多条命令执行" aria-hidden="true">#</a> <strong>多条命令执行</strong></h4><table><thead><tr><th style="text-align:center;">多命令执行符</th><th style="text-align:center;">格式</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">;</td><td style="text-align:center;">命令1 ; 命令2</td><td style="text-align:center;">多个命令顺序执行，命令之间没有逻辑关系</td></tr><tr><td style="text-align:center;">&amp;&amp;</td><td style="text-align:center;">命令1 &amp;&amp; 命令2</td><td style="text-align:center;">如果命令1正确执行，则命令2执行；如果1错误，则2不执行</td></tr><tr><td style="text-align:center;">||</td><td style="text-align:center;">命令1 || 命令2</td><td style="text-align:center;">如果命令1执行不正确，则命令2执行；如果1正确，则2不执行</td></tr></tbody></table><h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h2><h3 id="普通符号" tabindex="-1"><a class="header-anchor" href="#普通符号" aria-hidden="true">#</a> 普通符号</h3><p>*      匹配0个或任意多个任意字符</p><p>?      匹配任意一个字符</p><p>[]      匹配括号中任意一个字符</p><p>​         例： [abc] 表示一定匹配abc中的任意一个字符</p><p>[ - ]    匹配指定范围内的任意一个字符</p><p>​         例：[a-z] 匹配a-z任意一个字符</p><p>[^ ]    取反</p><p>​         例：<code>[^0-9]</code> 匹配一个不是数字的字符</p><p>( )      小括号中断内容在子shell中执行</p><p>{ }      表示一个集合</p><p>​         例： touch file{1..3}     //创建file1，file2，file3三个文件</p><p>​         例： mkdir -pv /home/{aa/{11,22},bb}     //递归创建，创建aa和bb两个目录，在aa下创建11和22两个目录</p><p>​         例： cp -rv /root/{aa.txt,bb.txt}     //将/root/aa.txt拷贝为bb.txt</p><h3 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号" aria-hidden="true">#</a> 特殊符号</h3><p>‘ ‘     单引号，单引号中的内容原封不动的输出，所有的特殊符号都没有了特殊含义</p><p>&quot; &quot;     双引号，除几个特殊符号( $  \`  \\ )有特殊作用外，其他的特殊符号都没有了特殊含义</p><p>$()     <strong>引用系统命令</strong></p><p>\`\`      反引号，<strong>引用系统命令</strong>    例如，a=’date’  或  a=$(date)   则a=系统时间</p><p>( )     小括号中的命令在子shell中运行</p><p>{ }     大括号中的内容在当前shell中运行</p><p>​       区别：1. <code>()</code> 和 <code>{}</code> 都可以把一串的命令放在括号里面，命令之间用 <code>;</code>隔开</p><p>             2.<code>{}</code>中最后一个命令之后要有分号，而<code>()</code>可以不用</p><p>​             3. <code>{}</code>第一个命令和左括号之间必须有一个空格，而<code>()</code>可以没有</p><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3><p><strong>文件中匹配符合条件的字符串</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*   前一个字符匹配0次或任意多次
    例，grep <span class="token string">&quot;a*&quot;</span> test.txt   会匹配全部内容，无意义
        <span class="token function">grep</span> <span class="token string">&quot;aaa*&quot;</span> test.txt      匹配至少有两个a连续的行

?   前一个字符匹配0次或1次

+   前一个字符匹配1次或多次

<span class="token builtin class-name">.</span>   匹配除了换行符外任意一个字符
    例，grep <span class="token string">&quot;s.*d&quot;</span> test.txt     匹配s d之间任意一个字符

^   匹配行首  
    例，grep <span class="token string">&quot;^hello&quot;</span> test.txt   会匹配以hello开头的行

$   匹配行尾   
    例，<span class="token string">&quot;hello$&quot;</span>    会匹配以hello结尾的行
        <span class="token function">grep</span> <span class="token string">&quot;^$&quot;</span> test.txt   会匹配空白行  

<span class="token punctuation">[</span><span class="token punctuation">]</span>  匹配括号中任意一个字符
    例，grep <span class="token string">&quot;[qefa]&quot;</span>     匹配四个字母中的任意一个
        <span class="token function">grep</span> <span class="token string">&quot;[a-z]&quot;</span>      匹配26个字母中的任意一个

<span class="token punctuation">[</span>^<span class="token punctuation">]</span>  给出排除的范围  
     例，grep <span class="token string">&quot;[^0-9]&quot;</span> test.txt    匹配任意一个非数字字符
         <span class="token function">grep</span> <span class="token string">&quot;^[^a-zA-Z]&quot;</span> test.txt    匹配不以字母开头的行

<span class="token punctuation">\\</span>    将特殊符号的含义取消
     例，grep <span class="token string">&quot;\\.$&quot;</span> test.txt    匹配以 <span class="token builtin class-name">.</span> 结尾的行

<span class="token punctuation">\\</span><span class="token punctuation">{</span>n<span class="token punctuation">\\</span><span class="token punctuation">}</span>    匹配前面的字符恰好出现n次， 正则是包含匹配，如果想要匹配正好n个字符，就要在前后加上限制  
         例：^<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">\\</span><span class="token punctuation">}</span><span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>    匹配以4个数字开头的行

<span class="token punctuation">\\</span><span class="token punctuation">{</span>n,<span class="token punctuation">\\</span><span class="token punctuation">}</span>   前面的字符出现不少于n次

<span class="token punctuation">\\</span><span class="token punctuation">{</span>n,m<span class="token punctuation">\\</span><span class="token punctuation">}</span>  匹配前面的字符至少出现n次，最多出现m次
         例： <span class="token punctuation">[</span>a-z<span class="token punctuation">]</span><span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token number">6,8</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>  匹配6到8个小写字母

<span class="token punctuation">\\</span><span class="token operator">&lt;</span>       词首定位符

<span class="token punctuation">\\</span><span class="token operator">&gt;</span>       词尾定位符
        
a<span class="token operator">|</span>b      配置a或b    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="变量分类" tabindex="-1"><a class="header-anchor" href="#变量分类" aria-hidden="true">#</a> 变量分类</h3><ol><li><p>用户自定义变量</p><p>只在当前shell中生效</p></li><li><p>系统变量</p><p>主要保存的是和<strong>系统操作环境相关的数据</strong>，如，<code>$HOME</code>、<code>$PWD</code>，可改变变量的值，不可更改变量名，可新加入变量，</p><p>在当前shell及以下所有子shell中都生效(包括用户自定义的)</p></li><li><p>位置参数变量</p><p>一种预定义变量，<strong>主要用于向脚本当中传递参数或数据</strong>，可改变变量的值，不可更改变量名，不可加入新变量。</p></li><li><p>预定义变量</p><p>设计者在bash中已经定义好的变量，可以直接在shell中使用，可改变变量的值，不可更改变量名，不可加入新变量</p></li></ol><h4 id="位置参数变量" tabindex="-1"><a class="header-anchor" href="#位置参数变量" aria-hidden="true">#</a> <strong>位置参数变量</strong></h4><p>参数：在执行.sh文件时，跟在执行命令之后的字符，如，./first.sh 1 2 3</p><p><code>$n</code>    n为数字，<code>$0</code>代表脚本名称，1-9代表第一个到第九个参数，十以上需要用大括号，如，<code>\${10}</code></p><p><code>$*</code>    代表命令行中所有的参数，并把所有参数看成一个整体</p><p><code>$@</code>    代表命令行中所有的参数，把参数区别对待</p><p><code>$#</code>    参数的个数</p><h4 id="预定义变量" tabindex="-1"><a class="header-anchor" href="#预定义变量" aria-hidden="true">#</a> <strong>预定义变量</strong></h4><p><code>$?</code>    执行最后一次命令的返回状态，若变量值为0，则命令执行成功，若为非0，则失败</p><p><code>$$</code>    当前进程的进程号(PID)</p><p><code>$!</code>    后台运行的最后一个进程的进程号</p><h3 id="变量命名规则" tabindex="-1"><a class="header-anchor" href="#变量命名规则" aria-hidden="true">#</a> 变量命名规则</h3><ol><li><p>变量名称可以由数字，字母下划线组成，不能以数字开头</p></li><li><p>在bash中，变量的默认类型为字符串型，如果要进行数值运算，必须指定变量类型为数值型</p></li><li><p><strong>用等号赋值时，等号两侧不能有空格</strong></p></li><li><p><strong>变量的值如果有空格，需要用单引号或双引号</strong></p></li><li><p>变量的值中可以有 <code>\\</code> 转义符</p></li><li><p>可以把命令的结果赋予变量，但要使用反引号或<code>$()</code>包含命令</p></li></ol><h3 id="定义普通变量" tabindex="-1"><a class="header-anchor" href="#定义普通变量" aria-hidden="true">#</a> 定义普通变量</h3><ol><li><p>定义：<strong>变量=值</strong></p></li><li><p>撤销：<strong>unset  变量</strong></p></li><li><p>声明只读变量：readonly  变量 #不能unset</p></li><li><p>查看：echo $变量名</p></li></ol><h3 id="定义环境变量" tabindex="-1"><a class="header-anchor" href="#定义环境变量" aria-hidden="true">#</a> 定义环境变量</h3><ol><li><p>定义：export 变量名=变量值   若变量已存在，则用 export +变量名  可将普通变量变成环境变量</p></li><li><p>在 /etc/profile 文件中添加想设置的环境变量，设置完成后需要执行<code>source /etc/profile</code> 命令以使文件生效</p></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span>       查看所有的变量
  <span class="token parameter variable">-e</span>      在脚本中，如果命令执行失败，则停止执行并退出Shell
  <span class="token parameter variable">-u</span>      如果调用未声明变量则会报错
  <span class="token parameter variable">-x</span>      执行指令前，先输出指令

<span class="token function">env</span>       查看所有环境变量

<span class="token builtin class-name">unset</span> +变量名    删除变量

使用 <span class="token string">&quot;$变量名&quot;</span> 或 <span class="token variable">\${变量名}</span>包含,可以引用和叠加变量
  例:aa<span class="token operator">=</span><span class="token number">123</span>  <span class="token assign-left variable">aa</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$aa</span>&quot;</span><span class="token number">456</span>  或  <span class="token assign-left variable">aa</span><span class="token operator">=</span><span class="token variable">\${aa}</span><span class="token number">456</span>  则aa<span class="token operator">=</span><span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="接受键盘输入" tabindex="-1"><a class="header-anchor" href="#接受键盘输入" aria-hidden="true">#</a> 接受键盘输入</h3><h4 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> <strong>read</strong></h4><p>-p  &quot;提示信息&quot;   输出提示信息</p><p>-t +秒数   指定等待用户输入的时间，如果没有在指定时间内输入，则不再等待</p><p>-n +字符数   接受指定的字符数，输入字符数为n时，立即执行</p><p>-s   隐藏输入的数据，不显示在屏幕上</p><p><strong>在read后跟一个变量，可将输入的内容赋予该变量，也可跟多个变量</strong></p><p><strong>Linux 中变量类型全部默认为字符串型</strong></p><h3 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型" aria-hidden="true">#</a> 变量类型</h3><p>declare <code>[+/-] [选项]</code> +变量名</p><p>-   给变量设置类型属性</p><p>+   取消变量的类型属性</p><p>-a   将变量声明为数组型</p><p>-i   将变量声明为整数型</p><p>-x   将变量声明为环境变量</p><p>-r   将变量声明为只读类型，该属性无法取消</p><p>-p   显示指定变量被声明的类型</p><h3 id="变量参与运算" tabindex="-1"><a class="header-anchor" href="#变量参与运算" aria-hidden="true">#</a> 变量参与运算</h3><ol><li>将声明变量为整数型</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">11</span>

<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">22</span>

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">$a</span>+<span class="token variable">$b</span>

 则，c<span class="token operator">=</span><span class="token number">33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>expr 和 let 命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> $a + $b<span class="token variable">)</span></span>    <span class="token comment"># &quot;+&quot;加号左右两侧必须有空格   </span>

<span class="token builtin class-name">let</span> <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">$a</span>+<span class="token variable">$b</span>          <span class="token comment"># &quot;=&quot;等号左右两侧不能有空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>$(( )) 和 $[ ]</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a<span class="token operator">+</span>$b<span class="token variable">))</span></span>       <span class="token comment"># 字母与括号之间可以有空格也可以没有</span>

<span class="token assign-left variable">c</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$a</span>+<span class="token variable">$b</span> <span class="token punctuation">]</span>       <span class="token comment"># 字母与括号之间可以有空格也可以没有       </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>使用运算符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#例，计算 (2+3)*4</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">4</span> <span class="token variable">))</span></span>  或 <span class="token assign-left variable">result</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token punctuation">(</span><span class="token number">2</span>+3<span class="token punctuation">)</span>*4 <span class="token punctuation">]</span>

或：
<span class="token assign-left variable">temp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token number">2</span> + <span class="token number">3</span><span class="token variable">\`</span></span>         <span class="token comment">#运算符两侧要有空格</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $temp <span class="token punctuation">\\</span>* <span class="token number">4</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="文件判断" tabindex="-1"><a class="header-anchor" href="#文件判断" aria-hidden="true">#</a> 文件判断</h2><ol><li><p>按照文件类型进行判断 (在判断结构中直接使用)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-b</span>         判断文件是否存在,且为块设备文件

<span class="token parameter variable">-c</span>         判断文件是否存在,且为字符设备文件

<span class="token parameter variable">-d</span>         判断文件是否存在,且为目录文件<span class="token punctuation">(</span>是目录为真<span class="token punctuation">)</span>

<span class="token parameter variable">-e</span>         判断文件是否存在<span class="token punctuation">(</span>存在为真<span class="token punctuation">)</span>

<span class="token parameter variable">-f</span>         判断文件是否存在,且为普通文件<span class="token punctuation">(</span>普通文件为真<span class="token punctuation">)</span>

<span class="token parameter variable">-L</span>         判断文件是否存在,且为符号链接文件,即软连接<span class="token punctuation">(</span>符号链接文件为真<span class="token punctuation">)</span>

<span class="token parameter variable">-p</span>         判断文件是否存在,且为管道文件

<span class="token parameter variable">-s</span>         判断文件是否存在,且为空文件<span class="token punctuation">(</span>非空为真<span class="token punctuation">)</span>

<span class="token parameter variable">-S</span>         判断文件是否存在,且为套接字文件<span class="token punctuation">(</span>是为真<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> /home/myshell1.sh <span class="token punctuation">]</span>  <span class="token comment"># [ ] 两端有空格</span>

<span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件存在&quot;</span>

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>按照文件权限进行判断</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-r</span>        判断文件是否存在,且有读的权限<span class="token punctuation">(</span>无法区分所有者和所属组,只要有w权限,就为真<span class="token punctuation">)</span>

<span class="token parameter variable">-w</span>        判断文件是否存在,且有写的权限

<span class="token parameter variable">-x</span>        判断文件是否存在,且有执行的权限

<span class="token parameter variable">-u</span>        判断文件是否存在,且有SUID权限

<span class="token parameter variable">-g</span>        判断文件是否存在,且有SGID权限

<span class="token parameter variable">-k</span>        判断文件是否存在,且有SBIT权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>文件比较</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>文件1 –nt 文件2     判断文件1的修改时间是否比文件2的新<span class="token punctuation">(</span>如果新为真<span class="token punctuation">)</span>

文件1 –ot 文件2     判断文件1的修改时间是否比文件2的旧<span class="token punctuation">(</span>如果旧为真<span class="token punctuation">)</span>

文件1 –ef 文件2     判断文件1和文件2的idone号是否一致<span class="token punctuation">(</span>用于判断硬链接<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>整数比较</p><p>x 参数 y</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-eq</span>       判断x,y是否
       
<span class="token parameter variable">-ne</span>       判断是否不等

<span class="token parameter variable">-gt</span>       判断是否大于

<span class="token parameter variable">-lt</span>       判断是否小于

<span class="token parameter variable">-ge</span>       判断是否大于等于

<span class="token parameter variable">-le</span>       判断是否小于等于
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>字符串判断</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-z</span> +字符串        判断字符串是否为空 <span class="token punctuation">(</span>空为真<span class="token punctuation">)</span>

<span class="token parameter variable">-n</span> +字符串        是否为非空 <span class="token punctuation">(</span>非空为真<span class="token punctuation">)</span>

<span class="token operator">==</span>                判断两字符串是否相等

<span class="token operator">!=</span>                判断两字符串是否不等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多重条件判断</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>判断1 <span class="token parameter variable">-a</span> 判断2       逻辑与,当两个判断都成立时,结果为真

判断1 <span class="token parameter variable">-o</span> 判断2       逻辑或,当有一个判断时,结果为真
  
<span class="token operator">!</span>                    非,使原始的判断式取反
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="if判断语句" tabindex="-1"><a class="header-anchor" href="#if判断语句" aria-hidden="true">#</a> if判断语句</h2><h3 id="单分支语句" tabindex="-1"><a class="header-anchor" href="#单分支语句" aria-hidden="true">#</a> 单分支语句</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>  

  程序
  
<span class="token keyword">fi</span>                   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span>
  
  <span class="token keyword">then</span>

     程序
     
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：判断 22 是否大于 23</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">23</span> <span class="token parameter variable">-gt</span> <span class="token number">22</span> <span class="token punctuation">]</span>    <span class="token comment">#中括号两端要有空格</span>

   <span class="token keyword">then</span>  

         <span class="token builtin class-name">echo</span> <span class="token string">&quot;ok&quot;</span>

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双分支语句" tabindex="-1"><a class="header-anchor" href="#双分支语句" aria-hidden="true">#</a> 双分支语句</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span>

   <span class="token keyword">then</span>

       程序

<span class="token keyword">else</span>

       程序

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多分支语句" tabindex="-1"><a class="header-anchor" href="#多分支语句" aria-hidden="true">#</a> 多分支语句</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件表达式1 <span class="token punctuation">]</span>

   <span class="token keyword">then</span>
    
        程序

<span class="token keyword">elif</span> <span class="token punctuation">[</span>条件表达式2 <span class="token punctuation">]</span>

   <span class="token keyword">then</span>
    
       程序

<span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件表达式3 <span class="token punctuation">]</span>

   <span class="token keyword">then</span>
    
        程序

<span class="token keyword">else</span>

     程序

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂条件" tabindex="-1"><a class="header-anchor" href="#复杂条件" aria-hidden="true">#</a> 复杂条件</h3><ol><li></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断一 <span class="token punctuation">]</span>  <span class="token operator">&amp;&amp;</span>  <span class="token punctuation">[</span> 条件判断二 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

          程序

<span class="token keyword">elif</span>  <span class="token punctuation">[</span> 条件判断三 <span class="token punctuation">]</span>  <span class="token operator">&amp;&amp;</span>  <span class="token punctuation">[</span> 条件判断四 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

          程序

<span class="token keyword">else</span>

         程序
    
<span class="token keyword">fi</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断一  <span class="token parameter variable">-a</span>  条件判断二  <span class="token parameter variable">-a</span>  条件判断三 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

      程序

<span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件判断一  <span class="token parameter variable">-o</span>  条件判断二 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>

      程序

<span class="token keyword">else</span>  

      程序

<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> 条件判断一  <span class="token operator">&amp;&amp;</span>  条件判断二 <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>

      程序

<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> 条件判断三  <span class="token operator">||</span>  条件判断四 <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>

      程序

<span class="token keyword">else</span>

      程序

<span class="token keyword">fi</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a> <strong>[[ ]]和[ ]的区别：</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、所有的字符与逻辑运算符直接用<span class="token string">&quot;空格&quot;</span>分开，不能连到一起。

<span class="token number">2</span>、在<span class="token punctuation">[</span> <span class="token punctuation">]</span>表达式中，常见的<span class="token operator">&gt;</span>、<span class="token operator">&lt;</span>需要加转义符<span class="token punctuation">\\</span>

<span class="token number">3</span>、进行逻辑运算符 <span class="token operator">&amp;&amp;</span>、<span class="token operator">||</span> 比较时；如果用的<span class="token punctuation">[</span><span class="token punctuation">]</span>符号，则用在外面，如果在<span class="token punctuation">[</span> <span class="token punctuation">]</span>里面进行逻辑与或的比较，则用 -a、-o 进行表示

<span class="token number">4</span>、<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token punctuation">]</span>运算符只是<span class="token punctuation">[</span> <span class="token punctuation">]</span>运算符的扩充；能够支持<span class="token operator">&lt;</span>、<span class="token operator">&gt;</span>符号运算不需要转义符；

<span class="token number">5</span>、<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>用 <span class="token operator">&amp;&amp;</span> 表示逻辑<span class="token string">&quot;与&quot;</span><span class="token punctuation">;</span>用 <span class="token operator">||</span> 表示逻辑<span class="token string">&quot;或&quot;</span>

<span class="token number">6</span>、<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>可以进行算术扩展,而<span class="token punctuation">[</span> <span class="token punctuation">]</span>不可以。

<span class="token number">7</span>、<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>支持正则，而<span class="token punctuation">[</span> <span class="token punctuation">]</span>不行。

<span class="token number">8</span>、双方括号 <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> 可用于高级字符串处理，比如<span class="token string">&quot;模糊匹配&quot;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="case-判断语句" tabindex="-1"><a class="header-anchor" href="#case-判断语句" aria-hidden="true">#</a> case 判断语句</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> $变量名 <span class="token keyword">in</span>

    <span class="token string">&quot;值1&quot;</span><span class="token punctuation">)</span> 
    
          程序
    
    <span class="token punctuation">;</span><span class="token punctuation">;</span>          <span class="token comment">#要以两个分号结尾</span>
    
    <span class="token string">&quot;值2&quot;</span><span class="token punctuation">)</span>
    
          程序
    
    <span class="token punctuation">;</span><span class="token punctuation">;</span>

    ……
     
    *<span class="token punctuation">)</span>           <span class="token comment">#以上都不匹配,则执行该程序, * 两端没有双引号</span>

          程序
      
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：当命令行参数是1时输出周一，是2时输出周二，是3时输出周三，其他输出other</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span> 

   <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>

       <span class="token builtin class-name">echo</span> <span class="token string">&quot;周一&quot;</span>

   <span class="token punctuation">;</span><span class="token punctuation">;</span>

   <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>

       <span class="token builtin class-name">echo</span> <span class="token string">&quot;周二&quot;</span>

   <span class="token punctuation">;</span><span class="token punctuation">;</span>

   <span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>

       <span class="token builtin class-name">echo</span> <span class="token string">&quot;周三&quot;</span>

   <span class="token punctuation">;</span><span class="token punctuation">;</span>

   *<span class="token punctuation">)</span>

       <span class="token builtin class-name">echo</span> <span class="token string">&quot;other&quot;</span>

    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h2><ol><li></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> 变量 <span class="token keyword">in</span> 值1 值2 值3…

<span class="token keyword">do</span>

      程序
      
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：打印命令行输入的参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>

<span class="token keyword">do</span>

   <span class="token builtin class-name">echo</span> <span class="token string">&quot;the num is <span class="token variable">$i</span>&quot;</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------------------------------&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>

<span class="token keyword">do</span>

   <span class="token builtin class-name">echo</span> <span class="token string">&quot;the num is <span class="token variable">$j</span>&quot;</span>

<span class="token keyword">done</span>

<span class="token comment">#测试</span>
./test.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>

the num is <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
-------------------------------
the num is <span class="token number">1</span>
the num is <span class="token number">2</span>
the num is <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> 初始值<span class="token punctuation">;</span>结束条件<span class="token punctuation">;</span>变量的变化 <span class="token punctuation">))</span></span>

<span class="token keyword">do</span> 

     程序

<span class="token keyword">done</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：计算从1加到100</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>

<span class="token keyword">do</span>

    <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$sum</span>+<span class="token variable">$i</span><span class="token punctuation">]</span>     <span class="token comment">#可以有空格也可以没有,因为是变量参与运算，所以用 $[ ]</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;sum=<span class="token variable">$sum</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>break 跳出整个循环</strong></p><p><strong>continue 跳过本次循环，继续下次循环</strong></p><h2 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>  

<span class="token keyword">do</span>  

     程序

<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：从命令行输入一个数，计算从1加到n 的值为多少</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-le</span> <span class="token variable">$1</span> <span class="token punctuation">]</span>

<span class="token keyword">do</span>

   <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$sum<span class="token operator">+</span>$i<span class="token variable">))</span></span>        

   <span class="token assign-left variable">i</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$i</span>+1<span class="token punctuation">]</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>  <span class="token string">&quot;sum=<span class="token variable">$sum</span>&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="until-循环" tabindex="-1"><a class="header-anchor" href="#until-循环" aria-hidden="true">#</a> until 循环</h2><p><strong>当条件不成立时则执行程序</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span>  <span class="token comment">#中括号两边不能没有空格</span>

<span class="token keyword">do</span>

    程序

<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：计算从1加到100的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-gt</span> <span class="token number">100</span> <span class="token punctuation">]</span>  <span class="token comment">#中括号两边不能没有空格</span>

<span class="token keyword">do</span>

   <span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> $s<span class="token operator">+</span>$i <span class="token variable">))</span></span>   <span class="token comment">#可以没有空格</span>

   <span class="token assign-left variable">i</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$i</span>+1 <span class="token punctuation">]</span>    <span class="token comment">#可以没有空格</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;the sum is <span class="token variable">$s</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exit语句" tabindex="-1"><a class="header-anchor" href="#exit语句" aria-hidden="true">#</a> exit语句</h2><h4 id="exit-返回值" tabindex="-1"><a class="header-anchor" href="#exit-返回值" aria-hidden="true">#</a> <strong>exit 返回值</strong></h4><p>   在脚本中如果碰到了exit语句，则后续的程序就不再执行，而是直接退出脚本</p><p>   如果exit命令之后定义了返回值，那么这个脚本执行之后的返回值就是自己定义的返回值，可以通过<code>$?</code>查看</p><p>   如果exit之后没有定义返回值，那么脚本执行之后的返回值是执行exit命令之前，最后一条命令的返回值</p><h2 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a> 自定义函数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> 函数名<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

  …

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：函数名 [值]</p><p>例：输入两个数计算和</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">getsum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

     <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$n1</span>+<span class="token variable">$n2</span> <span class="token punctuation">]</span>

     <span class="token builtin class-name">echo</span> <span class="token string">&quot;和=<span class="token variable">$num</span>&quot;</span>

<span class="token punctuation">}</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第一个数:&quot;</span> n1

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第二个数:&quot;</span> n2

getsum <span class="token variable">$n1</span> <span class="token variable">$n2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p><p>​</p>`,184);function h(g,f){const a=p("ExternalLinkIcon");return t(),c("div",null,[o,n("p",null,[s("   chomd 744 "),n("a",r,[s("myshell.sh"),e(a)])]),u,v,n("p",null,[s("  sh "),n("a",b,[s("myshell.sh"),e(a)]),s(" 或 bash "),n("a",m,[s("myshell.sh"),e(a)]),s(" (在当前文件夹下)")]),k])}const q=l(d,[["render",h],["__file","Shell编程.html.vue"]]);export{q as default};
