import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./sections/pages/models";
import Colors from "./sections/pages/colors";
import Accessories from "./sections/pages/accessories";
import Summary from "./sections/pages/summary";
import { useState } from "react";
import Header from "./sections/header";
import Footer from "./sections/footer";

import prod01_col01 from "./assets/colors/product01_col01.jpg";
import prod01_col02 from "./assets/colors/product01_col02.jpg";
import prod01_col03 from "./assets/colors/product01_col03.jpg";
import prod02_col01 from "./assets/colors/product01_col01.jpg";
import prod02_col02 from "./assets/colors/product01_col02.jpg";

import sponsor from "./assets/nucleo-adv-demo-1.jpg";

function App() {
  let [isSponsorVisible, setIsSponsorVisible] = useState(true);
  const [page, setPage] = useState("models");
  const [total, setTotal] = useState(0);
  const [model, setModel] = useState({});
  const [priceColorAddedBefore, setPriceColorAddedBefore] = useState(0);
  const [color, setColor] = useState({});
  const [accessories, setAccessories] = useState([]);
  const [imgFooter, setImgFooter] = useState("");

  const model1 = {
    id: "BMW i3", types: [
      { img: prod01_col01, value: 0, text: "White", color: "white" },
      { img: prod01_col02, value: 550, text: "Mineral Grey", color: "grey" },
      { img: prod01_col03, value: 550, text: "Orange Metallic", color: "orange" },
    ]
  }
  const model2 = {
    id: "BMW i8", types: [
      { img: prod02_col01, value: 0, text: "Grey Metallic", color: "grey" },
      { img: prod02_col02, value: 1800, text: "White Perl Metallic", color: "perl" },
    ]
  }

  const url = [
    { name: "models", text: "Model", component: Models },
    { name: "colors", text: "Color", component: Colors },
    { name: "accessories", text: "Accessories", component: Accessories },
    { name: "summary", text: "Summary", component: Summary }
  ];

  const footer = [
    { pageFrom: "models", pageTo: "colors", component: Models },
    { pageFrom: "colors", pageTo: "accessories", component: Accessories },
    { pageFrom: "accessories", pageTo: "summary", component: Summary },
    { pageFrom: "summary", pageTo: "buy-now", component: Summary }
  ];

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  }

  const updateModel = (newModel) => {
    setModel(newModel);
    setImgFooter(newModel.img);
    setAccessories([]);
  }

  const updatePriceColorAddedBefore = (newPrice) => {
    setPriceColorAddedBefore(newPrice);
  }

  const updatePage = (newPage) => {
    setPage(newPage);
    setPriceColorAddedBefore(0);
    if (newPage === url[2].name) {
      setImgFooter(color.img);
    }
  }

  return (
    <Router>
      <div className="cd-product-builder">
        <Header url={url} model={model} page={page} updPage={updatePage} />

        <div className="cd-builder-steps">
          <div className="builder-step active back">
            <section className="cd-step-content">
              {url.map((ele, idx) =>
                <header key={ele.name} className={ele.name !== page ? "no-display" : ""}>
                  {page !== url[0].name && page !== url[1].name
                    ? <h1>{ele.text}</h1>
                    : <h1>Select {ele.text}</h1>
                  }
                  <span className="steps-indicator">Step <b>{idx + 1}</b> of {url.length}</span>
                </header>
              )}

              {page === "models" &&
                <a href="https://codyhouse.co/gem/product-builder" className="cd-nugget-info hide-on-desktop">Article &amp; Download</a>
              }

              <Routes>
                <Route index element={<Models total={total} model={model}
                  model1={model1} model2={model2}
                  color={color}
                  updColor={(data) => setColor(data)}
                  priceColorAddedBefore={priceColorAddedBefore} updTot={updateTotal} updMod={updateModel} updPriceCol={updatePriceColorAddedBefore} />} />
                {url.map(ele =>
                  <Route path={"/" + ele.name} element={<ele.component total={total} model={model}
                    model1={model1} model2={model2}
                    color={color} updColor={(data) => setColor(data)}
                    accessories={accessories} updAccessories={(data) => setAccessories(data)}
                    priceColorAddedBefore={priceColorAddedBefore} updTot={updateTotal} updMod={updateModel} updPriceCol={updatePriceColorAddedBefore} />} key={ele.name} />
                )}
              </Routes>
            </section>
          </div>
        </div>

        <Footer total={total} model={model} data={footer} img={imgFooter} page={page} updPage={updatePage} />
      </div>
      {!!isSponsorVisible &&
        <div className="demo-avd demo-avd-cf demo-avd--dark js-demo-avd" style={{ top: "30px", right: "30px", bottom: "auto" }}>
          <div className="demo-avd__close" onClick={() => setIsSponsorVisible(!isSponsorVisible)}></div>
          <a href="https://nucleoapp.com/?ref=2214" className="demo-avd__template-img">
            <img src={sponsor} alt="Nucleo logo" />
          </a>
          <a href="https://nucleoapp.com/?ref=2214" className="demo-avd__template-text"> Nucleo - Free icon manager for Mac and Windows</a>
        </div>
      }
    </Router>
  );
}

export default App;