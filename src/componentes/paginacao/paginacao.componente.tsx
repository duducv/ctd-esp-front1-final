import { useDispatch } from "react-redux";
import "./paginacao.css";
import { goToNextPage } from "../../data/store/actions/paginationReducerAction";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  const dispatch = useDispatch()
  return (
    <div className="paginacao">
      <button disabled={true} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} className={"primary"} onClick={() => goToNextPage(dispatch)}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
