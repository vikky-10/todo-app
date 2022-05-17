import React from "react";
import "../styles.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit, updateButton, Disable } from "../../actions/index";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const data = useSelector((state) => state.Add);
  const history = useNavigate();
  const disableButton = useSelector((state) => state.disableButton);

  const dispatch = useDispatch();

  function handleDelete(id) {
    // let ans = arr.filter((item) => item.email !== email);
    console.log("delete", id);
    dispatch(Delete(id));
    // setData({ name: "", email: "", phone: "" });
  }
  function handleEdit(idx) {
    dispatch(Edit(idx));
    dispatch(updateButton(true));
    dispatch(Disable(true));
    history("/update");
  }

  function showData() {
    console.log("update ke baad ka data", data);
    return data.map((item, idx) => {
      return (
        <div className="mb-2 p-4 max-w-xxl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Neil"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-m font-medium text-gray-900 truncate dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.email}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    +91 {item.phone}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 ml-8">
            <button
              className="inline-flex items-center mr-40 px-4  py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
              onClick={() => handleEdit(item)}
              disabled={disableButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              &nbsp; Edit
            </button>
            <button
              className="inline-flex items-center px-4  py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
              onClick={() => handleDelete(idx)}
              disabled={disableButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex justify-center">
        <div className="h-screen scroll">
          {/* //for refernce */}
          {/* <UserContex.Consumer>{(contex) => showData(contex)}</UserContex.Consumer> */}
          {showData()}
        </div>
      </div>
    </>
  );
};

export default Users;
