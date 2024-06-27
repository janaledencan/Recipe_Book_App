import Pages from "./pages/Pages";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import { GiSpellBook } from "react-icons/gi";
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiSpellBook />
          <Logo to={"/"}>Coqua</Logo>
          <AuthenticationLink to="/auth">Login/Register</AuthenticationLink>
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
