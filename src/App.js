import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./sections/models";
import Colors from "./sections/colors";
import Accessories from "./sections/accessories";
import Summary from "./sections/summary";
import { useState, useContext, createContext } from "react";

const UserContext = createContext();

function App() {
  const [page, setPage] = useState("models");
  const [total, setTotal] = useState(0);

  const url = [
    { name: "models", component: Models },
    { name: "colors", component: Colors },
    { name: "accessories", component: Accessories },
    { name: "summary", component: Summary }
  ];

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  }

  return (
    <div className="App">
      <div className="cd-product-builder">
        <header className="main-header">
          <h1>Product Builder</h1>
          <Router>
            <nav className="cd-builder-main-nav">
              <ul className="navbar-nav mr-auto">
                {url.map(ele =>
                  <li className={page === ele.name ? "active" : ""} onClick={() => setPage(ele.name)} key={ele.name}>
                    <Link to={"/" + ele.name} className="nav-link">{ele.name}</Link>
                  </li>
                )}
              </ul>
            </nav>
            
            <UserContext.Provider value={total}>
              <Routes>
                <Route index element={<Models />} />
                {url.map(ele =>
                  <Route path={"/" + ele.name} element={<ele.component total={total} update={updateTotal} />} key={ele.name} />
                )}
              </Routes>
            </UserContext.Provider>
          </Router>
        </header>
        <footer className="cd-builder-footer step-1 disabled">
          <div className="selected-product">
            <img src="img/product01_col01.jpg" alt="Product preview" />
            <div className="tot-price">
              <span>Total</span>
              <span className="total">$<b>{total}</b></span>
            </div>
          </div>
          <nav className="cd-builder-secondary-nav">
            <ul>
              <li className="next nav-item">
                <ul>
                  <li className="visible"><a href="#0">Colors</a></li>
                  <li className=""><a href="#0">Accessories</a></li>
                  <li className=""><a href="#0">Summary</a></li>
                  <li className="buy"><a href="#0">Buy Now</a></li>
                </ul>
              </li>
              <li className="prev nav-item">
                <ul>
                  <li className="visible"><a href="#0">Models</a></li>
                  <li className=""><a href="#0">Models</a></li>
                  <li className=""><a href="#0">Colors</a></li>
                  <li className=""><a href="#0">Accessories</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <span className="alert">Please, select a model first!</span>
        </footer>
      </div >
    </div>
  );
}

export default App;