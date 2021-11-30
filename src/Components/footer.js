import React, { Component } from 'react';


// React class as component
class Footer extends Component { // props are inherited from Component

  //
  state = {
    name: '',
    age: '54',
    isLogin: false
  }

  // Live cycle methods
  componentDidMount() {
    this.setState({name: 'MyName'})
    // Subscribe here
  }

  componentWillUnmount() {
    // Unsubscribe here
  }

  createAlert() {
    alert('Hello, you clicked me from child');
  }

  // Arrow function
  changed = (evt) => {
    this.setState({name: evt.target.value})
    console.log('changed', this.state.name);
  }

  // Override render function
  render() {

    const animals = ['cat', 'dog', 'horse']

    return (
      <React.Fragment>
        {
          animals.map( animal => {
            return (
              <div key={animal}>
                { /* Need a unique key in high level */ }
                <h1>{animal}</h1>
              </div>
              );
          })
        }
      </React.Fragment>
    )
  }
}

export default Footer;