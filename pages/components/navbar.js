/* eslint-disable react/prop-types */
import Link from "next/link";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import React, { useMemo, useState } from "react";
import {
  AppBar,
  Badge,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AccountCircle } from "@mui/icons-material";
import MoreIcon from "@material-ui/icons/MoreVert";
import CartSideBar from "./cartSideBar";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
      marginLeft: "auto",
    },
  },
}));

export default function Navbar(props) {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { cart, addTOCart, removeTOCart, clearCart, total } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const isMobileMemo = useMemo(() => isMobile, [isMobile]);

  const cartOpen = () => {
    setOpen(true);
  };
  const cartClose = () => setOpen(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logouts = () => {
    localStorage.removeItem("token");

    // eslint-disable-next-line no-restricted-globals
    let log = confirm("Are you sure?");
    if (log) {
      router.push("/login");
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    logouts();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="show cartitem"
          color="inherit"
          onClick={() => {
            cartOpen();
          }}
        >
          <Badge badgeContent={1} color="secondary" overlap="rectangular">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <StopCircleIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ margin: "5px" }}
            >
              <Link href="/">Home</Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ margin: "5px" }}
            >
              <Link href="/blog">Blog</Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ margin: "5px" }}
            >
              <Link href="/product">Product</Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ margin: "5px" }}
            >
              <Link href="/contact-us">Contact-us</Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ margin: "5px" }}
            >
              <Link href="/users">Users</Link>
            </Typography>
            <div className={classes.grow} />
            {isMobileMemo ? (
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            ) : (
              <div
                className={classes.sectionDesktop}
                style={{ marginLeft: "auto" }}
              >
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={cartOpen}
                >
                  <Badge
                    badgeContent={Object.keys(cart).length}
                    color="secondary"
                    overlap="rectangular"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      {open && (
        <CartSideBar
          cartClose={cartClose}
          clearCart={clearCart}
          cart={cart}
          removeTOCart={removeTOCart}
          addTOCart={addTOCart}
        />
      )}
    </>
  );
}
