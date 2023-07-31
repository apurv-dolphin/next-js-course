/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Rating } from "@mui/material";

export default function EditModal(props) {
  const { open, handleClose, singleData, getUser } = props;
  const [updateData, setUpdateData] = useState({});

  const updateUser = async () => {
    await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          getUser();
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    updateUser();
    handleClose();
  };

  useEffect(() => {
    setUpdateData(singleData);
  }, []);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="firstName"
          label="FirstName"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={singleData.firstName || ""}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="lastName"
          label="LastName"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={singleData.lastName || ""}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          defaultValue={singleData.email || ""}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="contactNo"
          label="Contact No"
          type="number"
          fullWidth
          variant="standard"
          defaultValue={singleData.contactNo || ""}
          onChange={handleChange}
        />
        <Rating name="ratingValue" value={singleData.ratingValue} readOnly />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
