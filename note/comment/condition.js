import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
class Condition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning:true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
        showWarning: !prevState.showWarning
        }));
    }
    render() {
        return (
        <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
        );
    }
}
export default Condition;