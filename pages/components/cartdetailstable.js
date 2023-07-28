import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function CartDetailsTable({ cart, total }) {
  const classes = useStyles();
  return (
    <>
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
            {Object.keys(cart).map((newdata, index) => (
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
      <div style={{ display: "flex", alignItems: "center", margin: "15px 30px", justifyContent: "end" }}>
        <span style={{ marginRight: "50px" }}>Total : ₹ {total}</span>
        <Link href="/order">
          <Button
            variant="contained"
            color="secondary"
            disabled={Object.keys(cart).length === 0}
          >
            Pay
          </Button>
        </Link>
      </div>
    </>
  );
}
