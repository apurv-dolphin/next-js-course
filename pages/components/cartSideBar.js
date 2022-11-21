import React, { useEffect } from "react";
import CartCard from "./cartCard";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, Drawer } from "@material-ui/core";
import styles from "../../styles/cartsidebar.module.css";
import Link from "next/link";

export default function CartSideBar(props) {
  const { cartClose, clearCart, cart, removeTOCart , addTOCart } = props;
  const [state, setState] = React.useState({
    right: false,
  });

  return (
    <div>
      <Drawer anchor={"right"} open={state} onClose={cartClose}>
        <div className={styles.closeicon}>
          <span className={styles.cartheading}>Cart</span>
          <Button onClick={cartClose}>
            <CloseIcon />
          </Button>
        </div>
        <Divider />
        <div className={styles.cardcontain}>
          <CartCard cart={cart} removeTOCart={removeTOCart} addTOCart={addTOCart}/>
        </div>
        <div className={styles.checkout}>
          <Link href="/checkout">
            <Button
              variant="contained"
              color="primary"
              onClick={cartClose}
              style={{ marginRight: "5px" }}
            >
              Checkout
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={clearCart}>
            Clear cart
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
