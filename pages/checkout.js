import { Box, Button, Divider, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styles from "../styles/checkout.module.css";
import CartDetailsTable from "./components/cartdetailstable";
import RatingStar from "./components/ratingStar";

export default function Checkout(props) {
  const { cart, total, clearCart } = props;
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phonenumber: "",
    city: "",
    state: "",
    pincode: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = () => {
    console.log(userData);
  }

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
                name="name"
                type="text"
                onChange={(e) => handleChange(e)}
                value={userData.name}
                fullWidth
              />
            </span>
            <span className={styles.rightfields}>
              <TextField
                id="outlined-email"
                label="Email"
                name="email"
                type="email"
                onChange={(e) => handleChange(e)}
                value={userData.email}
                fullWidth
              />
            </span>
          </div>
          <div className={styles.addfeild}>
            <TextField
              id="outlined-address"
              label="Address"
              name="address"
              type="text"
              onChange={(e) => handleChange(e)}
              value={userData.address}
              fullWidth
            />
          </div>
          <div className={styles.fields}>
            <span className={styles.leftfields}>
              <TextField
                id="outlined-phone"
                label="Phone Number"
                name="phonenumber"
                type="number"
                onChange={(e) => handleChange(e)}
                value={userData.phonenumber}
                fullWidth
              />
            </span>
            <span className={styles.rightfields}>
              <TextField
                id="outlined-city"
                label="City"
                name="city"
                type="text"
                onChange={(e) => handleChange(e)}
                value={userData.city}
                fullWidth
              />
            </span>
          </div>
          <div className={styles.fields}>
            <span className={styles.leftfields}>
              <TextField
                id="outlined-state"
                label="State"
                name="state"
                type="text"
                onChange={(e) => handleChange(e)}
                value={userData.state}
                fullWidth
              />
            </span>
            <span className={styles.rightfields}>
              <TextField
                id="outlined-pincode"
                label="Pincode"
                name="pincode"
                type="number"
                onChange={(e) => handleChange(e)}
                value={userData.pincode}
                fullWidth
              />
            </span>
          </div>
          <Box>
            <RatingStar />
          </Box>
          <div className={styles.button}>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Box>
      <Box className={styles.maincontainer}>
        <div className={styles.header}>
          <h2> Cart Details</h2>
        </div>
        <CartDetailsTable cart={cart} total={total} clearCart={clearCart} />
      </Box>
    </>
  );
}
