import React from "react";
import User from "./User";

const Users = ({ users, handleDeleteUser }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </div>
  );
};

export default Users;
