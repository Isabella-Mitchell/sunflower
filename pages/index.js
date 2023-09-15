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
      <section className={utilStyles.headingMd}>
        <p>Sample Text</p>
        <p>
          (Sample more text <a href="https://nextjs.org/learn">sample link</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Links</h2>
        <ul className={utilStyles.list}>
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
