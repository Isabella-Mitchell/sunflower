import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import TransitionLayout from "./transitionLayout";
import Link from "next/link";

export const siteTitle = "Isabella and Matthew";

export default function Layout({ children, home, showNav }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/sunflowers-ltr.png" />
        <meta name="description" content="We are getting married!" />
        <meta name="og:title" content={siteTitle} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
        {showNav && <h1>Isabella & Matthew</h1>}
        {showNav && <h2>Saturday 10th August 2024</h2>}
      </header>
      <TransitionLayout showNav={showNav}>{children}</TransitionLayout>
    </div>
  );
}
