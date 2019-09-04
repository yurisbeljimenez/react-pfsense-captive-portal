import React, { Suspense, lazy, useState } from 'react';
import Loading from './components/Loading';
import AuthLoading from './components/AuthLoading';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));

const App = () => {

  const [active_view, handleUpdateView] = useState('');

  if (active_view === '/progress') {
    return (
      <Suspense fallback={<Loading />}>
        <Progress updateView={handleUpdateView} />
      </Suspense>
    )
  } else if (active_view === '/logout') {
    return (
      <Suspense fallback={<Loading />}>
        <Logout updateView={handleUpdateView} />
      </Suspense>
    )
  } else if (active_view === '/error') {
    return (
      <Suspense fallback={<Loading />}>
        <Error updateView={handleUpdateView} />
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<AuthLoading />}>
      <Auth updateView={handleUpdateView} />
    </Suspense>
  )
}

export default App;
