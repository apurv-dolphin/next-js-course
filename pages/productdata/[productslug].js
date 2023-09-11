/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/productdata.module.css";
import Layout from "../components/Layout";

export default function Productslug(props) {
  const { addTOCart } = props;
  const router = useRouter();
  const { productslug } = router.query;
  const [singleProduct, setSingleProduct] = useState([]);
  const [pin, setPin] = useState("");
  const [service, setService] = useState();

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const ckeckPinCode = async () => {
    let data = await fetch("http://localhost:3000/api/pincode");
    let pincode = await data.json();

    if (pincode.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  useEffect(() => {
    const productData = async () => {
      await fetch(
        `https://60ff90a3bca46600171cf36d.mockapi.io/api/products?slug=${productslug}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSingleProduct(data);
        });
    };
    productData();
  }, [productslug]);

  return (
    <Layout title="Product-detail" description="Product-detail page.">
      <div className={styles.productcontainer}>
        <div className={styles.productcard}>
          {singleProduct &&
            singleProduct?.map((newproduct, index) => (
              <>
                <Card style={{ width: "300px" }} key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={newproduct.image}
                      title="Contemplative Reptile"
                      style={{
                        height: "224px",
                        objectFit: "contain",
                        borderRadius: "7PX",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {newproduct.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h4"
                      >
                        Category : {newproduct.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h4"
                      >
                        Price : {newproduct.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link href="/product">
                      <Button size="small" color="primary">
                        Back
                      </Button>
                    </Link>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() =>
                        addTOCart(
                          newproduct.slug,
                          newproduct.name,
                          newproduct.category,
                          newproduct.image,
                          newproduct.price,
                          1
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </>
            ))}
        </div>
        <div className={styles.pincodesection}>
          {service && service !== null && (
            <Alert severity="success">Product Deliver to this pincode.</Alert>
          )}
          {!service && service !== null && service !== undefined && (
            <>
              <Alert severity="error">
                Sorry, Product is not Deliver on this pincode yet!
              </Alert>
              <Alert severity="info">
                Available Pincode:- [380001 , 362730 , 382016]
              </Alert>
            </>
          )}

          <h3>Check product is available in your area</h3>
          <span style={{ display: "flex" }}>
            <TextField
              id="outlined-pincode"
              label="Pincode"
              type="text"
              onChange={onChangePin}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={ckeckPinCode}
            >
              Check
            </Button>
          </span>
        </div>
      </div>
    </Layout>
  );
}
