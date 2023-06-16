import model1 from "../assets/models/product01.jpg";
import model2 from "../assets/models/product02.jpg";

export default function Footer(props) {

    return (
        <footer className={`cd-builder-footer step-1 ${!props.model.img ? "disabled" : ""}`}>
            <div className="selected-product">
                <img src={props.model.img} alt="Product preview" />
                <div className="tot-price">
                    <span>Total</span>
                    <span className="total">$<b>{props.total}</b></span>
                </div>
            </div>
            <nav className="cd-builder-secondary-nav">
                <ul>
                    <li className="next nav-item">
                        <ul>
                            <li className="visible"><a href="#0">Colors</a></li>
                            <li className=""><a href="#0">Accessories</a></li>
                            <li className=""><a href="#0">Summary</a></li>
                            <li className="buy"><a href="#0">Buy Now</a></li>
                        </ul>
                    </li>
                    <li className="prev nav-item">
                        <ul>
                            <li className="visible"><a href="#0">Models</a></li>
                            <li className=""><a href="#0">Models</a></li>
                            <li className=""><a href="#0">Colors</a></li>
                            <li className=""><a href="#0">Accessories</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <span className="alert">Please, select a model first!</span>
        </footer>
    );
}