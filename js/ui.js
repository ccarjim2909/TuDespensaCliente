function obtenerNombreCategoria(categorias, categoriaId) {
  for (let i = 0; i < categorias.length; i++) {
    
    const categoriaActual = categorias[i];

    if (categoriaActual.id === categoriaId) {
      return categoriaActual.nombre;
    }
  }
  return "Sin categoría";
}

function renderizarListadoAlimentos(contenedor, alimentos, categorias, panelDetalle) {
  contenedor.innerHTML = "";

  alimentos.forEach((alimento) => {
    const li = document.createElement('li');
    li.className = "o-cuadricula__item";


    const nombreCategoria = obtenerNombreCategoria(categorias, alimento.categoriaId);

    li.innerHTML = `
      <article class="tarjeta-alimento" data-id="${alimento.id}">
        <figure class="tarjeta-alimento__imagen">
          <img src="" alt="${alimento.nombre}">
        </figure>
        <h3 class="tarjeta-alimento__nombre">${alimento.nombre}</h3>
        <p class="tarjeta-alimento__categoria">${nombreCategoria}</p>
        <button type="button" class="tarjeta-alimento__detalle boton boton--secundario boton--pequeno">Ver ficha</button>
      </article>
    `;

    li.querySelector(".tarjeta-alimento").addEventListener("click", () => {
      renderizarDetalleAlimento(panelDetalle, alimento, categorias);
      panelDetalle.scrollIntoView({ behavior: "smooth" });
    });

    contenedor.appendChild(li);
  });
}

function renderizarDetalleAlimento(contenedorDetalle, alimento, categorias) {
  const nombreCategoria = obtenerNombreCategoria(categorias, alimento.categoriaId);

  contenedorDetalle.innerHTML = `
    <article class="ficha-detalle">
      <header class="ficha-detalle__cabecera">
        <h2 class="ficha-detalle__titulo">${alimento.nombre}</h2>
        <span class="ficha-detalle__etiqueta">${nombreCategoria}</span>
      </header>
      <dl class="ficha-detalle__datos">
        <dt>Cantidad disponible:</dt>
        <dd>${alimento.cantidad}</dd>
        <dt>Ubicación:</dt>
        <dd>${alimento.ubicacion}</dd>
        <dt>Fecha de caducidad:</dt>
        <dd>${alimento.caducidad}</dd>
        <dt>Notas:</dt>
        <dd>${alimento.notas}</dd>
      </dl>
    </article>
  `;
  contenedorDetalle.hidden = false;
}
