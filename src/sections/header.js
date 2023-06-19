import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="main-header">
            <h1>Product Builder</h1>
            <nav className={`cd-builder-main-nav ${!props.model.name ? 'disabled' : ''}`}>
                <ul className="navbar-nav mr-auto">
                    {props.url.map(ele =>
                        <li className={props.page === ele.name ? "active" : ""} onClick={() => props.updPage(ele.name)} key={ele.name}>
                            {!!props.model.name
                                ? <Link to={"/" + ele.name} className="nav-link">{ele.name}</Link>
                                : <Link className="nav-link" onClick={() => props.updShowAlert()}>{ele.name}</Link>
                            }
                        </li>
                    )}
                </ul>
            </nav>
            <a href="https://codyhouse.co/gem/product-builder" className="cd-nugget-info hide-on-mobile">Article &amp; Download</a>
        </header>
    );
}