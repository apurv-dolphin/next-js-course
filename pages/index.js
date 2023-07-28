/* eslint-disable react/react-in-jsx-scope */
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("./components/carousel"));
const AdvertiseCard = dynamic(() => import("./components/card"));

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
      <Carousel />
      <div className={styles.maincard}>
        <AdvertiseCard />
        <AdvertiseCard />
        <AdvertiseCard />
      </div>
    </>
  );
}
