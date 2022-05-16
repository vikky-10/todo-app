import React, { useContext } from "react";
import Form from "./Form";
import { UserContex } from "../../contexts/UserData";
const ToggleButton = () => {
  const { isActive, setIsActive } = useContext(UserContex);
  return (
    <div>
      <div className="flex justify-center">
        <button onClick={() => setIsActive(!isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 p-10"
            viewBox="0 0 20 20"
            fill="#EFE0FF"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isActive && <Form />}
    </div>
  );
};

export default ToggleButton;
