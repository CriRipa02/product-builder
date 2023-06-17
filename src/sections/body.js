import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./pages/models";

export default function Body(props) {
    return (
        <div className="cd-builder-steps">
            <div className="builder-step active back">
                <section className="cd-step-content">
                    {props.url.map((ele, idx) =>
                        <header key={ele.name} className={ele.name !== props.page ? "no-display" : ""}>
                            <h1>Select {ele.text}</h1>
                            <span className="steps-indicator">Step <b>{idx + 1}</b> of {props.url.length}</span>
                        </header>
                    )}
                    <a href="https://codyhouse.co/gem/product-builder" className="cd-nugget-info hide-on-desktop">Article &amp; Download</a>

                    <Routes>
                        <Route index element={<Models total={Number(props.total)} model={props.model} 
                            priceModelAddedBefore={(data) => props.updatePriceModelAddedBefore(data)} updTot={(data) => props.updTot(data)} 
                            updMod={(data) => props.updMod(data)} updPriceMod={(data) => props.updPriceMod(data)} />} />
                        {props.url.map(ele =>
                            <Route path={"/" + ele.name} element={<ele.component total={Number(props.total)} model={props.model} 
                            priceModelAddedBefore={(data) => props.updatePriceModelAddedBefore(data)} updTot={(data) => props.updTot(data)} 
                            updMod={(data) => props.updMod(data)} updPriceMod={(data) => props.updPriceMod(data)} />} key={ele.name} />
                        )}
                    </Routes>
                </section>
            </div>
        </div>
    );
}