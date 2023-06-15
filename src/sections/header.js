import React from "react";

export default function Colors() {
    return (
        <ul>
            <li className={ "active" }><a href="#models">Models</a></li>
            <li className=""><a href="#colors">Colors</a></li>
            <li><a href="#accessories">Accessories</a></li>
            <li><a href="#summary">Summary</a></li>
          </ul>
    );
}