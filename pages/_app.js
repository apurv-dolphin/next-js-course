import "../styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);

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
    console.log(token);

    if (token ===  null) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        cart={cart}
        addTOCart={addTOCart}
        removeTOCart={removeTOCart}
        clearCart={clearCart}
        total={total}
      />
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={1000}
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
