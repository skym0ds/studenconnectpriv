import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Home/NavBarHome.jsx";
import '../styles/Login/Login.css'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('loggedIn', true);
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
    <div className="main1">
      <form className="desc" onSubmit={handleLogin}>
        <h1>Inicia sesión</h1>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <button className="Login" type="submit">Ingresar</button>
      </form>
    </div>
    </>
  );
};

export default Login;
