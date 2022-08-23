import React from "react";
import Button from "@mui/material/Button";

const ButtonDelete = (props) => {
  const deleteHandler = () => {
    props.setTodoObjects(
      props.todoObjects.filter((item) => item.id !== props.liSelf.id)
    );
    if (
      props.followEdit === true
        ? props.setFollowEdit(!props.followEdit)
        : props.setFollowEdit(props.followEdit)
    );
  };

  return (
    <Button
      className="btn-list"
      variant="contained"
      color="warning"
      sx={{ margin: "10px" }}
      style={{
        borderRadius: 35,
        backgroundImage: " linear-gradient(145deg, #9496a5, #4c4c4c)",
        padding: "18px 36px",
        fontSize: "18px",
      }}
      onClick={deleteHandler}
    >
      {props.children}
    </Button>
  );
};

export default ButtonDelete;
