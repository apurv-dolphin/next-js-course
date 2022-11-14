import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

export default function Productslug(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
      }}
    >
      <Card style={{ width: "300px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.product[0].image}
            title="Contemplative Reptile"
            style={{ height: "224px", objectFit: "contain", borderRadius: "7PX" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product[0].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h4">
              Category : {props.product[0].category}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h4">
              Price : {props.product[0].price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href="/product">
          <Button size="small" color="primary">
            Back
          </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { productslug } = context.query;

  const productData = await fetch(
    `https://60ff90a3bca46600171cf36d.mockapi.io/api/products?slug=${productslug}`
  );

  const product = await productData.json();
  return {
    props: { product }, // will be passed to the page component as props
  };
}
