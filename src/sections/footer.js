import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className={`cd-builder-footer ${props.page === props.data[0].pageFrom ? "step-1" : ""} ${!props.model.img ? "disabled" : ""}`}>
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
                            {props.data.map(ele =>
                                <li className={props.page === ele.pageFrom ? "visible" : ""} onClick={() => props.updPage(ele.pageTo)} key={ele.pageFrom}>
                                    <Link to={"/" + ele.pageTo}>{ele.pageTo}</Link>
                                </li>
                            )}
                        </ul>
                    </li>
                        <li className="prev nav-item">
                            <ul>
                                {props.data.map(ele =>
                                    <li className={props.page === ele.pageTo ? "visible" : ""} onClick={() => props.updPage(ele.pageFrom)} key={ele.pageTo}>
                                        <Link to={"/" + ele.pageFrom}>{ele.pageFrom}</Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                </ul>
            </nav>
            <span className="alert">Please, select a model first!</span>
        </footer>
    );
}