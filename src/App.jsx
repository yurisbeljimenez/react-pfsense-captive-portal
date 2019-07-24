import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from './Loading';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));
const NotFound = lazy(() => import('./routes/NotFound'));

const App = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/error" component={Error} />
        <Route path="/logout" component={Logout} />
        <Route path="/progress" component={Progress} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
