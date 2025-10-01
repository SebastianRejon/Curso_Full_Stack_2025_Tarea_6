const contenedor = document.getElementById("productos");
// arreglo objs productos
const abrigos = [
  {
    descripcion: "Campera acolchada negra con capucha desmontable.",
    costo: 45999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Saco de lana gris, corte clásico, ideal para oficina.",
    costo: 52999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Tapado largo beige con cinturón y bolsillos amplios.",
    costo: 67999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Campera inflable azul marino, ligera y abrigada.",
    costo: 38999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Tapado de paño rojo con botones grandes y cuello alto.",
    costo: 59999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Campera de cuero sintético negra con interior de corderito.",
    costo: 74999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Saco camel de corte recto con solapas anchas.",
    costo: 48999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Campera deportiva impermeable con cierre y capucha.",
    costo: 41999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Abrigo gris oscuro con capucha de piel sintética.",
    costo: 69999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  },
  {
    descripcion: "Tapado azul eléctrico estilo elegante con botones metálicos.",
    costo: 82999,
    ruta: "\\src\\assets\\img\\abrigos\\abrigo.jpg"
  }
];

contenedor.innerHTML = "";
let i;
for (i = 0; i < abrigos.length; i++) {
  let cardModal = document.createElement("div");
  cardModal.setAttribute("class", "col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4");

  // ids únicos
  const modalId = `modal${i}`;
  const labelId = `modalLabel${i}`;
  const titulo =`Producto ${i+1}:`;

  cardModal.innerHTML = `
    <div class="card text-center mb-3" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <img src="${abrigos[i].ruta}" class="card-img-top" alt="Abrigo ${i + 1}">
        <!-- Botón despliega modal -->
        <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">
          Ver más
        </button>
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="${labelId}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${labelId}">${abrigos[i].descripcion}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><i class="fa-solid fa-tag"></i> ${abrigos[i].descripcion}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${abrigos[i].costo}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  contenedor.appendChild(cardModal);
  console.log(abrigos[i]);
}

