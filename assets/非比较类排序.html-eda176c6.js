const t=JSON.parse('{"key":"v-32b2205c","path":"/posts/interview/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E9%9D%9E%E6%AF%94%E8%BE%83%E7%B1%BB%E6%8E%92%E5%BA%8F.html","title":"非比较类排序","lang":"zh-CN","frontmatter":{"title":"非比较类排序","author":{"name":"北斗星司"},"category":["面试"],"tag":["数据结构"],"date":"2023-09-23T15:08:32.000Z","icon":"file","description":"基数排序 需要r个列表作为辅助存储空间 r为基数 元素移动次数与初始次序无关. 思想： 对元素中的每一位数字进行排序，从最低位开始排序，复杂度为 O(n×k)，n 为数组长度，k 为数组中元素的最大的位数。 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。 有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前， 高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。","head":[["meta",{"property":"og:url","content":"https://mtgd106.github.io/posts/interview/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E9%9D%9E%E6%AF%94%E8%BE%83%E7%B1%BB%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"北斗星司"}],["meta",{"property":"og:title","content":"非比较类排序"}],["meta",{"property":"og:description","content":"基数排序 需要r个列表作为辅助存储空间 r为基数 元素移动次数与初始次序无关. 思想： 对元素中的每一位数字进行排序，从最低位开始排序，复杂度为 O(n×k)，n 为数组长度，k 为数组中元素的最大的位数。 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。 有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前， 高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mtgd106.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"非比较类排序"}],["meta",{"property":"article:author","content":"北斗星司"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:published_time","content":"2023-09-23T15:08:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"非比较类排序\\",\\"image\\":[\\"https://mtgd106.github.io/\\"],\\"datePublished\\":\\"2023-09-23T15:08:32.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"北斗星司\\"}]}"]]},"headers":[{"level":2,"title":"基数排序","slug":"基数排序","link":"#基数排序","children":[]},{"level":2,"title":"计数排序","slug":"计数排序","link":"#计数排序","children":[]},{"level":2,"title":"桶排序","slug":"桶排序","link":"#桶排序","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.77,"words":1754},"filePathRelative":"posts/interview/数据结构/非比较类排序.md","localizedDate":"2023年9月23日","excerpt":"<!-- permalink: /面试/数据结构/    -->\\n<h2> 基数排序</h2>\\n<ol>\\n<li>\\n<p>需要r个列表作为辅助存储空间  r为基数</p>\\n</li>\\n<li>\\n<p>元素移动次数与初始次序无关.</p>\\n</li>\\n</ol>\\n<p>思想：</p>\\n<ol>\\n<li>\\n<p>对元素中的每一位数字进行排序，从最低位开始排序，复杂度为 <code>O(n×k)</code>，<code>n</code> 为数组长度，<code>k</code> 为数组中元素的最大的位数。</p>\\n</li>\\n<li>\\n<p>基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。</p>\\n</li>\\n<li>\\n<p>有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，</p>\\n<p>高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。</p>\\n</li>\\n</ol>","copyright":{"author":"北斗星司"},"autoDesc":true}');export{t as data};
