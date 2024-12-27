import React from "react";
import User from "./User";

const Users = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {user.map((users) => (
        <User user={users} key={users.id} />
      ))}
    </div>
  );
};

export default Users;
