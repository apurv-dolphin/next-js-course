import "../styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

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

  return (
    <>
      <Navbar
        cart={cart}
        addTOCart={addTOCart}
        removeTOCart={removeTOCart}
        clearCart={clearCart}
        total={total}
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
