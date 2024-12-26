import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewUser from "./NewUser";
import Users from "./Users";
import Section from "../../../../Components/Title.jsx/Section";
import Toggle from "../../../../Components/Toggle";
import PageTitle from "../../../../Components/Title.jsx/PageTitle";

const usersData = [
  {
    id: uuidv4(),
    name: "ashiful islam",
  },
  {
    id: uuidv4(),
    name: "ariful islam",
  },
  {
    id: uuidv4(),
    name: "nasim mahmud",
  },
];

const UserManageMnetApp = () => {
  const [users, setUsers] = useState(usersData);
  const handleAddNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  const handleDeleteUser = (e) => {
    const filtereduser = users.filter((user) => user.id !== e);
    setUsers(filtereduser);
  };
  return (
    <Section>
      <PageTitle heading="User Management app without context api" />
      <Toggle>
        <NewUser handleAddNewUser={handleAddNewUser} />
        <Users users={users} handleDeleteUser={handleDeleteUser} />
      </Toggle>
    </Section>
  );
};

export default UserManageMnetApp;
