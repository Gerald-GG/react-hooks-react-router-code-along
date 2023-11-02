import React from "react";
import ReactDOM from "react-dom";
// importing react-router functions and add NavLink
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Addding Basic styling for NavLinks
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  TextDecoration: "none",
  color: "white",
};

// define the NavBar component
function NavBar() {
  return (
    <div>
      <NavLink
      to="/"
      exact //set exact  so it knows to only set activeStyle when route is deeply equal to link
      // add styling to NavLink
      style={linkStyles}
      activeStyle={{    // add prop for active styles
        background: "darkblue",
      }}
      >
        Home
      </NavLink>
      <NavLink
       to="/login"
       exact
       style={linkStyles}
       activeStyle={{
        background: "darkblue",
       }}
       >
        Login
       </NavLink>
    </div>
  );
}

function Home() {
  return <h1>Home!</h1>
}

function About() {
  return <h1>This is my about componenet!</h1>
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}


// Change so that router cordinates what is displaying
ReactDOM.render(
  <BrowserRouter>
  <NavBar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
