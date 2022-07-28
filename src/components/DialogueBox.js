import { Typography } from "@mui/material";
import React from "react";
import confirm from "../assets/images/confirm1.svg";
import cancel from "../assets/images/cancel.png";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";

// STYLING THE BOX COMPONENT IN MODAL
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 600,
  minWidth: 270,
  bgcolor: "#F5F5F5",
  borderRadius: "7px",
  boxShadow: 24,
  padding: 4,
  outline: "none",
};

//DIALOG BOX TO DISPLAY APPROPRIATE INFO. ON SUCCESS OR CANCELLED TRANSACTION
const DialogueBox = ({ open, setOpen, dialogType }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      disableBackdropClick
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {/* CLOSE ICON */}
            <div
              style={{
                alignSelf: "end",
                position: "absolute",
                top: "1rem",
                right: "1rem",
              }}
            >
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon sx={{ color: "#000000" }} />
              </IconButton>
            </div>
            <br />
            <Box
              component="img"
              src={dialogType === "success" ? confirm : cancel}
              alt="success tickmark"
              sx={{
                verticalAlign: "middle",
                height: { xs: "60px", sm: "80px", md: "100px" },
                width: { xs: "60px", sm: "80px", md: "100px" },
                borderRadius: "50%",
              }}
            />
            <br />
            <Typography
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              {dialogType === "success"
                ? "Purchase Successful"
                : "Purchase Cancelled"}
            </Typography>
            <br />
            <Typography
              style={{
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: { xs: "14px", md: "18px" },
              }}
            >
              {dialogType === "success"
                ? "You will get your product soon!"
                : "Continue shopping on to the website!"}
            </Typography>
            <br />
            {dialogType === "success" ? (
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: { xs: "14px", md: "18px" },
                  maxWidth: "25rem",
                  paddingBottom: "1rem",
                }}
              >
                Get ready to experience the spatial audio with adaptive EQ that
                tunes music to your ears.
              </Typography>
            ) : null}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DialogueBox;
