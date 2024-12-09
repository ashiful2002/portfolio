import React from "react";
import Section from "../Components/Title.jsx/Section";

const Home = () => {
  return (
    <Section>
      <h1 className="heading">home page</h1>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div>
            {" "}
            <iframe
              src="https://engineershome.vercel.app/"
              width="400px"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
          <div>
            {" "}
            <iframe
              src="https://helloshe.org/"
              width="400px"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
          <div>
            {" "}
            <iframe
              src="https://photoholicah.vercel.app/"
              width="400px"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
          <div>
            {" "}
            <iframe
              src="https://rswa-rowmari.vercel.app/"
              width="400px"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
