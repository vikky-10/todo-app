import React, { useContext } from "react";
import Users from "./showComponents/Users";
import Form from "./formComponents/Form";
import { useSelector } from "react-redux";

export const Main = () => {
  const addNewUser = useSelector((state) => state.addNewUser);
  console.log("ADD USER WALA", addNewUser);
  return (
    <div className="App flex justify-around ml-80 items-center ">
      <div>
        <Users />
      </div>
      {addNewUser ? <Form /> : null}
    </div>
  );
};
