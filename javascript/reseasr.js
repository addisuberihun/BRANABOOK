let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let pricetotal = document.querySelector('.price');
let quantity = document.querySelector('.quantity');
let hecontainer = document.querySelector('.hecontainer');
openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'greek book',
        image: 'science_photo/stored.png',
        price: 500
    },
    {
        id: 2,
        name: 'uviverse',
        image: 'science_photo/girlread.png',
        price: 370
    },
    {
        id: 3,
        name: 'reaserch',
        image: 'science_photo/reaserch.png',
        price: 170
    },
    {
        id: 4,
        name: 'science',
        image: 'science_photo/science.png',
        price: 430
    },
    {
        id: 5,
        name: 'new generation',
        image: 'science_photo/freeread.png',
        price: 603
    },
    {
        id: 6,
        name: 'evolution',
        image: 'science_photo/pexel16jpeg.jpeg',
        price: 320
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}" height="300" width="300">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} Birr</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })

}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" height="80" width="50"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} Birr</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);

        }
    })


    total.innerHTML = totalPrice.toLocaleString();
    pricetotal.value = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
