import React, { Suspense, lazy, Component } from 'react';
import Loading from './Loading';
import SnackbarMessage from './SnackbarMessage';

const Auth = lazy(() => import('./routes/Auth'));
const Error = lazy(() => import('./routes/Error'));
const Logout = lazy(() => import('./routes/Logout'));
const Progress = lazy(() => import('./routes/Progress'));
const NotFound = lazy(() => import('./routes/NotFound'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_user: '',
      auth_pass: '',
      auth_voucher: '',
      timecredit: ''
    }
    this.baseState = this.state;

    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleTimecredit(value) {
    this.setState({ timecredit: value })
  }

  resetForm(event) {
    event.preventDefault();
    this.setState(this.baseState);

  }

  render() {
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
