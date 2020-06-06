import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/layouts/Loading";
import Ripo from "./Ripo";

class User extends Component {
  componentDidMount() {
    const login = this.props.match.params.login;
    this.props.getUser(login);
    this.props.getUserRepos(login);
  }

  render() {
    const { loading } = this.props.loading;
    const {
      login,
      bio,
      avatar_url,
      followers,
      company,
      blog,
      email,
      name,
      location,
      html_url,
      following,
      public_repos,
      public_gists,
    } = this.props.user;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <Link to='/' className='btn btn-outline-dark'>
          Back to search
        </Link>
        <div className='card mt-2 pb-3 shadow '>
          <div className='row ml-1 '>
            <div className='col-md-6  '>
              <img
                src={avatar_url}
                alt={login}
                className='img-thumbnail mt-2 '
              />
              <br />
              <h3> {name}</h3>
              <a href={html_url} className='btn btn-dark'>
                Visit Github Profile{" "}
              </a>
            </div>
            <div className='col-md-6 pt-2 '>
              <h2 className='mb-5 text-center '> {login} </h2>
              <p>
                Bio : {bio !== null ? <b> {bio} </b> : " null"}
                <br />
                location : {location !== null ? <b> {location} </b> : " null"}
                <br />
                Company : {company !== null ? <b> {company} </b> : " null"}
                <br />
                Blog : {blog !== "" ? <b> {blog} </b> : " null"}
                <br />
                Email : {email !== null ? <b> {email} </b> : " null"}
                <br />
              </p>
              <ul className='list-inline'>
                <li className='list-inline-item rounded p-1 bg-primary '>
                  Followers : {followers}
                </li>
                <li className='list-inline-item rounded p-1 bg-danger '>
                  Following : {following}
                </li>
                <li className='list-inline-item rounded p-1 bg-success '>
                  Public Repos : {public_repos}
                </li>
                <li className='list-inline-item rounded p-1 bg-warning '>
                  Public Gists : {public_gists}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 mt-4 '>
            <center>
              <h1> Repos</h1>
            </center>
          </div>
          {this.props.repos.map((repo) => {
            return (
              <div className='col-md-4'>
                {" "}
                <Ripo repo={repo} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default User;
