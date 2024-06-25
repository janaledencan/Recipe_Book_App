import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiSpellBook />
          <Logo to={"/"}>Coqua</Logo>
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
  fint-weight: 400;
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

export default App;
