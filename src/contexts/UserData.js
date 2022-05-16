import React, { createContext, useEffect, useState } from "react";

export const UserContex = createContext();

export const UserContextProvider = (props) => {
  const [items, setItem] = useState();
  const [edits, setEdit] = useState(false);
  const [isActive, setIsActive] = useState(true); //for toggle
  const [disable, setDisable] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [arr, setArr] = useState([
    {
      name: "vikky Singh",
      email: "vikky@zopsmart.com",
      phone: "9754124566",
    },
    {
      name: "Aditya Tiwari",
      email: "aditya@zopsmart.com",
      phone: "9754124566",
    },
    {
      name: "ujjwal pratap",
      email: "ujjwal@zopsmart.com",
      phone: "9754124566",
    },
    {
      name: "preet sandu",
      email: "preet@zopsmart.com",
      phone: "9754124566",
    },
    {
      name: "Aman gupta",
      email: "aman@zopsmart.com",
      phone: "9754124566",
    },
  ]);

  useEffect(() => {}, []);
  function push(element) {
    let i = 0;
    arr.map((n) => {
      n["id"] = i;
      i++;
    });

    setArr((prev) => [element, ...prev]);
    //  console.log("from data", arr);
  }
  function itemRemove(email) {
    let ans = arr.filter((item) => item.email !== email);
    setArr(ans);
    setData({ name: "", email: "", phone: "" });
  }

  function edit(element) {
    setIsActive(true);
    setEdit(true);
    setItem(element);
    setDisable(true);
  }
  function updateItem(object) {
    let updated = arr.map((item, idx) => {
      if (item.id === object.id) {
        return {
          ...item,
          name: object.name,
          email: object.email,
          phone: object.phone,
        };
      }
      return item;
    });
    setArr(updated);
    console.log("after dupdate", arr);
    setEdit(false);
    setDisable(false);
  }

  const dataToSend = {
    arr,
    push,
    itemRemove,
    edit,
    items,
    edits,
    setEdit,
    updateItem,
    isActive,
    setIsActive,
    data,
    setData,
    disable,
    setDisable,
  };

  return (
    <UserContex.Provider value={dataToSend}>
      {props.children}
    </UserContex.Provider>
  );
};
