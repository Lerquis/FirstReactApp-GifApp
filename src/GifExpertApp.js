import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// *Creacion de un componente

export const GifExpertApp = () => {
  // *Creacion de un hook para agregar categorias
  const [categories, setCategories] = useState(["Rocket League"]);

  // Agregamos una categoria con un spread de la array
  // const handleAdd = () => {
  //   setCategories([...categories, "Hola"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      {
        // ?Agregamos otro componente, simplmenete llamandolo
        // *<AddCategory /> en este caso
        // ?Le pasamos la funcion de setCategories, para que pueda
        // ?agregar las categorias desde el otro componente
      }
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol>
        {categories.map((category) => (
          // ?La key nos va a servir para trabajar con ella.
          // ?Tiene que ser unica
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
