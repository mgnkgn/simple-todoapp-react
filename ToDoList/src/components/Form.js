import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./Form.css";

import Button from "@mui/material/Button";

const FormToDo = (props) => {
  // Catching todo info
  const todoEntering = (e) => {
    props.setTodo(e.target.value);

    // console.log(props.todo);
  };

  const dateEntering = (e) => {
    // Converting date from US ---> EU (postponed inside to the object creating)
    // const dateTransformed = e.target.value.split("-").reverse().join(".");
    props.setDate(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodoObjects([
      ...props.todoObjects,
      {
        todoName: props.todo,
        todoDate: props.date.split("-").reverse().join("."),
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    props.setDate("");
    props.setTodo("");
  };

  return (
    <form
      className="App-form"
      style={{
        background: "#f1f1f1 ",
        margin: "5px 0",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
      onSubmit={submitHandler}
    >
      {/* <div> */}
      <TextField
        margin="normal"
        label="Enter your task"
        color="warning"
        placeholder="Ex: Shake and Bake"
        className="App-textfield"
        sx={{
          width: "300px",
          background: "#f0ffff",
          marginRight: "15px",
          input: { color: "#f24b0f" },
          label: { color: "#f24b0f", letterSpacing: "1.2px" },
          flex: 2,
        }}
        onChange={todoEntering}
        value={props.todo}
      />
      {/* </div>
      <div> */}
      <TextField
        className="App-textfield"
        margin="normal"
        type="date"
        color="warning"
        onChange={dateEntering}
        value={props.date}
        sx={{
          width: "300px",
          background: "#f0ffff",
          input: { color: "#f24b0f" },
          flex: 2,
        }}
      />
      <Button
        className="btn-submit"
        variant="contained"
        color="warning"
        sx={{ margin: "10px", color: "#f0ffff" }}
        style={{
          borderRadius: 35,
          backgroundImage: " linear-gradient(145deg, #b3effb, #6fb1fb)",
          padding: "18px 72px",
          fontSize: "18px",
          marginLeft: "20px",
          textAlign: "end",
        }}
        type="submit"
        onSubmit={submitHandler}
      >
        ADD TASK!
      </Button>
      {/* </div>
      <div> */}
      {/* <ButtonBtn type="submit" className="btn-add" onSubmit={submitHandler}>
        Add Task!
      </ButtonBtn> */}
      {/* </div> */}
    </form>
  );
};

export default FormToDo;
