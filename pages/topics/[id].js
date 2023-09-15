import Head from "next/head";
import Layout from "../../components/layout";
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

export default function Topic({ topicData }) {
  return (
    <Layout>
      <Head>
        {/* update to be a title */}
        <title>{topicData.id}</title>
      </Head>
      <h2> {topicData.id}</h2>
      <br />
      <div dangerouslySetInnerHTML={{ __html: topicData.contentHtml }} />
    </Layout>
  );
}
