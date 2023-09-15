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
        <p>Sample Text</p>
        <p>
          (Sample more text <a href="https://nextjs.org/learn">sample link</a>.)
        </p>
      </section>

      <section>
        <h2>Links</h2>
        <ul>
          {allTopicsData.map(({ id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/topics/${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
