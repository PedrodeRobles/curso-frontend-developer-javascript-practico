const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBurgerMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerMobile.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenu){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: "Bike",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Computadora",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const imgCart = document.createElement('img');
    imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(imgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}