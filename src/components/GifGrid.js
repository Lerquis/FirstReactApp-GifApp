import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

// *Creacion de un componente
// ?Pasamos la categoria por props
export const GifGrid = ({ category }) => {
  // ?Data contiene todos los datos de los gifs buscados
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      {
        <div className="card-grid">
          {/* <ol>
    {gifs.map((gif) => (
      // ?Importante guardar su key
      <li key={gif.id}>{gif.title}</li>
    ))}
  </ol> */}
          {data.map((gif) => (
            // ?Creamos los componentes con los datos del objeto
            <GifGridItem
              key={gif.id}
              title={gif.title}
              url={gif.url}
              id={gif.id}
            />

            // ?Tambien se podria enviar una copia del objeto con un spread
            //<GifGridItem key={gif.id} {...gif}/>
          ))}
        </div>
      }
    </>
  );
};
