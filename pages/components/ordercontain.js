import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function OrderContain({cart , total}) {
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
      <div style={{ textAlign: "end", marginTop: "15px" }}>
        <span style={{ marginRight: "154px" }}>Total : ₹ {total}</span>
      </div>
    </>
  );
}
