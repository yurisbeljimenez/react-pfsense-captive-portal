import React, { Suspense, lazy, Component } from 'react';
import Loading from './components/Loading';
import AuthLoading from './components/AuthLoading';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_view: ''
    }
    this.baseState = this.state;
    this.handleUpdateView = this.handleUpdateView.bind(this);
  }

  handleUpdateView(view) {
    this.setState({ active_view: view });
  }

  render() {
    if (this.state.active_view === '/progress') {
      return (
        <Suspense fallback={<Loading />}>
          <Progress updateView={this.handleUpdateView} />
        </Suspense>
      )
    } else if (this.state.active_view === '/logout') {
      return (
        <Suspense fallback={<Loading />}>
          <Logout updateView={this.handleUpdateView} />
        </Suspense>
      )
    } else if (this.state.active_view === '/error') {
      return (
        <Suspense fallback={<Loading />}>
          <Error updateView={this.handleUpdateView} />
        </Suspense>
      )
    }

    return (
      <Suspense fallback={<AuthLoading />}>
        <Auth updateView={this.handleUpdateView} />
      </Suspense>
    )
  }
};

export default App;
