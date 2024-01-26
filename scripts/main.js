console.log('script werkt');


var footerMenuTitel = document.querySelector('.topFooter h4');

footerMenuTitel.addEventListener('click', showMenuItems);

function showMenuItems() {
    console.log('toggle menu items')

    this.classList.toggle('active');
    // articlePopup.classList.toggle('active')
}

// loop
// menuItems.forEach(function(menuItem) {
//     console.log('toggle menu items')
//     articleItem.addEventListener('click', showArticle);
// });

// function showMenuItems() {
//     console.log('toggle menu items')

//     this.classList.toggle('active');
//     // articlePopup.classList.toggle('active')
// }