// выпадающая менюшка

function myFunctionOne() {
    document.getElementById("myDropdown__one").classList.toggle("show")
}
function myFunctionTwo() {
    document.getElementById("myDropdown__two").classList.toggle("show")
}
function myFunctionThree() {
    document.getElementById("myDropdown__three").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-option__dropbtn, .menu-option__arrow, .menu-option_input')) {
        var dropdowns = document.getElementsByClassName("menu-option__dropdown-content")
        var i
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// изменение цены в зависимости от размера пиццы

let menuOptions = document.querySelectorAll('.menu-option__size')

let changePrice = document.querySelectorAll(".menu-option_input")


menuOptions.forEach(function(menuOption) {
    menuOption.addEventListener('click',function(event) {
        let menuOptionTemp = event.target
        while(menuOptionTemp = menuOptionTemp.parentElement) {
            if(menuOptionTemp.className == "menu-option-item1") {
                menuOptionsPrice(menuOptionTemp.children,menuOption.value)
                menuOptionsChange(menuOptionTemp.children,menuOption.innerText)
                break
            } 
        }
    }) 
})

function menuOptionsPrice(NextChil,NextChilValue) {
    if(NextChil.length > 0) {
        for(let i = 0; i < NextChil.length; i++) {
            if(NextChil[i].className == "menu-option__price") {
                NextChil[i].textContent = NextChilValue
            } else {
                menuOptionsPrice(NextChil[i].children,NextChilValue)
            }
        }
    }
}
function menuOptionsChange(NextChil,NextChilText) {
    for(let i = 0; i < NextChil.length; i++) {
        // console.log (NextChil[i].className)

        if(NextChil[i].className == "menu-option_input") {
            NextChil[i].textContent = NextChilText
            // console.log("Нашел")
            break
        } else {
            menuOptionsChange(NextChil[i].children,NextChilText)
        }
    }
    //console.log(changePrice[0].innerText)
}

// добавляем в корзину


// // console.log(addToCartButtons)
//  addToCartButtons.forEach(function(addToCartButton) {
//     addToCartButton.addEventListener('click',function(event) {
//         let addToCartButtonTemp = event.target
//         while(addToCartButtonTemp = addToCartButtonTemp.parentElement) {
//             console.log(addToCartButtonTemp.className)
//             if(addToCartButtonTemp.className == ".menu-option__header_head") {
//                 console.log("Добавляем название",addToCartButtonTemp.className)
//             }
//             if(addToCartButtonTemp.className == "menu-option__price") {
//                 console.log("Добавляем цену",addToCartButtonTemp.className)
//             }
//             if(addToCartButtonTemp.className == "menu-option_input") {
//                 console.log("Добавляем размер", addToCartButtonTemp.className)
//             }
            
//             if(addToCartButtonTemp.className == "menu-option-item1") {
//                 console.log("Добавлено все",addToCartButtonTemp.className)
//                 break
//             } 
//         }
//     }) 
// })