import Button from "../Button/Button";
import './NumPad.css';

export default function NumPad(props) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const handleNumClick = (num) => {
        console.log("handle num click");
        props.addToString(num);
    }

    return (
        <div className="numPad">
            <Button className="numZero" key={0} btnText={0} onNumClick={handleNumClick} />
            {numbers.map((num, i) => {
                if (num === 0) {
                    return <Button className="numZero" key={num} btnText={num} onNumClick={handleNumClick} />
                }
                return <Button key={num} btnText={num} onNumClick={handleNumClick} />
            })
            }
        </div>
    );
}