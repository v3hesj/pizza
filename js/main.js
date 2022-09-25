let mobileNavButton = document.querySelector('.mobile-nav-button')
let mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
let mobileNav = document.querySelector('.mobile-nav')

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})