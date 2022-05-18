import React, { useState, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useLocation } from "react-router-dom";
import {
  Add,
  Update,
  updateButton,
  Button,
  Disable,
} from "../../actions/index";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const [isPresent, setIsPresent] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const disableButton = useSelector((state) => state.disableButton);
  const arr = useSelector((state) => state.Add);
  function handleSubmit(event) {
    event.preventDefault();
    const present = arr.some((item) => item.email === data.email);

    if (present === false) {
      dispatch(Add(data));
      if (isPresent === true) {
        setIsPresent(false);
      }
      setData({ name: "", email: "", phone: "" });
      history("/");
    } else if (data.phone.length > 10) {
      console.log("data pppp");
      setIsPresent(true);
    } else {
      setIsPresent(present);
    }
  }

  const updateButtons = useSelector((state) => state.updateButton);
  const editData = useSelector((state) => state.editReducer);

  useEffect(() => {
    editData && setData(editData);
    if (location.pathname == "/add") {
      setData({ name: "", email: "", phone: "" });
    }
  }, [editData]);
  function handleUpdate(event) {
    event.preventDefault();

    dispatch(Update(data));
    dispatch(updateButton(false));
    setData({ name: "", email: "", phone: "" });
    dispatch(Disable(false));
    history("/");
  }
  function handleChange() {
    if (updateButtons === false && (data.name || data.name || data.email)) {
      confirmAlert({
        title: "Confirm to Back",
        message: "Beacuse your Data is not save yet!!.",
        buttons: [
          {
            label: "Yes",
            onClick: function () {
              setData({ name: "", email: "", phone: "" });

              dispatch(Disable(false));
              history("/");
            },
          },
          {
            label: "No",
            onClick: function () {
              history("/add");
            },
          },
        ],
      });
    } else {
      history("/");
    }
  }

  function backButton(event) {
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
            history("/");
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
    <>
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <button
          onClick={handleChange}
          disabled={disableButton}
          class="flex items-center"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="ZopSmart"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ZopSmart
          </span>
        </button>
      </div>

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
              <button onClick={backButton} type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>
                  <div class="flex bg-white flex-row shadow-md border border-gray-100 rounded-lg overflow-hidden w-100 ml-10">
                    <div class="flex w-3 bg-gradient-to-t from-red-500 to-red-400"></div>
                    <div class="flex-1 p-3">
                      <h1 class="md:text-xl text-gray-600">Edit</h1>
                      <p class="text-gray-400 text-xs md:text-sm font-light">
                        Please Update or Go back before do anything
                      </p>
                    </div>
                  </div>
                </span>
              </button>
            )}

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
              <label
                htmlFor="email"
                className="text-sm font-medium mr-20 pr-80"
              >
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
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="block w-full  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
