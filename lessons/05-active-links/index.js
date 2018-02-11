import React from 'react'
import { render } from 'react-dom'
// import { Router, Route, hashHistory } from 'react-router'
// add `IndexRoute` to 'react-router' imports
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// bring in `browserHistory` instead of `hashHistory`，clean urls
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'
/*render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))*/


import Repo from './modules/Repo'
 
render((
  // 从hashHistory换成browserHistory，会clean urls
  // <Router history={browserHistory}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="/repos" component={Repos}/>
{/*/repos/与上面一样，Repos子路劲Repo；this.props.params.repoName为/repos/:userName/:repoName，来自于Repos.js*/}
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
      <Route path="/about/:userName/:repoName" component={Repo}/>
      
    </Route>

  </Router>
), document.getElementById('app'))

