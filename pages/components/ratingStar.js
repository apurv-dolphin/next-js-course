/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RatingStar(props) {
  const { value, handleChange } = props;
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Rating your Experience</Typography>
      <Rating name="ratingValue" value={Number(value)} onChange={handleChange} />
    </Box>
  );
}
