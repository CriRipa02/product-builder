import React from "react";

import model1 from "../../assets/models/product01.jpg";
import model2 from "../../assets/models/product02.jpg";

export default function Models(props) {
    const models = [
        { name: "BMW i3", img: model1, imgName: "product01.jpg", value: "product-01", price: "42400", textPrice: "from $42.400" },
        { name: "BMW i8", img: model2, imgName: "product02.jpg", value: "product-02", price: "140700", textPrice: "from $140.700" }
    ]

    const valorizeModel = (data) => {
        const price = Number(data.price);
        let updMod = props.model;
        let updTotal = Number(props.total);

        if (!updMod.name) {
            updMod = data;
            updTotal = price;
        } else {
            if (updMod.value === data.value) {
                updMod = {};
                updTotal = 0;
            } else {
                updMod = data;
                updTotal = price;
            }
        }
        
        if(data.name === props.model1.id) {
            props.updColor(props.model1.types[0]);
        } else {            
            props.updColor(props.model2.types[0]);
        }
        props.updMod(updMod);
        props.updTot(updTotal);
    }

    return (
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
    );
}