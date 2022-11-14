import Link from "next/link";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";


export default function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <StopCircleIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{margin: "5px"}}
        >
          <Link href="/">Home</Link>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{margin: "5px"}}
        >
          <Link href="/blog">Blog</Link>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{margin: "5px"}}
        >
          <Link href="/product">Product</Link>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{margin: "5px"}}
        >
          <Link href="/contact-us">Contact-us</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
