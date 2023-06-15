import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./sections/models";
import Colors from "./sections/colors";

function App() {
  const url = ["models", "colors", "accessories", "summary"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Builder</h1>
        <nav className="cd-builder-main-nav">
          {/*<ul>
            { url.map((ele, idx) =>
              <li className={ page === ele ? 'active' : ''} key={idx} onClick={() => handleClick(idx)}>
                { page } 
                { ele }
                <a href={"#" + ele}>{ ele }</a>
              </li>
            ) }
            <li className={ page === '' ? "active" : "" }><a href={"#" + url[0]}>Models</a></li>
            <li className=""><a href={"#" + url[1]}>Colors</a></li>
            <li><a href={"#" + url[2]}>Accessories</a></li>
            <li><a href={"#" + url[3]}>Summary</a></li>
          </ul>
          <BrowserRouter>
            <Routes>
              <Route index element={<Models />} />
              <Route path="models" element={<Models />} />
              <Route path="colors" element={<Colors />} />
            </Routes>
          </BrowserRouter>*/}
          <Router>
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/models'} className="nav-link">Models</Link></li>
              <li><Link to={'/colors'} className="nav-link">Colors</Link></li>
            </ul>
            <Routes>
              <Route path='/models' component={Models} />
              <Route path='/colors' component={Colors} />
            </Routes>
          </Router>
        </nav>


      </header>
    </div >
  );
}

export default App;