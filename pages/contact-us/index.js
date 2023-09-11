import styles from "../../styles/contact.module.css";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import FormModal from "./modal";
import { useRouter } from "next/router";
import RatingStar from "../components/ratingStar";

export default function About() {
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    ratingValue: "0",
  });
  const [open, setOpen] = useState(false);
  const [test, setTest] = useState("");
  const [passHide, setPassHide] = useState(true);
  const [testError, setTestError] = useState([]);
  const [fontColor, setFontColor] = useState("");
  const [massage, setMassage] = useState("");
  const router = useRouter();

  const validatePassword = (value) => {
    const errors = [];

    if (value.length < 3) {
      setFontColor("red");
      setMassage("Week");
    }
    if (value.length > 3 && value.length < 7) {
      setFontColor("blue");
      setMassage("Modrate");
    }
    if (value.length > 8) {
      setFontColor("green");
      setMassage("Strong");
    }
    if (value.length < 8) {
      errors.push("Your password must be at least 8 characters");
    }
    if (value.length > 32) {
      errors.push("Your password must be at max 32 characters");
    }
    if (value.search(/[a-z]/) < 0) {
      errors.push("Your password must contain at least one lower case letter.");
    }
    if (value.search(/[A-Z]/) < 0) {
      errors.push("Your password must contain at least one upper case letter.");
    }

    if (value.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
    }
    if (value.search(/[!@#\\$%\\^&\\*_]/) < 0) {
      errors.push(
        "Your password must contain at least one special char from -[ ! @ # $ % ^ & * _ ]"
      );
    }

    setTestError(errors); // Update the state with the new errors
    return errors.length === 0;
  };
  const handleTestChange = (e) => {
    setTest(e.target.value);
    validatePassword(e.target.value);
  };
  const handleClear = () => {
    setTest("");
    setTestError([]);
    setFontColor("");
    setMassage("");
  };
  const ShowPass = () => setPassHide(!passHide);

  const handleClose = () => {
    setOpen(false);
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      ratingValue: "0",
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
      error.lastName = "please write your lyellowast name here";
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
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      fetch("http://localhost:3000/api/postcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log("success : ", data));
      e.preventDefault();
      if (validate()) {
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
        .then((data) => console.log("success : ", data));
      e.preventDefault();
      setOpen(true);
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token === null) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.contact} onKeyDown={handleEnter}>
          <div className={styles.heading}>CONTACT US</div>
          <div className={styles.main}>
            <div className={styles.lable}>
              <TextField
                id="filled-firstname"
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
                id="filled-lastname"
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
                id="filled-email"
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
                id="filled-contactnumber"
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
              <RatingStar
                value={formData.ratingValue}
                handleChange={handleChange}
              />
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
      <div className={styles.passChecker}>
        <h1 className={styles.conatinerHeader}>Password Strength Checker</h1>
        <div className={styles.subContainer}>
          <input
            className={styles.passinput}
            type={passHide ? "password" : "text"}
            value={test}
            onChange={handleTestChange}
          />

          <div className={styles.buttonContainer}>
            <button
              className={styles.passBtn}
              style={{
                marginRight: "10px",
                background: "#007afa",
                color: "#fff",
              }}
              onClick={ShowPass}
            >
              {passHide ? "Show" : "Hide"}
            </button>

            <button
              className={styles.passBtn}
              style={{
                background: "red",
                color: "#ffff",
              }}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

          <div className={styles.textContainer}>
            <p style={{ color: fontColor }}>{massage}</p>
            {testError.length === 0 && test !== "" && (
              <p style={{ color: "green" }}>Password is valid. Success!</p>
            )}

            {testError?.map((error, index) => (
              <p key={index} style={{ color: fontColor }}>
                {error}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
