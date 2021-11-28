import React from 'react';
import './App.css';
// import { Header } from './Components/header' // option 1
import Header from './Components/header' // option 2
import Footer from './Components/footer' // option 2


function createAlert() {
  alert('Hello, you clicked me from parent');
}

function App() {
  return (
    <div className="App">
      <Header info="This is my message" />
      <p>main content</p>
      <Footer trademark="Page made by Pedro" myAlert={createAlert}/>
    </div>
  );
}

export default App;
