import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route,HashRouter,Link } from 'react-router-dom'
import ajax from '../../../util/ajax.js';
import TabContent1 from './tabContent';
import Tab from './tab';



class AllQA extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[]
    }
    
  }

  componentWillMount() {

  }
  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      
        <section class="o-section">            
            <Tab/>
        </section>      
    
    );
  }

}

export default AllQA;

