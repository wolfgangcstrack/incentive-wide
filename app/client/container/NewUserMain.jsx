import React, { Component } from 'react';
import './../main.css'


class NewUserMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      creditScore:0,
      bankAccountSavings:0
    };
    // bindings
  onChange = this.onChange.bind(this);
  onSubmit = this.onSubmit.bind(this);
  }
  onChange( event ) {
    this.setState({[event.target.name] : event.target.value});
    console.log(this.state.fullName)
  };
  onSubmit( event ) {
    // do something
  }



  render() {
    return (
        <div className="columns">
          <div className="column"></div>
            <div className="is-half">
              <form className="contorl">
                <div className="field">
                  <input className="input" type="text" name="fullName" onChange={onChange} placeholder="Fullname"/>
                </div>
                <div className="field">
                <input className="input" type="text" name="creditScore" onChange={onChange} placeholder="Credit Score"/>
                </div>
                <div className="field">
                <input className="input" type="text" name="bankAccountSavings" onChange={onChange} placeholder="Savings"/>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          <div className="column"></div>
        </div>
    );
  }
}


module.exports.NewUserMain = NewUserMain;
