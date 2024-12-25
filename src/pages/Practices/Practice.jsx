import React from "react";
import PageTitle from "../../Components/Title.jsx/PageTitle.jsx";
import Section from "../../Components/Title.jsx/Section.jsx";
import HomeTodos from "./ToDoApp/HomeTodos.jsx";
import CompleteTodo from "./complete todo app/CompleteTodoApp.jsx";
import CountryApp from "./Country App/Index";
import FakeStoreApi from "./Sections/FakeStoreApi.jsx";
import Components1 from "./UseContextHook/PropsDrilling/ParentComponent.jsx";
import ParentComponent from "./UseContextHook/PropsDrilling/ParentComponent.jsx";
import Toggle from "../../Components/Toggle.jsx";
import UseRefexample from "./Hooks/UseRefexample.jsx";

const Practice = () => {
  return (
    <div className="mt-20">
      <Section>
        <PageTitle heading="Practice" title="Practice" />

        <HomeTodos />
        <CompleteTodo />
        <ParentComponent />
        <UseRefexample />
        <FakeStoreApi />
        <CountryApp />
      </Section>
    </div>
  );
};

export default Practice;
