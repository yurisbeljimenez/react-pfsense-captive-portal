import React, { Suspense, lazy, Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './Loading';
import DialogMessage from './DialogMessage';

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
      timecredit: 5356,
      isDialogOpen: true
    }
    this.baseState = this.state;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  resetForm(event) {
    event.preventDefault();
    this.setState(this.baseState);

  }

  render() {
    return (
      <Fragment>
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" render={() => (
                <Auth
                  auth_user={this.state.auth_user}
                  auth_pass={this.state.auth_pass}
                  auth_voucher={this.state.auth_voucher}
                  handleInputChange={this.handleInputChange}
                  resetForm={this.resetForm} />
              )} />
              <Route path="/error" component={Error} />
              <Route path="/logout" component={Logout} />
              <Route path="/progress" component={Progress} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
        {this.state.isDialogOpen ? <DialogMessage isOpen={this.state.isDialogOpen} timecredit={this.state.timecredit} /> : null}
      </Fragment>
    )
  }
};

export default App;
