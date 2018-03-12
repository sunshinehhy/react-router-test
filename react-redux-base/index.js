import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
// 动作onIncreaseClick从ui组件中传出去
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>  
      </div>
    );
  }
}

// Action:
const increaseAction = {type: 'increase'};

// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    default:
      return state;
  }
}

// Store:每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
let store = createStore(counter);

// connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
// Map Redux state to component props 将state映射到 UI 组件的参数（props）
// mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射。
// value代表 UI 组件的同名参数，从state中算出value
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// Map Redux actions to component props 将用户对 UI 组件的操作映射成 Action， 用来建立 UI 组件的参数到store.dispatch方法的映射。
// 也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
// onIncreaseClick应与UI组件对应
// 此函数定义了哪些用户的操作应该当作 Action，传给 Store

// 如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。此函数中没加ownProps
// 如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。
// dispatch传入对象
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}
/*
写成对象是这样
const mapDispatchToProps = {
  onIncreaseClick: () => (increaseAction)
}
*/
// Connected Component: Counter为UI组件,App为自动生成的容器组件
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// 提供Provider组件，可以让容器组件拿到state。
React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
// 如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。
// React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。