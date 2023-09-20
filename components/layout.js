import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import TransitionLayout from "./transitionLayout";
import Link from "next/link";

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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Seaweed+Script&family=Dawning+of+a+New+Day&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <Link id="main-image-link" href="/">
          <Image
            priority
            src="/images/sunflowers-ltr.png"
            height={240}
            width={240}
            alt=""
          />
        </Link>
        <h1>Isabella & Matthew</h1>
        <h2>Saturday 10th August 2024</h2>
      </header>
      <TransitionLayout>{children}</TransitionLayout>
    </div>
  );
}
