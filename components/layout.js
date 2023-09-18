import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import TransitionLayout from "./transitionLayout";
import Link from "next/link";

const headerText = "Isabella & Matthew";
export const siteTitle = "My Site Title";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Write something here" />
        <meta name="og:title" content={siteTitle} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Seaweed+Script&family=Dawning+of+a+New+Day&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <>
          <Link href="/">
            <Image
              priority
              src="/images/sunflowers-ltr.png"
              height={240}
              width={240}
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
