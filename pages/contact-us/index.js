import styles from "../../styles/contact.module.css";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import FormModal from "./modal";

export default function About() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
    });
  };
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
    setError(error);
    return true;
  };

  const handleEnter = (e) => {
    if (validate()) {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        fetch("http://localhost:3000/api/postcontact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => console.log("success : ", data));
        e.preventDefault();
        setOpen(true);
      }
    }
  };

  const handlesubmit = (e) => {
    if (validate()) {
      fetch("http://localhost:3000/api/postcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log("success : "));
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.contact} onKeyDown={handleEnter}>
          <div className={styles.heading}>CONTACT US</div>
          <div className={styles.main}>
            <div className={styles.lable}>
              <TextField
                id="filled-basic"
                label="First Name"
                name="firstName"
                variant="filled"
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.email}
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
                value={formData.contactNo}
                label="Contact No."
                variant="filled"
                onChange={handleChange}
                fullWidth
              />
              {!error.contactNo ? "" : error.contactNo}
            </div>
            <Button variant="contained" color="primary" onClick={handlesubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <FormModal formData={formData} handleClose={handleClose} open={open} />
      )}
    </>
  );
}
