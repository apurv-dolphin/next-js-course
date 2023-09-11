/* eslint-disable react/react-in-jsx-scope */
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CustomCarousel from "./components/carousel";
import AdvetiseCard from "./components/card";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token === null) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your meta description goes here." />
      </Head>
      <CustomCarousel />
      <div className={styles.maincard}>
        <AdvetiseCard />
        <AdvetiseCard />
        <AdvetiseCard />
      </div>
    </>
  );
}
