import Link from "next/link";
import { useState, memo, useEffect } from "react";
import styles from "./transitionLayout.module.css";

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
        <ul class="flex">
          <li>
            <Link href="/topics/about">About</Link>
          </li>
          <li>
            <Link href="/topics/venue">Venue</Link>
          </li>
          <li>
            <Link href="/topics/accomodation">Accomodation</Link>
          </li>
          <li>
            <Link href="/topics/next steps">Next Steps</Link>
          </li>
        </ul>
      </nav>

      <main
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </main>
    </div>
  );
}
