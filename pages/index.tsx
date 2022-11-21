import Carousel from "./components/carousel";
import AdvertiseCard from "./components/card";
import styles from "../styles/Home.module.css";


export default function Home() {
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
