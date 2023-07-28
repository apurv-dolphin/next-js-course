/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 10
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "71%"
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  quantity: {
    display: "flex",
    height: "29px",
  },
}));

export default function CartCard({ cart, removeTOCart, addTOCart }) {
  const classes = useStyles();

  return (
    <>
      {Object.keys(cart).length === 0 && <h3>Your cart is emapty!</h3>}
      {Object.keys(cart).map((newcart, index) => {
        return (
          <Card className={classes.root} key={index}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {cart[newcart].name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                 Category : {cart[newcart].category}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Price : ₹{cart[newcart].price}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <div className={classes.quantity}>
                    <Button
                      onClick={() =>
                        removeTOCart(
                          newcart,
                          newcart.name,
                          newcart.category,
                          newcart.image,
                          newcart.price,
                          1
                        )
                      }
                    >
                      <IndeterminateCheckBoxIcon />
                    </Button>
                    <h4 style={{ marginTop: "2px" }}>{cart[newcart].qty}</h4>
                    <Button
                      onClick={() =>
                        addTOCart(
                          newcart,
                          newcart.name,
                          newcart.category,
                          newcart.image,
                          newcart.price,
                          1
                        )
                      }
                    >
                      <AddBoxIcon />
                    </Button>
                  </div>
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={cart[newcart].image}
              title={cart[newcart].name}
            />
          </Card>
        );
      })}
    </>
  );
}
