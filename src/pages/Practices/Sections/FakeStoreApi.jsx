import React, { useEffect, useState } from "react";

import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Card from "../../../Components/Card";
import Rspinner from "../../../Components/Spinner";
import Button from "../../../Components/Button";
import * as motion from "motion/react-client";

import { spring } from "motion";
import { FaArrowUp } from "react-icons/fa6";
const url = "https://fakestoreapi.com/products";

const FakeStoreApi = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setisLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => setdata(json));
    setisLoading(false);
  }, [url]);
  console.log(data);
  const handleBntClick = () => {
    setToggle(!toggle);
  };
const up = < FaArrowUp />;
  return (
    <Section id="fakeStore">
      <PageTitle heading="Fake Store" />
      <div>
        {isLoading && <Rspinner>Store data is loading</Rspinner>}
        {data.map(({ id, title, price, description, image, category }) => {
          return (
            <Card key={id} className="">
              <img
                src={image}
                alt={title}
                className="mx-auto mb-3 rounded-xl"
                width={300}
              />
              <h5>{title}</h5>
              <p>
                Category : <span> {category}</span>
              </p>
              <p className="">
               Price: {price} $
              </p>
              <motion.div>
                <Button onClick={handleBntClick} className="mt-0">
                  {toggle ? "hide" : "details"}
                </Button>
                {toggle && <motion.p>{description}</motion.p>}
              </motion.div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default FakeStoreApi;
