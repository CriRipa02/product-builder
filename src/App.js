import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./sections/pages/models";
import Colors from "./sections/pages/colors";
import Accessories from "./sections/pages/accessories";
import Summary from "./sections/pages/summary";
import { useState } from "react";
import Header from "./sections/header";
import Footer from "./sections/footer";
import Sponsor from "./sections/sponsor";

import prod01_col01 from "./assets/colors/product01_col01.jpg";
import prod01_col02 from "./assets/colors/product01_col02.jpg";
import prod01_col03 from "./assets/colors/product01_col03.jpg";
import prod02_col01 from "./assets/colors/product02_col01.jpg";
import prod02_col02 from "./assets/colors/product02_col02.jpg";


function App() {
  let [isSponsorVisible, setIsSponsorVisible] = useState(true);
  let [showAlert, setShowAlert] = useState(false);
  const [page, setPage] = useState("models");
  const [total, setTotal] = useState(0);
  const [model, setModel] = useState({});
  const [priceColorAddedBefore, setPriceColorAddedBefore] = useState(0);
  const [color, setColor] = useState({});
  const [accessories, setAccessories] = useState([]);
  const [imgFooter, setImgFooter] = useState(prod01_col01);
  const [loadingSelected, setLoadingSelected] = useState("");

  const model1 = {
    id: "BMW i3", types: [
      { img: prod01_col01, value: 0, textValue: "0", text: "White", color: "white" },
      { img: prod01_col02, value: 550, textValue: "550", text: "Mineral Grey", color: "grey" },
      { img: prod01_col03, value: 550, textValue: "550", text: "Orange Metallic", color: "orange" },
    ]
  }
  const model2 = {
    id: "BMW i8", types: [
      { img: prod02_col01, value: 0, textValue: "0", text: "Grey Metallic", color: "grey" },
      { img: prod02_col02, value: 1800, textValue: "1.800", text: "White Perl Metallic", color: "perl" },
    ]
  }

  const url = [
    { id: 0, name: "models", text: "Model", component: Models },
    { id: 1, name: "colors", text: "Color", component: Colors },
    { id: 2, name: "accessories", text: "Accessories", component: Accessories },
    { id: 3, name: "summary", text: "Summary", component: Summary }
  ];

  const footer = [
    { id: 0, pageFrom: "models", pageTo: "colors" },
    { id: 1, pageFrom: "colors", pageTo: "accessories" },
    { id: 2, pageFrom: "accessories", pageTo: "summary" },
    { id: 3, pageFrom: "summary", pageTo: "buy now" }
  ];

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  }

  const updateModel = (newModel) => {
    setModel(newModel);
    if(!!newModel.img) {
      setImgFooter(newModel.img);
    } else {
      setImgFooter(prod01_col01);
    }
    setAccessories([]);
    setShowAlert(false);
  }

  const updatePriceColorAddedBefore = (newPrice) => {
    setPriceColorAddedBefore(newPrice);
  }

  const updatePage = (newPage) => {
    if (newPage !== footer[footer.length - 1].pageTo) {
      if (!!model.name) {
        setPage(newPage);
        setPriceColorAddedBefore(0);
        if (newPage !== url[1].name) {
          setImgFooter(color.img);
        }
      }
    }
  }

  const statusPage = (index) => {
    const currentPage = url.find(item => item.name === page);

    if (Number(index) < Number(currentPage.id)) {
      return "move-left";
    } else if (Number(index) === Number(currentPage.id)) {
      return "active back";
    }
    return "";
  }

  return (
    <Router>
      <div className="cd-product-builder">
        <Header showAlert={showAlert} updShowAlert={() => setShowAlert(true)}
          url={url} model={model} page={page} updPage={updatePage} />

        <div className="cd-builder-steps">
          <ul>
            {url.map((ele, idx) =>
              <li data-selection="models" className={`builder-step ${statusPage(idx)}`} key={ele.id}>
                <section className="cd-step-content">

                  <header className={ele.name !== page ? "no-display" : ""}>
                    {page !== url[0].name && page !== url[1].name
                      ? <h1>{ele.text}</h1>
                      : <h1>Select {ele.text}</h1>
                    }
                    <span className="steps-indicator">Step <b>{idx + 1}</b> of {url.length}</span>
                  </header>
                  {page === "models" &&
                    <a href="https://codyhouse.co/gem/product-builder" className="cd-nugget-info hide-on-desktop">Article &amp; Download</a>
                  }

                  <Routes>
                    <Route index element={<Models total={total} model={model}
                      loadingSelected={loadingSelected} updLoadingSelected={(value) => setLoadingSelected(value)}
                      model1={model1} model2={model2}
                      color={color} updColor={(data) => setColor(data)}
                      accessories={accessories} updAccessories={(data) => setAccessories(data)}
                      imgFooter={imgFooter}
                      priceColorAddedBefore={priceColorAddedBefore} updTot={updateTotal} updMod={updateModel} updPriceCol={updatePriceColorAddedBefore} />} />
                    <Route path={"/" + ele.name} element={<ele.component total={total} model={model}
                      loadingSelected={loadingSelected} updLoadingSelected={(value) => setLoadingSelected(value)}
                      model1={model1} model2={model2}
                      color={color} updColor={(data) => setColor(data)}
                      accessories={accessories} updAccessories={(data) => setAccessories(data)}
                      imgFooter={imgFooter}
                      priceColorAddedBefore={priceColorAddedBefore} updTot={updateTotal} updMod={updateModel} updPriceCol={updatePriceColorAddedBefore} />} />
                  </Routes>
                </section>
              </li>
            )}
          </ul>
        </div>

        <Footer showAlert={showAlert} updShowAlert={() => setShowAlert(true)}
          url={url}
          total={total} model={model} data={footer} img={imgFooter} page={page} updPage={updatePage} />
      </div>

      {!!isSponsorVisible &&
        <Sponsor updateSponsor={() => setIsSponsorVisible(false)} />
      }
    </Router>
  );
}

export default App;