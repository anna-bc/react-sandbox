import './Result.css';

export default function Result(props) {
    return (
        <div className="result">
            <div className="result__item result__item--small">{props.string}</div>
            <div className="result__item result__item--big"></div>
        </div>
    );
}