import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedTopicsData } from "../lib/topics";
import Link from "next/link";

export async function getStaticProps() {
  const allTopicsData = getSortedTopicsData();
  return {
    props: {
      allTopicsData,
    },
  };
}

export default function Home({ allTopicsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 class="bold italic">
          We're Getting Married - Please Save the Date!
        </h2>
        {/* <p class="homePageParagraph bold italic">
          We're getting married, please save the date!
        </p> */}
        <p class="homePageParagraph">Saturday 10th August 2024</p>
        <p class="homePageParagraph">The Barn at Berryfields, Meriden</p>
        <p class="homePageParagraph">Invitation to follow</p>
      </section>
    </Layout>
  );
}
