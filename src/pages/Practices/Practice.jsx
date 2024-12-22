import React from "react";
import PageTitle from "../../Components/Title.jsx/PageTitle.jsx";
import Section from "../../Components/Title.jsx/Section.jsx";
import HomeTodos from "./ToDoApp/HomeTodos.jsx";
import CompleteTodo from "./complete todo app/CompleteTodoApp.jsx";
import CountryApp from "./Country App/Index";

const Practice = () => {
  return (
    <Section>
      <PageTitle heading="Practice" title="Practice" />

      <HomeTodos />
      <CompleteTodo />
      <CountryApp />
    </Section>
  );
};

export default Practice;

// import React, { useState } from "react";

// import PageTitle from "../../Components/Title.jsx/PageTitle.jsx";
// import State_lifting from "./Sections/State_lifting.jsx";
// import Section from "../../Components/Title.jsx/Section.jsx";
// import Card from "../../Components/Card.jsx";
// const parentToChild = [
//   {
//     id: "1",
//     name: "ashiful islam",
//     title: "parent data",
//     desc: "this data is from parent",
//   },
//   {
//     id: "2",
//     name: "amit hasan",
//     title: "parent data",
//     desc: "this data is from parent",
//   },
// ];
// const Practice = () => {

//   const [newData, setNewData] = useState(parentToChild);

//   const handleChildData = (rData) => {
//     console.log(rData);
//      setNewData([...newData,rData]);
//   };
//   return (
//     <div>
//       <PageTitle heading="Practice" title="Practice" />
//       <State_lifting
//         handleChildData={handleChildData}
//       />

//       <Section>
//         <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
//           {newData &&
//             newData.map(({ id, name, title, desc }) => (
//               <Card key={id}>
//                 <p>Name: {name}</p>
//                 <p>Type: {title}</p>
//                 <p>Decs: {desc}</p>
//               </Card>
//             ))}
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default Practice;
