import "@fontsource/mulish";
import "./index.css";

import { Routes, Route } from "react-router-dom";

import SignIn from "Modules/SignIn";
import SignUp from "Modules/SignUp";
import ForgotPassword from "Modules/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
