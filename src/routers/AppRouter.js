import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieSearchPage from '../components/MovieSearchPage';
import NotFoundPage from '../components/NotFoundPage';

/** route according to url. No matches will go to Not Found Page */
const AppRouter = () => (
  <BrowserRouter>
    <div>

      <Switch>
        <Route path="/" component={MovieSearchPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </BrowserRouter>
);


export default AppRouter;
