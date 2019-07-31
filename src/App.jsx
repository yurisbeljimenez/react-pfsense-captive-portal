import React, { Suspense, lazy, Component } from 'react';
import Loading from './Loading';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_user: '',
      auth_pass: '',
      auth_voucher: '',
      timecredit: '',
      active_view: '/progress'
    }
    this.baseState = this.state;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdateView = this.handleUpdateView.bind(this);
    this.handleTimecredit = this.handleTimecredit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleUpdateView(view) {
    this.setState({ active_view: view });
  }

  handleTimecredit(value) {
    this.setState({ timecredit: value })
  }

  resetForm(event) {
    event.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    if (this.state.active_view === '/progress') {
      return (
        <Suspense fallback={<Loading />}>
          <Progress updateView={() => this.handleUpdateView} />
        </Suspense>
      )
    } else if (this.state.active_view === '/logout') {
      return (
        <Suspense fallback={<Loading />}>
          <Logout updateView={() => this.handleUpdateView} />
        </Suspense>
      )
    } else if (this.state.active_view === '/error') {
      return (
        <Suspense fallback={<Loading />}>
          <Error updateView={() => this.handleUpdateView} />
        </Suspense>
      )
    }

    return (
      <Suspense fallback={<Loading />}>
        <Auth
          auth_user={this.state.auth_user}
          auth_pass={this.state.auth_pass}
          auth_voucher={this.state.auth_voucher}
          handleInputChange={this.handleInputChange}
          handleTimecredit={this.handleTimecredit}
          resetForm={this.resetForm} />
      </Suspense>
    )
  }
};

export default App;
