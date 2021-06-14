import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorModal from './views/ErrorModal/ErrorModal';
import Search from './containers/Search/Search';
import Details from './containers/Details/Details';

const App = () => {
  const error = useSelector(state => state.repo.error);

  return (
    <BrowserRouter basename='/github-repo-search'>
      {error ? <ErrorModal message={error.message} /> : null}
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
