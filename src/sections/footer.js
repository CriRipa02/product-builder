import { Link } from "react-router-dom";

export default function Footer(props) {
    const statusPage = (index) => {
        const currentPage = props.url.find(item => item.name === props.page);

        if (Number(currentPage.id) > Number(index)) {
            return "visible visited";
        }
        return "";
    }

    const updatePage = (index) => {
        if (index > 0) {
            props.updPage(props.data[index - 1].pageFrom);
        }
    }

    return (
        <footer className={`cd-builder-footer ${!props.model.img ? "disabled" : ""} ${props.page === props.data[0].pageFrom ? "step-1" : ""} ${!!props.showAlert ? 'show-alert' : ''} `}>
            <div className="selected-product">
                <img src={props.img} alt="Product preview" />
                <div className="tot-price">
                    <span>Total</span>
                    <span className="total">$<b>{props.total}</b></span>
                </div>
            </div>
            <nav className="cd-builder-secondary-nav">
                <ul>
                    <li className="next nav-item">
                        <ul>
                            {props.data.map((ele, idx) =>
                                <li className={`${props.page === ele.pageFrom ? "visible" : ""} ${statusPage(idx)}`} onClick={() => props.updPage(ele.pageTo)} key={ele.id}>
                                    {ele.pageTo === props.data[props.data.length - 1].pageTo
                                        ? <Link>{ele.pageTo}</Link>
                                        : !!props.model.name
                                            ? <Link>{ele.pageTo}</Link>
                                            : <Link onClick={() => props.updShowAlert()}>{ele.pageTo}</Link>
                                    }
                                </li>
                            )}
                        </ul>
                    </li>
                    <li className="prev nav-item">
                        <ul>
                            {props.data.map((ele, idx) =>
                                <li className={`${props.page === ele.pageFrom ? "visible" : ""} ${statusPage(idx)}`} onClick={() => updatePage(idx)} key={ele.id}>
                                    {idx > 0 &&
                                        <Link>{props.data[idx - 1].pageFrom}</Link>
                                    }
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </nav >
            <span className="alert">Please, select a model first!</span>
        </footer >
    );
}