import React from "react";
import Section from "../../Components/Title.jsx/Section";
import PageTitle from "../../Components/Title.jsx/PageTitle";

const Blog = () => {
  return (
    <Section classname="">
      <div>
        <PageTitle heading="blog page" title="Blog" />
      </div>
    <div className="mt-[40px]">
    নিজে ব্লগ লেখার মতো হিম্মত এখনো হয়নাই। পরবর্তীরে আবার আইসেন
    </div>
    </Section>
  );
};

export default Blog;
