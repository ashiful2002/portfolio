import React, { useContext } from "react";
import User from "./User";
import { useUsersContext } from "./Hook/useUsersContext";

const Users = () => {
  const { users } = useUsersContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
