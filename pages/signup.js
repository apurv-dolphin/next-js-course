import { Button, TextField } from "@material-ui/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/contact.module.css";

export default function Signup() {
  const [datas, setDatas] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // validation
  const validate = () => {
    let error = {};
    if (!formData.firstName) {
      error.firstName = "please write your first name here";
      setError(error);
      return false;
    }
    if (!formData.lastName) {
      error.lastName = "please write your last name here";
      setError(error);
      return false;
    }
    const validEmail = (email) => {
      return !email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
      );
    };
    if (validEmail(formData.email)) {
      error.email = "please write your valid email here";
      setError(error);
      return false;
    }
    const validNumber = (contactNo) => {
      return !contactNo.match(
        /(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})/
      );
    };
    if (validNumber(formData.contactNo) || formData.contactNo.length > 10) {
      error.contactNo = "please write your contact number here";
      setError(error);
      return false;
    }
    if (formData.password.length < 6) {
      error.password = "password must contain 6  or more words";
      setError(error);
      return false;
    }
    setError(error);
    return true;
  };

  let storeData = () => {
    const data = [];
    const result = data.concat( datas || [], formData);
    localStorage.setItem("userData", JSON.stringify(result));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      storeData();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    setDatas(localStorageData);
  }, []);

  return (
    <>
      <div className={styles.parent} style={{ marginBottom: "20px" }}>
        <div className={styles.contact}>
          <div className={styles.heading}>SIGN UP</div>
          <div className={styles.main}>
            <div className={styles.lable}>
              <TextField
                id="filled-basic"
                label="First Name"
                name="firstName"
                variant="filled"
                value={formData.firstName || ""}
                onChange={handleChange}
                fullWidth
              />
              {!error.firstName ? "" : error.firstName}
            </div>
            <div className={styles.lable}>
              <TextField
                id="filled-basic"
                label="Last Name"
                name="lastName"
                variant="filled"
                value={formData.lastName || ""}
                onChange={handleChange}
                fullWidth
              />
              {!error.lastName ? "" : error.lastName}
            </div>
            <div className={styles.lable}>
              <TextField
                id="filled-basic"
                label="Email"
                name="email"
                variant="filled"
                value={formData.email || ""}
                onChange={handleChange}
                fullWidth
              />
              {!error.email ? "" : error.email}
            </div>
            <div className={styles.lable}>
              <TextField
                id="filled-basic"
                type="number"
                name="contactNo"
                value={formData.contactNo || ""}
                label="Contact No."
                variant="filled"
                onChange={handleChange}
                fullWidth
              />
              {!error.contactNo ? "" : error.contactNo}
            </div>
            <div className={styles.lable}>
              <TextField
                id="filled-basic"
                name="password"
                value={formData.password || ""}
                label="Password"
                variant="filled"
                onChange={handleChange}
                fullWidth
              />
              {!error.password ? "" : error.password}
            </div>
            <h4>
              already have an account! so{" "}
              <Link href="/login" style={{ color: "blue" }}>
                Login here!
              </Link>
            </h4>
            <Button variant="contained" color="primary" onClick={handlesubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
