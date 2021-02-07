import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import PopupData from "./Popup_details";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {PopupData.map((popup) => (
        <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Confirm your check in "}
            </DialogTitle>
            <DialogContent>
              <Typography>{popup.name}</Typography>
              <Typography>{popup.dept}</Typography>
              <Typography>{popup.className}</Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{ backgroundColor: "#aee1e1" }}
              >
                Disagree
              </Button>
              <Button
                onClick={handleClose}
                autoFocus
                style={{ backgroundColor: "#aee1e1" }}
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ))}
    </div>
  );
}
