import React from "react";
import { useState } from "react";

export default function Accessories(props) {
    let model1 = {
        id: "BMW i3", types: [
            { id: 0, value: 1080, text: "BMW Charging Station", textPrice: "1.080", isSelected: false },
            { id: 1, value: 1895, text: "BMW Maintenance Program Upgrade", textPrice: "1.895", isSelected: false },
            { id: 2, value: 975, text: "1 Year BMW Maintenance Program Upgrade", textPrice: "975", isSelected: false },
        ]
    }
    let model2 = {
        id: "BMW i8", types: [
            { id: 0, value: 6300, text: "BMW Laserlight", textPrice: "6.300", isSelected: false },
            { id: 1, value: 1080, text: "BMW Charging Station", textPrice: "1.080", isSelected: false },
            { id: 2, value: 1895, text: "BMW Maintenance Program Upgrade", textPrice: "1.895", isSelected: false },
            { id: 3, value: 975, text: "1 Year BMW Maintenance Program Upgrade", textPrice: "975", isSelected: false },
        ]
    }

    const updateAccessories = (data) => {
        let accessories = props.accessories;
        accessories.push(data);
        props.updAccessories(accessories);

        if(props.model.name === model1.id) {
            model1.types.map(item => {
                if(item.id === data.id) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        } else {
            model2.types.map(item => {
                if(item.id === data.id) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        }
    }

    const isAccessorySelected = (data) => {
        const result = !!props.accessories.find(item => item.value === data.value);
        console.log("result", result)
        return result;
    }

    return (
        <div>
            {props.model.name === model1.id
                ? <ul className="accessories-list options-list">
                    {model1.types.map(ele =>
                        <li className={`js-option ${ele.isSelected ? 'selected' : ''}`}
                            data-price={ele.value} onClick={() => updateAccessories(ele)} key={ele.id}>
                            <p>{ele.text}</p>
                            <span className="price">${ele.textPrice}</span>
                            <div className="check"></div>
                        </li>
                    )}
                </ul>
                : <ul className="accessories-list options-list">
                    {model2.types.map(ele =>
                        <li className={`js-option ${ele.value === props.accessories.value ? 'selected' : ''}`}
                            data-price={ele.value} onClick={() => updateAccessories(ele)} key={ele.id}>
                            <p>{ele.text}</p>
                            <span className="price">${ele.textPrice}</span>
                            <div className="check"></div>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}