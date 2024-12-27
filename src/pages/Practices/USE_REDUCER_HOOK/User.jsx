import React from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import Card from "../../../Components/Card";
import Button from "../../../Components/Button";

const User = ({ user, onBtnId }) => {
  const btnClkId = (e) => {
    onBtnId(e);
  };
  return (
    <>
      {user.map((item) => (
        <Card key={item.id} className="flex items-center justify-between">
          <p className="my-1 ml-2 flex items-center capitalize">
            <FaUser className="mr-2" />
            {item.title}
          </p>
          <Button
            varient="df"
            onClick={() => {
              btnClkId(item.id);
            }}
          >
            <FaTrash className="mx-auto" />
          </Button>
        </Card>
      ))}
    </>
  );
};

export default User;
