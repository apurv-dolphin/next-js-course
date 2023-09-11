import { FaReact } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import Blogdata from "./blogdata/blogdata";

const ScrollToTop = dynamic(() => import("./scrollToTop"));

export default function Blog() {
  // const data = Blogdata();
  // console.log(data);
  const [sort, setSort] = useState([])
  const router = useRouter();

  useEffect(() => {
    // const sortedData = data.sort((a, b) => a.id - b.id);
    setSort([]);
  }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token === null) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <div className={styles.mainblog}>
        <div>
          <FaReact className={styles.iconleft} />
        </div>
        <h1>This is Blog Of React Road-map</h1>
        <div>
          <FaReact className={styles.iconright} />
        </div>
      </div>
      {sort?.map((newdata) => (
        <div key={newdata.id} className={styles.blogitems}>
          <Link href={`/blogpost/${newdata.slug}`}>
            <h2 className={styles.bloagheader}>{newdata.title}</h2>
          </Link>
          <p className={styles.shortdiscription}>
            {newdata.shortdiscription}
          </p>
        </div>
      ))}
      <ScrollToTop />
    </div>
  );
}
