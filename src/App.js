import React from 'react';
import './App.css';
// import { Header } from './Components/header' // option 1
import Header from './Components/header' // option 2
import Footer from './Components/footer' // option 2
import Numbers from './Components/numbers' // option 2

import styled from 'styled-components'


function createAlert() {
  alert('Hello, you clicked me from parent');
}

/*
function ShowMessage(props) {
  if(props.toShow)
    return <h2>My Message</h2>
  else
    return <h2>Forbidden</h2>
}
*/

const pStyle = {
  fontSize: '2em', // css font-size ==> fontSize
  color: 'red'
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`;

function App() {
    return (
      <div className="App">
        <Numbers/>
      </div>
    );
}

export default App;
