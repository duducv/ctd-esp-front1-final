import { Dispatch } from "react";
import { MiddlewareAPI } from "@reduxjs/toolkit";

export default function storeInterceptorMiddleware (store: MiddlewareAPI) {
    return function (next: Dispatch<any>) {
            return function (action: any) {
                  // Lógica personalizada antes que a ação seja processada pelos reducers
  console.log('Interceptando ação:', action.type);

  // Acesso à store
  console.log('Estado atual:', store.getState());

  // Passar a ação adiante para os próximos middlewares ou reducers
  const result = next(action);

  // Lógica personalizada após a ação ser processada pelos reducers
  console.log('Novo estado:', store.getState());

  return result;
            }
    }
}