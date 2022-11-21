import { Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import styles from "../styles/checkout.module.css";
import OrderContain from "./components/ordercontain";

export default function Order({ cart, total  }) {
  const date = new Date();
  const time = date.getTime();
  return (
    <Box className={styles.maincontainer}>
      <div className={styles.header}>
        <h2> OrderId : {time} </h2>
        <Alert severity="success">Your order has been succesfully place.</Alert>
      </div>
      <OrderContain cart={cart} total={total} />
    </Box>
  );
}
