import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ajax from '../../../util/ajax.js';


import main from './main.scss';


class TabContent extends React.Component {
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

        return (

            
            <div  id= "tabContentContainer" data={this.state.data} data-aria={`${this.state.ariaExpanded}`} >
                {this.state.tabContent}
            </div> 
        );
    }

}

export default TabContent;

