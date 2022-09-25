//----- добавление в корзину --------
function addCartButtonOne() {
    let menuSizeOne = document.getElementById("menu-option__input__one")
    let menuPriceOne = document.getElementById("menu-option__price_one")
    let menuTitleOne = document.getElementById("menu-option__header_head__one")
    let menuImgOne = document.getElementById("menu-option__img__one")
    let headerCart = document.getElementById("header-cart-id")

    console.log(menuSizeOne.innerText,menuPriceOne.innerText,menuTitleOne.innerText,menuImgOne.src,headerCart.src)

    headerCart.src = './images/imgCart_noun.png' // меняем картинку корзины
    
    console.log(menuSizeOne.innerText,menuPriceOne.innerText,menuTitleOne.innerText,menuImgOne.src,headerCart.src)
}

let menuOptionButtonOne = document.querySelector("#menu-option-one")

menuOptionButtonOne.addEventListener('click', function () {
    addCartButtonOne()
})
//============
function addCartButtonTwo() {
    let menuSizeOne = document.getElementById("menu-option__input__two")
    let menuPriceOne = document.getElementById("menu-option__price_two")
    let menuTitleOne = document.getElementById("menu-option__header_head__two")
    let menuImgOne = document.getElementById("menu-option__img__two")
    let headerCart = document.getElementById("header-cart-id")

    console.log(menuSizeOne.innerText,menuPriceOne.innerText,menuTitleOne.innerText,menuImgOne.src,headerCart.src)

    headerCart.src = './images/imgCart_noun.png' // меняем картинку корзины
    
    console.log(menuSizeOne.innerText,menuPriceOne.innerText,menuTitleOne.innerText,menuImgOne.src,headerCart.src)
}

let menuOptionButtonTwo = document.querySelector("#menu-option-two")

menuOptionButtonTwo.addEventListener('click', function () {
    addCartButtonTwo()
})
//============
function addCartButtonThree() {
    let menuSizeOne = document.getElementById("menu-option__input__three")
    let menuPriceOne = document.getElementById("menu-option__price_three")
    let menuTitleOne = document.getElementById("menu-option__header_head__three")
    let menuImgOne = document.getElementById("menu-option__img__three")
    let headerCart = document.getElementById("header-cart-id")

    console.log(menuSizeOne.innerText,menuPriceOne.innerText,menuTitleOne.innerText,menuImgOne.src,headerCart.src)

    headerCart.src = './images/imgCart_noun.png' // меняем картинку корзины
    
    console.log(menuSizeOne.innerText,menuPriceOne.innerText,menuTitleOne.innerText,menuImgOne.src,headerCart.src)
}

let menuOptionButtonThree = document.querySelector("#menu-option-three")

menuOptionButtonThree.addEventListener('click', function () {
    addCartButtonThree()
})

//--------- работа с окном корзины --------
function closeCartWindow () {
    document.getElementById("cart-nav").style.display = "none"

}

headerCart = document.getElementById("header-cart-id")
headerCart.addEventListener('click', function () {
    document.getElementById("cart-nav").style.display = "block"
})
