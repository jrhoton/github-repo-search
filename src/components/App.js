import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './containers/Search/Search';
import Details from './containers/Details/Details';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/details' component={Details} />
          <Route path='/' component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
