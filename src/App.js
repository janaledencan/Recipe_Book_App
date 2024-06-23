import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Navigation />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

export default App;
