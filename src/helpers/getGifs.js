// ?Funcion para encontrar los gifs
export const getGifs = async (category) => {
  // ?Tenemos la url a la que vamos a realizar la peticion
  const url = `https://api.giphy.com/v1/gifs/search?api_key=84GPKVzsFsdJCq0WeYrjPWrD0kczcrLb&q=${encodeURI(
    category
  )}&limit=10`;

  // ?Obtenemos los datos de la peticion
  const respuesta = await fetch(url);

  // ?Convertimos esos datos a un json y mediante destructuring obtenemos
  // ?el campo de data, recordemos que:
  // url = data.url es lo mismo que {url} = data;
  const { data } = await respuesta.json();

  // ?Creamos una lista de objetos con los datos que nos interesan.
  // ?Como su id para el key, titulo y url para mostrar
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });

  // ?Retornamos la lista de objetos de gifs
  return gifs;
};
