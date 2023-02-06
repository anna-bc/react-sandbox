import Button from "../Button/Button";

export default function OperatorPad(props) {
    const operators = ['/', '*', '-', '+', '='];
    return (
        <div className="operatorPad">
            {operators.map((op, i) => <Button key={op} btnText={op} onNumClick={(op) => props.addToString(op) } />)
            }
        </div>
    );
}