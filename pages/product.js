import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  grid: {
    width: "90%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
  },
});

export default function Product(props) {
  const classes = useStyles();
  const [data, setData] = useState(props.myData);

  return (
    <>
      <Grid container spacing={2} className={classes.grid}>
        {data.map((newdata, index) => (
          <Grid item xs={12} sm={4} lg={3} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={newdata.image}
                  title="Contemplative Reptile"
                  style={{ objectFit: "fill" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {newdata.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h4"
                  >
                    Category : {newdata.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h4"
                  >
                    Price : {newdata.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href={`/productdata/${newdata.slug}`}>
                  <Button size="small" color="primary">
                    MoreInformation
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch(
    "https://60ff90a3bca46600171cf36d.mockapi.io/api/products"
  );
  let myData = await data.json();
  return {
    props: { myData }, // will be passed to the page component as props
  };
}
