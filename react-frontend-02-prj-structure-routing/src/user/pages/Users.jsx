import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "akash",
      image: require("../../Img/Bats-structures-organs-sound-frequencies-signals-contexts.jpg"),
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
