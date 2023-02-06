import './Button.css';


export default function Button(props) {
    return (
        <button className={props.className} onClick={() => props.onNumClick(props.btnText)}>{props.btnText}</button>
    );
}