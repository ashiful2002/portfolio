import React, { useReducer, useState } from "react";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Toggle from "../../../Components/Toggle";
import { reducerData } from "../../../Constants/Index";
import Users from "./Users";
import User from "./User";
import NewUser from "./NewUser";

const ReducerApp = () => {
  const [user, setuser] = useState(reducerData);

  const [] = useReducer();
  
  const handleBtnID = (receivedID) => {
    console.log(receivedID);
    const filteredUser = user.filter((prev) => prev.id !== receivedID);
    setuser(filteredUser);
  };
  const handleNewTodo = (receivedTodo) => {
    setuser([...user, receivedTodo]);
  };
  return (
    <Section>
      <PageTitle heading="Use Reducer Hook" className="bg-orange-400" />
      <Toggle>
        <NewUser onNewTodo={handleNewTodo} />
        <User user={user} onBtnId={handleBtnID} />
      </Toggle>
    </Section>
  );
};

export default ReducerApp;
