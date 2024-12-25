import React, { useContext } from "react";
import Component4 from "./Component4";
import { userContext } from "../UserContext";
import Card from "../../../../Components/Card";
import { Flex } from "antd";
const Component3 = () => {
  const { user, admin } = useContext(userContext);
  const { id, name } = admin;
  return (
    <div>
      <h1>Component 3</h1>
      <div className="m-2 rounded bg-amber-300 p-2 text-center capitalize text-white">
        <h3>Admin: {name}</h3>
        <h1> Admin id: {id}</h1>
      </div>
      <Flex>
        {user.map(({ id, name }) => (
          <Card key={id} className="flex justify-between capitalize">
            <h2>{name}</h2>
            <h2>{id}</h2>
          </Card>
        ))}
      </Flex>

      <Component4 />
    </div>
  );
};

export default Component3;
