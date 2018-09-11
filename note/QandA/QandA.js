import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ajax from '../../../util/ajax.js';
import Fetch  from './fetchData.js';

import main from './main.scss';

class Qanda extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[],
        guide:[],
        member:[]
    }
    
  }

  componentWillMount() {
    // console.log(QandA);
  }
  componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
          // console.log(response);
          let responses = Object.keys(response).map(key => {   
            if(key.indexOf('ontent')>-1){
              let expand = response[key].map((item,index)=>{
              // console.log(item.answers);
                return <div class="o-expander" id="o-expander" key={index}>
                     <div class="toggle" aria-expanded="false" >
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

          // let guide = ''; Uncaught Error: Module build failed: Duplicate declaration "guide"
          let member = response.index.map((item,index)=>{
            return  <div class="words">
              <div class="first"><strong>{item.title}</strong></div>
              <div class="second">{item.price}</div>
            </div>


          })
          let guide = (()=>{
              return <div class="words"><div class="first"><strong>{response.guide.first}</strong></div><div class="second">{response.guide.second}</div></div>
          })




            this.setState({
              datas:responses,
              guide:guide(),
              member:member
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
    const {datas,guide,member} = this.state;  
    // console.log(this.state);
    return (
      <div>
        <div class = "container">
          <div class="welcome-guide width-cls">
            <div class="show-image"></div>
            {this.state.guide}

            <div class="clear-class"></div>
          </div>
        </div>


        <div id="site-content" class="o-member-container">
            <div class="o-member__heading">
              <p>请选择您的订阅方式</p>
            </div>

            <div class="o-member-row" >
              <div class="o-member o-member__standard" >
                <div class="o-member_content" >
                  <h2 class="o-member__title">标准会员</h2>
                  <div class="o-member__border"></div>
                  <ul class="o-member__benefits">
                    
                      <li> 精选深度分析</li>
                    
                      <li> 中英双语内容</li>
                    
                      <li> 金融英语速读训练</li>
                    
                      <li> 英语原声电台</li>
                    
                      <li> 无限浏览7日前所有历史文章（近8万篇）</li>
                    
                  </ul>
                   
                  <div class="o-member__subscribe">
                    <button  class="openSub" id="standard-btn">立即订阅</button>
                    <p id="standard_price"> ¥198.00/年</p>
                    {/*<input type="text" value="¥198.00/年" hidden id="regular-member">*/}
                  </div>

                </div>    
              </div>  {/*o-member o-member__standard*/}

              <div class="o-member o-member__premium" >
                <div class="o-member_content" >
                  <h2 class="o-member__title">高端会员</h2>
                  <div class="o-member__border"></div>
                  <ul class="o-member__benefits">
                    
                      <li> 享受“标准会员”所有权益</li>
                    
                      <li> 编辑精选，总编/各版块主编每周五为您推荐本周必读资讯，分享他们的思考与观点</li>
                    
                      <li> FT中文网2018年度论坛门票2张，价值3999元/张 （不含差旅与食宿）</li>
                    
          
                  </ul> 
                  <div class="o-member__subscribe">
                    
                    <button class="openSub" id="premium-btn">立即订阅</button>
                    <p id="premium_price">¥1,998.00/年</p>
                    {/*<input type="text" value="¥1,998.00/年" hidden>*/}
                  </div>  
                </div>  

              </div>
           </div>  {/*o-member o-member__premium*/}


        </div>


        <header class="section-header">
            <div class="section-header__text">
                <h2>常见问题</h2>
            </div>
        </header>



        <section class="o-section">
          <div class="o-tabs-container">
              <ul id="faq_tabs" data-o-component="o-tabs" class="o-tabs" role="tablist">
                <li role="tab" aria-selected="true" id="tabContent1-label" class="tabContent-label" >
                  <a href="#tabContent1">订阅问题</a>
                </li>
                <li role="tab" aria-selected="false" id="tabContent2-label" class="tabContent-label">
                  <a href="#tabContent2">支付问题</a>
                </li>
                <li role="tab" aria-selected="false" id="tabContent3-label" class="tabContent-label">
                  <a href="#tabContent3">其它</a>
                </li>
              </ul>
              <div class="o-tab-forms">
                <select id="o-tab__select" class="o-tab__select">
                  <option data-tabindex="0" value="tabContent1" selected="">订阅问题</option>
                  <option data-tabindex="1" value="tabContent2">支付问题</option>
                  <option data-tabindex="2" value="tabContent3">其它</option>
                </select>
              </div>
          </div>
          {/*<div  id= "tabContentContainer">
            <div class="tabContent" id= "tabContent1">
              {this.state.tabContent}
            </div>
            <div class="tabContent" id= "tabContent2">
              {this.state.tabContent}
            </div>
            <div class="tabContent" id= "tabContent3">
              {this.state.tabContent}
            </div>
          </div>  */}
          <div  id= "tabContentContainer">
            {this.state.datas}
          </div> 

        </section>


        
    </div>
    );
  }

}

export default Qanda;

