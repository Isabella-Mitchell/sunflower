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
        <h2>We're Getting Married - Please Save the Date!</h2>
      </section>
    </Layout>
  );
}
