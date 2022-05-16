import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  Add,
  Update,
  updateButton,
  Button,
  Disable,
} from "../../actions/index";
const Form = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  // const [isPresent, setIsPresent] = useState();
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.Add);
  const [isPresent, setIsPresent] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const present = arr.some((item) => item.email === data.email);

    if (present === false) {
      dispatch(Add(data));
      if (isPresent === true) {
        setIsPresent(false);
      }
      setData({ name: "", email: "", phone: "" });
    } else {
      setIsPresent(present);
    }
  }
  const updateButtons = useSelector((state) => state.updateButton);
  const editData = useSelector((state) => state.editReducer);

  useEffect(() => {
    editData && setData(editData);
  }, [editData]);
  // console.log(report);
  function handleUpdate(event) {
    event.preventDefault();

    dispatch(Update(data));
    dispatch(updateButton(false));
    setData({ name: "", email: "", phone: "" });
  }
  // function remove() {
  //   dispatch(Update(editData));
  //   dispatch(updateButton(false));
  //   dispatch(Button(false));
  //   // setData({ name: "", email: "", phone: "" });
  // }
  function backButton(event) {
    // setData({ name: "", email: "", phone: "" });
    event.preventDefault();

    confirmAlert({
      title: "Confirm to Back",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: function () {
            dispatch(Update(editData));
            setData({ name: "", email: "", phone: "" });
            dispatch(updateButton(false));
            dispatch(Disable(false));
          },
        },
        {
          label: "No",
          onClick: () => <></>,
        },
      ],
    });
  }

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 my-20">
      <div className="max-w-lg mx-auto md:h-full">
        <h1 className="text-2xl font-bold text-center text-gray-600 sm:text-3xl mb-20">
          Content Form
        </h1>
        {/* validation */}
        {isPresent && (
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">
                  This email address has been used already.
                </p>
                <p class="text-sm">
                  Please contact support if you would like more access.
                </p>
              </div>
            </div>
          </div>
        )}
        <form
          onSubmit={updateButtons ? handleUpdate : handleSubmit}
          className=" relative p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
        >
          {updateButtons && (
            <button onClick={backButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mb-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          )}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-80"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={remove}
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg> */}
          <div>
            <label htmlFor="name" className="text-sm font-medium mr-20 pr-80">
              Name
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="name"
                className="w-full p-4 pr-12 text-m border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter name"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
                value={data.name}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium mr-20 pr-80">
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full p-4 pr-12 text-m border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
                value={data.email}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium mr-20 pr-80"
            >
              Phone
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="phone"
                className="w-full p-4 pr-12 text-m border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter phone"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={data.phone}
                required
              />
            </div>
          </div>
          {updateButtons ? (
            <button
              type="submit"
              className="block w-full  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2"
              // onClick={handleUpdate}
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              // onClick={handleSubmit}
              className="block w-full  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
