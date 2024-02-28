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
      <article>
        <h3>
          <span role="text">
            <div className="outerDiv">
              <time>9 May 2023</time>
              <span className="visuallyHidden">, </span>
              <span className="breaking" data-testid="breaking-news-label">
                Breaking
              </span>
              <span className="visuallyHidden">, </span>
            </div>
            <span className="block">A Breaking news headline</span>
          </span>
        </h3>
        <div>
          <div>
            <p>A Breaking news with block</p>
          </div>
        </div>
      </article>
      <article>
        <h3 className="lineheight">
          <span role="text">
            <div className="outerDiv">
              <time>10 May 2023</time>
              <span className="visuallyHidden">, </span>
              <span className="breaking" data-testid="breaking-news-label">
                Breaking
              </span>
              <span className="visuallyHidden">, </span>
            </div>
            <span className="inlineBlock">
              B Breaking news headline with inline block
            </span>
          </span>
        </h3>
        <div>
          <div>
            <p>B Breaking news</p>
          </div>
        </div>
      </article>
      <article>
        <h3 className="lineheight">
          <span role="text">
            <div className="outerDiv">
              <time>11 May 2023</time>
              <span>, </span>
              <span className="breaking" data-testid="breaking-news-label">
                Breaking
              </span>
              <span>, </span>
            </div>
            <span className="block">
              J Breaking news headline with block and no visually hidden
            </span>
          </span>
        </h3>
        <div>
          <div>
            <p>C Breaking news</p>
          </div>
        </div>
      </article>
      <article>
        <h3 className="lineheight">
          <span role="text">
            <div className="outerDiv">
              <time>12 May 2023</time>
              <span>, </span>
              <span className="breaking" data-testid="breaking-news-label">
                Breaking
              </span>
              <span>, </span>
            </div>
            <span className="inlineBlock">
              D Breaking news headline with inline-block and no visually hidden
            </span>
          </span>
        </h3>
        <div>
          <div>
            <p>D Breaking news</p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
