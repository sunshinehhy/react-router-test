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
            data:this.props ,
            dataIndex:0           
        }
        // console.log(this.props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this); //没在此处添加，this获取为undefined

        
    }

    // 为什么不能用箭头函数
    handleRefreshClick(item,e){
        e.preventDefault();
        var index=e.target.getAttribute("data-index");
        console.log('index:'+index);
        this.setState({
            ariaExpanded:!this.state.ariaExpanded,
            dataIndex:index
        });
         
        // 此处this.state.dataIndex获取的是上一次的state，不能跟setState之后的值对应上
        
    }

    componentWillMount() {
        // console.log(QandA);
        
    }
    componentDidMount() {
        /*ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
            // console.log(response);
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
        })*/

    }

    componentWillReceiveProps(nextProps) {

    }
    // shouldComponentUpdate(){
    //   return true
    // }


    render() {
        // 这里console.log(this.props);为什么会输出3次？
       
        // 模板字符串中嵌入变量，需要将变量名写在${}之中，好像便签中不能写入布尔值
        const { data } = this.state.data;
        // console.log(data)
        let dataIndex = this.state.dataIndex;
        dataIndex = parseInt(dataIndex);
        let ariaExpanded = this.state.ariaExpanded;
        // console.log(parseInt(dataIndex));
        return (

            
            <div class="tabContent" attr={this.state.dataIndex}>
 
              {data.map((item,index)=>{
                  
               return <div class="o-expander" id="o-expander" key={index} onClick={this.handleRefreshClick.bind(this, item)} >

                     <div class="toggle" data-index={index} aria-expanded = {`${(dataIndex == index) && (`${this.state.ariaExpanded}`)=="true" ? ' true' : 'false'}`}>
                        <a class="o-expander__toggle" data-index={index} aria-controls="o-expander__one">{item.question}<i></i>
                        </a><span></span>
                    </div>
                    <div class={`o-expander__content ${(dataIndex === index) && (`${this.state.ariaExpanded}`)=="true" ? ' max-height_new' : 'max-height_default'}`} aria-hidden="true" >
                    {/*<div class={`o-expander__content ${(dataIndex !== index) || (`${this.state.ariaExpanded}`)=="false" ? ' max-height_default' : 'max-height_new'}`} aria-hidden="true" >*/}
                        
                      <div class = "o-content_wrap">
                        <div class="o-content">
                                <p class="o-content_body">{item.answers}</p>  
                        </div>
                      </div>
                   </div>
                </div>
                
                })
             }    
            </div> 
        );
    }

}

TabContent.propTypes = {

  attr: PropTypes.number
}


export default TabContent;

