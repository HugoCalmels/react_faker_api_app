import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './components/Customers';

const App = () => (
  <div className="app">
  <h1>Hello World</h1>
    <Customers />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));