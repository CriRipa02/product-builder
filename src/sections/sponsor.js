import sponsor from "../assets/nucleo-adv-demo-1.jpg";

export default function Sponsor(props) {
    return (
        <div className="demo-avd demo-avd-cf demo-avd--dark js-demo-avd" style={{ top: "30px", right: "30px", bottom: "auto" }}>
            <div className="demo-avd__close" onClick={() => props.updateSponsor()}></div>
            <a href="https://nucleoapp.com/?ref=2214" className="demo-avd__template-img">
            <img src={sponsor} alt="Nucleo logo" />
            </a>
            <a href="https://nucleoapp.com/?ref=2214" className="demo-avd__template-text"> Nucleo - Free icon manager for Mac and Windows</a>
        </div>
    );
}