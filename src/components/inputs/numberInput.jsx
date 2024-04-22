import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./numberInput.css"

const NumberInput = (props) => {
    return (
        <div className="numberInput-container" >
        <input type="time" placeholder={props.placeholder} className="numberInput"/>
        <FontAwesomeIcon icon={props.icon} className="search-icon"/>
        </div>
    )
}

export default NumberInput;