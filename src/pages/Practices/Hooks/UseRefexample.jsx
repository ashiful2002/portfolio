import React, { useRef, useState } from "react";
import Toggle from "../../../Components/Toggle";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { Button } from "react-bootstrap";
import { Input } from "antd";

const UseRefexample = () => {
  const userNameRef = useRef();
  const UserPasswordRef = useRef();
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    e.target.value;
  };
  const handlePassChanege = (e) => {
    e.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let name = userNameRef.current.value;
    let password = UserPasswordRef.current.value;

    console.log({ name, password });
  };

  return (
    <>
      <PageTitle heading="Use Ref hook" />
      <Toggle>
        <Section>
          <div>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="UserName">User Name:</label>
                  <Input
                    type="text"
                    name="UserName"
                    id="UserName"
                    ref={userNameRef}
                    //   value={name}
                    //   onChange={handleNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="UserPassword">Password:</label>
                  <Input
                    type="password"
                    name="userPAssword"
                    id="UserPassword"
                    ref={UserPasswordRef}
                    //   value={password}
                    //   onChange={handlePassChanege}
                  />
                </div>
                <div>
                  <Button type="submit" variant="success" className="mt-2">
                    submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </Toggle>
    </>
  );
};

export default UseRefexample;
