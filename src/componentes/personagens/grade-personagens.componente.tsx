/* eslint-disable react-hooks/exhaustive-deps */
import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useEffect, useState } from "react";
import { fillChars } from "../../data/store/actions/charReducerActions";
import { useDispatch } from "react-redux";
import { IChars } from "../../data/dto/IChar";
import { useSelector } from "../../data/store";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {
  const dispatch = useDispatch();
  const chars = useSelector(({ charReducer }) => charReducer)

  useEffect(() => {
    // impedindo que requisições adicionais (desnecessárias) sejam feitas no primeiro load.
    if (chars.length === 0) {
      fillChars(dispatch)
    }
  }, [])

  return (
    <div className="grade-personagens">
      { chars.length > 0 && chars[0].map((item: IChars) => (
        <div key={item.id}>
          <CardPersonagem imageUrl={item.image} name={item.name} />
        </div>
          
      ))}
    
    </div>
  );
};

export default GradePersonagem;
