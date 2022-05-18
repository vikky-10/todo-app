// import { Main } from "./components/Main";
import Users from "./components/showComponents/Users";
import Form from "./components/formComponents/Form";
// import Header from "./components/showComponents/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./components/styles.css";
function App() {
  // const addNewUser = useSelector((state) => state.addNewUser);

  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="add" element={<Form />} />
        <Route path="update" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
