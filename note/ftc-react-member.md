# react-member
it can use to pay

# 现象

QandA中碰到的问题：
```
let newData = {};
    ajax('http://localhost:9000/memberData').then(data => {
        return Promise.resolve({data:data});
    }).then(data => {
        newData = Object.assign({}, data);    
        this.setState({data:data});
        console.log(this.state);
    }).catch(e => {
        console.log(e);
        alert(`Error: ${e}`);
    });
```
在render中  const data = this.state.data; 
data第一次默认为构造函数中的值，所以渲染默认为空


// 发现一现象：input中的值inputVal，不会根据自己输入的值变化，页面中会一直显示设置的2，因为是最终render的
```
三种写法
<input value={inputVal} onChange={this.handleChange}/>
<input value={inputVal} onChange={(e)=> {console.log('1');}}/>
<input value={inputVal} onChange={this.handleChange.bind(this)}/>
handleChange(event) {
  // handleChange = (e) => {  //这种写法为什么写错了，难道是必须写在input标签中吗？

}
```
## 
https://reactjs.org/docs/lists-and-keys.html#keys  
使用key就能消除下面warning，可以根据props值获取key后面的值，所以应该传到组件中

Warning: Each child in an array or iterator should have a unique "key" prop.

// 为什么会出现2遍数据?因为生命周期中渲染第一次为空，

QandA.js:1 Uncaught Error: Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (26:72)   
必须有一个wrap标签

第一次都为空，为什么map能渲染出来呢

```
let responses = response.index.map((item,index)=>{
    return <div key={index}><li key={index}>{item.title}{item.price}</li></div>
})
let response1 = response.index.map((item,index)=>{
    return <div key={index}><li key={index}>{item.title}{item.price}</li></div>
})
let response1 = (()=>{
    return <div><li>11{response.index[0].title}</li></div>
})
```

## 配置问题
如果css-loader写在sass-loader之后，会出现以下错误

ERROR in ./node_modules/sass-loader/lib/loader.js??ref--8-1!./node_modules/css-loader??ref--8-2!./client/component/nav/nav.scss
Module build failed:

css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们。
引用资源的合适 loader 是 file-loader 和 url-loader，您应该在配置中指定（查看如下设置）。
import css from 'file.css';

http://www.css88.com/doc/webpack/loaders/css-loader/

http://www.css88.com/doc/webpack/loaders/sass-loader/

建议将 style-loader 与 css-loader 结合使用

顺序一定要：'style-loader'   'css-loader'  'sass-loader'

通过将 style-loader 和 css-loader 与 sass-loader 链式调用，可以立刻将样式作用在 DOM 元素。

node-sass 和 webpack 是 sass-loader 的 peerDependency，因此能够精确控制它们的版本。

线上最好能将css文件不依赖于js文件，成为一个单独的文件


https://segmentfault.com/q/1010000013564212/a-1020000014100311

blob:http://localhost:9000/cc7ae692-6a3a-4f18-a0e7-8f9c5232efc5  生成的css文件名
https://www.npmjs.com/package/extract-text-webpack-plugin  (插件用法)
```
test: /\.css$/,
use: ExtractTextPlugin.extract({
    fallback: "style-loader", // 编译后用什么loader来提取css文件
    use: "css-loader" // 指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
})
```

browser.js?40b6:38 Uncaught Error: A <Router> may have only one child element

## 最终文件布局
一个组件，一个css文件。
好像extract-text-webpack-plugin没有生效

## react
创建组件必须放在包裹的div中，这是为什么呢？源码肯定能告诉答案，需要去研究。通过报的错去寻找问题
```
  <div>
    <About />
    <Index />
    <Router>    
        <div>
            <Link to="/about">About</Link>
            <Link to="/index">Index</Link>
            <Route exact path="/Index" component={Index}/>  
            <Route path="/about" component={About}/>
        </div>
    </Router>
  </div>

  <!--Link是链接，根据Link中的to，能相应打开Route中的链接-->
```
```
for (const [key,value] of Object.entries(item)) {
    // console.log(`${value}`); //`${value}`变成字符串，value就是原值
}
```
```
return <div class="o-expander" id="o-expander" key={index}> return 和 标签返回值必须同行
```
```
let tabContent = response.tabContent1.map((item,index)=>{
    return <div class="o-expander" id="o-expander" key={index}>
            <div class="toggle" aria-expanded="false" >
            <a class="o-expander__toggle" aria-controls="o-expander__one">{item.question}<i></i>
            </a><span></span>
        </div>
        <div class="o-expander__content"  aria-hidden="true">
            <div class = "o-content_wrap">
            <div class="o-content">
                    <p class="o-content_body">{item.answers}</p>  
            </div>
            </div>
        </div>
    </div>
    
})

let response1 = (()=>{
    return <div><li>{response.index[0].title}</li></div>
})
```
react标签中不能加style，标签得按照严格模式写，即不能大写

## 我的思路
怎么把组件变成一个接口，里面传什么数据就渲染什么页面。
通过props传对象（props是能传对象的吗？），

做一个实例用props，子类从父类那获取props，一般获取什么值呢？比如点击，把值传递出去
学习处理动态变化


 //  bb={!(`${this.state.ariaExpanded}` )? '1':'2'}    bb={(`${this.state.ariaExpanded}`)=="false"? '1':'2'}  
 直接出来boolean就出错了

 class={`o-expander__content ${(dataIndex == index) && (`${this.state.ariaExpanded}`)=="true" ? ' max-height_new' : 'max-height_default'}`}


 包含请求、渲染、class、import、配置顺序，下一个项目可以添加alias和css分离


 ## todo
 继续研究数据，并且把放置位置进行性能比较
 继续研究生命周期，把每个周期性能研究透

 ##

 无状态组件是非常有用的表现类组件。表现类组件应该专注于UI层面而不是交互，应该避免在表现类组件中使用状态