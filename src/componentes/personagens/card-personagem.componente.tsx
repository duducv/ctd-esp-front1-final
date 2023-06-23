import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

interface ICardPersonagemProps {
  imageUrl: string,
  name: string
}

const CardPersonagem = ({ imageUrl, name }: ICardPersonagemProps) => {
  return (
    <div className="card-personagem">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="card-personagem-body">
        <span>{name}</span>
        <BotaoFavorito isFavorito={false} onClick={() => null}/>
      </div>
    </div>
  );
};

export default CardPersonagem;
