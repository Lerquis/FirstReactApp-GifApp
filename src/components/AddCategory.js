import React, { useState } from "react";
import PropTypes from "prop-types";

// ?Se le hace destructuring al props. Por eso es {setCategories}
// ?Si no fue destructuring seria (props) y despues para acceder a la
// ?funcion seria props.setCategories();
export const AddCategory = ({ setCategories }) => {
  // *Creamos un hook de useState para la actualizacion de datos
  // ?inputValue por default va a ser Hola mundo
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    // ?Cuando el usuario digite, se va a cambiar el texto del input
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // ?Cuando el usuario da enter, prevenimos que se refresque la pag
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // ?Al no tener ninguna idea de cual son las categorias, lo que hace
      // ?es que por parametro se le pide su estado anterior, de ahi es de
      // ?donde se consiguen las categorias
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    // ?No va a usar <></> porque el form ya agrupa todo lo que debemos
    // ?de retornar

    // ?Cuando el usuario da enter,llama la funcion
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          // ?Cada que el usuario digite, va a haber un cambio, entonces
          // ?llama esa funcion y realiza los cambios en el input
          handleInputChange(e);
        }}
      />
    </form>
  );
};

// *Como la funcion de setCategories es vital, le ponemos un proptype
// *de que es required, para que no funcione si no se envia por parametro

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
