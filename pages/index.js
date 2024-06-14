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
    <Layout home showNav>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {/* <h2 className="bold italic">
          We're Getting Married - Please Save the Date!
        </h2>
        <h2 className="bold italic">
          Please Save the Date for the marriage of Isabella Mitchell and Matthew
          LLoyd
        </h2> */}
        {/* <h1 className="h2script">Save the Date</h1> */}
        {/* <p className="h2script">Isabella Mitchell</p>
        <p className="h2script">Matthew Lloyd</p> */}
        {/* <p class="homePageParagraph bold italic">
          We're getting married, please save the date!
        </p> */}
        {/* <p className="homePageParagraph">
          Isabella Mitchell & Matthew Lloyd are getting married
        </p> */}
        <h2>We're getting married!</h2>
        <p className="homePageParagraph bold">Saturday 10th August 2024</p>
        <p className="homePageParagraph">The Barn at Berryfields, Meriden</p>
        <p className="homePageParagraph">Kindly RSVP by Sunday 7th July</p>
      </section>
    </Layout>
  );
}
