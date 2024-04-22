import { Link } from 'react-router-dom';
import Logo from "../../image/logo_senac.png"
import './NotFound.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page-content">
      <img src={Logo} width={200} alt="Logo Senac" />
      <h1 class="error">Error 404</h1>
      <p>"Ops! Parece que você se perdeu pelo caminho digital.<br />
          Esta página não foi encontrada, mas não desista. <br />
          Explore novos caminhos e quem sabe você encontre o que procura."</p>
      <Link to="/">Voltar para página inicial</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;





