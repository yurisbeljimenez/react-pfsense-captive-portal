import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './Loading';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));
const NotFound = lazy(() => import('./routes/NotFound'));

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [voucher, setVoucher] = useState('');
  const [logout_id, setLogoutId] = useState('');
  const [zone, setZone] = useState('');

  return (
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

  )
};

export default App;
