import Link from "next/link";
import { useState, memo, useEffect } from "react";
import styles from "./transitionLayout.module.css";

export default function TransitionLayout({ children, showNav }) {
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
      {showNav && (
        <nav>
          <ul className="flex">
            {/* <li>
            <Link href="/">Save the Date</Link>
          </li> */}
            <li>
              <Link href="/topics/our story">Our Story</Link>
            </li>
            <li>
              <Link href="/topics/order of the day">Order of the Day</Link>
            </li>
            <li>
              <Link href="/topics/gifts">Gifts</Link>
            </li>
            <li>
              <Link href="/topics/dress code">Dress Code</Link>
            </li>
            <li>
              <Link href="/topics/venue and transport">Venue & Transport</Link>
            </li>
            <li>
              <Link href="/topics/accommodation">Accommodation</Link>
            </li>
          </ul>
        </nav>
      )}

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
