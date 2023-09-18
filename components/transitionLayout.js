import Link from "next/link";
import { useState, memo, useEffect } from "react";
import styles from "./transitionLayout.module.css";
// import Nav from "./nav";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/topics/accomodation">Accomodation</Link>
        <Link href="/topics/venue">Venue</Link>
      </nav>

      {/* <Nav /> */}

      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
    </div>
  );
}
