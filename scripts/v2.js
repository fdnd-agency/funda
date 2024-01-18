ShowHamburgerMenu();
ShowMoreTextDescription();
ShowMoreTextCharacterize();
showtelephonenumber();
clickBroker();
function ShowHamburgerMenu () {
    let buttonicon = document.querySelector('.hamburger-icon');
    buttonicon.addEventListener('click', () => {

        let menu = document.querySelector('.menu-ul');
        menu.classList.toggle('menu-ul-open');

    })
}
function ShowMoreTextDescription(){
    let buttonFullDescription = document.querySelector('.full-description');
    buttonFullDescription.addEventListener('click', () => {

        let menu = document.querySelector('.hide-description');
        menu.classList.toggle('open-description');

    })
}
function ShowMoreTextCharacterize(){
    let buttonFullCharacterize = document.querySelector('.button-show-charactize');
    buttonFullCharacterize.addEventListener('click', () => {
        let menu = document.querySelector('.hide-characterize');
        menu.classList.toggle('open-characterize');

    })
}
function showtelephonenumber(){
    let telephonnumber = document.querySelector('.telephonumber');
    let phoneNumber = document.querySelector('.hide-telehponenumber');

    telephonnumber.addEventListener("click", () => {
        phoneNumber.classList.toggle('open-telephonenumber');
        telephonnumber.scrollIntoView({behavior: 'smooth'});


    });

}
function clickBroker(){
    let brokerdiv = document.querySelector('.broker-add');
    let clickContact = document.querySelector('.contact-broker');
    let mql = window.matchMedia("(max-width: 768px)");
    clickContact.addEventListener("click", () => {
        if(mql){
            brokerdiv.scrollIntoView({behavior: 'smooth'});
        }
    });

}

// refactor code for less duplicate code not finish
// function opentoggle(hamburger,description,characterize){
//     let buttonhamber = document.querySelector(hamburger);
//     let buttondescription =document.querySelector(description);
//     let buttoncharaterize = document.querySelector(characterize);
//
//     buttonhamber.addEventListener('click', () => {
//         buttonhamber.classList.toggle('menu-ul-open');
//     })
//     buttondescription.addEventListener('click', () => {
//         buttondescription.classList.toggle('open-description');
//     })
//     buttoncharaterize.addEventListener('click', () => {
//         buttoncharaterize.classList.toggle('open-characterize');
//     });
// }
// opentoggle('.hamburger-icon','.full-description','.button-show-charactize');