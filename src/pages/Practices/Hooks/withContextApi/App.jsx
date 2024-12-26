import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewUser from "./NewUser";
import Users from "./Users";
import Section from "../../../../Components/Title.jsx/Section";
import Toggle from "../../../../Components/Toggle";
import PageTitle from "../../../../Components/Title.jsx/PageTitle";
import { usersData } from "../../../../Constants/Index";
import { UsersContext } from "./Hook/UserContext";
import UsersProvider from "./Hook/useUsersContext";

const App = () => {
  return (
    <Section>
      <PageTitle heading="User Management app useing context api" />
      <Toggle>
        <UsersProvider>
          <NewUser />
          <Users />
        </UsersProvider>
      </Toggle>
    </Section>
  );
};

export default App;
