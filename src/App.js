import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Page404 from "./components/Page404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcomepage" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
