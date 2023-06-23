import "./botao-favorito.css";
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */

interface BotaoFavoritoProps {
  isFavorito: boolean
  onClick: () => void
}

const BotaoFavorito = ({ isFavorito, onClick }: BotaoFavoritoProps) => {
  const src = isFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
