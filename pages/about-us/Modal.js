import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormModal(props) {
  const { formData, handleClose , open } = props;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Form Details
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              first name : {formData.firstName}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              last name : {formData.lastName}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              email : {formData.email}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              contactNo : {formData.contactNo}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
