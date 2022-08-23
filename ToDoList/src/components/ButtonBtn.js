import React from "react";
import Button from "@mui/material/Button";

const ButtonBtn = (props) => {
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{ margin: "10px" }}
      style={{
        borderRadius: 35,
        backgroundColor: "#F27F1B",
        padding: "18px 36px",
        fontSize: "18px",
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonBtn;
