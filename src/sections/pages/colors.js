import React from "react";
import prod01_col01 from "../../assets/colors/product01_col01.jpg";
import prod01_col02 from "../../assets/colors/product01_col02.jpg";
import prod01_col03 from "../../assets/colors/product01_col03.jpg";
import prod02_col01 from "../../assets/colors/product02_col01.jpg";
import prod02_col02 from "../../assets/colors/product02_col02.jpg";

export default function Colors(props) {
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

    const updateColor = (data) => {
        const value = Number(data.value);
        let total = Number(props.total);
        let updPriceCol = Number(props.priceColorAddedBefore);
        
        if(value !== updPriceCol) {
            total = (Number(props.total) - updPriceCol) + value;
        }
        
        props.updColor(data);
        props.updTot(total);
        props.updPriceCol(data.value);
    }

    return (
        <div>
            {props.model.name === model1.id
                ? <ul className="cd-product-previews">
                    {model1.types.map(ele =>
                        <li className={props.color && props.color.color === ele.color ? "selected" : ""} key={ele.color}>
                            <img src={ele.img} alt="Product Preview" className="product-preview" />
                        </li>
                    )}
                </ul>

                : <ul className="cd-product-previews">
                    {model2.types.map(ele =>
                        <li className={props.color && props.color.color === ele.color ? "selected" : ""} key={ele.color}>
                            <img src={ele.img} alt="Product Preview" className="product-preview" />
                        </li>
                    )}
                </ul>
            }

            {props.model.name === model1.id
                ? <ul className="cd-product-customizer">
                    {model1.types.map(ele =>
                        <li className={props.color && props.color.color === ele.color ? "selected" : ""} data-content={ele.text + " - $" + ele.value} onClick={() => updateColor(ele)} key={ele.color}>
                            <div data-color={ele.color}>{ele.text}</div>
                        </li>
                    )}
                </ul>

                : <ul className="cd-product-customizer">
                    {model2.types.map(ele =>
                        <li className={props.color && props.color.color === ele.color ? "selected" : ""} data-content={ele.text + " - $" + ele.value} onClick={() => updateColor(ele)} key={ele.color}>
                            <div data-color={ele.color}>{ele.text}</div>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}