
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
// 表单需要加上onChange，不然会报错
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
          Essay:<textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <select  multiple={true} value={['C']} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;