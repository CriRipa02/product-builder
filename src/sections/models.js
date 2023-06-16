import React from "react";
import { useState, useContext, createContext, useEffect } from "react";

import model1 from "../assets/models/product01.jpg";
import model2 from "../assets/models/product02.jpg";

export default function Models(props) {
    const [model, setModel] = useState({});
    let [total, setTotal] = useState(Number(props.total));

    const models = [
        { name: "BMW i3", img: model1, value: "product-01", price: "42400", textPrice: "from $42.400" },
        { name: "BMW i8", img: model2, value: "product-02", price: "140700", textPrice: "from $140.700" }
    ]

    const valorizeModel = (data) => {
        if (!model.name) {
            setModel(data);
            //setTotal(total + Number(data.price));
            props.update(total + Number(data.price))
        } else {
            if (model.value === data.value) {
                setModel({});
                setTotal(total - Number(data.price));
                props.update(total - Number(data.price))
            } else {
                setModel(data);
                setTotal(Number(props.total) + Number(data.price));
                props.update(Number(props.total) + Number(data.price))
            }
        }
    }

    return (
        <section className="cd-builder-steps cd-step-content">
            <ul className="models-list options-list cd-col-2">
                {models.map(ele =>
                    <li className={`js-option js-radio ${ele.value === model.value ? "selected loaded" : ""}`}
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