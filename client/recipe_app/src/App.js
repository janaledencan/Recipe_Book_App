import Pages from "./pages/Pages";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import { GiSpellBook } from "react-icons/gi";
import Auth from './pages/Auth';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function App() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiSpellBook />
          <Logo to={"/"}>Coqua</Logo>
          {!cookies.access_token ? (
            <AuthenticationLink to="/auth">Login/Register</AuthenticationLink>
          ) : (
            <button onClick={logout}>Logout</button>
          )}

        </Nav>
        <Search />
        <Navigation />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', cursive;
`;


const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`;

const AuthenticationLink = styled(Link)`
  margin-left: 70%;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', cursive;
`;

export default App;
