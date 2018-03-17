
/*
http://blog.csdn.net/kuangshp128/article/details/67632683

action创建函数的意义: 
action创建函数表面是返回一个对象
真正的意义在于逻辑的封装

redux-thunk中间件可以让action创建函数先不返回一个action对象，而是返回一个函数，
函数传递两个参数(dispatch,getState),在函数体内进行业务逻辑的封装。

安装:npm install redux-thunk --save-dev
导入thunk： import thunk from 'redux-thunk'
导入中间件: import {createStore,applyMiddleware} from 'redux'
创建store：let store = createStore(reducer函数，applyMiddleware(thunk))
激活redux-thunk中间件，只需要在createStore中加入applyMiddleware(thunk)就可以
*/
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function count(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REDUCER':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(count,applyMiddleware(thunk));
//action创建函数
function add() {
    return {
        type: 'ADD',
    }
}
function reducer() {
    return {
        type: 'REDUCER'
    }
}
function addIfOdd() {
    return (dispatch, getState) => {
        const currentValue = getState();
        if (currentValue % 2 == 0) {
            return false;
        }
        dispatch(add())
    }
}
function addAsy(delay = 2000) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(add())
        }, delay)
    }
}

//获取当前值
let currentValue = store.getState();
//创建一个监听
store.subscribe(() => {
    const previosValue = currentValue;
    currentValue = store.getState();
    console.log('上一个值:', previosValue, '当前值:', currentValue)
});

//分发任务
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());
store.dispatch(reducer());
store.dispatch(addIfOdd());
store.dispatch(addAsy());