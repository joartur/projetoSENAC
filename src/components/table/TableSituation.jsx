import "./tableSituation.css"

const TableSituation = (props) => {
    return (
        <div className={`tableSituation ${props.type}`}>
            <p>{props.title}</p>
        </div>
    )
}

export default TableSituation;