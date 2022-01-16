import React from "react";
// ?Obtenemos los datos mediante el destructuring
export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn animate__slow">
      <img src={url} alt="Imagen valorant"></img>
      <p>{title}</p>
    </div>
  );
};
