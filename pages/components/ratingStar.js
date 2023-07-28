import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RatingStar() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Rating your Experience</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
