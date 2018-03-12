import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'
// 注意Link和NavLink之间的转换
export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li>activeStyle方式，被选中为red：</li>
          <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
          <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
          <li>activeClassName方式，被选中为green：</li>
          <li><Link to="/about"  activeClassName="active">About</Link></li>
          <li><Link to="/repos"  activeClassName="active">Repos</Link></li>
          <li>NavLink方式，...this.props为to="/about"'：</li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li>NavLink方式，Home：</li>
          {/*Home一直都是激活状态，正如我们前面所了解到的，当子路由处于活动状态时，父路由是活动的。*/}
          <li><NavLink to="/">Home</NavLink></li>  
          {/*对于这个链接，我们希望它只在索引路由激活时激活。有两种方法可以让路由器知道您链接到“索引路由”，这样它只在呈现索引路由时添加活动类(或样式)。用IndexLink和activeClassName修复它了!当我们在索引路由时，仅仅这个链接是“活动的”。*/}
          <li><IndexLink to="/" activeClassName="active">IndexLink Home</IndexLink></li>
          {/*另一种方法：通过它传递一个唯一的activeonindex*/}
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        <div style={{color: 'blue'}}>
          {/*this.props.children为link to值的之后指引*/}
          {this.props.children}
        </div>
        <div>
          {/* ... */}
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
})
