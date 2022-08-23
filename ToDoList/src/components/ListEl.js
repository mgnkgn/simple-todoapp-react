import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { flexbox } from "@mui/system";
<Typography></Typography>;

const ListEl = (props) => {
  const editChange = (e) => {
    props.setEditText(e.target.value);
    console.log(e.target.value);
  };

  const editTodoFinish = (e) => {
    e.preventDefault();
    props.setEditText(e.target.value);
    let curElement = props.todoObjects.filter((el) => el.id === props.todoEdit);
    curElement[0].todoName = props.editText;
    // curElement[0].key = props.todoEdit;

    console.log(curElement);
    // props.setTodoObjects([...props.todoObjects, curElement]);
    props.setFollowEdit(!props.followEdit);
    return (
      <div>
        <div>
          <Box
            className="list-box"
            sx={{
              // bgcolor: "#F2935C",
              margin: "1rem 0",
              backgroundImage: " linear-gradient(35deg, #F27B13, #f4c96f)",
            }}
          >
            <List key={Math.random() * 1000}>
              <ListItem className="list-item">
                <ListItemIcon>
                  <WorkIcon outlined="true" sx={{ color: "#F1F1F1" }} />
                </ListItemIcon>
                <ListItemText
                  className="todo-name"
                  primary={
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      style={{
                        "@media (max-width: 900px)": {
                          width: "80%",
                          fontSize: "1.1rem",
                          textTransform: "lowercase",
                        },
                        textAlign: "center",
                        fontFamily: "Cambria",
                        // backgroundImage: "linear-gradient(90deg, #281e32, #1d5291)",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                        textTransform: "uppercase",
                        fontSize: "1.8rem",
                      }}
                    >
                      <div>{curElement.todoName}</div>
                    </Typography>
                  }
                  secondary={
                    <Typography
                      style={{
                        // borderTop: "5px dashed gray",
                        fontSize: "14px",
                        color: "gray",
                        textAlign: "start",
                        marginTop: "12px",
                      }}
                    >
                      {`Task Date: ${curElement.todoDate}`}
                    </Typography>
                  }
                  primarytypographyprops={{
                    component: "span",
                    fontSize: "24px",
                    fontFamily:
                      'Cambria, Cochin, Georgia, Times, "Times New Roman", serif;',
                  }}
                ></ListItemText>

                <ButtonEdit
                  className="btn-list"
                  liName={props.liName}
                  liDate={props.liDate}
                  liComp={props.liComp}
                  liSelf={props.liSelf}
                  todoObjects={props.todoObjects}
                  setTodoObjects={props.setTodoObjects}
                  todoEdit={props.todoEdit}
                  setTodoEdit={props.setTodoEdit}
                  editText={props.editText}
                  setEditText={props.setEditText}
                >
                  {/* {props.followEdit === false ? `EDIT` : "DONE"} */}
                </ButtonEdit>
                <ButtonDelete
                  className="btn-list"
                  liName={props.liName}
                  liDate={props.liDate}
                  liComp={props.liComp}
                  liSelf={props.liSelf}
                  todoObjects={props.todoObjects}
                  setTodoObjects={props.setTodoObjects}
                >
                  DELETE
                </ButtonDelete>
              </ListItem>
            </List>
          </Box>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Box
        sx={{
          // bgcolor: "#F2935C",
          margin: "1rem 0",
          backgroundImage: " linear-gradient(35deg, #F27B13, #f4c96f)",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <WorkIcon outlined="true" sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component={"span"}
                  variant={"body2"}
                  style={{
                    textAlign: "center",
                    fontFamily: "Cambria",
                    // backgroundImage: "linear-gradient(90deg, #281e32, #1d5291)",
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                    textTransform: "uppercase",
                    fontSize: "1.8rem",
                  }}
                >
                  {props.todoEdit === props.liSelf.id &&
                  props.followEdit === true ? (
                    <div style={{ marginTop: "32px" }}>
                      <form
                        onSubmit={editTodoFinish}
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        {/* <input
                          type="text"
                          placeholder="Update Task"
                          onChange={editChange}
                        /> */}
                        <TextField
                          margin="normal"
                          label="New plans captain?"
                          color="warning"
                          placeholder="Ex: Shake and Bake"
                          sx={{
                            width: "300px",
                            background: "#f0ffff",
                            marginRight: "15px",
                            input: { color: "#f24b0f" },
                            label: { color: "#f24b0f", fontSize: "12px" },
                            flex: 2,
                          }}
                          onChange={editChange}
                          value={props.todo}
                        />
                        {/* <button type="submit" onSubmit={editTodoFinish}>
                          Update!
                        </button> */}
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ margin: "10px" }}
                          style={{
                            borderRadius: 35,
                            backgroundImage:
                              "linear-gradient(145deg,#9094b1, #1f82c7)",
                            padding: "18px 36px",
                            fontSize: "18px",
                          }}
                          onSubmit={editTodoFinish}
                          type="submit"
                        >
                          DONE
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div>{props.liName}</div>
                  )}
                </Typography>
              }
              secondary={
                <Typography
                  style={{
                    // borderTop: "5px dashed gray",
                    fontSize: "14px",
                    color: "gray",
                    textAlign: "start",
                    marginTop: "12px",
                  }}
                >
                  {`Task Date: ${props.liDate}`}
                </Typography>
              }
              primarytypographyprops={{
                component: "span",
                fontSize: "24px",
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif;',
              }}
            ></ListItemText>
            <ButtonEdit
              liName={props.liName}
              liDate={props.liDate}
              liComp={props.liComp}
              liSelf={props.liSelf}
              todoObjects={props.todoObjects}
              setTodoObjects={props.setTodoObjects}
              todoEdit={props.todoEdit}
              setTodoEdit={props.setTodoEdit}
              editText={props.editText}
              setEditText={props.setEditText}
              followEdit={props.followEdit}
              setFollowEdit={props.setFollowEdit}
            >
              EDIT
            </ButtonEdit>
            <ButtonDelete
              liName={props.liName}
              liDate={props.liDate}
              liComp={props.liComp}
              liSelf={props.liSelf}
              todoObjects={props.todoObjects}
              setTodoObjects={props.setTodoObjects}
              followEdit={props.followEdit}
              setFollowEdit={props.setFollowEdit}
            >
              DELETE
            </ButtonDelete>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default ListEl;
