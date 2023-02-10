import "@fontsource/mulish";
import "./index.scss";

import { Routes, Route } from "react-router-dom";

import SignIn from "Modules/SignIn";
import SignUp from "Modules/SignUp";
import ForgotPassword from "Modules/ForgotPassword";
import RegisterSuccess from "Modules/RegisterSuccess";
import UserSetup from "Modules/UserSetup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/user-setup" element={<UserSetup />} />
    </Routes>
  );
}

export default App;
