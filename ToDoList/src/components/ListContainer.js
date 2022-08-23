import React from "react";

import ListEl from "./ListEl";

const ListContainer = (props) => {
  return (
    <div>
      {props.todoObjects.map((item) => (
        <ListEl
          key={item.id}
          liName={item.todoName}
          liDate={item.todoDate}
          liComp={item.completed}
          liSelf={item}
          todoObjects={props.todoObjects}
          setTodoObjects={props.setTodoObjects}
          todoEdit={props.todoEdit}
          setTodoEdit={props.setTodoEdit}
          editText={props.editText}
          setEditText={props.setEditText}
          followEdit={props.followEdit}
          setFollowEdit={props.setFollowEdit}
        ></ListEl>
      ))}
    </div>
  );
};

export default ListContainer;
