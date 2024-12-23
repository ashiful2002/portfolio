import React from "react";
import PageTitle from "../../Components/Title.jsx/PageTitle.jsx";
import Section from "../../Components/Title.jsx/Section.jsx";
import HomeTodos from "./ToDoApp/HomeTodos.jsx";
import CompleteTodo from "./complete todo app/CompleteTodoApp.jsx";
import CountryApp from "./Country App/Index";
import FakeStoreApi from "./Sections/FakeStoreApi.jsx";

const Practice = () => {
  return (
    <Section>
      <PageTitle heading="Practice" title="Practice" />

      <HomeTodos />
      <CompleteTodo />
      <FakeStoreApi />
      <CountryApp />
    </Section>
  );
};

export default Practice;
