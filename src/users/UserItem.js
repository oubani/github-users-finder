import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className='card col-md-4 pt-3 mb-3 '>
      <img src={user.avatar_url} className='card-img-top ' alt={user.login} />
      <div className='card-body'>
        <h5 className='card-title'>{user.login}</h5>
        <Link to={"/users/" + user.login} className=' center btn btn-primary'>
          See More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
