import logo from "../../assets/LogoV2.svg";
import { useState } from "react";
import "../../styles/Home/NavBarHome.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="links">
          <a className="action_btn Registrarse" href="#">Registrarse</a>
          <a className="action_btn Login" href="/login">Iniciar Sesión</a>
        </ul>
        <div className="toggle_btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
