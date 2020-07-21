const menu = [
  {
    id: 1,
    title: "New York Steak",
    category: "platos",
    price: 9000,
    img: "../LP/img/item-1.jpeg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia
        eius nam temporibus officia! Necessitatibus rerum reiciendis quaerat alias nam, hic qui!`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 2,
    title: "Churrasco",
    category: "platos",
    price: 9500,
    img: "../LP/img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 3,
    title: "Rib Eye",
    category: "platos",
    price: 9500,
    img: "../LP/img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 4,
    title: "Carbonara con Pollo o Tocineta",
    category: "pastas",
    price: 5000,
    img: "../LP/img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 5,
    title: "Pasta con Pollo",
    category: "pastas",
    price: 5000,
    img: "../LP/img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 6,
    title: "Pollo a La Parrilla",
    category: "ensaladas",
    price: 5000,
    img: "../LP/img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 7,
    title: "Camarones al Ajillo",
    category: "ensaladas",
    price: 5000,
    img: "../LP/img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 8,
    title: "Ceviche de Pescado",
    category: "bocas",
    price: 2300,
    img: "../LP/img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 9,
    title: "Ceviche de Camarón",
    category: "bocas",
    price: 2500,
    img: "../LP/img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 10,
    title: "Margarita",
    category: "cocteles",
    price: 1000,
    img: "../LP/img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 10,
    title: "Pinta Roja",
    category: "cocteles",
    price: 1000,
    img: "../LP/img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 10,
    title: "Mojito",
    category: "cocteles",
    price: 1000,
    img: "../LP/img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    add: "Ordenar",
    cant: 0,
  },
  {
    id: 10,
    title: "Piña Colada",
    category: "cocteles",
    price: 1000,
    img: "../LP/img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    add: "Ordenar",
    cant: 0,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
  addOrder();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img class="photo" src=${item.img} alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">₡${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
            <button class="add-btn" type="button">${item.add}</button>
        </div>
        
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["menú"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "menú") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function addOrder() {
  const addBtns = document.querySelectorAll(".add-btn");
  addBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log("Orden Puesta!");
    });
  });
}
