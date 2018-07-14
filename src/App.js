import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import {
  ConnectedRouter
} from 'react-router-redux';


import store from './store';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import logo from './logo.svg';
import './App.css';

const history = createHistory();


class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/home" component={Homepage} />
            <Route path="/about" component={Aboutpage} />
            <Route path="/contact" component={Contactpage} />
          </div>
        </ConnectedRouter>
      </Provider>  
    );
  }
}

export default App;
