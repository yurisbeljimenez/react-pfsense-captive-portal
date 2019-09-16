import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import AuthLoading from './components/AuthLoading';
import { useSelector } from 'react-redux';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));

const App = () => {

  const active_view = useSelector(state => state.active_view);

  if (active_view === '/progress') {
    return (
      <Suspense fallback={<Loading />}>
        <Progress />
      </Suspense>
    )
  } else if (active_view === '/logout') {
    return (
      <Suspense fallback={<Loading />}>
        <Logout />
      </Suspense>
    )
  } else if (active_view === '/error') {
    return (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<AuthLoading />}>
      <Auth />
    </Suspense>
  )
}

export default App;
