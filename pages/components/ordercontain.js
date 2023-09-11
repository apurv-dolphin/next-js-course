/* eslint-disable react/prop-types */
import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import Address from "./address";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function OrderContain({ cart, total }) {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" gutterBottom style={{ textDecoration: "underline", textAlign: "center" }}>
          Ak Store
        </Typography>
      </Box>
      <Box>
        <Address />
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom style={{ textDecoration: "underline", textAlign: "center", marginTop: "10px" }}>
          Your Order Details
        </Typography>
      </Box>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(cart)?.map((newdata, index) => (
              <TableRow key={index}>
                <TableCell>{cart[newdata].name}</TableCell>
                <TableCell>{cart[newdata].category}</TableCell>
                <TableCell>{cart[newdata].qty}</TableCell>
                <TableCell>
                  ₹ {cart[newdata].price * cart[newdata].qty}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "end", marginTop: "15px" }}>
        <span style={{ marginRight: "154px" }}>Total : ₹ {total}</span>
      </div>
    </>
  );
}
