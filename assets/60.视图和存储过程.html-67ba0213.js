import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as o,f as c,b as n,d as s,e,a as p}from"./app-a89b456a.js";const d={},r=p(`<h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>  视图(View)是一种虚拟存在的表。视图中的数据并不在数据库中实际存在，行和列数据来自定义视图的语句中使用的表，并且是在使用视图时动态生成的。</p><p>  <strong>视图只保存了查询的SQL逻辑，不保存查询结果。所以在创建视图的时候，主要的工作就是创建这条SQL查询语句。</strong></p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>​ 1.创建</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token punctuation">[</span><span class="token operator">or</span> <span class="token keyword">replace</span><span class="token punctuation">]</span> <span class="token keyword">view</span> 视图名称<span class="token punctuation">[</span><span class="token punctuation">(</span>列名列表<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">select</span>语句 <span class="token punctuation">[</span> <span class="token keyword">with</span> <span class="token punctuation">[</span> <span class="token keyword">cascaded</span> <span class="token operator">|</span> <span class="token keyword">local</span> <span class="token punctuation">]</span> <span class="token keyword">check</span> <span class="token keyword">option</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>查看创建视图语句：<span class="token keyword">show</span> creat <span class="token keyword">view</span> 视图名称<span class="token punctuation">;</span>

查看视图数据：<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> 视图名称 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.修改</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>方式一:
 
 <span class="token keyword">create</span> <span class="token punctuation">[</span><span class="token operator">or</span> <span class="token keyword">replace</span><span class="token punctuation">]</span> <span class="token keyword">view</span> 视图名称<span class="token punctuation">[</span><span class="token punctuation">(</span>列名列表<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">select</span>语句 <span class="token punctuation">[</span> <span class="token keyword">with</span> <span class="token punctuation">[</span> <span class="token keyword">cascaded</span> <span class="token operator">|</span> <span class="token keyword">local</span> <span class="token punctuation">]</span> <span class="token keyword">check</span> <span class="token keyword">option</span> <span class="token punctuation">]</span>

方式二:
 
  <span class="token keyword">alter</span> <span class="token keyword">view</span> 视图名称<span class="token punctuation">[</span><span class="token punctuation">(</span>列名列表<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">select</span> <span class="token punctuation">[</span> <span class="token keyword">with</span> <span class="token punctuation">[</span> <span class="token keyword">cascaded</span> <span class="token operator">|</span> <span class="token keyword">local</span> <span class="token punctuation">]</span> <span class="token keyword">check</span> <span class="token keyword">option</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4.删除</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">view</span> <span class="token punctuation">[</span><span class="token keyword">if</span> <span class="token keyword">exists</span><span class="token punctuation">]</span> 视图名称 <span class="token punctuation">[</span><span class="token punctuation">,</span>视图名称<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检查选项" tabindex="-1"><a class="header-anchor" href="#检查选项" aria-hidden="true">#</a> 检查选项</h3><p>  检查选项(Check Option)是用于保证视图中数据的一致性和完整性的约束措施。</p><p>  当对视图进行插入，更新，删除操作时，MySQL会检查正在操作的每个行，以使其符合视图的定义。</p><p>  <strong>MySQL还允许基于另一个视图创建视图，它还会检查依赖视图中的规则以保持一致性。</strong></p><p>  为了确定检查的范围，MySQL提供了两个选项： cascaded 和 local，默认值为 cascaded。</p><p>    cascaded-----级联</p><p>    比如，v2视图是基于v1视图的，如果在v2视图创建的时候指定了检查选项为 cascaded，但是v1视图创建时未指定检查</p><p>                选项，则在执行检查时，不仅会检查v2，还会级联检查v2的关联视图v1。</p><p>    local-----本地</p><p>    比如，v2视图是基于v1视图的，如果在v2视图创建的时候指定了检查选项为 local ，但是v1视图创建时未指定检查</p><p>               选项，则在执行检查时，只会检查v2，不会检查v2的关联视图v1。</p><h3 id="视图的更新" tabindex="-1"><a class="header-anchor" href="#视图的更新" aria-hidden="true">#</a> 视图的更新</h3><p><strong>要使视图可更新，视图中的行与基础表中的行之间必须存在一对一的关系。</strong></p><p>如果视图包含以下任何一项，则该视图不可更新：</p><p>  A. 聚合函数或窗口函数（SUM()、 MIN()、 MAX()、 COUNT()等）</p><p>  B. DISTINCT</p><p>  C. GROUP BY</p><p>  D. HAVING</p><p>  E. UNION 或者 UNION ALL</p><h3 id="视图作用" tabindex="-1"><a class="header-anchor" href="#视图作用" aria-hidden="true">#</a> 视图作用</h3><p>  1.简单</p><p>    视图不仅可以简化用户对数据的理解，也可以简化他们的操作。</p><p>    那些被经常使用的查询可以被定义为视图，从而使得用户不必为以后的操作每次指定全部的条件。</p><p>  2.安全</p><p>    数据库可以授权，但不能授权到数据库特定行和特定的列上。</p><p>    通过视图用户只能查询和修改他们所能见到的数据</p><p>  3.数据独立</p><p>    视图可帮助用户屏蔽真实表结构变化带来的影响。</p><h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h2><h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3><p>  存储过程是<strong>事先经过编译并存储在数据库中的一段 SQL 语句的集合</strong>，调用存储过程可以简化开发人员的很多工作，</p><p>      减少数据在数据库和应用服务器之间的传输，对于提高数据处理的效率是有好处的。</p><p>  存储过程思想上很简单，就是<strong>数据库 SQL 语言层面的代码封装与重用</strong>。</p><p>  特点：</p><p>    封装，复用 ------------------------------&gt; 可以把某一业务SQL封装在存储过程中，需要用到的时候直接调用即可。</p><p>    可以接收参数，也可以返回数据 --------&gt; 在存储过程中，可以传递参数，也可以接收返回值。</p><p>    减少网络交互，效率提升 ----------------&gt; 如果涉及到多条SQL，每执行一次都是一次网络传输。</p><p>                                                                        而如果封装在存储过程中，我们只需要网络交互一次可能就可以了。</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><p>  1.创建</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">procedure</span> 存储过程名称 <span class="token punctuation">(</span><span class="token punctuation">[</span> 参数列表 <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

<span class="token comment">-- SQL语句</span>

<span class="token keyword">end</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  2.调用</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">call</span> 名称 <span class="token punctuation">(</span><span class="token punctuation">[</span> 参数 <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>  3.查看</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询指定数据库的存储过程及状态信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span>ROUTINES <span class="token keyword">where</span> ROUTINE_SCHEMA <span class="token operator">=</span> <span class="token string">&#39;数据库名称&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询某个存储过程的定义</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">procedure</span> 存储过程名称 <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  4.删除</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token punctuation">[</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> <span class="token punctuation">]</span> 存储过程名称<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>  例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 存储过程基本语法</span>
<span class="token comment">-- 创建</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> p1<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>
	
<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token comment">-- 调用</span>
<span class="token keyword">call</span> p1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span>ROUTINES <span class="token keyword">where</span> ROUTINE_SCHEMA <span class="token operator">=</span> <span class="token string">&#39;itcast&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">procedure</span> p1<span class="token punctuation">;</span>

<span class="token comment">-- 删除</span>
<span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> p1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>​ 在MySQL中变量分为三种类型: 系统变量、用户定义变量、局部变量。</p><h4 id="系统变量" tabindex="-1"><a class="header-anchor" href="#系统变量" aria-hidden="true">#</a> <strong>系统变量</strong></h4><p>  系统变量是由服务器提供，不是用户定义的，属于服务器层面。分为全局变量(GLOBAL)、会话变量(SESSION)。</p><p>  1.查看系统变量</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token punctuation">[</span> <span class="token keyword">session</span> <span class="token operator">|</span> <span class="token keyword">global</span> <span class="token punctuation">]</span> variables <span class="token punctuation">;</span> <span class="token comment">-- 查看所有系统变量</span>

<span class="token keyword">show</span> <span class="token punctuation">[</span> <span class="token keyword">session</span> <span class="token operator">|</span> <span class="token keyword">global</span> <span class="token punctuation">]</span> variables <span class="token operator">like</span> <span class="token string">&#39;......&#39;</span><span class="token punctuation">;</span> <span class="token comment">-- 可以通过like模糊匹配方式查找变量</span>

<span class="token keyword">select</span> @@<span class="token punctuation">[</span><span class="token keyword">session</span> <span class="token operator">|</span> <span class="token keyword">global</span><span class="token punctuation">]</span> 系统变量名<span class="token punctuation">;</span> <span class="token comment">-- 查看指定变量的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  2.设置系统变量</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token punctuation">[</span> <span class="token keyword">session</span> <span class="token operator">|</span> <span class="token keyword">global</span> <span class="token punctuation">]</span> 系统变量名 <span class="token operator">=</span> 值 <span class="token punctuation">;</span>

<span class="token keyword">set</span> @@<span class="token punctuation">[</span><span class="token keyword">session</span> <span class="token operator">|</span> <span class="token keyword">global</span><span class="token punctuation">]</span> 系统变量名 <span class="token operator">=</span> 值 <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  注意：</p><p>    如果没有指定SESSION或GLOBAL，则默认是SESSION，即，会话变量。</p><p>      A. 全局变量(GLOBAL)：全局变量针对于所有的会话。</p><p>      B. 会话变量(SESSION)：会话变量针对于单个会话，在另外一个会话窗口就不生效了。</p><h4 id="用户定义变量" tabindex="-1"><a class="header-anchor" href="#用户定义变量" aria-hidden="true">#</a> <strong>用户定义变量</strong></h4><p>  用户定义变量是用户根据需要自己定义的变量，用户变量不需要提前声明，在用的时候直接用 &quot;@变量名&quot; 使用就可以。</p><p>  <strong>其作用域为当前连接。</strong></p><p>  1.声明</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一  </span>
  <span class="token keyword">set</span> <span class="token variable">@var_name</span> <span class="token operator">=</span> expr <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token variable">@var_name</span> <span class="token operator">=</span> expr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span>  <span class="token comment">-- 赋值时，可以使用 = ，也可以使用 := 。</span>

  <span class="token keyword">set</span> <span class="token variable">@var_name</span> :<span class="token operator">=</span> expr <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token variable">@var_name</span> :<span class="token operator">=</span> expr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span>
  
<span class="token comment">-- 方式二</span>
  <span class="token keyword">select</span> <span class="token variable">@var_name</span> :<span class="token operator">=</span> expr <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token variable">@var_name</span> :<span class="token operator">=</span> expr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span>
  
  <span class="token keyword">select</span> 字段名 <span class="token keyword">into</span> <span class="token variable">@var_name</span> <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  2.使用</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token variable">@var_name</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>    用户定义的变量无需对其进行声明或初始化，只不过获取到的值为NULL。</p><h4 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> <strong>局部变量</strong></h4><p>  局部变量 是根据需要定义的在局部生效的变量，访问之前，需要使用declare关键字声明。</p><p>  <strong>可用作存储过程内的局部变量和输入参数，局部变量的范围是在其内声明的begin... end块。</strong></p><p>  1.声明</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">declare</span> 变量名 变量类型 <span class="token punctuation">[</span><span class="token keyword">default</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>    变量类型就是数据库字段类型：int、bigint、char、varchar、date、time等。</p><p>  2.赋值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> 变量名 <span class="token operator">=</span> 值 <span class="token punctuation">;</span>

<span class="token keyword">set</span> 变量名 :<span class="token operator">=</span> 值 <span class="token punctuation">;</span>

<span class="token keyword">select</span> 字段名 <span class="token keyword">into</span> 变量名 <span class="token keyword">from</span> 表名 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><p>  if 用于做条件判断，具体的语法结构为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">if</span> 条件<span class="token number">1</span> <span class="token keyword">then</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">elseif</span> 条件<span class="token number">2</span> <span class="token keyword">then</span>   <span class="token comment">-- 可选</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">else</span>   <span class="token comment">-- 可选</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  <strong>在if条件判断的结构中，else if 结构可以有多个，也可以没有。 else结构可以有，也可以没有。</strong></p><p>  例：</p><p>     根据定义的分数score变量，判定当前分数对应的分数等级：</p><p>      score &gt;= 85分，等级为优秀。</p><p>      score &gt;= 60分 且 score &lt; 85分，等级为及格。</p><p>      score &lt; 60分，等级为不及格。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">procedure</span> p3<span class="token punctuation">(</span><span class="token punctuation">)</span>	

<span class="token keyword">begin</span>

   <span class="token keyword">declare</span> score <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">58</span><span class="token punctuation">;</span>
   
   <span class="token keyword">declare</span> result <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   <span class="token keyword">if</span> score <span class="token operator">&gt;=</span> <span class="token number">85</span> <span class="token keyword">then</span>
   
		<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;优秀&#39;</span><span class="token punctuation">;</span>

   <span class="token keyword">elseif</span> score <span class="token operator">&gt;=</span> <span class="token number">60</span> <span class="token keyword">then</span>

		<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;及格&#39;</span><span class="token punctuation">;</span>

   <span class="token keyword">else</span>

		<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;不及格&#39;</span><span class="token punctuation">;</span>

   <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>

   <span class="token keyword">select</span> result<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p3<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>参数的类型，主要分为以下三种：in、out、inout。 具体的含义如下：</p><table><thead><tr><th>类型</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>in</td><td>该类参数作为输入，也就是需要调用时传入值</td><td>默认</td></tr><tr><td>out      </td><td>该类参数作为输出，即，该参数可以作为返回值         </td><td></td></tr><tr><td>inout                     </td><td>既可以作为输入参数，也可以作为输出参数                  </td><td></td></tr></tbody></table><p>用法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">procedure</span> 存储过程名称 <span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token operator">in</span><span class="token operator">/</span><span class="token keyword">out</span><span class="token operator">/</span><span class="token keyword">inout</span> 参数名 参数类型 <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

 <span class="token comment">-- SQL语句</span>
 
<span class="token keyword">end</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 例：</p><p>    根据传入参数score，判定当前分数对应的分数等级，并返回。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">procedure</span> p4<span class="token punctuation">(</span><span class="token operator">in</span> score <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">out</span> result <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">if</span> score <span class="token operator">&gt;=</span> <span class="token number">85</span> <span class="token keyword">then</span>

		<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;优秀&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">elseif</span> score <span class="token operator">&gt;=</span> <span class="token number">60</span> <span class="token keyword">then</span>

		<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;及格&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">else</span>

		<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;不及格&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token comment">-- 定义用户变量 @result来接收返回的数据, 用户变量可以不用声明</span>

<span class="token keyword">call</span> p4<span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token variable">@result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token variable">@result</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h3><p>  语法1：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 含义： 当case_value的值为value1时，执行statement_list1，当值为value2时，执statement_list2， </span>

<span class="token comment">-- 否则就执行 statement_list</span>

<span class="token keyword">case</span> case_value

<span class="token keyword">when</span> value1 <span class="token keyword">then</span> statement_list1

<span class="token punctuation">[</span> <span class="token keyword">when</span> value2 <span class="token keyword">then</span> statement_list2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token punctuation">[</span> <span class="token keyword">else</span> statement_list <span class="token punctuation">]</span>

<span class="token keyword">end</span> <span class="token keyword">case</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  语法2：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 含义： 当条件condition1成立时，执行statement_list1，当条件condition2成立时，执行statement_list2， </span>

<span class="token comment">-- 否则就执行 statement_list</span>

<span class="token keyword">case</span>

<span class="token keyword">when</span> condition1 <span class="token keyword">then</span> statement_list1

<span class="token punctuation">[</span><span class="token keyword">when</span> condition2 <span class="token keyword">then</span> statement_list2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token punctuation">[</span><span class="token keyword">else</span> statement_list<span class="token punctuation">]</span>

<span class="token keyword">end</span> <span class="token keyword">case</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：</p><p>   根据传入的月份，判定月份所属的季节</p><p>   1-3月份，为第一季度</p><p>   4-6月份，为第二季度</p><p>   7-9月份，为第三季度</p><p>   10-12月份，为第四季度</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">procedure</span> p6<span class="token punctuation">(</span><span class="token operator">in</span> <span class="token keyword">month</span> <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> result <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">case</span>

		<span class="token keyword">when</span> <span class="token keyword">month</span> <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">and</span> <span class="token keyword">month</span> <span class="token operator">&lt;=</span> <span class="token number">3</span> <span class="token keyword">then</span>

			<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;第一季度&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">when</span> <span class="token keyword">month</span> <span class="token operator">&gt;=</span> <span class="token number">4</span> <span class="token operator">and</span> <span class="token keyword">month</span> <span class="token operator">&lt;=</span> <span class="token number">6</span> <span class="token keyword">then</span>

			<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;第二季度&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">when</span> <span class="token keyword">month</span> <span class="token operator">&gt;=</span> <span class="token number">7</span> <span class="token operator">and</span> <span class="token keyword">month</span> <span class="token operator">&lt;=</span> <span class="token number">9</span> <span class="token keyword">then</span>

			<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;第三季度&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">when</span> <span class="token keyword">month</span> <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">and</span> <span class="token keyword">month</span> <span class="token operator">&lt;=</span> <span class="token number">12</span> <span class="token keyword">then</span>

			<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;第四季度&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">else</span>

			<span class="token keyword">set</span> result :<span class="token operator">=</span> <span class="token string">&#39;非法参数&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">end</span> <span class="token keyword">case</span> <span class="token punctuation">;</span>

	<span class="token keyword">select</span> concat<span class="token punctuation">(</span><span class="token string">&#39;您输入的月份为: &#39;</span><span class="token punctuation">,</span><span class="token keyword">month</span><span class="token punctuation">,</span> <span class="token string">&#39;, 所属的季度为: &#39;</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p6<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  注意：<strong>如果判定条件有多个，多个条件之间，可以使用 and 或 or 进行连接。</strong></p><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><p>while 循环是有条件的循环控制语句。满足条件后，再执行循环体中的SQL语句。</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 先判定条件，如果条件为true，则执行逻辑，否则，不执行逻辑</span>

<span class="token keyword">while</span> 条件 <span class="token keyword">do</span>

 <span class="token keyword">SQL</span>逻辑<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：</p><p>    计算从1累加到n的值，n为传入的参数值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- A. 定义局部变量, 记录累加之后的值;</span>

<span class="token comment">-- B. 每循环一次, 就会对n进行减1 , 如果n减到0, 则退出循环</span>

<span class="token keyword">create</span> <span class="token keyword">procedure</span> p7<span class="token punctuation">(</span><span class="token operator">in</span> n <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> total <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> n<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token keyword">do</span>

		<span class="token keyword">set</span> total :<span class="token operator">=</span> total <span class="token operator">+</span> n<span class="token punctuation">;</span>

		<span class="token keyword">set</span> n :<span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>

	<span class="token keyword">select</span> total<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p7<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h3><p>repeat是有条件的循环控制语句, 当满足until声明的条件的时候，则退出循环。</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 先执行一次逻辑，然后判定until条件是否满足，如果满足，则退出。如果不满足，则继续下一次循环。</span>

<span class="token keyword">repeat</span>

<span class="token keyword">SQL</span>逻辑<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

until 条件

<span class="token keyword">end</span> <span class="token keyword">repeat</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：</p><p>  计算从1累加到n的值，n为传入的参数值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- A. 定义局部变量, 记录累加之后的值;</span>

<span class="token comment">-- B. 每循环一次, 就会对n进行-1 , 如果n减到0, 则退出循环</span>

<span class="token keyword">create</span> <span class="token keyword">procedure</span> p8<span class="token punctuation">(</span><span class="token operator">in</span> n <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> total <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">repeat</span>

		<span class="token keyword">set</span> total :<span class="token operator">=</span> total <span class="token operator">+</span> n<span class="token punctuation">;</span>

		<span class="token keyword">set</span> n :<span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		until n <span class="token operator">&lt;=</span> <span class="token number">0</span>

	<span class="token keyword">end</span> <span class="token keyword">repeat</span><span class="token punctuation">;</span>

	<span class="token keyword">select</span> total<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p8<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p8<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loop" tabindex="-1"><a class="header-anchor" href="#loop" aria-hidden="true">#</a> loop</h3><p>loop实现简单的循环，如果不在SQL逻辑中增加退出循环的条件，可以用其来实现简单的死循环。</p><p>loop可以配合以下两个语句使用：</p><p>   leave：配合循环使用，退出循环。</p><p>   iterate：必须用在循环中，作用是跳过当前循环剩下的语句，直接进入下一次循环。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>begin_label:<span class="token punctuation">]</span> <span class="token keyword">loop</span>

  <span class="token keyword">SQL</span>逻辑<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">end</span> <span class="token keyword">loop</span> <span class="token punctuation">[</span>end_label<span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token keyword">leave</span> label<span class="token punctuation">;</span> <span class="token comment">-- 退出指定标记的循环体</span>

<span class="token keyword">iterate</span> label<span class="token punctuation">;</span> <span class="token comment">-- 直接进入下一次循环</span>

<span class="token comment">-- 语法中出现的 begin_label，end_label，label 指的都是自定义的标记。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  例1：</p><p>    计算从1累加到n的值，n为传入的参数值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- A. 定义局部变量, 记录累加之后的值;</span>

<span class="token comment">-- B. 每循环一次, 就会对n进行-1 , 如果n减到0, 则退出循环 ----&gt; leave xx</span>

<span class="token keyword">create</span> <span class="token keyword">procedure</span> p9<span class="token punctuation">(</span><span class="token operator">in</span> n <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> total <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

	sum:<span class="token keyword">loop</span>

		<span class="token keyword">if</span> n<span class="token operator">&lt;=</span><span class="token number">0</span> <span class="token keyword">then</span>

			<span class="token keyword">leave</span> sum<span class="token punctuation">;</span>

		<span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>

	<span class="token keyword">set</span> total :<span class="token operator">=</span> total <span class="token operator">+</span> n<span class="token punctuation">;</span>

	<span class="token keyword">set</span> n :<span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">end</span> <span class="token keyword">loop</span> sum<span class="token punctuation">;</span>

	<span class="token keyword">select</span> total<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p9<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> 例2：</p><p>   计算从1到n之间的偶数累加的值，n为传入的参数值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- A. 定义局部变量, 记录累加之后的值;</span>

<span class="token comment">-- B. 每循环一次, 就会对n进行-1 , 如果n减到0, 则退出循环 ----&gt; leave xx</span>

<span class="token comment">-- C. 如果当次累加的数据是奇数, 则直接进入下一次循环. --------&gt; iterate xx</span>

<span class="token keyword">create</span> <span class="token keyword">procedure</span> p10<span class="token punctuation">(</span><span class="token operator">in</span> n <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> total <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

	sum:<span class="token keyword">loop</span>

		<span class="token keyword">if</span> n<span class="token operator">&lt;=</span><span class="token number">0</span> <span class="token keyword">then</span>

			<span class="token keyword">leave</span> sum<span class="token punctuation">;</span>

		<span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> n<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">then</span>

			<span class="token keyword">set</span> n :<span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

			<span class="token keyword">iterate</span> sum<span class="token punctuation">;</span>

		<span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>

		<span class="token keyword">set</span> total :<span class="token operator">=</span> total <span class="token operator">+</span> n<span class="token punctuation">;</span>

		<span class="token keyword">set</span> n :<span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token keyword">end</span> <span class="token keyword">loop</span> sum<span class="token punctuation">;</span>

	<span class="token keyword">select</span> total<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p10<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="游标" tabindex="-1"><a class="header-anchor" href="#游标" aria-hidden="true">#</a> 游标</h3><p><strong>游标(cursor)是用来存储查询结果集的数据类型 , 在存储过程和函数中可以使用游标对结果集进行循环的处理。</strong></p><p>游标的使用包括游标的声明、open、fetch和 close，其语法分别如下：</p><p>​ 1.声明游标</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">declare</span> 游标名称 <span class="token keyword">cursor</span> <span class="token keyword">for</span> 查询语句 <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.打开游标</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">open</span> 游标名称 <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 3.获取游标中存储的记录</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">fetch</span> 游标名称 <span class="token keyword">into</span> 变量 <span class="token punctuation">[</span><span class="token punctuation">,</span> 变量 <span class="token punctuation">]</span> <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 4.关闭游标</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">close</span> 游标名称 <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例：</p><p>  根据传入的参数uage，来查询用户表tb_user中，所有的用户年龄小于等于uage的用户姓名(name)和专业(profession)，</p><p>  并将用户的姓名和专业插入到所创建的一张新表 (id,name,profession)中。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 逻辑:</span>

<span class="token comment">-- A. 声明游标, 存储查询结果集</span>

<span class="token comment">-- B. 准备: 创建表结构</span>

<span class="token comment">-- C. 开启游标</span>

<span class="token comment">-- D. 获取游标中的记录</span>

<span class="token comment">-- E. 插入数据到新表中</span>

<span class="token comment">-- F. 关闭游标</span>

<span class="token keyword">create</span> <span class="token keyword">procedure</span> p11<span class="token punctuation">(</span><span class="token operator">in</span> uage <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> uname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">declare</span> upro <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">declare</span> u_cursor <span class="token keyword">cursor</span> <span class="token keyword">for</span> <span class="token keyword">select</span> name<span class="token punctuation">,</span>profession <span class="token keyword">from</span> tb_user <span class="token keyword">where</span> age <span class="token operator">&lt;=</span>uage<span class="token punctuation">;</span>

	<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> tb_user_pro<span class="token punctuation">;</span>

	<span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> tb_user_pro<span class="token punctuation">(</span>
    
		id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    
		name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    profession <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    
	<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">open</span> u_cursor<span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token boolean">true</span> <span class="token keyword">do</span>

		<span class="token keyword">fetch</span> u_cursor <span class="token keyword">into</span> uname<span class="token punctuation">,</span>upro<span class="token punctuation">;</span>

		<span class="token keyword">insert</span> <span class="token keyword">into</span> tb_user_pro <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span> uname<span class="token punctuation">,</span> upro<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>

	<span class="token keyword">close</span> u_cursor<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> p11<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  问题：上述的存储过程，最终在调用的过程中，会报错，之所以报错是因为上面的while循环中，并没有退出条件。</p><p>              当游标的数据集获取完毕之后，再次获取数据，就会报错，从而终止了程序的执行。</p><p>              要想解决这个问题，就需要通过MySQL中提供的 条件处理程序 Handler 来解决</p><h3 id="条件处理程序" tabindex="-1"><a class="header-anchor" href="#条件处理程序" aria-hidden="true">#</a> 条件处理程序</h3><p><strong>条件处理程序（Handler）可以用来定义在流程控制结构执行过程中遇到问题时相应的处理步骤。</strong></p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">declare</span> handler_action <span class="token keyword">handler</span> <span class="token keyword">for</span> condition_value <span class="token punctuation">[</span><span class="token punctuation">,</span> condition_value<span class="token punctuation">]</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> statement <span class="token punctuation">;</span>

<span class="token comment">/*
handler_action 的取值:

	continue: 继续执行当前程序
	
	exit: 终止执行当前程序
	
condition_value 的取值:

	SQLSTATE sqlstate_value: 状态码，如 02000

	SQLWARNING: 所有以01开头的SQLSTATE代码的简写

	NOT FOUND: 所有以02开头的SQLSTATE代码的简写

	SQLEXCEPTION: 所有没有被SQLWARNING 或 NOT FOUND捕获的SQLSTATE代码的简写
	
*/</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：</p><p>  解决上一小节案例中提到的问题。</p><p>  1.通过SQLSTATE指定具体的状态码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 声明条件处理程序:当SQL语句执行抛出的状态码为02000时，将关闭游标u_cursor，并退出</span>

<span class="token keyword">declare</span> <span class="token keyword">exit</span> <span class="token keyword">handler</span> <span class="token keyword">for</span> SQLSTATE <span class="token string">&#39;02000&#39;</span> 
 
<span class="token keyword">close</span> u_cursor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  2.通过SQLSTATE的代码简写方式，02 开头的状态码，代码简写为 not found</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 声明条件处理程序： 当SQL语句执行抛出的状态码为02开头时，将关闭游标u_cursor，并退出</span>

<span class="token keyword">declare</span> <span class="token keyword">exit</span> <span class="token keyword">handler</span> <span class="token keyword">for</span> <span class="token operator">not</span> found <span class="token keyword">close</span> u_cursor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  具体的错误状态码，可以参考官方文档：</p>`,176),u={href:"https://dev.mysql.com/doc/refman/8.0/en/declare-handler.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="存储函数" tabindex="-1"><a class="header-anchor" href="#存储函数" aria-hidden="true">#</a> 存储函数</h2><p><strong>存储函数是有返回值的存储过程，存储函数的参数只能是IN类型的。</strong></p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">function</span> 存储函数名称 <span class="token punctuation">(</span><span class="token punctuation">[</span> 参数列表 <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">returns</span> <span class="token keyword">type</span> <span class="token punctuation">[</span>characteristic <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>

<span class="token keyword">begin</span>

  <span class="token comment">-- SQL语句</span>

<span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token keyword">end</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  1.在create function子句之后指定存储函数的名称。</p><p>  2.列出括号内存储函数的所有参数。 默认情况下，所有参数均为IN参数。不能为参数指定IN，OUT或INOUT修饰符。</p><p>  3.必须在returns语句中指定返回值的数据类型。它可以是任何有效的MySQL数据类型。</p><p>  4.对于相同的输入参数，如果存储函数返回相同的结果，这样则被认为是确定性的，否则存储函数不是确定性的。</p><p>    必须决定一个存储函数是否是确定性的。 如果声明不正确，则存储的函数可能会产生意想不到的结果，或者不使用</p><p>     可用的优化，从而降低性能。</p><p>  5.将代码写入存储函数的主体中。 它可以是单个语句或复合语句。</p><p>      在主体部分中，必须至少指定一个return语句。return语句用于返回一个值给调用者。</p><p>      每当到达return语句时，存储的函数的执行将立即终止。</p><p><strong>characteristic说明：</strong></p><p>   deterministic：相同的输入参数总是产生相同的结果</p><p>   no sql ：不包含 SQL 语句。</p><p>   reads SQL data：包含读取数据的语句，但不包含写入数据的语句</p><p>例：</p><p>   计算从1累加到n的值，n为传入的参数值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">function</span> fun1<span class="token punctuation">(</span>n <span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token keyword">returns</span> <span class="token keyword">int</span> <span class="token keyword">deterministic</span>

<span class="token keyword">begin</span>

	<span class="token keyword">declare</span> total <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> n<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token keyword">do</span>

		<span class="token keyword">set</span> total :<span class="token operator">=</span> total <span class="token operator">+</span> n<span class="token punctuation">;</span>

		<span class="token keyword">set</span> n :<span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> total<span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> fun1<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存储过程和存储函数的区别" tabindex="-1"><a class="header-anchor" href="#存储过程和存储函数的区别" aria-hidden="true">#</a> 存储过程和存储函数的区别</h2><h4 id="_1-总述" tabindex="-1"><a class="header-anchor" href="#_1-总述" aria-hidden="true">#</a> <strong>1.总述</strong></h4><p>  存储过程和存储函数统称为存储例程。两者的语法很相似，但却是不同的内容。</p><p>  存储函数限制比较多，比如不能用临时表，只能用表变量。还有一些函数都不可用等等。</p><p>  而存储过程的限制就相对比较少，要实现的功能比较复杂一些。</p><h4 id="_2-返回值上的不同" tabindex="-1"><a class="header-anchor" href="#_2-返回值上的不同" aria-hidden="true">#</a> <strong>2.返回值上的不同</strong></h4><p>  存储函数将向调用者返回一个且仅有一个结果值。</p><p>  存储过程将返回一个或多个结果集（函数做不到这一点），或者只是来实现某种效果或动作而无需返回结果。</p><h4 id="_3-调用方式的不同" tabindex="-1"><a class="header-anchor" href="#_3-调用方式的不同" aria-hidden="true">#</a> <strong>3.调用方式的不同</strong></h4><p>  存储函数嵌入在sql中使用的，可以在select中调用，就像内置函数一样，比如cos()、sin()。</p><h4 id="_4-参数的不同" tabindex="-1"><a class="header-anchor" href="#_4-参数的不同" aria-hidden="true">#</a> <strong>4.参数的不同</strong></h4><p>  存储函数的参数类型类似于IN参数</p><p>  存储过程的参数类型有三种：IN参数、OUT参数、INOUT参数</p><p>  存储过程是用户定义的一系列sql语句的集合，设计特定表或其它对象的任务，用户可以调用存储过程。</p><p>     而函数通常是数据库已定义的方法，它接收参数并返回某种类型的值并且不涉及特定用户表。</p>`,35);function m(b,w){const a=l("ExternalLinkIcon");return i(),o("div",null,[c(" permalink: /MySQL/基础语法/视图和存储过程  "),r,n("p",null,[s("    "),n("a",u,[s("https://dev.mysql.com/doc/refman/8.0/en/declare-handler.html"),e(a)])]),n("p",null,[s("    "),n("a",k,[s("https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html"),e(a)])]),v])}const g=t(d,[["render",m],["__file","60.视图和存储过程.html.vue"]]);export{g as default};
