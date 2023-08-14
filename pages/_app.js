/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
// import usePointerPosition from "./components/usePointerPosition";
// import useDelayedValue from "./components/useDelayedValue";

// import Dot from "./components/Dot";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);

  // const pos1 = usePointerPosition();
  // const pos2 = useDelayedValue(pos1, 100);
  // const pos3 = useDelayedValue(pos2, 90);
  // const pos4 = useDelayedValue(pos3, 80);
  // const pos5 = useDelayedValue(pos4, 70);
  // const pos6 = useDelayedValue(pos5, 60);
  // const pos7 = useDelayedValue(pos6, 50);
  // const pos8 = useDelayedValue(pos7, 40);
  // const pos9 = useDelayedValue(pos8, 30);
  // const pos10 = useDelayedValue(pos9, 20);

  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setTotal(subt);
  };

  const addTOCart = (slug, name, category, image, price, qty) => {
    let newCart = cart;
    if (slug in cart) {
      newCart[slug].qty = cart[slug].qty + qty;
    } else {
      newCart[slug] = { qty: 1, name, category, image, price };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeTOCart = (slug, name, category, image, price, qty) => {
    let newCart = cart;
    if (slug in cart) {
      newCart[slug].qty = cart[slug].qty - qty;
    }
    if (newCart[slug].qty <= 0) {
      delete newCart[slug];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token === null) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(70);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router]);

  return (
    <>
      {/* <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.9} />
      <Dot position={pos3} opacity={0.8} />
      <Dot position={pos4} opacity={0.7} />
      <Dot position={pos5} opacity={0.6} />
      <Dot position={pos6} opacity={0.5} />
      <Dot position={pos7} opacity={0.4} />
      <Dot position={pos8} opacity={0.3} />
      <Dot position={pos9} opacity={0.1} />
      <Dot position={pos10} opacity={0.1} /> */}
      <Navbar
        cart={cart}
        addTOCart={addTOCart}
        removeTOCart={removeTOCart}
        clearCart={clearCart}
        total={total}
      />
      <LoadingBar
        color="#f11946"
        height={4}
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component
        cart={cart}
        addTOCart={addTOCart}
        removeTOCart={removeTOCart}
        clearCart={clearCart}
        total={total}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
