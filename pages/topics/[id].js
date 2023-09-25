import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";
import { getAllTopicIds, getTopicData } from "../../lib/topics";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const topicData = await getTopicData(params.id);
  return {
    props: {
      topicData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTopicIds();
  return {
    paths,
    fallback: false,
  };
}

function TopicImage(topicId) {
  const topicIdValue = topicId.topicId;
  const showTopicImage =
    (topicIdValue === "about the day") | (topicIdValue === "our story");
  return showTopicImage ? (
    <Image
      src={`/images/${topicIdValue}.jpg`}
      height={884}
      width={884}
      alt={topicIdValue}
      className="center"
    />
  ) : null;
}

export default function Topic({ topicData }) {
  return (
    <Layout>
      <Head>
        <title>Isabella and Matthew - {topicData.id}</title>
      </Head>
      <h2> {topicData.id}</h2>
      <TopicImage topicId={topicData.id} />

      <br />
      <div dangerouslySetInnerHTML={{ __html: topicData.contentHtml }} />
    </Layout>
  );
}
