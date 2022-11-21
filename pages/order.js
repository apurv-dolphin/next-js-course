import { Box } from "@material-ui/core";
import React from "react";
import styles from "../styles/checkout.module.css";
import OrderContain from "./components/ordercontain";

export default function Order({ cart, total }) {
  return (
    <Box className={styles.maincontainer}>
      <div className={styles.header}>
        <h2> OrderId : 10100</h2>
      </div>
      <OrderContain cart={cart} total={total} />
    </Box>
  );
}
