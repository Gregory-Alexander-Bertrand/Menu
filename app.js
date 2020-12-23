//Menu items other than breakfast that will reveal themselves
//once the buttons ontop of the page are clicked
const menu = [
    {
        id: 1,
        title: "Pancakes",
        category: "breakfast",
        price: 8.95,
        img: "Pancakes-recipe-1200.jpg",
        desc: `A stack of eight buttery, fluffy pancakes makes the perfect breakfast for the hungry individual.`,
    },
    {
        id: 2,
        title: "Crepes",
        category: "breakfast",
        price: 14.00,
        img: "/crepes.jpg",
        desc: `A plate of yummy, savory crepes if that's your sort of thing.`,
    },
    {
        id: 3,
        title: "Omelette",
        category: "breakfast",
        price: 10.95,
        img: "omelette-3cba9f8.jpg",
        desc: `You like omlettes? This one is pretty good.`,
    },
    {
        id: 4,
        title: "Bacon",
        category: "breakfast",
        price: 5.00,
        img: "bacon.jpg",
        desc: `Crispy bacon.`,
    },
    {
        id: 5,
        title: "Susage",
        category: "breakfast",
        price: 5.00,
        img: "Breakfast-Sausages.jpg",
        desc: `Nice susage.`,
    },
    {
        id: 6,
        title: "Hot wings",
        category: "lunch",
        price: 9.99,
        img: "classic-buffalo-wings.jpg",
        desc: `Some really great spicy hotwings with ranch.`,

    },
    {
        id: 7,
        title: "Hamburger",
        category: "lunch",
        price: 11.00,
        img: "Hamburger.jpg",
        desc: `Our famous juicy hamburger`,
    },
    {
        id: 8,
        title: "Chicken Fried Steak",
        category: "supper",
        price: 13.99,
        img: "Chickenfriedsteak.jpg",
        desc: `Savory chicken fried steak with veggies`,
    },
    {
        id: 9,
        title: "Homemade cherry pie",
        category: "dessert",
        price: 6.00,
        img: "homemade-cherry-pie-2.jpg",
        desc: `Our famous cherry pie`,
    },
];

//Parent elements from the HTML
const center = document.querySelector('.center');
const options = document.querySelector('.options');

//This will display ALL items when page loads
window.addEventListener('DOMContentLoaded', function () {
    //console.log("test12321");
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        //console.log(item);
        return `<article class="item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price"> $${item.price}</h4>
        </header>
        <p class="descript">
        ${item.desc}
        </p>
        </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);

    center.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="option-btn" data-id=${category}>
            ${category}
        </button>`;
    })
    .join("");

    options.innerHTML = categoryBtns;
    const optionbtn = options.querySelectorAll(".option-btn");
    //console.log(optionbtn);

    optionbtn.forEach(function (btn) {
        btn.addEventListener("click", function (e){
            //console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem){
                //console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });

}
