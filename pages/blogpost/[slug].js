import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Blogdata from "../blogdata/blogdata";
import styles from "../../styles/blogpost.module.css";

export default function Slug() {
  const [data, setData] = useState(Blogdata);
  const [blog, setBlog] = useState();
  const router = useRouter();
  const { slug } = router.query;

  const singleblog = data.filter((elem) => {
    if (elem.slug === slug) {
      return elem;
    }
  });

  useEffect(() => {
    setBlog(singleblog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <div>
      {blog &&
        blog.map((newblog, index) => (
          <div key={index}>
            <div className={styles.titleheader}>
              <h1>The title of the page {newblog.title}.</h1>
            </div>
            <hr />
            <div className={styles.imagecontainer}>
              <Image
                src={newblog.image}
                width={300}
                height={250}
                alt="not found"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>{newblog.content}</div>
          </div>
        ))}
    </div>
  );
}
