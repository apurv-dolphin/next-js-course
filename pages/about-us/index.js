import styles from "../../styles/about.module.css";
import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import FormModal from "./Modal";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEnter = (e) => {
    if (
      (formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.contactNo) !== ""
    ) {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        e.preventDefault();
        setOpen(true);
      }
    }
  };

  const handlesubmit = (e) => {
    if (
      (formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.contactNo) !== ""
    ) {
      e.preventDefault();
      setOpen(true);
    }
  };


  return (
    <>
      <div className={styles.parent}>
        <div className={styles.about} onKeyDown={handleEnter}>
          <div className={styles.heading}>ABOUT US</div>
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
            </div>
            <Button variant="contained" onClick={handlesubmit}>
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
