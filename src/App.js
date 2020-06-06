import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Search from "./components/Search";
import Users from "./users/Users";
import User from "./users/User";
import Alert from "./components/layouts/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: [],
  };

  // search for User
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // get user Profile
  getUser = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      user: res.data,
    });
  };

  // get user Repos
  getUserRepos = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      repos: res.data,
    });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, loading, alert, user, repos } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className='container mt-3'>
            <Alert alert={alert} />
            <Switch>
              <Route
                path='/'
                exact
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      users={users}
                      setAlert={this.setAlert}
                      alert={alert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/users/:login'
                render={(props) => (
                  <User
                    {...props}
                    loading={loading}
                    getUser={this.getUser}
                    user={user}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
