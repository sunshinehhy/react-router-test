import React from 'react'

// export default React.createClass({
//   render() {
//     return <div>About</div>
//   }
// })

import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>

 
        <ul>
          <li><Link to="/about/reactjs/about-react-router">About React Router</Link></li>
          <li><Link to="/about/facebook/about-react">About React</Link></li>
        </ul>

      </div>
    )
  }
})