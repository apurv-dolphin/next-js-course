import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Checkboxs from "./components/checkbox";
import ProductList from "./components/productList";
import ScrollToTop from "./scrollToTop";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkvalue, setCheckvalue] = useState([]);
  const [filterData, setFilterData] = useState([]);

  let categoryItems = [...new Set(data.map((Val) => Val.category))];

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
    checkvalue.map((item) =>
      data.map((newitem) => {
        if (newitem.category === item) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
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
            <>loading</>
          )}
        </Grid>
      </Grid>
      <ScrollToTop />
    </>
  );
}
