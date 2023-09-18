import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import TransitionLayout from "./transitionLayout";
import Link from "next/link";

const headerText = "My Heading";
export const siteTitle = "My Site Title";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Write something here" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt=""
            />
          </Link>
          <h1>{headerText}</h1>
        </>
      </header>
      <main>
        <TransitionLayout>{children}</TransitionLayout>
      </main>
    </div>
  );
}
