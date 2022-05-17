import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../actions/index";

const Header = () => {
  const dispatch = useDispatch();

  function handleAddUser() {
    console.log("yh challl");
    // dispatch(Button(true));
  }

  return (
    <nav class="bg-white border-gray-200 px-2 ml-40 sm:px-4 py-5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="ZopSmart"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ZopSmart
          </span>
        </Link>

        <div class="hidden md:flex items-center mr-80 justify-end md:flex-1 lg:w-0 ">
          <Link
            to="/add"
            // onClick={handleAddUser}
            class="rounded-lg px-4 py-2 bg-blue-500 text-white text-lg hover:bg-blue-600 duration-300  inline-flex items-center justify-center p-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Add
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
