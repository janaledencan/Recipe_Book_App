import Pages from "./pages/Pages";
import { Link } from 'react-router-dom';
import Search from "./components/Search";
import Navigation from "./components/Navigation";

import styled from "styled-components";
import { GiSpellBook } from "react-icons/gi";

import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import Chef from "./images/female-chef.png";
import "./auth.css";

function App() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  }

  const hideSearchRoutes = ["/myRecipes", "/saved-recipes", "/create-recipe"];
  const hideSearch = hideSearchRoutes.includes(location.pathname);

  const hideChefRoute = ["/auth"];
  const hideChef = hideChefRoute.includes(location.pathname);


  return (
    <div className="App">

      <Nav>
        <div className="logo">
          <GiSpellBook />
          <Logo to={"/"}>Coqua</Logo>
        </div>

        {!cookies.access_token ? (
          <AuthenticationLink><Link to="/auth">Login/Register</Link></AuthenticationLink>
        ) : (
          <button className="logout-btn" onClick={logout}>Logout</button>
        )}

      </Nav>
      {!cookies.access_token && !hideChef && (
        <Header>
          <h1>Welcome to Coqua!</h1>
          <img src={Chef} alt="Welcome Image" />
          <h3>Cook with us.</h3>
        </Header>
      )}
      {cookies.access_token && !hideSearch && (
        <>
          <Search />
        </>
      )}
      {cookies.access_token && (
        <Navigation />
      )}
      <Pages />

    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', cursive;
  text-shadow: 2px 2px 8px #D67979;
  margin-left: 0.5rem;
`;


const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`;

const AuthenticationLink = styled.div`
  margin-left: 70%;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Poppins', cursive;
`;

const Header = styled.div`
  text-align: center;
  margin: 2rem 0;

  h1 {
    font-size: 2.5rem;
    font-family: 'Poppins', cursive;
    text-shadow: 2px 2px 8px #D67979;
  }

  img {
    margin-top: 1rem;
    width: 30%;
    height: auto;
  }
`;


export default App;
