import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/alliance-icon.jpeg";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <img src={Logo} alt="logo" />
      <h2>Tidy Life</h2>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <section>
          <NavLink to={"/"}>Sign Up</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
