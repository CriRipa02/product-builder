import React from "react";
import { useState, useContext, createContext, useEffect } from "react";

import model1 from "../assets/models/product01.jpg";
import model2 from "../assets/models/product02.jpg";

export default function Models(props) {
    const models = [
        { name: "BMW i3", img: model1, imgName: "product01.jpg", value: "product-01", price: "42400", textPrice: "from $42.400" },
        { name: "BMW i8", img: model2, imgName: "product02.jpg", value: "product-02", price: "140700", textPrice: "from $140.700" }
    ]

    const valorizeModel = (data) => {
        const price = Number(data.price);
        let updMod = props.model;
        let updTotal = Number(props.total);
        let updPriceMod = Number(props.priceModelAddedBefore);

        if (!updMod.name) {
            updMod = data;
            updTotal += price;
            updPriceMod = price;
        } else {
            if (updMod.value === data.value) {
                updMod = {};
                updTotal -= price;
            } else {
                updMod = data;
                updTotal -= updPriceMod;
                updTotal += price;
                updPriceMod = price;
            }
        }
        props.updMod(updMod);
        props.updTot(updTotal);
        props.updPriceMod(updPriceMod);
    }

    return (
        <section className="cd-builder-steps cd-step-content">
            <ul className="models-list options-list cd-col-2">
                {models.map(ele =>
                    <li className={`js-option js-radio ${ele.value === props.model.value ? "selected loaded" : ""}`}
                        data-price={ele.price} data-model={ele.value}
                        onClick={() => valorizeModel(ele)} key={ele.name}
                    >
                        <span className="name">{ele.name}</span>
                        <img src={ele.img} alt={ele.name} />
                        <span className="price">{ele.textPrice}</span>
                        <div className="radio" />
                    </li>
                )}
            </ul>
        </section>
    );
}