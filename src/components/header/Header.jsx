import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

const Header = (props) => {
    return (
        <header>
            <div className="info-container">
                <div className="title-info">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                
                {/* Mover este bloco para a top-bar em telas menores que 1024px */}
                <div className="notificationIcon-container">
                    <FontAwesomeIcon icon={faBell} className='notification-icon'/>
                </div>

                {/* Ocultar este bloco em telas menores que 1024px */}
                <div className="user-info">
                    <h3>Nome do Usuário</h3>
                    <p>Unidade Senac</p>
                </div>
            </div>
            
            <hr></hr>
        </header>
    )
}



export default Header;