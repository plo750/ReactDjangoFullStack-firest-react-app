import React, { Component } from 'react';


// React class as component
class Footer extends Component { // props are inherited from Component

  createAlert() {
    alert('Hello, you clicked me from child');
  }

  changed() {
    console.log('changed');
  }

  // Override render function
  render() {
    return (
      <React.Fragment>
        {/* <h2 onClick={this.createAlert}> */}
        <h2 onClick={this.props.myAlert}>
          {this.props.trademark}
        </h2>
        <input onChange={this.changed}type="text" />
      </React.Fragment>
    )
  }
}

export default Footer;