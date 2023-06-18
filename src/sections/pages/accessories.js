import React from "react";
import { useState } from "react";

export default function Accessories(props) {
    let [model1] = useState({
        id: "BMW i3", types: [
            { id: 0, value: 1080, text: "BMW Charging Station", textPrice: "1.080", isSelected: !!props.accessories.find(item => item.id === 0) },
            { id: 1, value: 1895, text: "BMW Maintenance Program Upgrade", textPrice: "1.895",  isSelected: !!props.accessories.find(item => item.id === 1) },
            { id: 2, value: 975, text: "1 Year BMW Maintenance Program Upgrade", textPrice: "975",  isSelected: !!props.accessories.find(item => item.id === 2) },
        ]
    });
    let [model2] = useState({
        id: "BMW i8", types: [
            { id: 0, value: 6300, text: "BMW Laserlight", textPrice: "6.300",  isSelected: !!props.accessories.find(item => item.id === 0) },
            { id: 1, value: 1080, text: "BMW Charging Station", textPrice: "1.080",  isSelected: !!props.accessories.find(item => item.id === 1) },
            { id: 2, value: 1895, text: "BMW Maintenance Program Upgrade", textPrice: "1.895",  isSelected: !!props.accessories.find(item => item.id === 2) },
            { id: 3, value: 975, text: "1 Year BMW Maintenance Program Upgrade", textPrice: "975",  isSelected: !!props.accessories.find(item => item.id === 3) },
        ]
    })

    const updateAccessories = (data) => {
        let accessories = props.accessories;
        if(!accessories.find(item => item.id === data.id)) {
            accessories.push(data);
        } else {
            accessories = accessories.filter(item => item.id !== data.id);
        }
        
        props.updAccessories(accessories);

        data.isSelected = !data.isSelected;

        if (!data.isSelected) {
            props.updTot(props.total - data.value);
        } else {
            props.updTot(props.total + data.value);
        }
    }

    return (
        <div>
            {props.model.name === model1.id
                ? <ul className="accessories-list options-list">
                    {model1.types.map(ele =>
                        <li className={`js-option ${!!ele.isSelected ? 'selected' : ''}`}
                            data-price={ele.value} onClick={() => updateAccessories(ele)} key={ele.id}>
                            <h1>{ele.isSelected}</h1>
                            <p>{ele.text}</p>
                            <span className="price">${ele.textPrice}</span>
                            <div className="check"></div>
                        </li>
                    )}
                </ul>
                : <ul className="accessories-list options-list">
                    {model2.types.map(ele =>
                        <li className={`js-option ${!!ele.isSelected ? 'selected' : ''}`}
                            data-price={ele.value} onClick={() => updateAccessories(ele)} key={ele.id}>
                            <h1>{ele.isSelected}</h1>
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