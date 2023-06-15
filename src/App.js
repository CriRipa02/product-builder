import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./sections/models";
import Colors from "./sections/colors";
import Accessories from "./sections/accessories";
import Summary from "./sections/summary";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <h1>Product Builder</h1>
        <nav className="cd-builder-main-nav">
          <Router>
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/models'} className="nav-link">Models</Link></li>
              <li><Link to={'/colors'} className="nav-link">Colors</Link></li>
              <li><Link to={'/accessories'} className="nav-link">Accessories</Link></li>
              <li><Link to={'/summary'} className="nav-link">Summary</Link></li>
            </ul>
            <Routes>
              <Route index element={<Models />} />
              <Route path='/models' element={<Models />} />
              <Route path='/colors' element={<Colors />} />
              <Route path='/accessories' element={<Accessories />} />
              <Route path='/summary' element={<Summary />} />
            </Routes>
          </Router>
        </nav>
      </header>
    </div >
  );
}

export default App;