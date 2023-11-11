import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as t,a as p}from"./app-a89b456a.js";const e="/assets/image-20230426095915581-6cbe3183.png",l="/assets/image-20230426095923699-661085cc.png",o={},i=p('<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2><h3 id="_1-重写和重载" tabindex="-1"><a class="header-anchor" href="#_1-重写和重载" aria-hidden="true">#</a> 1.重写和重载</h3><h4 id="重写-override" tabindex="-1"><a class="header-anchor" href="#重写-override" aria-hidden="true">#</a> <strong>重写(override)</strong></h4><p>子类对父类方法的实现过程进行重新编写</p><ol><li><p>方法名和参数列表必须完全相同，返回类型可以不相同，但必须是父类返回值的派生类</p></li><li><p>访问权限不能比父类的访问权限更低</p></li><li><p><strong>只有父类的成员方法能被它的子类重写，构造方法不能重写</strong></p></li><li><p><strong>声明为final的方法不能重写，声明为static的方法不能重写，但可以再次声明</strong></p></li><li><p>重写方法不能抛出更大范围的异常</p></li></ol><h4 id="重载-overload" tabindex="-1"><a class="header-anchor" href="#重载-overload" aria-hidden="true">#</a> <strong>重载(overload)</strong></h4><ol><li><p>一个类中可以定义多个名称相同，但参数列表不同的方法，返回值类型可以相同也可以不同</p><p><strong>不同的含义：形参类型不同，形参个数不同，形参顺序不同</strong></p></li><li><p>可以改变返回值类型和访问修饰符</p></li><li><p>可以声明新的或更广的检查异常</p></li><li><p>方法能在同一个类中或者在一个子类中被重载</p></li></ol><table><thead><tr><th style="text-align:center;">区别点</th><th style="text-align:center;">重写方法</th><th style="text-align:center;">重载方法</th></tr></thead><tbody><tr><td style="text-align:center;">方法名</td><td style="text-align:center;">不能修改</td><td style="text-align:center;">不能修改</td></tr><tr><td style="text-align:center;">参数列表</td><td style="text-align:center;">不能修改</td><td style="text-align:center;">必须修改</td></tr><tr><td style="text-align:center;">返回类型</td><td style="text-align:center;">和父类相同或者是父类返回类型的子类</td><td style="text-align:center;">可以修改</td></tr><tr><td style="text-align:center;">访问修饰符</td><td style="text-align:center;">可以扩大但不能缩小</td><td style="text-align:center;">可以修改</td></tr><tr><td style="text-align:center;">异常</td><td style="text-align:center;">不能抛出新的或者更大的异常</td><td style="text-align:center;">可以修改</td></tr></tbody></table><h3 id="_2-类" tabindex="-1"><a class="header-anchor" href="#_2-类" aria-hidden="true">#</a> 2.类</h3><p>​ 每个源文件必须有且只有一个public class，并且类名和文件名保持一致</p><p>​ 类有三种成员：属性field，方法method，构造器constructor</p><h3 id="_3-构造器" tabindex="-1"><a class="header-anchor" href="#_3-构造器" aria-hidden="true">#</a> 3.构造器</h3><h4 id="创建对象分为四步" tabindex="-1"><a class="header-anchor" href="#创建对象分为四步" aria-hidden="true">#</a> <strong>创建对象分为四步：</strong></h4><ol><li><p>分配对象空间，并将对象成员初始化为0或空</p></li><li><p>执行属性值的显式初始化</p></li><li><p>执行构造方法</p></li><li><p>返回对象的地址给相关变量</p></li></ol><h4 id="构造器声明格式" tabindex="-1"><a class="header-anchor" href="#构造器声明格式" aria-hidden="true">#</a> <strong>构造器声明格式：</strong></h4><p>​ [修饰符] 类名(形参列表){</p><p>​   语句;</p><p>​ }</p><ol><li><p>构造器会在使用new关键字时被调用</p></li><li><p>构造器虽然有返回值，但是不能定义返回值类型，<strong>不能在构造器中使用return返回某个值</strong></p></li><li><p>如果没有定义构造器，则编译器会自动定义一个无参的构造方法；如果已经定义，则编译器不再自动定义</p></li><li><p><strong>构造器的名称必须和类名一致</strong></p></li></ol><h3 id="_4-内存" tabindex="-1"><a class="header-anchor" href="#_4-内存" aria-hidden="true">#</a> 4.内存</h3><p>Java虚拟机的内存分为三个区域：栈stack，堆heap，方法区method area</p><h4 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> <strong>栈</strong></h4><p>栈描述的是方法执行的内存模型。每个方法被调用时都用创建一个栈帧(存储局部变量，操作数等)</p><p>JVM为每个线程创建一个栈，用于存放该线程执行方法的信息(实参，局部变量等)</p><p>栈属于线程私有，不能实现线程间的共享</p><p>栈由系统自动分配，速度快</p><h4 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> <strong>堆</strong></h4><p><strong>堆用于存储创建好的对象</strong>和数组(数组也是对象)</p><p>JVM只有一个堆，被所有线程所共享</p><p>堆是一个不连续的存储空间，分配灵活，速度慢</p><p>堆的区域会被垃圾回收器做进一步划分，例如新生代，老年代的划分</p><h4 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> <strong>方法区</strong></h4><p>方法区(也是堆)是java虚拟机的规范，有不同的实现方法</p><p>JVM只有一个方法区，被所有线程所共享</p><p>方法区也是堆，用于存储永远不变或唯一的内容(类信息，静态变量，字符串常量等)</p><p>常量池主要存放常量，如文本字符串，final常量值</p><h3 id="_5-垃圾回收机制-garbage-collection" tabindex="-1"><a class="header-anchor" href="#_5-垃圾回收机制-garbage-collection" aria-hidden="true">#</a> 5.垃圾回收机制(Garbage Collection)</h3><ol><li><p>Java的内存管理很大程度上是对堆中对象的管理，其中包括对象空间的分配和释放</p><p>对象空间的分配：使用new关键字创建对象即可</p><p>对象空间的释放：将对象赋值为null即可</p></li></ol><p>2.垃圾回收过程</p><p>​ 1.发现无用的对象(是指：没有任何变量引用的对象)</p><p>​ 2.回收无用对象占用的内存空间</p><p>3.堆内存模型</p><p>​ <img src="'+e+`" alt="image-20230426095915581" loading="lazy"></p><p>​ 不同的对象的生命周期是不一样的，所以<strong>会对不同的对象存取不同的回收算法</strong>，以提高回收效率。</p><p>​ 将对象分为三种状态：年轻态，年老态，永久代。同时，将处于不同状态的对象放到堆中不同的区域</p><p>​ 1.年轻态</p><p>​   所有新生成的对象首先都是放在Eden区。年轻代区域的目标就是尽可能快速的回收掉那些生命周期短的对象，</p><p>​   对应的是Minor GC， 每次Minor GC算法采用效率较高的复制算法，频繁的操作，但是会浪费内存空间。</p><p>​   当“年轻代”区域存放满对象后，就将对象存放到年老代区域。</p><p>​ 2.年老代</p><p>​   在年轻代中经历了N(默认15)次垃圾回收后仍然存活的对象，就会被放到年老代中。</p><p>​   可以认为年老代中存放的都是一些生命周期较长的对象。</p><p>​   随着年老代对象越来越多，这时就需要启动Major GC和Full GC(全量回收)，全面清理年轻代区域和年老代区域。</p><p>​ 3.永久代</p><p>  用于存放静态文件，如Java类、方法等。永久代对垃圾回收没有显著影响。</p><p>  JDK7以前就是“方法区”的一种实现。JDK8以后已经没有“永久代”了，使用metaspace元数据空间和堆替代。</p><p>​ Minor GC：</p><p>  用于清理年轻代区域。Eden区满了就会触发一次Minor GC。</p><p>  清理无用对象，将有用对象复制到“Survivor1&quot;区或&quot;Survivor2”区中。</p><p>​ Major GC：</p><p>  用于清理老年代区域。</p><p>​ Full GC：</p><p>  用于清理年轻代、年老代区域。成本较高，会对系统性能产生影响。</p><p><strong>在对JVM调优的过程中，很大一部分工作就是对于Full GC的调节。</strong></p><p>有如下原因可能导致Full GC：</p><p>​   1.年老代( Tenured)被写满</p><p>​   2.永久代(Perm)被写满</p><p>​   3.System.gc( )被显式调用</p><p>​   4.上一次GC之后Heap的各域分配策略动态变化</p><h3 id="_6-数组" tabindex="-1"><a class="header-anchor" href="#_6-数组" aria-hidden="true">#</a> 6.数组</h3><ol><li>特点</li></ol><p>  1.数组被创建后，大小是不可以改变的</p><p>  2.元素的类型必须是相同类型</p><p>  3.数组类型可以是任何数据类型，包括基本类型和引用类型</p><p>  4.<strong>数组变量属于引用类型</strong></p><ol start="2"><li>声明</li></ol><p>  ElementType[ ] arr_name;</p><p>  ElementType arr_name[ ];</p><ol start="3"><li>初始化</li></ol><p>  静态初始化：</p><p>    int[] a={1,2,3,4};</p><p>  动态初始化：(数组定义与为数组元素分配空间并赋值的操作分开进行)</p><p>    int[ ] a=new int[2];</p><p>    a[0]=10;</p><p>    a[1]=20;</p><p>  默认初始化：</p><p>    数组是对象，元素相当于对象的属性，每个元素也按照属性的方法被默认初始化</p><p>    int a[ ]=new int[2];   //默认值：0 0</p><p>    String[ ] s=new String[2];   //默认值：null null</p><ol start="4"><li>数组的拷贝</li></ol><p>  System.arraycopy(src,srcpos,dest,destpos,length)</p><p>  src：源数组</p><p>  srcpos：原数组中开始复制的位置</p><p>  dest：目标数组</p><p>  destpos：复制的目标数组中的起始位置</p><p>  length：要复制的数组元素的个数</p><ol start="5"><li>Arrays类中对数组的常用操作</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span>   
 
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//打印数组元素</span>
  
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//对数组元素进行排序(从小到大)</span>
  
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>num<span class="token punctuation">)</span>     <span class="token comment">//使用二分法查找指定元素   成功则返回索引值,失败则返回负数</span>
  
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//将数组arr中从arr[2]到arr[6]的值改变为100  </span>
  
数组名<span class="token punctuation">.</span>length<span class="token punctuation">;</span>                  <span class="token comment">//获取数组元素个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>二维数组</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment">//或int[] arr[]  或int arr[][]</span>
     
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">//二维数组声明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ <img src="`+l+'" alt="image-20230426095923699" loading="lazy"></p>',101);function r(c,d){return a(),s("div",null,[t(" permalink: /    "),i])}const h=n(o,[["render",r],["__file","基础知识.html.vue"]]);export{h as default};
