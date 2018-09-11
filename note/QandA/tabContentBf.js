import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
import Fetch  from './fetchData.js';

import main from './main.scss';
class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[],
        response:[]
    }
    
  }

  componentWillMount() {
    console.log(QandA);
  }
  componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
            let responses = response.index.map((item,index)=>{
              return <div key={index}><span class="index-title">{item.title}</span><span>{item.price}</span><span>{item.type}</span></div>
            })

            let response1 = (()=>{
              return <div><li>{response.index[0].title}</li></div>
            })

            this.setState({
              datas:responses,
              response:response1()
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
    console.log(event);
  }

  render() {
    // 不能在此处map，因为第一次state为默认值
    const {datas,response} = this.state;  
    console.log(this.state);
    return (
      <div className="login-container">
        <div className="content-section">
            <div className="inner-section">
                
            <span>怎么从后台fetch到数据？</span>
    
           <div>{this.state.datas}</div>
           <div>{this.state.response}</div>
              {/*<input value={} onChange={this.handleChange}/>*/}

              {/*<Fetch/>*/}
            </div>
        </div>
    </div>
    );
  }

}

export default TabContent;





class TabContent1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabContent: [],
            ariaExpanded:false,
            data:[]
            
        }
        this.handleRefreshClick = this.handleRefreshClick.bind(this); //没在此处添加，this获取为undefined
        this.handleChange = this.handleChange.bind(this);
        
    }
    // 为什么不能用箭头函数
    handleRefreshClick(e){
        // e.preventDefault();
        this.setState({
            ariaExpanded:!this.state.ariaExpanded
        });
        console.log('click1'+this.state.ariaExpanded); 
    }

    componentWillMount() {
        // console.log(QandA);
        
    }
    componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
            console.log(response);
          let tabContent = Object.keys(response).map(key => {   
            if(key.indexOf('ontent')>-1){
              let expand = response[key].map((item,index)=>{
            //   console.log(item.answers);
                return <div class="o-expander" id="o-expander" key={index} onClick={this.handleRefreshClick} >
                     <div class="toggle" aria-expanded = {`${this.state.ariaExpanded}`}>
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
            return <div class="tabContent" id= {key} key={key}>{expand}</div>

            }
          });

            this.setState((prevState, props) => ({
                tabContent: tabContent,
                data:response
            }));
        })

    }

    componentWillReceiveProps(nextProps) {

    }
    // shouldComponentUpdate(){
    //   return true
    // }
    handleChange(event) {

        // console.log('event'+this.state);
    }

    render() {
        // 不能在此处map，因为第一次state为默认值
        // const { tabContent } = this.state;

        return (
            /*<div>
                <div  id= "tabContentContainer">
                  <div class="tabContent" id= "tabContent1">
                    {this.state.tabContent}
                  </div>
                  <div class="tabContent" id= "tabContent2">
                    {this.state.tabContent}
                  </div>
                  <div class="tabContent" id= "tabContent3">
                    {this.state.tabContent}
                  </div>
                </div>  
          </div>*/
            
            <div  id= "tabContentContainer" data={this.state.data} data-aria={`${this.state.ariaExpanded}`} >
                {this.state.tabContent}
            </div> 
        );
    }

}

export default TabContent1;

