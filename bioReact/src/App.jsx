import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Forgotpass from "./components/Forgotpass"
import SignUp from "./pages/SignUp";
import Url from "./components/Url";
import axios from "axios";


export const instance = axios.create({
  baseURL: "http://localhost:1000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element = {<Forgotpass/>} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/:shortUrl" element = { <Url />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
