import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-3 font-mono text-xl">
      <div className="mr-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
        >
          Home
        </NavLink>
      </div>
      <div className="mr-5">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
        >
          Dashboard
        </NavLink>
      </div>
      <div className="mr-5">
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
        >
          Products
        </NavLink>
      </div>
      <div className="mr-5">
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
