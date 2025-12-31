import {
  Modal,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Model = ({
  open,
  onClose: handleClose,
  value,
  handleChange,
  optionsHandleChange,
  optionsValue: objValue,
  editRoutes,
  inputField,
  handleSubmit,
  treeData: Data,
}) => {
  console.info("🚀 ~ Model ~ objValue:", objValue);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ width: "100%" }}
        fullWidth={true}
      >
        <DialogTitle>Add Routes</DialogTitle>
        <DialogContent>
          <form
            id="subscription-form"
            onSubmit={(e) =>
              handleSubmit(
                e,
                objValue?.child,
                inputField?.child,
                inputField?.parent
              )
            }
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="select type path"
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={"child"}>child</MenuItem>
              <MenuItem value={"parent"}>parent</MenuItem>
            </Select>
            {value === "child" && (
              <>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ marginTop: "20px" }}
                >
                  Select Parent For Add Child
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={objValue?.child}
                  label="select parent for add child"
                  fullWidth
                  onChange={(e) => optionsHandleChange(e, "child")}
                >
                  {Data.map((path) => (
                    <MenuItem value={path.id}>{path.label}</MenuItem>
                  ))}
                </Select>
                {objValue?.child && (
                  <TextField
                    value={inputField?.child}
                    onChange={(e) => editRoutes(e, "child")}
                    fullWidth
                    label="Enter Child Path"
                    sx={{ marginTop: "20px" }}
                  />
                )}
              </>
            )}
            {value === "parent" && (
              <TextField
                value={inputField?.parent}
                onChange={(e) => editRoutes(e, "parent")}
                fullWidth
                label="Enter Child Path"
                sx={{ marginTop: "20px" }}
              />
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Model;
