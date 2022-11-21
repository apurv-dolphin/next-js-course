import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Router, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [login, setLogin] = useState();
  const [show, setShow] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShow(!show);

  const clear = () => {
    setLoginData({
      Email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const time = date.getTime();

    if (login !== null) {
      console.log(login);
      const userData = login.filter((rd) => {
        return (
          rd.email === loginData.email && rd.password === loginData.password
        );
      });
      if (userData && userData.length !== 0) {
        if (loginData.email !== "" && loginData.password !== "") {
          const token = {
            authtok: time,
            username: userData[0].email,
          };
          localStorage.setItem("token", JSON.stringify(token));
          router.push("/");
          clear();
        }
      } else {
        if (loginData.email === "") {
          alert("email is required");
        } else if (loginData.password === "") {
          alert("password is required");
        } else {
          alert("username and password is not match");
        }
      }
    } else {
      alert("please Registered");
    }
  };

  useEffect(() => {
    const match = JSON.parse(localStorage.getItem("userData"));
    setLogin(match);
  }, []);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.contact}>
          <div className={styles.heading}>LOGIN</div>
          <div className={styles.main}>
            <div className={styles.lable}>
              <TextField
                id="filled-email"
                label="Email"
                name="email"
                variant="filled"
                value={loginData.email}
                fullWidth
                onChange={handleChange}
              />
            </div>
            <div className={styles.lable}>
              <FormControl
                style={{ width: "100%", background: "rgba(219,219,219)" }}
              >
                <InputLabel htmlFor="standard-adornment-password">
                  password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={show ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {show ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  name="password"
                  onChange={handleChange}
                  value={loginData.password}
                />
              </FormControl>
            </div>
            <h4>
              already have an account! so{" "}
              <Link href="/signup" style={{ color: "blue" }}>
                Sign-up here!
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
