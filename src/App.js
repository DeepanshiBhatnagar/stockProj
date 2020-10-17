import React from 'react';
import logo from './logo.svg';
import FirstPage from './Components/FirstPage'
import './App.css';
import Login from './Components/Login'
import ThirdPage from './Components/ThirdPage'

function App() {
  return (
    <div className="App">
     
      <FirstPage></FirstPage>
      <h3>
      <h3>
        A stock market, equity market or share market is the aggregation of buyers and sellers of stocks (also called shares), 
        which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies
         which are sold to investors through equity crowdfunding platforms. 
        </h3>
      </h3>
      <Login></Login>
      <ThirdPage></ThirdPage>
    </div>
  );
}

export default App;
