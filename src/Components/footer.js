import React, { Component } from 'react';

// React class as component
class Footer extends Component { // props are inherited from Component
  // Override render function
  render() {
    return <h2>{ this.props.trademark}</h2>
  }
}

export default Footer;