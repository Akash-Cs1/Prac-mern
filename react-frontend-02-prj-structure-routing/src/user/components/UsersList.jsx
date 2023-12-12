import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UsersItem from "./UsersItem";
import './UserList.css'


const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
        <h2>No User Found !</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
