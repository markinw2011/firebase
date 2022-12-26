import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/DashBoard" element={< DashBoard />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/SignUp" element={< SignUp />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
