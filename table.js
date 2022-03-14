// Variable con Datos dinamicos

var dataSet = [
  ["Dell Inspiron 3593 16 GB RAM", "Gamer", "5", "250000", "192021"],
  ["Lenovo IdeaPad S145 4 GB RAM", "Oficina", "2", "478000", "192024"],
  ["Lenovo IdeaPad S340 16 GB RAM", "Gamer", "2", "390000", "192022"],
  ["Lenovo IdeaPad Duet 16 GB RAM", "Gamer", "1", "395000", "192023"],
  ["Acer Predator Helios 32 GB RAM", "Gamer", "7", "239000", "192024"],
  ["Lenovo IdeaPad S300 4 GB RAM", "Oficina", "4", "440000", "192025"],
  ["Lenovo IdeaPad S590 32 GB RAM", "Gamer", "1", "990000", "192026"],
  ["Acer Chromebook 15 4 GB RAM", "Oficina", "0", "230000", "192027"],
  ["Lenovo IdeaPad S340 4 GB RAM", "Oficina", "9", "675000", "192028"],
  ["MSI GS66 Stealth 16 GB RAM", "Gamer", "10", "554000", "192029"],
];

$(document).ready(function () {
  $('#myTable2').DataTable({
    data: dataSet,
    columns: [{
      title: "Nombre"
    },
    {
      title: "Tipo"
    },
    {
      title: "Cantidad"
    },
    {
      title: "Precio"
    },
    {
      title: "SKU"
    }

    ]
  });
});


$(document).ready(function () {
  $('#myTable').DataTable();
});
