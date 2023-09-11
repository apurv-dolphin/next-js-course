import { Grid } from "@material-ui/core";
import dynamic from "next/dynamic";
// import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ScrollToTop = dynamic(() => import("./scrollToTop"));
const ProductList = dynamic(() => import("./components/productList"));
const Checkboxs = dynamic(() => import("./components/checkbox"));
const Loader = dynamic(() => import("./components/loader"));

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkvalue, setCheckvalue] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const router = useRouter();

  let categoryItems = [...new Set(data?.map((Val) => Val.category))];

  let filterdata = [];

  const handleChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setCheckvalue([...checkvalue, value]);
    } else {
      setCheckvalue(checkvalue.filter((e) => e !== value));
    }
  };
  useEffect(() => {
    checkvalue?.map((item) =>
      data?.map((newitem) => {
        if (newitem.category === item) {
          filterdata = [...filterdata, newitem];
        }
      })
    );
    setFilterData(filterdata);
  }, [checkvalue]);

  useEffect(() => {
    const apiCall = async () => {
      await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setLoading(true);
        });
    };
    apiCall();
  }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token === null) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {/* <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your meta description goes here." />
      </Head> */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={1}>
          <div style={{ display: "flex", margin: "0px auto", width: "0px" }}>
            <Checkboxs
              categoryItems={categoryItems}
              handleChange={handleChange}
            />
          </div>
        </Grid>
        <Grid item xs={11}>
          {loading ? (
            <ProductList
              data={data}
              filterData={filterData}
              checkvalue={checkvalue}
            />
          ) : (
            <Loader />
          )}
        </Grid>
      </Grid>
      <ScrollToTop />
    </>
  );
}
