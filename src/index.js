import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './Components/header' // option 2
import Footer from './Components/footer' // option 2

// Context global state variable with a provider and a consumer
// Create in top level of the element react component.
const context = React.createContext();
export const CtxConsumer = context.Consumer;
const CtxProvider = context.Provider;


const animals = ['snake', 'elephant', 'lion']


/* Data on the provider will be available on the rest of code Header & Footer */
const routing = (
    <BrowserRouter>
      <CtxProvider value={{animalsArray: animals}}>
        <div>
          <Routes>
            <Route exact path="/" element={<App/>}></Route>
            <Route exact path="/header" element={<Header/>}></Route>
            <Route exact path="/footer" element={<Footer/>}></Route>
          </Routes>
        </div>
      </CtxProvider>
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
