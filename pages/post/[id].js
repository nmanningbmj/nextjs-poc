import { topic } from "../../data/topics";

export const getStaticProps = async ({ params }) => {
  const topicList = topic.filter((x) => x.id.toString() === params.id);
  return {
    props: {
      tp: topicList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = topic.map((x) => ({
    params: { id: x.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ tp }) => (
  <>
    <p>{tp.id}</p>
    <h1>Summary page {tp.topic}</h1>
    <p>{tp.description}</p>
  </>
);
