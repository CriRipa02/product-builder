import React from "react";

export default function Summary(props) {
    return (
        <ul className="summary-list">
            <li>
                <h2>Model</h2>
                <img src={props.imgModelSelected} alt="Alfa Romeo Giulietta" className="product-preview" />
                <h3>{props.model.name}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.
                </p>
            </li>
            <li data-summary="colors">
                <h2>Color</h2>
                <span className="summary-color">
                    <em className="color-swatch" data-color={props.color.color}></em>
                    <em className="color-label">{props.color.text} - ${props.color.textValue}</em>
                </span>
            </li>
            <li data-summary="accessories">
                <h2>Accessories</h2>
                {props.accessories.length > 0
                    ? <ul className="summary-accessories">
                        {props.accessories.map(ele =>
                            <li key={ele.id}><p>{ele.text}</p></li>
                        )}
                    </ul>
                    : <ul className="summary-accessories">
                        <li><p>No Accessories selected;</p></li>
                    </ul>
                }
            </li>
        </ul>
    );
}