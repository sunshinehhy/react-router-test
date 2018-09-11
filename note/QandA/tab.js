import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route,HashRouter,Link } from 'react-router-dom'
import ajax from '../../../util/ajax.js';
import TabContentContainer from './TabContentContainer';

import main from './main.scss';


const Tab2 = () => (
  <div>
    <h2>Tab2</h2>
  </div>
)

const Tab3 = () => (
  <div>
    <h2>Tab3 content</h2>
  </div>
)

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:[]
    }
    
  }

  componentWillMount() {
    // console.log(QandA);
  }
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    
  }
  // shouldComponentUpdate(){
  //   return true
  // }
  handleChange(event) {
    console.log(event);
  }

  render() {
    // 不能在此处map，因为第一次state为默认值
    const {data} = this.state;  
    // console.log(data);
    return (
          // <div>
            <Router>  
                {/*此处div必须要*/}
                <div>  
                    <div class="o-tabs-container">
                      <ul id="faq_tabs" data-o-component="o-tabs" class="o-tabs" role="tablist">
                        <li role="tab" aria-selected="true" id="tabContent1-label" class="tabContent-label" > 
                            <Link to="/">订阅问题</Link>
                        </li>
                        <li role="tab" aria-selected="false" id="tabContent2-label" class="tabContent-label">
                            <Link to="/tabContent2">支付问题</Link>
                        </li>
                        <li role="tab" aria-selected="false" id="tabContent3-label" class="tabContent-label"> 
                            <Link to="/tabContent3">其它</Link>
                        </li>
                      </ul>
                    </div>
                    <Route exact path="/" component={TabContentContainer}/>  
                    <Route path="/tabContent2" component={Tab2}/>
                    <Route path="/tabContent3" component={Tab3}/>   
                </div>
            </Router>
          // </div>




        

    );
  }

}

export default Tab;

