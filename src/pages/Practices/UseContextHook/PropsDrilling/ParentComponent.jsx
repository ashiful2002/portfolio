import React, { useState } from "react";
import Component2 from "./Component2";
import { userContext } from "../UserContext";
import PageTitle from "../../../../Components/Title.jsx/PageTitle";
import Toggle from "../../../../Components/Toggle";

const userData = [
  { name: "nasim", id: 111 },
  { name: "antor", id: 2222 },
  { name: "murad", id: 3333 },
];
const adminData = { name: "mukto", id: 112233 };
const ParentComponent = () => {
  const [user, setuser] = useState(userData);
  const [admin, setAdmin] = useState(adminData);

  return (
    <>
      <PageTitle heading="user context hook" />
      <Toggle>
        <userContext.Provider value={{ user, admin }}>
          <Component2 />
        </userContext.Provider>
      </Toggle>
    </>
  );
};

export default ParentComponent;
