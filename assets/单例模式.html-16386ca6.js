import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-a89b456a.js";const p={},t=e(`<h2 id="单例模式的实现" tabindex="-1"><a class="header-anchor" href="#单例模式的实现" aria-hidden="true">#</a> 单例模式的实现</h2><h3 id="饿汉式-静态变量方式" tabindex="-1"><a class="header-anchor" href="#饿汉式-静态变量方式" aria-hidden="true">#</a> 饿汉式(静态变量方式)</h3><p>优点：写法比较简单，在类装载的时候就完成了实例化。不存在线程安全问题。</p><p>缺点：在类装载的时候就完成了实例化，没有达到Lazy Loading 的效果。</p><p>      如果从始至终从未使用过这个实例，会造成内存的浪费。</p><p>结论：这种方法可以使用，但可能会造成内存浪费。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton1</span> <span class="token punctuation">{</span>
    
    <span class="token comment">//1. 构造器私有化, 禁止外部进行new操作</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//2.本类内部创建对象实例</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Singleton1</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//3. 提供一个公有的静态方法，返回实例对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="饿汉式-静态代码块方式" tabindex="-1"><a class="header-anchor" href="#饿汉式-静态代码块方式" aria-hidden="true">#</a> 饿汉式(静态代码块方式)</h3><p><strong>优缺点和第一种一样</strong></p><p>只不过将类实例化的过程放在了静态代码块中，也是在类装载的时候，就执行静态代码块中的代码，初始化类的实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton2</span><span class="token punctuation">{</span>
    <span class="token comment">//1.构造器私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//2.创建一个成员变量</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Singleton2</span> instance<span class="token punctuation">;</span>
    
    <span class="token keyword">static</span><span class="token punctuation">{</span>
        instance<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Singleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//3.对外提供静态方法获取该对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h3><p>表示该类型的对象有限几个 如果我们可以限定一个，就成了单例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Singleton3</span> <span class="token punctuation">{</span>
    <span class="token constant">INSTANCE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒汉式-线程不安全" tabindex="-1"><a class="header-anchor" href="#懒汉式-线程不安全" aria-hidden="true">#</a> 懒汉式(线程不安全)</h3><p><strong>起到了Lazy Loading的效果，但是只能在单线程下使用。如果是多线程环境，会出现线程安全问题。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton4</span><span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton4</span> instance<span class="token punctuation">;</span>

    <span class="token comment">//3.对外提供静态方法获取该对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton4</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span>
            instance<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒汉式-线程安全" tabindex="-1"><a class="header-anchor" href="#懒汉式-线程安全" aria-hidden="true">#</a> 懒汉式(线程安全)</h3><p><strong>同步方法</strong></p><p>优缺点：</p><ol><li><p>实现了懒加载效果，同时又解决了线程安全问题。</p></li><li><p>在getInstance()方法上添加了 synchronized关键字，导致该方法的执行效率特别低。</p><p><strong>其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接return就行了。</strong></p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
 
    <span class="token comment">//私有构造方法 </span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
    <span class="token comment">//在成员位置创建该类的对象 </span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>
 
    <span class="token comment">//对外提供静态方法获取该对象 </span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> 
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒汉式-线程安全-1" tabindex="-1"><a class="header-anchor" href="#懒汉式-线程安全-1" aria-hidden="true">#</a> 懒汉式(线程安全)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton5</span><span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton5</span> instance<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton5</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton5</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                
                instance<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Singleton5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双重检查锁" tabindex="-1"><a class="header-anchor" href="#双重检查锁" aria-hidden="true">#</a> 双重检查锁</h3><p>优缺点：</p><ol><li><p>Double-Check概念是多线程开发中常使用到的，我们进行了两次if (singleton == null)检查，这样就可以保证线程安全</p></li><li><p>实例化代码只用执行一次，后面再次访问时，判断if (singleton == null)，直接return实例化对象。</p></li><li><p>线程安全；延迟加载；效率较高，推荐使用。</p></li><li><p>在多线程的情况下，可能会出现空指针问题，原因是JVM在实例化对象的时候会进行优化和指令重排序操作。</p></li></ol><p>​   要解决该问题，只需要使用 volatile 关键字， volatile 关键字可以保证可见性和有序性。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton6</span><span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton6</span> instance<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
    
    <span class="token comment">//提供一个静态的公有方法，加入双重检查代码，解决线程安全问题，同时解决懒加载问题</span>
    <span class="token comment">//同时保证了效率，推荐使用</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton6</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//第一次判断是否为null，如果不为null，则直接返回实例</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton6</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//抢到锁之后，再次判断是否为null</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton7</span><span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton7</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Handler</span><span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton7</span> instance<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Singleton7</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton7</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Handler</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),c=[t];function l(i,o){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","单例模式.html.vue"]]);export{k as default};
