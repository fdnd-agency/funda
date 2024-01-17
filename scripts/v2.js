ShowHamburgerMenu();
ShowMoreTextDescription();
ShowMoreTextCharacterize();
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

// refactor code for less duplicate code not finish
function opentoggle(hamburger,description,characterize){
    let buttonhamber = document.querySelector(hamburger);
    let buttondescription =document.querySelector(description);
    let buttoncharaterize = document.querySelector(characterize);

    buttonhamber.addEventListener('click', () => {
        buttonhamber.classList.toggle('menu-ul-open');
    })
    buttondescription.addEventListener('click', () => {
        buttondescription.classList.toggle('open-description');
    })
    buttoncharaterize.addEventListener('click', () => {
        buttoncharaterize.classList.toggle('open-characterize');
    });
}
// opentoggle('.hamburger-icon','.full-description','.button-show-charactize');