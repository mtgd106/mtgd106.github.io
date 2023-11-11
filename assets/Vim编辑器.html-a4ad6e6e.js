import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a}from"./app-a89b456a.js";const r="/assets/image-20231106093903308-c4dd0930.png",d={},s=a('<img src="'+r+'" alt="image-20231106093903308" style="zoom:67%;"><h3 id="插入命令" tabindex="-1"><a class="header-anchor" href="#插入命令" aria-hidden="true">#</a> 插入命令</h3><p>a    在光标所在字符的后面插入</p><p>A    在光标所在行的行尾插入</p><p>i     在光标所在字符的前面插入</p><p>I     在光标所在行的行首插入</p><p>o     在光标所在行的下一行插入新行</p><p>O    在光标所在行的上一行插入新行</p><h3 id="光标移动命令" tabindex="-1"><a class="header-anchor" href="#光标移动命令" aria-hidden="true">#</a> 光标移动命令</h3><p>set nu      设置行号(命令模式)</p><p>set nonu    取消行号(命令模式)</p><p>:n     到第n行行首(命令模式)</p><p>:0     移动到第一行行首(命令模式)</p><p><code>:$</code>   移动到最后一行行首(命令模式)</p><br><p>gg    移到第一行行首(普通模式)</p><p>G     移动最后一行行首(普通模式)</p><p>nG    移动第n行行首(普通模式)</p><p>0      移动到当前所在行的行首(普通模式)</p><p>$      移动到当前所在行的行尾(普通模式)</p><h3 id="删除命令-普通模式" tabindex="-1"><a class="header-anchor" href="#删除命令-普通模式" aria-hidden="true">#</a> 删除命令(普通模式)</h3><p>x    删除光标所在处字符</p><p>nx    删除光标所在处后n个字符(包括光标所在字符)</p><p>dd    删除光标所在行</p><p>ndd    删除光标所在行后n行(包括光标所在行)</p><p>D    删除光标所在处到行尾内容</p><p>d0    删除光标到行首的内容</p><p>dG    删除光标所在行到文件末尾处内容</p><p>:n1,n2d    删除指定范围的行(命令模式)</p><h3 id="复制和剪切命令-普通模式" tabindex="-1"><a class="header-anchor" href="#复制和剪切命令-普通模式" aria-hidden="true">#</a> 复制和剪切命令(普通模式)</h3><p>yy     复制当前行</p><p>nyy    复制当前行以下n行</p><p>dd     剪切当前行</p><p>ndd    剪切当前行以下n行</p><p>p/P     粘贴在当前光标所在行的下一行/上一行</p><h3 id="替换和撤销命令-普通模式" tabindex="-1"><a class="header-anchor" href="#替换和撤销命令-普通模式" aria-hidden="true">#</a> 替换和撤销命令(普通模式)</h3><p>替换单个字符：将待替换的字符用光标选中，在普通模式下按下r ，再按下想要替换成的字符即可</p><p>r   代表光标所在处字符</p><p>R   从光标所在处开始替换多个字符，按esc键结束</p><p>u   撤销(普通模式)</p><p>ctrl+r   反撤销(普通模式)</p><h3 id="查找和替换命令-命令模式" tabindex="-1"><a class="header-anchor" href="#查找和替换命令-命令模式" aria-hidden="true">#</a> 查找和替换命令(命令模式)</h3><p><strong>查找</strong></p><p>:/string   搜索指定字符串，按 n 查找下一个(命令模式下输入 <strong><code>/</code></strong> )</p><p>  :set ic 搜索时忽略大小写</p><p>  N   指定字符串的下一个出现位置</p><p><strong>单行替换</strong></p><p>  将光标置于待替换行上，进入命令模式，输入 <strong><code>:s /原数据/新数据</code></strong> (是在命令模式下输入<code>:s</code>，而不是s)</p><p><strong>全篇替换</strong></p><p>  命令模式下输入 <strong><code>:%s /原数据/新数据/g</code></strong> 如果不加g，则只替换每行第一个符合的字符串</p><p><strong>指定行替换</strong></p><p>  命令模式下输入 <strong><code>:n1,n2s /原数据/新数据/g</code></strong> (n1和n2代表起始行号和终止行号，即，替换第n1行到第n2行的数据)</p><h3 id="保存退出命令-命令模式" tabindex="-1"><a class="header-anchor" href="#保存退出命令-命令模式" aria-hidden="true">#</a> 保存退出命令(命令模式)</h3><p>:w    保存修改</p><p>:w new_filename    另存为指定文件</p><p>:wq    保存修改并退出(快捷键:ZZ)</p><p>:q     不保存修改并退出</p><p>:q!     不保存修改并强制退出</p><p>:wq!    保存修改并退出(仅root和文件所有者可用)</p><h3 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h3><p>:r +文件名    导入一个文件</p><p>:! +命令     仅执行shell命令</p><p>:r ! +命令    将命令执行结果导入到文件中</p><br><p>:ab    替换，例，:ab 123 456   则，在输入123 时将自动替换为456</p><p><strong>连续行注释</strong></p><p>:n1,n2s/^/#/g    n1到n2行首加#</p><p>:n1,n2s/^#//g</p><p>命令模式下使用sp命令可以实现水平分屏，用ctrl+w+w进行切换，用wqall 全部退出；</p><p>用vsp可实现垂直分屏</p>',70),t=[s];function o(h,c){return e(),n("div",null,t)}const l=p(d,[["render",o],["__file","Vim编辑器.html.vue"]]);export{l as default};
