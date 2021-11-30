import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './Components/header' // option 2
import Footer from './Components/footer' // option 2

const routing = (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<App/>}></Route>
          <Route exact path="/header" element={<Header/>}></Route>
          <Route exact path="/footer" element={<Footer/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
