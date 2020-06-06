import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("please fill the field", "danger");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            value={this.state.text}
            name='text'
            onChange={this.onChange}
            type='text'
            className='form-control'
            placeholder='insert users name'
          />
        </div>
        <input
          type='submit'
          value='Search'
          className='btn btn-block btn-primary mb-5'
        />
      </form>
    );
  }
}

export default Search;
