import React, { Component } from 'react';


// React class as component
class Footer extends Component { // props are inherited from Component

  //
  state = {
    name: 'Pedro',
    age: '54'
  }

  createAlert() {
    alert('Hello, you clicked me from child');
  }

  // Arrow function
  changed = evt => {
    this.setState({name: evt.target.value})
    console.log('changed', this.state.name);
  }

  // Override render function
  render() {
    return (
      <React.Fragment>
        {/* <h2 onClick={this.createAlert}> */}
        <h2 onClick={this.props.myAlert}>
          {this.props.trademark}
        </h2>
        <input value={this.state.name}
          onChange={this.changed} type="text" />
      </React.Fragment>
    )
  }
}

export default Footer;