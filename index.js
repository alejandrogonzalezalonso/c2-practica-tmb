fetch(
  "https://api.tmb.cat/v1/ibus/stops/2775?app_id=9982b008&app_key=c50c152206ed0cc79ab86f0c61c0a6a2"
)
  .then((response) => response.json())
  .then((datos) => tiempoParada(datos));

const tiempoParada = (paradas) => {
  console.log(paradas);
};
