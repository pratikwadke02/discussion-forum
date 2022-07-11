import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AddQuestion from "./components/Question/AddQuestion";
import Profile from "./components/Profile/Profile";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/add_question" element={<AddQuestion />} />
    </Routes>
  </BrowserRouter>
);

export default App;
