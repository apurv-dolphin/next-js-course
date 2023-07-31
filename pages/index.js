/* eslint-disable react/react-in-jsx-scope */
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CustomCarousel from "./components/carousel";
import AdvetiseCard from "./components/card";

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
      <CustomCarousel />
      <div className={styles.maincard}>
        <AdvetiseCard />
        <AdvetiseCard />
        <AdvetiseCard />
      </div>
    </>
  );
}
