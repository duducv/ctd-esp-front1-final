import { useDispatch } from "react-redux";
import { useSelector } from "../../data/store";
import "./filtros.css";
import { changeFilterInput } from "../../data/store/actions/filterReducerActions";

const Filtros = () => {
  const { inputText } = useSelector(({ filterReducer }) => filterReducer)
  const dispatch = useDispatch<any>();
  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        value={inputText}
        onChange={(el) => changeFilterInput(dispatch, el.target.value) }
      />
    </div>
  );
};

export default Filtros;
