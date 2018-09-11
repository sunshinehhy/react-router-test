import React from 'react';
import ReactDOM from 'react-dom';
import ajax from '../../../util/ajax.js';
 // https://www.cnblogs.com/wdxue/p/8079193.html  (此方法行不通)
class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[]
    }
    this.getData = this.getData.bind(this);
  }

  getData(){
      ajax('http://localhost:9000/memberData').then(response => {
          return Promise.resolve(response);
      }).then(response => {
          this.setState({datas:response});
      }).catch(e => {
          alert(`Error: ${e}`);
      });
  }
  componentDidMount() {
        ajax('http://localhost:9000/memberData').then(response => {
            this.setState({datas:response});
        }) 
  }
  render() {
    // 目前方法不能再render中map循环，因为第一次this.state为空，应该找到原因
    const datas=this.state.datas;
    console.log(datas);
    // const aa = '';
    // if(datas.index){
    //    aa = datas.index.map((item,index)=>{
    //       return <li key={index}>{item.title}</li>
    //   })
    // }
    const li = <li>列表</li>
      
    return (
        <div>
          <button onClick={this.getData.bind(this)}>点击</button>
          {li}
        </div>
    )

  }
}

export default Fetch;

