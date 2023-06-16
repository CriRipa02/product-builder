import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./sections/models";
import Colors from "./sections/colors";
import Accessories from "./sections/accessories";
import Summary from "./sections/summary";
import { useState, useContext, createContext } from "react";
import Footer from "./sections/footer";

const UserContext = createContext();

function App() {
  const [page, setPage] = useState("models");
  const [total, setTotal] = useState(0);
  const [model, setModel] = useState({});
  const [priceModelAddedBefore, setPriceModelAddedBefore] = useState(0);

  const url = [
    { name: "models", component: Models },
    { name: "colors", component: Colors },
    { name: "accessories", component: Accessories },
    { name: "summary", component: Summary }
  ];

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  }

  const updateModel = (newModel) => {
    setModel(newModel);
  }

  const updatePriceModelAddedBefore = (newPrice) => {
    setPriceModelAddedBefore(newPrice);
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
                <Route index element={<Models total={total} model={model} priceModelAddedBefore={priceModelAddedBefore} updTot={updateTotal} updMod={updateModel} updPriceMod={updatePriceModelAddedBefore} />} />
                {url.map(ele =>
                  <Route path={"/" + ele.name} element={<ele.component total={total} model={model} priceModelAddedBefore={priceModelAddedBefore} updTot={updateTotal} updMod={updateModel} updPriceMod={updatePriceModelAddedBefore} />} key={ele.name} />
                )}
              </Routes>
            </UserContext.Provider>
          </Router>
        </header>
        <Footer total={total} model={model} />
      </div >
    </div>
  );
}

export default App;