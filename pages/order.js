/* eslint-disable react/prop-types */
import { Box, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { createRef } from "react";
import styles from "../styles/checkout.module.css";
import OrderContain from "./components/ordercontain";
import Pdf from "react-to-pdf";
import Link from "next/link";

export default function Order({ cart, total, clearCart }) {
  const date = new Date();
  const time = date.getTime();
  const ref = createRef();
  return (
    <Box className={styles.maincontainer}>
      <div className={styles.header}>
        <h2> OrderId : {time} </h2>
        <Alert severity="success">Your order has been succesfully place.</Alert>
      </div>
      <div ref={ref} style={{ width: "100%" }}>
        <OrderContain cart={cart} total={total} />
      </div>
      <Box>
        <Link href={"/product"}>
          <Button onClick={clearCart}>Back</Button>
        </Link>
        <Pdf
          targetRef={ref}
          filename={`"orderId${time}.pdf"`}
          x={0.5}
          y={0.5}
          scale={0.6}
        >
          {({ toPdf }) => <Button onClick={toPdf}>Genrate order PDF</Button>}
        </Pdf>
      </Box>
    </Box>
  );
}
