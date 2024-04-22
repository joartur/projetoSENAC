import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowDownShortWide, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Layout from "../../components/layout/Layout"
import Header from "../../components/header/Header"
import TextInput from "../../components/inputs/TextInput"
import "./tablesService.css"
import Button from '../../components/buttons/Button';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import Table from '../../components/table/Table';
import TopBar from '../../components/topbar/topBar';

const TablesService = () => {
    return (
        <Layout>
        <div>
          <TopBar />
          {/* Restante do conteúdo */}
        </div>
        <Header title="Meus Serviços Educacionais" description="Lista com informações sobre seus serviços educacionais"/>
            <main className="tableService-container">
                <div className="search-container">
                    <div className="searchBar-container">
                        <TextInput placeholder="Pesquisar Serviço Educacional Por Título" icon={faMagnifyingGlass}/>
                    </div>
                    <div className="searchButton-container">
                        <Button title="Adicionar Serviço" size="medium" url="/createService"/>
                    </div>
                </div>
                <div className="filters-container">
                    <select>
                        <option value="">Situação</option>
                        <option value="">Em Análise</option>
                        <option value="">Validado</option>
                        <option value="">Parcialmente</option>
                        <option value="">Recusado</option>
                    </select>
                    <ButtonFilter title="Filtros" size="medium" icon={faArrowDownShortWide}/>
                </div>
                <div className="tables-container" style={{ overflowY: 'auto' }}>
                    <Table>
                       {/* Conteúdo da tabela */}
                    </Table>
                </div>
                <div className="pagination-container">
                    <div className="pagination-lines">
                        <p>Linhas por Página:</p>
                        <input type="number" className="paginationInput" value="6"/>
                    </div>
                    
                    <div className="pagination-pages">
                        <FontAwesomeIcon icon={faChevronLeft} className="arrow"/>
                        <p>1 de 3</p>
                        <FontAwesomeIcon icon={faChevronRight} className="arrow"/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default TablesService;