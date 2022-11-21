import { Box, Button, Divider, TextField } from "@material-ui/core";
import React from "react";
import styles from "../styles/checkout.module.css";
import CartDetailsTable from "./components/cartdetailstable";

export default function Checkout(props) {
  const { cart , total } = props;

  return (
    <>
      <Box component="span" className={styles.maincontainer}>
        <div className={styles.header}>
          <h1>Delivery Detail Form</h1>
        </div>
        <Divider />
        <div className={styles.formcontain}>
          <div className={styles.fields}>
            <span className={styles.leftfields}>
              <TextField
                id="outlined-name"
                label="Name"
                type="text"
                fullWidth
              />
            </span>
            <span className={styles.rightfields}>
              <TextField
                id="outlined-email"
                label="Email"
                type="email"
                fullWidth
              />
            </span>
          </div>
          <div className={styles.addfeild}>
            <TextField
              id="outlined-address"
              label="Address"
              type="text"
              fullWidth
            />
          </div>
          <div className={styles.fields}>
            <span className={styles.leftfields}>
              <TextField
                id="outlined-phone"
                label="Phone Number"
                type="number"
                fullWidth
              />
            </span>
            <span className={styles.rightfields}>
              <TextField
                id="outlined-city"
                label="City"
                type="text"
                fullWidth
              />
            </span>
          </div>
          <div className={styles.fields}>
            <span className={styles.leftfields}>
              <TextField
                id="outlined-state"
                label="State"
                type="text"
                fullWidth
              />
            </span>
            <span className={styles.rightfields}>
              <TextField
                id="outlined-pincode"
                label="Pincode"
                type="number"
                fullWidth
              />
            </span>
          </div>
          <div className={styles.button}>
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </div>
        </div>
      </Box>
      <Box className={styles.maincontainer}>
        <div className={styles.header}>
          <h2> Cart Details</h2>
        </div>
        <CartDetailsTable cart={cart} total={total} />
      </Box>
    </>
  );
}
