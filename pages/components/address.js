/* eslint-disable react/react-in-jsx-scope */
import { Grid, TextField } from "@mui/material";

const address = {
  name: "Apurv Khalas",
  address1: "123 Main St",
  address2: "Apt 4B",
  city: "Ahemadabad",
  state: "AH",
  postalCode: "123456",
  country: "INDIA",
};

export default function Address() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Name" name="name" value={address.name} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address Line 1"
            name="address1"
            value={address.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address Line 2"
            name="address2"
            value={address.address2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City" name="city" value={address.city} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="State/Province/Region"
            name="state"
            value={address.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={address.postalCode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Country"
            name="country"
            value={address.country}
          />
        </Grid>
      </Grid>
    </form>
  );
}
