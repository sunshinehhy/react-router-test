import React from 'react'

// export default React.createClass({
//   render() {
//     return <div>Repos</div>
//   }
// })
import NavLink from './NavLink'


import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>

 
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">NavLink React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">NavLink React</NavLink></li>
          <li><Link to="/repos/reactjs/react-router">Link React Router</Link></li>
          <li><Link to="/repos/facebook/react">Link React</Link></li>
        </ul>
         {/* will render `Repo.js` when at /repos/:userName/:repoName */}
  
        {this.props.children}
      </div>
    )
  }
})