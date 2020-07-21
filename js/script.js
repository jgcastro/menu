const restaurantes = [
  {
    id: 1,
    name: "Liver Poll Bar & Grill",
    place: "Palmares",
    url: "../LP/liverPool.html",
  },
  {
    id: 2,
    name: "La Pataqueña",
    place: "Palmares",
    url: "../LP/liverPool.html",
  },
  {
    id: 3,
    name: "Taquería Juan",
    place: "Palmares",
    url: "../LP/liverPool.html",
  },
  {
    id: 4,
    name: "Taquiche",
    place: "Palmares",
    url: "../LP/liverPool.html",
  },
  {
    id: 5,
    name: "Soda Olga",
    place: "Palmares",
    url: "../LP/liverPool.html",
  },
];

const resultsList = document.querySelector(".resultados");

window.addEventListener("DOMContentLoaded", function () {
  displayResultsList(restaurantes);
});

function displayResultsList(list) {
  let displayList = list.map(function (item) {
    return `<div class="restaurant"><a href=${item.url}>${item.name}, ${item.place}</a></div>`;
  });
  displayList = displayList.join("");
  resultsList.innerHTML = displayList;
}
