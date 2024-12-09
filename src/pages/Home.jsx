import React from "react";
import Section from "../Components/Title.jsx/Section";
import heroImage from "../assets/hero.webp";
const Home = () => {
  return (
    <Section>
      <h1 className="heading">home page</h1>
      <div>
        <div className="flex items-center justify-center flex-col xl:flex-row  bg-slate-600 rounded  text-neutral-200 p-4">
          <div className="xl:w-1/2">
            <img
              src={heroImage}
              alt="heroImage"
              srcset=""
              className="rounded-xl p-2 w-[450px]"
            />
          </div>

          <div className="xl:w-1/2">
            <h2>Ashiful islam</h2>
            <h5>Web developer (Front end)</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos itaque quos qui eligendi quisquam, quo, ipsam
              consequatur repudiandae fugiat sint officia, quas assumenda!
              Accusamus ratione suscipit, quos molestias fugiat natus, dolor
              error ex sapiente facere aspernatur itaque. Perferendis
              consequuntur omnis optio possimus nulla veritatis deserunt harum
              nesciunt, consequatur quidem rem asperiores ex rerum vero, facere,
              laboriosam animi mollitia tempore soluta adipisci voluptatibus
              quae eum commodi eius. Magni ipsum non, cum, hic exercitationem
              cumque est consectetur cupiditate sequi, praesentium fugiat
              numquam.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="">
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
      </div> */}
    </Section>
  );
};

export default Home;
