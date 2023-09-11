/* eslint-disable react/react-in-jsx-scope */
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CustomCarousel from "./components/carousel";
import AdvetiseCard from "./components/card";
import Layout from "./components/Layout";

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
      <Layout title="Home Page" description="Welcome to my home page.">
        <CustomCarousel />
        <div className={styles.maincard}>
          <AdvetiseCard />
          <AdvetiseCard />
          <AdvetiseCard />
        </div>
      </Layout>
    </>
  );
}
