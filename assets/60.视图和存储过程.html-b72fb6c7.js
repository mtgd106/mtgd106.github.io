const e=JSON.parse('{"key":"v-5809a266","path":"/posts/note/MySQL/%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95/60.%E8%A7%86%E5%9B%BE%E5%92%8C%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html","title":"视图和存储过程","lang":"zh-CN","frontmatter":{"title":"视图和存储过程","author":{"name":"北斗星司"},"category":["数据库"],"tag":["MySQL"],"date":"2023-09-20T10:20:09.000Z","icon":"file","description":"视图 概述 &nbsp;&nbsp;视图(View)是一种虚拟存在的表。视图中的数据并不在数据库中实际存在，行和列数据来自定义视图的语句中使用的表，并且是在使用视图时动态生成的。 &nbsp;&nbsp;视图只保存了查询的SQL逻辑，不保存查询结果。所以在创建视图的时候，主要的工作就是创建这条SQL查询语句。 语法 ​ 1.创建 create [or replace] view 视图名称[(列名列表)] as select语句 [ with [ cascaded | local ] check option ]","head":[["meta",{"property":"og:url","content":"https://mtgd106.github.io/posts/note/MySQL/%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95/60.%E8%A7%86%E5%9B%BE%E5%92%8C%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"北斗星司"}],["meta",{"property":"og:title","content":"视图和存储过程"}],["meta",{"property":"og:description","content":"视图 概述 &nbsp;&nbsp;视图(View)是一种虚拟存在的表。视图中的数据并不在数据库中实际存在，行和列数据来自定义视图的语句中使用的表，并且是在使用视图时动态生成的。 &nbsp;&nbsp;视图只保存了查询的SQL逻辑，不保存查询结果。所以在创建视图的时候，主要的工作就是创建这条SQL查询语句。 语法 ​ 1.创建 create [or replace] view 视图名称[(列名列表)] as select语句 [ with [ cascaded | local ] check option ]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-06T06:59:59.000Z"}],["meta",{"property":"article:author","content":"北斗星司"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-09-20T10:20:09.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-06T06:59:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"视图和存储过程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-20T10:20:09.000Z\\",\\"dateModified\\":\\"2023-11-06T06:59:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"北斗星司\\"}]}"]]},"headers":[{"level":2,"title":"视图","slug":"视图","link":"#视图","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"检查选项","slug":"检查选项","link":"#检查选项","children":[]},{"level":3,"title":"视图的更新","slug":"视图的更新","link":"#视图的更新","children":[]},{"level":3,"title":"视图作用","slug":"视图作用","link":"#视图作用","children":[]}]},{"level":2,"title":"存储过程","slug":"存储过程","link":"#存储过程","children":[{"level":3,"title":"概述","slug":"概述-1","link":"#概述-1","children":[]},{"level":3,"title":"语法","slug":"语法-1","link":"#语法-1","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"if","slug":"if","link":"#if","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"case","slug":"case","link":"#case","children":[]},{"level":3,"title":"while","slug":"while","link":"#while","children":[]},{"level":3,"title":"repeat","slug":"repeat","link":"#repeat","children":[]},{"level":3,"title":"loop","slug":"loop","link":"#loop","children":[]},{"level":3,"title":"游标","slug":"游标","link":"#游标","children":[]},{"level":3,"title":"条件处理程序","slug":"条件处理程序","link":"#条件处理程序","children":[]}]},{"level":2,"title":"存储函数","slug":"存储函数","link":"#存储函数","children":[]},{"level":2,"title":"存储过程和存储函数的区别","slug":"存储过程和存储函数的区别","link":"#存储过程和存储函数的区别","children":[]}],"git":{"createdTime":1699253999000,"updatedTime":1699253999000,"contributors":[{"name":"mtgd106","email":"1487722388@qq.com","commits":1}]},"readingTime":{"minutes":25.22,"words":5043},"filePathRelative":"posts/note/MySQL/基础语法/60.视图和存储过程.md","localizedDate":"2023年9月20日","excerpt":"<!-- permalink: /MySQL/基础语法/视图和存储过程  -->\\n<h2> 视图</h2>\\n<h3> 概述</h3>\\n<p>&nbsp;&nbsp;视图(View)是一种虚拟存在的表。视图中的数据并不在数据库中实际存在，行和列数据来自定义视图的语句中使用的表，并且是在使用视图时动态生成的。</p>\\n<p>&nbsp;&nbsp;<strong>视图只保存了查询的SQL逻辑，不保存查询结果。所以在创建视图的时候，主要的工作就是创建这条SQL查询语句。</strong></p>\\n<h3> 语法</h3>\\n<p>​    1.创建</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">create</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">or</span> <span class=\\"token keyword\\">replace</span><span class=\\"token punctuation\\">]</span> <span class=\\"token keyword\\">view</span> 视图名称<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">(</span>列名列表<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span> <span class=\\"token keyword\\">as</span> <span class=\\"token keyword\\">select</span>语句 <span class=\\"token punctuation\\">[</span> <span class=\\"token keyword\\">with</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token keyword\\">cascaded</span> <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">local</span> <span class=\\"token punctuation\\">]</span> <span class=\\"token keyword\\">check</span> <span class=\\"token keyword\\">option</span> <span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"北斗星司"},"autoDesc":true}');export{e as data};
