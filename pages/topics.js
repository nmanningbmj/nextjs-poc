import React from "react";
import { topic } from "../data/topics";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      topicList: topic,
    },
  };
};

export default ({ topicList }) => (
  <div className="container">
    {topicList.map((topic, i) => (
      <Link href={`post/${topic.id}`}>
        <div className="" key={topic.id}>
          <p> {topic.topic}</p>
        </div>
      </Link>
    ))}
  </div>
);
