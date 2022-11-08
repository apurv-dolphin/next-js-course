import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import StopCircleIcon from '@mui/icons-material/StopCircle';
import React from "react";

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
          marginRight={2}
        >
          <Link href="/">Home</Link>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          marginRight={2}
        >
          <Link href="/blog">Blog</Link>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          marginRight={2}
        >
          <Link href="/about-us">About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
