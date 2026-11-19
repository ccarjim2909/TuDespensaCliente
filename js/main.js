document.addEventListener("DOMContentLoaded", () => {
  const listaStock = document.querySelector(".o-cuadricula");
  const contadorStock = document.querySelector(".inventario-stock__contador");
  const panelDetalle = document.querySelector("#detalle-alimento");

  if (listaStock && panelDetalle) {
    if (contadorStock) {
      contadorStock.textContent = `${alimentos.length} alimentos`;
    }

    renderizarListadoAlimentos(listaStock, alimentos, categorias, panelDetalle);
  }
});
