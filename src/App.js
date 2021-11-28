import React from 'react';
import './App.css';
// import { Header } from './Components/header' // option 1
import Header from './Components/header' // option 2
import Footer from './Components/footer' // option 2


function App() {
  return (
    <div className="App">
      <Header info="This is my message" myNumber="6" />
      <Header info="Another message" myNumber="4" />
      <p>main content</p>
      <Footer trademark="Page made by Pedro"/>
    </div>
  );
}

export default App;
