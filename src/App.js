import React from 'react';
import './App.css';
// import { Header } from './Components/header' // option 1
import Header from './Components/header' // option 2
import Footer from './Components/footer' // option 2


function App() {
  return (
    <div className="App">
      <Header/>
      <p>main content</p>
      <Footer/>
    </div>
  );
}

export default App;
