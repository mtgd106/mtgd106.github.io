import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p,a as t}from"./app-a89b456a.js";const e="/assets/基数排序-da2ba349.gif",o="/assets/计数排序-ddd48392.gif",c="/assets/桶排序-f2caee15.gif",i="/assets/image-20230721092254292-459d16ba.png",l={},u=t('<h2 id="基数排序" tabindex="-1"><a class="header-anchor" href="#基数排序" aria-hidden="true">#</a> 基数排序</h2><ol><li><p>需要r个列表作为辅助存储空间 r为基数</p></li><li><p>元素移动次数与初始次序无关.</p></li></ol><p>思想：</p><ol><li><p>对元素中的每一位数字进行排序，从最低位开始排序，复杂度为 <code>O(n×k)</code>，<code>n</code> 为数组长度，<code>k</code> 为数组中元素的最大的位数。</p></li><li><p>基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。</p></li><li><p>有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，</p><p>高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。</p></li></ol><p>步骤：</p><p>​  1.取得数组中的最大数，并取得位数，即为迭代次数 <code>N</code>（例如：数组中最大数值为 1000，则 <code>N=4</code>）；</p><p>​  2.<code>A</code> 为原始数组，从最低位开始取每个位组成 <code>radix</code> 数组；</p><p>​  3.对 <code>radix</code> 进行计数排序（利用计数排序适用于小范围数的特点）；</p><p>​  4.将 <code>radix</code> 依次赋值给原数组；</p><p>​  5.重复 2~4 步骤 <code>N</code> 次</p><p>​ <img src="'+e+`" style="zoom:70%;"></p><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">radixSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>    
  <span class="token punctuation">}</span>
    
  <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
  <span class="token keyword">int</span> maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">//找到最大值</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> element <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">&gt;</span> maxValue<span class="token punctuation">)</span> 
            
      maxValue <span class="token operator">=</span> element<span class="token punctuation">;</span>                
  <span class="token punctuation">}</span>
  
  <span class="token comment">//确定最大值的位数</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>maxValue <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    maxValue <span class="token operator">=</span> maxValue <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        
    <span class="token class-name">N</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>    
  <span class="token punctuation">}</span>
  
  <span class="token comment">//一共进行N次排序</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> radix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//准备10个桶</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      radix<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
    
    <span class="token comment">//求出元素相应位上的值，然后放入桶中。第一轮求出个位上的值，第二轮求出十位上的值，以此类推。</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> element <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      <span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token punctuation">(</span>element <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            
      radix<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
        
    <span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">//将桶中的元素按顺序取出，然后重新放在数组中</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">:</span> radix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                
        arr<span class="token punctuation">[</span>idx<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>            
      <span class="token punctuation">}</span>              
    <span class="token punctuation">}</span>    
  <span class="token punctuation">}</span>
    
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计数排序" tabindex="-1"><a class="header-anchor" href="#计数排序" aria-hidden="true">#</a> 计数排序</h2><p>特点：</p><p>​  核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。</p><p>​  作为一种线性时间复杂度的排序，<strong>计数排序要求输入的数据必须是有确定范围的整数</strong>。</p><p>​  计数排序 (Counting sort) 是一种稳定的排序算法。计数排序使用一个额外的数组 <code>C</code>，其中第 <code>i</code> 个元素是待排序数组</p><p>​   <code>A</code> 中值等于 <code>i</code> 的元素的个数。然后根据数组 <code>C</code> 来将 <code>A</code> 中的元素排到正确的位置。<strong>它只能对整数进行排序</strong>。</p><p>步骤：</p><ol><li><p>找出数组中的最大值 <code>max</code>、最小值 <code>min</code>；</p></li><li><p>创建一个新数组 <code>C</code>，其长度是 <code>max-min+1</code>，其元素默认值都为 0；</p></li><li><p>遍历原数组 A中的元素 <code>A[i]</code>，以 <code>A[i]-min</code> 作为C数组的索引，以 <code>A[i]</code> 的值在 <code>A</code> 中出现的次数作为 <code>C[A[i]-min]</code> 的值；</p></li><li><p>对 <code>C</code> 数组变形，<strong>新元素的值是该元素与前一个元素值的和</strong>，即当 <code>i&gt;=1</code> 时 <code>C[i] = C[i] + C[i-1]</code>；</p></li><li><p>创建结果数组 <code>R</code>，长度和原始数组一样。</p></li><li><p><strong>从后向前</strong>遍历原始数组 <code>A</code> 中的元素 <code>A[i]</code>，使用 <code>A[i]</code> 减去最小值 <code>min</code> 作为索引，在计数数组 <code>C</code> 中找到</p><p>对应的值 <code>C[A[i]-min]</code>，<code>C[A[i]-min]-1</code> 就是 <code>A[i]</code> 在结果数组 <code>R</code> 中的位置，做完上述这些操作，</p><p>将 <code>C[A[i]-min]</code> 减小 1。</p></li></ol><p>​ <img src="`+o+`" style="zoom:65%;"></p><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getMinAndMax</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">int</span> maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
  <span class="token keyword">int</span> minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>    
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> minValue<span class="token punctuation">,</span> maxValue <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">countingSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>    
  <span class="token punctuation">}</span>
    
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> extremum <span class="token operator">=</span> <span class="token function">getMinAndMax</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">//获取数组中的最大值和最小值</span>
  <span class="token keyword">int</span> minValue <span class="token operator">=</span> extremum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
  <span class="token keyword">int</span> maxValue <span class="token operator">=</span> extremum<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">//创建新的数组</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> countArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>maxValue <span class="token operator">-</span> minValue <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">//将原数组中的值映射到新数组中，新数组中的值为原数组中各个元素出现的次数  </span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
        
    countArr<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minValue<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
  <span class="token comment">//改造countArr数组    </span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> countArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
        
    countArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> countArr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    
  
    
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">int</span> idx <span class="token operator">=</span> countArr<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minValue<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        
    result<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">//将个数减1，意味着如果还有相同的元素，则该元素的位置应该在此前的基础上向前移动一个位置</span>
    countArr<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minValue<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>    
  <span class="token punctuation">}</span>
    
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="桶排序" tabindex="-1"><a class="header-anchor" href="#桶排序" aria-hidden="true">#</a> 桶排序</h2><p>桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。</p><p>为了使桶排序更加高效，需要做到这两点：</p><ol><li><p>在额外空间充足的情况下，尽量增大桶的数量</p></li><li><p>使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中</p></li></ol><p><strong>工作原理：</strong></p><p>  假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以</p><p>  递归方式继续使用桶排序进行）。</p><p><strong>步骤：</strong></p><ol><li><p>设置一个 BucketSize，作为每个桶所能放置多少个不同数值；</p></li><li><p>遍历输入数据，并且把数据依次映射到对应的桶里去；</p></li><li><p>对每个非空的桶进行排序，可以使用其它排序方法，也可以递归使用桶排序；</p></li><li><p>从非空桶里把排好序的数据拼接起来</p></li></ol><p>​ <img src="`+c+`" style="zoom:100%;"></p><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getMinAndMax</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">int</span> maxValue <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token keyword">int</span> minValue <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      maxValue <span class="token operator">=</span> i<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> minValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      minValue <span class="token operator">=</span> i<span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>    
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> minValue<span class="token punctuation">,</span> maxValue <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Bucket Sort
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">bucketSort</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> bucket_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">||</span> bucket_size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> 
        
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
          
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> extremum <span class="token operator">=</span> <span class="token function">getMinAndMax</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">//获取数组中的最大值和最小值</span>
  <span class="token keyword">int</span> minValue <span class="token operator">=</span> extremum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
  <span class="token keyword">int</span> maxValue <span class="token operator">=</span> extremum<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">//计算桶的个数</span>
  <span class="token keyword">int</span> bucket_cnt <span class="token operator">=</span> <span class="token punctuation">(</span>maxValue <span class="token operator">-</span> minValue<span class="token punctuation">)</span> <span class="token operator">/</span> bucket_size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">//创建桶</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bucket_cnt<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
        
    buckets<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> element <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token comment">//计算元素应该放入到哪个桶中，元素值越大，idx就越大，就越会被放到编号大的桶中</span>
    <span class="token comment">//即，实现了编号大的桶中的元素大于编号小的桶中的元素</span>
    <span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token punctuation">(</span>element <span class="token operator">-</span> minValue<span class="token punctuation">)</span> <span class="token operator">/</span> bucket_size<span class="token punctuation">;</span>
        
    buckets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token punctuation">}</span>
    
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">if</span> <span class="token punctuation">(</span>buckets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      buckets<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">sort</span><span class="token punctuation">(</span>buckets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> bucket_size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>
    
  <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">//将桶中的元素按顺序取出</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> element <span class="token operator">:</span> bucket<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
      result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>    
  <span class="token punctuation">}</span>    
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',38);function k(r,d){return s(),a("div",null,[p(" permalink: /面试/数据结构/    "),u])}const b=n(l,[["render",k],["__file","非比较类排序.html.vue"]]);export{b as default};
