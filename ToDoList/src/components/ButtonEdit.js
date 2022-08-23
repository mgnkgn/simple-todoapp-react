import React from "react";
import Button from "@mui/material/Button";

const ButtonEdit = (props) => {
  const editHandler = () => {
    // burada id ayarlıyoruz(setTodoEdit**Id** diyebilirdik)
    props.setTodoEdit(props.liSelf.id);
    props.setFollowEdit(!props.followEdit);
  };
  if (!props.followEdit) {
    return (
      <Button
        className="btn-list"
        variant="contained"
        color="warning"
        sx={{ margin: "10px" }}
        style={{
          borderRadius: 35,
          backgroundImage: "linear-gradient(145deg,#9094b1, #1f82c7)",
          padding: "18px 36px",
          fontSize: "18px",
        }}
        onClick={editHandler}
      >
        {props.children}
      </Button>
    );
  }
};
export default ButtonEdit;
