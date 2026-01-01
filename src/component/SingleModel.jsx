import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

const SingleModel = ({
  open,
  editValue,
  onclose: handleClose,
  onSubmit,
  setEditValue,
  handleChange,
}) => {
  console.info("🚀 ~ SingleModel ~ handleClose:", handleClose);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      style={{ width: "100%" }}
      fullWidth={true}
    >
      <DialogTitle>Add Routes</DialogTitle>
      <DialogContent>
        <form id="subscription-form" onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            value={editValue}
            name="inputValue"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SingleModel;
