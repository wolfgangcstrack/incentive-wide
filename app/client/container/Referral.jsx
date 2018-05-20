import React, { Component } from 'react';
import { withAlert } from 'react-alert';

const refStyle = {
  height: '260px',
  width: '260px',
};

class Referral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    this.props.alert.success(`An email has been sent to ${this.state.name}.`);
    this.setState({
      email: '',
      name: '',
    });
  }

  render() {
    return (
      <div style={refStyle}>
        <h1 className="title">Refer a friend</h1>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={this.handleChange}
            className="input is-medium"
            type="text"
            placeholder="Full name"
            name="name"
            value={this.state.name}
          />
          <span className="icon is-left">
            <i className="fas fa-user" />
          </span>
        </div>
        <br />
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={this.handleChange}
            className="input is-medium"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
          />
          <span className="icon is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
        <br />
        <button className="button is-success" onClick={this.handleClick}>
          Refer
        </button>
      </div>
    );
  }
}

export default withAlert(Referral);
