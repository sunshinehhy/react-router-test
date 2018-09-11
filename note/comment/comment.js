import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Condition from './condition';
import NameForm from './form';
import Lift from './lift';
class Comment extends React.Component {

  constructor(props) {
    super(props);
  }
//   调用函数必须要用this，并且此处不能用箭头函数，这是为什么呢？
  formatDate(date){
    return date.toLocaleDateString();
  }
  render() {
    let props= this.props;
    
    console.log(props.date);
    return (
      <div className="Comment">
        <div className="UserInfo">
            <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            />
            <div className="UserInfo-name">
            {props.author.name}
            </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
            {this.formatDate(props.date)}
        </div>
        <Lift />
        {/*<NameForm />*/}
    </div>
    );
  }

}





// function Comment(props) {
//   return (
    
//   );
// }

export default Comment;