import React from "react";
import UserItem from "./UserItem";
import Loading from "../components/layouts/Loading";

const Users = ({ users, loading }) => {
  if (loading) return <Loading />;
  else {
    return (
      <div className='row'>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};
export default Users;
