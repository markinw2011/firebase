import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          เข้าสู่ระบบแล้ว
          <Link to="/DashBoard">dash</Link>
        </p>
      ) : (
        <p>
          <Link to="/Login">Log in</Link> or <Link to="/signup">sign up</Link>
        </p>
      )}
    </div>
  );
};

export default Home;
