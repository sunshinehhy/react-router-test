import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
import Fetch  from './fetchData.js';

import main from './main.scss';
class TabTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[],
        guide:[]
    }
    
  }

  componentWillMount() {
    
  }
  componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
            let responses = response.index.map((item,index)=>{
              return <div key={index}><span class="index-title">{item.title}</span><span>{item.price}</span><span>{item.type}</span></div>
            })

            let guide = (()=>{
              return <div class="words"><div class="first"><strong>{response.guide.first}</strong></div><div class="second">{response.guide.second}</div></div>
          })

            this.setState({
              datas:responses,
              guide:guide()
            });

            // this.setState((prevState, props) => ({
            //   datas:responses,
            //   response: response1()
            // }));
        })
        
  }

  componentWillReceiveProps(nextProps) {
    
  }
  // shouldComponentUpdate(){
  //   return true
  // }
  handleChange(event) {
    // console.log(event);
  }

  render() {
    // 不能在此处map，因为第一次state为默认值
    const {datas,guide} = this.state;  
    // console.log(this.state);
    return (
      <div class = "container">
          <div class="welcome-guide width-cls">
            <div class="show-image"></div>
            {this.state.guide}

            <div class="clear-class"></div>
          </div>
        </div>
    );
  }

}

export default TabTitle;

