import { faTrash, faPenToSquare, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import TableSituation from "./TableSituation"
import ActionButton from "./ActionButton"
import "./table.css"

const Table = ({children}) => {
    return (
        <div className="table-container">
            <table className='table'>
                <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th>Título</th>
                    <th>Data</th>
                    <th>Início</th>
                    <th>Fim</th>
                    <th>Tipo</th>
                    <th>Situação</th>
                    <th colspan="3">Ações</th>
                </tr>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><Link to="/viewServices">Consultoria para agência de Design Zé do Boné</Link></td>
                    <td>01/02/2024</td>
                    <td>13:30</td>
                    <td>17:30</td>
                    <td>Consultoria</td>
                    <td><TableSituation title="Em Análise" type="analysis"/></td>
                    <td><ActionButton icon={faTrash}/></td>
                    <td><ActionButton icon={faPenToSquare} url="/editService"/></td>
                    <td><ActionButton icon={faCircleInfo} url="/viewServices"/></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><Link to="/viewServices">Consultoria para agência de Design Zé do Boné</Link></td>
                    <td>01/02/2024</td>
                    <td>13:30</td>
                    <td>17:30</td>
                    <td>Consultoria</td>
                    <td><TableSituation title="Validado" type="validate"/></td>
                    <td><ActionButton icon={faTrash}/></td>
                    <td><ActionButton icon={faPenToSquare} url="/editService"/></td>
                    <td><ActionButton icon={faCircleInfo}  url="/viewServices"/></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><Link to="/">Consultoria para agência de Design Zé do Boné</Link></td>
                    <td>01/02/2024</td>
                    <td>13:30</td>
                    <td>17:30</td>
                    <td>Consultoria</td>
                    <td><TableSituation title="Validado Parcialmente" type="partial"/></td>
                    <td><ActionButton icon={faTrash}/></td>
                    <td><ActionButton icon={faPenToSquare} url="/editService"/></td>
                    <td><ActionButton icon={faCircleInfo}  url="/viewServices"/></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><Link to="/viewServices">Consultoria para agência de Design Zé do Boné</Link></td>
                    <td>01/02/2024</td>
                    <td>13:30</td>
                    <td>17:30</td>
                    <td>Consultoria</td>
                    <td><TableSituation title="Recusado" type="refused"/></td>
                    <td><ActionButton icon={faTrash}/></td>
                    <td><ActionButton icon={faPenToSquare} url="/editService"/></td>
                    <td><ActionButton icon={faCircleInfo}  url="/viewServices"/></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><Link to="/viewServices">Consultoria para agência de Design Zé do Boné</Link></td>
                    <td>01/02/2024</td>
                    <td>13:30</td>
                    <td>17:30</td>
                    <td>Consultoria</td>
                    <td><TableSituation title="Em Análise" type="analysis"/></td>
                    <td><ActionButton icon={faTrash}/></td>
                    <td><ActionButton icon={faPenToSquare} url="/editService"/></td>
                    <td><ActionButton icon={faCircleInfo}  url="/viewServices"/></td>
                </tr>
                {children}
            </table>
        </div>
    )
}

export default Table;