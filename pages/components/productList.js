/* eslint-disable react/prop-types */
import React from "react";
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

export default function ProductList(props) {
  const { data, filterData, checkvalue } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid}>
      {checkvalue.length === 0 ? (
        <>
          {data.map((newdata, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
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
                      Price : ₹ {newdata.price}
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
        </>
      ) : (
        <>
          {filterData.map((newdata, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
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
                    <Button size="small" variant="text" color="primary">
                      MoreInformation
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
}
