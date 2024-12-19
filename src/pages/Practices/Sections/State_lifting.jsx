import React from "react";
import Section from "../../../Components/Title.jsx/Section";
import Card from "../../../Components/Card";
const State_lifting = (props) => {
  const childToParent = [
    {
      id: "11",
      name: "nasim mahmud",
      title: "child data",
      desc: "state liftomg from child to parent",
    },
  ];
  props.handleChildData(childToParent)
  return (
    <Section>
      {/* {parentToChild.map(({ id, name, title, desc }) => (
        <Card id={id}>
          <p>Name: {name}</p>
          <p>Type: {title}</p>
          <p>Decs: {desc}</p>
        </Card>
      ))} */}
    </Section>
  );
};

export default State_lifting;
