import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// *Aqui estamos creando un customHook
// ?Este hook va a servir para llamar la carga de gifs. Ademas, va a
// ?mostrar una pantalla de carga
export const useFetchGifs = (category) => {
  /* state = {
      data:[],
      loading:true  
    }
  */
  const [state, setState] = useState({ data: [], loading: true });

  // ?useEffect es un hook, que sirve para correr funciones
  // ?condicionalmente. En este caso al final, tenemos un [], eso
  // ?quiere decir que va a correr esa funcion solo 1 vez. Como ya sabemos
  // ?esto es importante porque si un componente sufre un cambio en su
  // ?estado, vuelve a generar el codigo html, entonces si algun componente
  // ?sufriera un cambio, se estaria llamando la funcion de getGifs muy
  // ?seguido, y por eso el useEffect tiene gran importancia
  useEffect(() => {
    // ?Esta funcion se encuentra en otro archivo, para no hacer el
    // ?componente tan pesado de codigo
    getGifs(category).then((gifs) => {
      setTimeout(() => {
        setState({
          data: gifs,
          loading: false,
        });
      }, 750);
    });
  }, []);

  return state;
};
