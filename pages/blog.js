import { FaReact } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Blogdata from "./blogdata/blogdata";
import Image from "next/image";

export default function Blog() {
  const [data, setDate] = useState(Blogdata);

  const sortedData = data.sort(function (a, b) {
    return a.id - b.id;
  });

  useEffect(() => {
    setDate(sortedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.mainblog}>        
         <div className={styles.iconleft}> <FaReact /></div>
        <h1>This is Blog Of React Road-map</h1>
        <div className={styles.iconright}> <FaReact /></div>
      </div>
      {data.map((newdata) => (
        <div key={newdata.id}>
          <div className={styles.blogitems}>
            <Link href={`/blogpost/${newdata.slug}`}>
              <h2 className={styles.bloagheader}>{newdata.title}</h2>
            </Link>
            <p className={styles.shortdiscription}>{newdata.shortdiscription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
