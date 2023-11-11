import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-a89b456a.js";const t={},p=e(`<h2 id="java代理模式" tabindex="-1"><a class="header-anchor" href="#java代理模式" aria-hidden="true">#</a> Java代理模式</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p><strong>使用代理对象来代替对真实对象的访问，这样可以在不修改原目标对象的前提下，提供额外的操作，扩展目标对象的功能</strong></p><p><strong>主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后可以增加一些自定义的操作。</strong></p><h3 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h3><p>静态代理中，<strong>对目标对象的每个方法的增强都是手动完成的</strong>，非常不灵活(比如接口一旦新增加方法，目标对象和</p><p>代理对象都要进行修改)且麻烦(<strong>需要对每个目标类都单独写一个代理类</strong>)。</p><p>实际应用场景非常非常少，日常开发几乎看不到使用静态代理的场景。</p><p>从 JVM 层面来说， <strong>静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。</strong></p><p>静态代理实现步骤：</p><ol><li><p>定义一个接口及其实现类；</p></li><li><p>创建一个代理类同样实现这个接口</p></li><li><p>将目标对象注入进代理类，然后在代理类的对应方法中调用目标类的对应方法。</p><p>这样的话，就可以通过代理类屏蔽对目标对象的访问，并且可以在目标方法执行前后做一些自己想做的事情。</p></li></ol><h3 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h3><p>相比于静态代理来说，动态代理更加灵活。不需要针对每个目标类都单独创建一个代理类，也不需要必须实现接口，可以直接代理实现类( CGLIB 动态代理机制)。</p><p>​ <strong>从 JVM 角度来说，动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。</strong></p><h4 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理" aria-hidden="true">#</a> <strong>JDK动态代理</strong></h4><p><strong>在 Java 动态代理机制中 <code>InvocationHandler</code> 接口和 <code>Proxy</code> 类是核心。</strong></p><p><code>Proxy</code> 类中使用频率最高的方法是：<code>newProxyInstance()</code> ，这个方法主要用来生成一个代理对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span>
                                          
                                      <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">,</span>
                                          
                                      <span class="token class-name">InvocationHandler</span> h<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalArgumentException</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

这个方法一共有 <span class="token number">3</span> 个参数：

  loader <span class="token operator">:</span>类加载器，用于加载代理对象。
    
  interfaces <span class="token operator">:</span> 被代理类实现的一些接口；
    
  h <span class="token operator">:</span> 实现了 <span class="token class-name">InvocationHandler</span> 接口的对象；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现动态代理的话，还必须实现<code>InvocationHandler</code> 来自定义处理逻辑。</p><p>当动态代理对象调用一个方法时，这个方法的调用就会被转发到实现<code>InvocationHandler</code> 接口类的 <code>invoke</code> 方法来调用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 当使用代理对象调用方法的时候实际会调用到这个方法
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>invoke()</code> 方法有三个参数：</p><ol><li><p><strong>proxy</strong> ：动态生成的代理类</p></li><li><p><strong>method</strong> : 与代理类对象调用的方法相对应</p></li><li><p><strong>args</strong> : 当前 method 方法的参数</p></li></ol><p>即，<strong>通过Proxy 类的 newProxyInstance() 创建的代理对象在调用方法的时候，实际会调用到实现InvocationHandler</strong></p><p>    <strong>接口的类的 <code>invoke()</code>方法。</strong> 可以在 <code>invoke()</code> 方法中自定义处理逻辑，比如在方法执行前后做什么事情。</p><h4 id="使用及代码" tabindex="-1"><a class="header-anchor" href="#使用及代码" aria-hidden="true">#</a> <strong>使用及代码</strong></h4><ol><li><p>定义一个接口及其实现类；</p></li><li><p>自定义 <code>InvocationHandler</code> 并重写<code>invoke</code>方法，在 <code>invoke</code> 方法中会调用原生方法(被代理类的方法)并自定义一些处理逻辑；</p></li><li><p>通过 <code>Proxy.newProxyInstance(ClassLoader loader,Class&lt;?&gt;[] interfaces,InvocationHandler h)</code> 方法创建代理对象</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//发送短信的接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    
    <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//实现发送短信的接口</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;send message:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//定义JDK动态代理类</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    
    <span class="token comment">//被代理的对象</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> 
    
    <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//调用方法之前，可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;before method &quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//调用方法之后，同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;after method &quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取代理对象的工厂</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkProxyFactory</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                
            target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 目标类的类加载器</span>
                
            target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 代理需要实现的接口，可指定多个</span>
                
            <span class="token keyword">new</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>   <span class="token comment">// 代理对象对应的自定义 InvocationHandler</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//使用</span>
<span class="token class-name">SmsService</span> smsService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SmsService</span><span class="token punctuation">)</span> <span class="token class-name">JdkProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SmsServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

smsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cglib代理" tabindex="-1"><a class="header-anchor" href="#cglib代理" aria-hidden="true">#</a> <strong>CGLIB代理</strong></h4><p>JDK 动态代理有一个最致命的问题是<strong>其只能代理实现了接口的类。</strong></p><p>为了解决这个问题，可以用 CGLIB 动态代理机制来避免。</p><p><strong>在 CGLIB 动态代理机制中 <code>MethodInterceptor</code> 接口和 <code>Enhancer</code> 类是核心。</strong></p><p>需要自定义 <code>MethodInterceptor</code> 并重写 <code>intercept</code> 方法，<code>intercept</code> 用于拦截增强被代理类的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MethodInterceptor</span> <span class="token keyword">extends</span> <span class="token class-name">Callback</span><span class="token punctuation">{</span>
    <span class="token comment">// 拦截被代理类中的方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span>Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span><span class="token class-name">MethodProxy</span> proxy<span class="token punctuation">)</span> 
        
        <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

obj <span class="token operator">:</span> 被代理的对象<span class="token punctuation">(</span>需要增强的对象<span class="token punctuation">)</span>
    
method <span class="token operator">:</span> 被拦截的方法<span class="token punctuation">(</span>需要增强的方法<span class="token punctuation">)</span>
    
args <span class="token operator">:</span> 方法入参
    
proxy <span class="token operator">:</span> 用于调用原始方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 <code>Enhancer</code>类来动态获取被代理类，当代理类调用方法的时候，实际调用的是 <code>MethodInterceptor</code> 中的 <code>intercept</code> 方法。</p><p><strong>使用步骤</strong></p><ol><li><p>定义一个类；</p></li><li><p>自定义 <code>MethodInterceptor</code> 并重写 <code>intercept</code> 方法，<code>intercept</code> 用于拦截增强被代理类的方法，和 JDK 动态代理中的 <code>invoke</code> 方法类似；</p></li><li><p>通过 <code>Enhancer</code> 类的 <code>create()</code>方法创建代理类</p></li></ol><p>代码(需要添加依赖)：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//1.实现一个使用阿里云发送短信的类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>vkls<span class="token punctuation">.</span>dynamicProxy<span class="token punctuation">.</span>cglibDynamicProxy</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliSmsService</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;send message:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//2.自定义 MethodInterceptor(方法拦截器)</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">MethodInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">MethodProxy</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 自定义MethodInterceptor
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugMethodInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>


    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">o</span>           被代理的对象(需要增强的对象)
     * <span class="token keyword">@param</span> <span class="token parameter">method</span>      被拦截的方法(需要增强的方法)
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>        方法入参
     * <span class="token keyword">@param</span> <span class="token parameter">methodProxy</span> 用于调用原始方法
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> 
        <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//调用方法之前，可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;before method &quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Object</span> object <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//调用方法之后，同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;after method &quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> object<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//3、获取代理类</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">Enhancer</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibProxyFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// 创建动态代理增强类</span>
        <span class="token class-name">Enhancer</span> enhancer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 设置类加载器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 设置被代理类</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 设置方法拦截器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DebugMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 创建代理类</span>
        <span class="token keyword">return</span> enhancer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//4.使用</span>
<span class="token class-name">AliSmsService</span> aliSmsService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">AliSmsService</span><span class="token punctuation">)</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">AliSmsService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

aliSmsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两种代理对比" tabindex="-1"><a class="header-anchor" href="#两种代理对比" aria-hidden="true">#</a> <strong>两种代理对比</strong></h4><p><strong>JDK 动态代理只能代理实现了接口的类或者直接代理接口，而 CGLIB 可以代理未实现任何接口的类。</strong></p><p>另外， CGLIB 动态代理是通过生成一个被代理类的子类来拦截被代理类的方法调用，因此不能代理声明为 final 类型的类和方法。</p><p>就二者的效率来说，大部分情况都是 JDK 动态代理更优秀，随着 JDK 版本的升级，这个优势更加明显。</p><h3 id="对比" tabindex="-1"><a class="header-anchor" href="#对比" aria-hidden="true">#</a> 对比</h3><p><strong>灵活性</strong> ：动态代理更加灵活，不需要必须实现接口，可以直接代理实现类，并且可以不需要针对每个目标类都创建一个代理类。另外，静态代理中，接口一旦新增加方法，目标对象和代理对象都要进行修改，这是非常麻烦的！</p><p><strong>JVM 层面</strong> ：静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。而动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。</p>`,47),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","Java中的代理.html.vue"]]);export{r as default};
