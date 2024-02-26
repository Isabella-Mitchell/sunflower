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
      <div id="live-header-with-role-text">
        <div>
          <h1 id="content">
            <span role="text">
              <span>My</span>
              <span> Headings 4</span>
            </span>
            {/* <svg
                fill="currentColor"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                width="24"
                height="24"
              >
                <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
                <circle cx="16" cy="16" r="8.5"></circle>
              </svg>
              <span role="text">
                <span dir="ltr" aria-hidden="true">
                  LIVE{" "}
                </span>
                <span lang="en-GB">Live, </span>
                <span>Pidgin test 35</span>
              </span> */}
          </h1>
          <p class="css-1grox9a">Pidgin test 2 - the description</p>
        </div>
      </div>
      <div id="promo-text-with-role-text">
        <h3 class="bbc-5pf132 e47bds20">
          <div className="customDisplay">
            <svg
              class="first-promo bbc-xjd75s"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
              width="16"
              height="16"
            >
              <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
              <circle cx="16" cy="16" r="8.5" class="bbc-1rjgwf9"></circle>
            </svg>
            <span role="text">
              <span dir="ltr" class="bbc-1533yks">
                KAI TSAYE{" "}
              </span>
              <span lang="en-GB" class="bbc-m04vo2">
                ,{" "}
              </span>
              'Raɗe-raɗin juyin mulki a Najeriya ba gaskiya ba ne'
            </span>
          </div>
        </h3>
        <p class="promo-paragraph bbc-1uwnbmi ewjbyra0">
          Wannan shafi ne da ke kawo muku abubuwan da ke faruwa a Najeriya da
          sauran sassan duniya.
        </p>
      </div>
      <div id="live-header-no-role-text">
        <div>
          <h1 class="css-ew35jg" id="content" tabindex="-1">
            <div data-testid="live-label" className="customDisplay">
              <svg
                fill="currentColor"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                width="24"
                height="24"
              >
                <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
                <circle cx="16" cy="16" r="8.5"></circle>
              </svg>
              <span>
                <span dir="ltr" aria-hidden="true">
                  LIVE{" "}
                </span>
                <span lang="en-GB">Live, </span>
                <span>Pidgin test 2</span>
              </span>
            </div>
          </h1>
          <p class="css-1grox9a">Pidgin test 2 - the description</p>
        </div>
      </div>
      <div id="promo-text-no-role-text">
        <h3 class="bbc-5pf132 e47bds20">
          <div className="customDisplay">
            <svg
              class="first-promo bbc-xjd75s"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
              width="16"
              height="16"
            >
              <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
              <circle cx="16" cy="16" r="8.5" class="bbc-1rjgwf9"></circle>
            </svg>
            <span>
              <span dir="ltr" class="bbc-1533yks">
                KAI TSAYE{" "}
              </span>
              <span lang="en-GB" class="bbc-m04vo2">
                ,{" "}
              </span>
              'Raɗe-raɗin juyin mulki a Najeriya ba gaskiya ba ne'
            </span>
          </div>
        </h3>
        <p class="promo-paragraph bbc-1uwnbmi ewjbyra0">
          Wannan shafi ne da ke kawo muku abubuwan da ke faruwa a Najeriya da
          sauran sassan duniya.
        </p>
      </div>
    </Layout>
  );
}
