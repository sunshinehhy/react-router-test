import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ajax from '../../../util/ajax.js';
import TabContent from './tabContent';
import TabContentData from './tabContentData';

import main from './main.scss';


class TabContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[] ,
            tabData:TabContentData    
        }  
    }


    componentWillMount() {

        ajax('http://localhost:9000/memberData').then(response => {
            return Promise.resolve(response);
        }).then(response => {
          this.setState((prevState, props) => ({
                data:response
            }));
        })
    }
    componentDidMount() {



    }


    render() {
        // 不能在此处map，因为第一次state为默认值
        const { tabData } = this.state;
        // console.log(location.href)
        var aa = location.href;

        return (

            
            <div  id= "tabContentContainer"  >
                  <TabContent data={this.state.tabData}/>
            </div> 

        );
    }

}

export default TabContentContainer;

