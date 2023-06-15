import React from "react";

import model1 from "../assets/models/product01.jpg";
import model2 from "../assets/models/product02.jpg";

export default function Models() {
    return (
        <section className="cd-step-content">
            <ul className="models-list options-list cd-col-2">
                <li className="js-option js-radio" data-price="42400" data-model="product-01">
                    <span className="name">BMW i3</span>
                    <img src={model1} alt="BMW i3" />
                    <span className="price">from $42.400</span>
                    <div className="radio"></div>
                </li>
                <li className="js-option js-radio" data-price="140700" data-model="product-02">
                    <span className="name">BMW i8</span>
                    <img src={model2} alt="BMW i8" />
                    <span className="price">from $140.700</span>
                    <div className="radio"></div>
                </li>
            </ul>
        </section>
    );
}