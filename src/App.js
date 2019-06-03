import React from 'react';
import AppNavBar from './components/layout/AppNavBar'
import Paths from './components/paths/Paths'
import './App.css';
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div class="app">
          <AppNavBar />
          <Paths />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
