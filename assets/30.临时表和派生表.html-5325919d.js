import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as n,a as p}from"./app-a89b456a.js";const t={},d=p(`<h2 id="临时表-temporary-table" tabindex="-1"><a class="header-anchor" href="#临时表-temporary-table" aria-hidden="true">#</a> 临时表(temporary table)</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>在MySQL中，临时表是一种特殊类型的表，它允许我们存储一个临时结果集，可以在单个会话中多次重用。</p><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><p>1.当会话结束或连接终止时，MySQL会自动删除临时表。当不再使用临时表时，也可以使用drop table语句来显式删除。</p><p>2.一个临时表只能由创建它的客户机访问。不同的客户端可以创建具有相同名称的临时表，而不会导致错误，因为只有创建临时表的客户端才能看到它。但是，<strong>在同一个会话中，两个临时表不能重名。</strong></p><p>3.<strong>临时表可以与数据库中的普通表具有相同的名称。</strong></p><p>   例：如果在数据库中创建一个名为<code>employees</code>的临时表，则现有的<code>employees</code>表将变得无法访问。</p><p>           对<code>employees</code>表发出的每个查询都会指向<code>employees</code>临时表。 当删除临时表时，永久表可以再次访问。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>1.创建临时表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">temporary</span> <span class="token keyword">table</span> 临时表名称

<span class="token keyword">select</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token punctuation">;</span>         <span class="token comment">-- select语句查询出的数据存放到临时表中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.删除临时表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">temporary</span> <span class="token keyword">table</span> 临时表名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="派生表-derived-table" tabindex="-1"><a class="header-anchor" href="#派生表-derived-table" aria-hidden="true">#</a> 派生表(derived table)</h2><p>派生表是从select语句返回的虚拟表。派生表类似于临时表，但派生表更简单，因为它不需要创建临时表的步骤。</p><p>派生表和子查询通常互换使用。当select语句的from子句中使用独立子查询时，就可以成为派生表。</p><p>注意：独立子查询是一个子查询，可独立于包含该语句的执行语句。</p><p>​ 与子查询不同，派生表必须具有别名，以便稍后在查询中引用其名称。 如果派生表没有别名，MySQL将发出以下错误：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>Every derived <span class="token keyword">table</span> must have its own alias<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><p>派生表 和 临时表 在数据库中都是用于处理临时数据的概念，但它们在定义、作用范围和使用方式上有以下区别：</p><p>1.定义和语法</p><p>   派生表是通过在查询语句内联视图的方式来创建的表，在FROM子句中直接使用 SELECT 语句定义。</p><p>   临时表是在数据库中显式地创建的一个临时表结构，可以通过CREATE TABLE语句来定义。</p><p>2.数据存储和作用范围</p><p>   派生表不会在数据库中存储，它仅仅在查询执行期间存在，作为查询结果的一部分。</p><p>   临时表在数据库内有真正的存储空间，可以在多个查询之间共享，也可以在当前数据库会话（session）中使用。</p><p>3.数据处理</p><p>   派生表是根据查询的要求在执行查询时动态创建的，它通常用于处理复杂的查询、嵌套查询和多次引用的情况。</p><p>   临时表是在需要时显式创建的，可以像常规表一样进行插入、更新和删除操作。</p><p>4.生命周期</p><p>   派生表的生命周期仅限于查询执行期间，一旦查询结束，派生表就不再存在。</p><p>   临时表的生命周期可以通过显式删除表或当前会话结束来结束。</p><p>总结：<strong>派生表是在查询中动态生成的临时表，仅在查询执行期间存在，不存储数据。</strong></p><p>           <strong>临时表是显式创建的临时表结构，可以存储数据，并在当前会话中持续存在。</strong></p>`,36);function r(o,l){return a(),s("div",null,[n(" permalink: /MySQL/基础语法/临时表和派生表  "),d])}const u=e(t,[["render",r],["__file","30.临时表和派生表.html.vue"]]);export{u as default};
