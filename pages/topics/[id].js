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
      <article id="no-css-no-breaking">
        <h3>
          <span role="text">
            <div>
              <time datetime="20 December 2023">20 December 2023</time>
              <span>, </span>
            </div>
            <span>Another test for refresh</span>
            <span>, </span>
            <span>Harvey Peachey</span>
          </span>
        </h3>
        <div>
          <div>
            <p>Testing with a new card no-css-no-breaking</p>
          </div>
        </div>
      </article>
      <article id="no-css-no-breaking-change-div-to-span">
        <h3>
          <span role="text">
            <span>
              <time datetime="20 December 2023">20 December 2023</time>
              <span>, </span>
            </span>
            <span>Another test for refresh</span>
            <span>, </span>
            <span>Harvey Peachey</span>
          </span>
        </h3>
        <div>
          <div>
            <p>
              Testing with a new card no-css-no-breaking-change-div-to-spang
            </p>
          </div>
        </div>
      </article>
      <article id="with-css-no-breaking">
        <h3>
          <span role="text">
            <div className="displayFlex">
              <time datetime="20 December 2023" className="displayBlock">
                20 December 2023
              </time>
              <span>, </span>
            </div>
            <span className="displayBlock">Another test for refresh</span>
            <span>, </span>
            <span className="displayBlock">Harvey Peachey</span>
          </span>
        </h3>
        <div>
          <div>
            <p>Testing with a new card with-css-no-breaking</p>
          </div>
        </div>
      </article>
      <article id="without-css-with-breaking">
        <h3>
          <span role="text">
            <div>
              <time datetime="20 December 2023">20 December 2023</time>
              <span>, </span>
              <span data-testid="breaking-news-label">Breaking</span>
              <span>, </span>
            </div>
            <span>Test for refresh</span>
            <span>, </span>
            <span>Rushdi Abu Alouf - Reporting from Istanbul</span>
          </span>
        </h3>
        <div>
          <div>
            <p>
              Downing Street has moved to announce who will replace Robert
              Jenrick who quit last night as immigration minister.
              without-css-with-breaking
            </p>
          </div>
          <div>
            <p>
              No 10 has decided to split the role. So Michael Tomlinson has been
              appointed Minister for Illegal Migration in the Home Office, with
              Tom Pursglove as Minister for Legal Migration and Delivery.
            </p>
          </div>
          <div>
            <p>Testing an update within this post card</p>
          </div>
        </div>
      </article>
      <article id="with-css-flex-with-breaking">
        <h3>
          <span role="text">
            <div className="displayFlex">
              <time datetime="20 December 2023">20 December 2023</time>
              <span>, </span>
              <span data-testid="breaking-news-label">Breaking</span>
              <span>, </span>
            </div>
            <span>Test for refresh</span>
            <span>, </span>
            <span>Rushdi Abu Alouf - Reporting from Istanbul</span>
          </span>
        </h3>
        <div>
          <div>
            <p>
              Downing Street has moved to announce who will replace Robert
              Jenrick who quit last night as immigration minister.
              with-css-with-breaking
            </p>
          </div>
          <div>
            <p>
              No 10 has decided to split the role. So Michael Tomlinson has been
              appointed Minister for Illegal Migration in the Home Office, with
              Tom Pursglove as Minister for Legal Migration and Delivery.
            </p>
          </div>
          <div>
            <p>Testing an update within this post card</p>
          </div>
        </div>
      </article>
      <article id="with-css-full-with-breaking">
        <h3>
          <span role="text">
            <div className="displayFlex">
              <time className="displayBlock" datetime="20 December 2023">
                20 December 2023
              </time>
              <span>, </span>
              <span
                data-testid="breaking-news-label"
                className="displayFlexBreaking"
              >
                Breaking
              </span>
              <span>, </span>
            </div>
            <span className="displayBlock">Test for refresh</span>
            <span>, </span>
            <span className="displayBlock">
              Rushdi Abu Alouf - Reporting from Istanbul
            </span>
          </span>
        </h3>
        <div>
          <div>
            <p>
              Downing Street has moved to announce who will replace Robert
              Jenrick who quit last night as immigration minister.
              with-css-full-with-breaking
            </p>
          </div>
          <div>
            <p>
              No 10 has decided to split the role. So Michael Tomlinson has been
              appointed Minister for Illegal Migration in the Home Office, with
              Tom Pursglove as Minister for Legal Migration and Delivery.
            </p>
          </div>
          <div>
            <p>Testing an update within this post card</p>
          </div>
        </div>
      </article>
      <article id="everything-inline-block-with-breaking">
        <h3>
          <span role="text">
            <div className="displayInlineBlock">
              <time className="displayInlineBlock" datetime="20 December 2023">
                20 December 2023
              </time>
              <span>, </span>
              <span
                data-testid="breaking-news-label"
                className="displayInlineBlock"
              >
                Breaking
              </span>
              <span>, </span>
            </div>
            <span className="displayInlineBlock">Test for refresh</span>
            <span>, </span>
            <span className="displayInlineBlock">
              Rushdi Abu Alouf - Reporting from Istanbul
            </span>
          </span>
        </h3>
        <div>
          <div>
            <p>
              Downing Street has moved to announce who will replace Robert
              Jenrick who quit last night as immigration minister.
              everything-inline-block-with-breaking
            </p>
          </div>
          <div>
            <p>
              No 10 has decided to split the role. So Michael Tomlinson has been
              appointed Minister for Illegal Migration in the Home Office, with
              Tom Pursglove as Minister for Legal Migration and Delivery.
            </p>
          </div>
          <div>
            <p>Testing an update within this post card</p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
