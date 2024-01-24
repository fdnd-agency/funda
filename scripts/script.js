ShowHamburgerMenu();
ShowMoreTextDescription();
ShowMoreTextCharacterize();
showtelephonenumber();

function ShowHamburgerMenu () {/*hamburger menu*/
    let button = document.querySelector('.hamburger-icon');/*select icon hamburger*/
    let menu = document.querySelector('.menu-ul');

    button.addEventListener('click', () => {/*clickfunction*/
        menu.classList.toggle('menu-ul-open');/*open the menue*/

    });
}
function ShowMoreTextDescription(){
    let buttonFullDescription = document.querySelector('.full-description');
    let hideDescription = document.querySelector('.hide-description');
    buttonFullDescription.addEventListener('click', () => {


        hideDescription.classList.toggle('open-description');

    });
}
function ShowMoreTextCharacterize(){
    let buttonFullCharacterize = document.querySelector('.button-show-charactize');
    let hideText = document.querySelector('.hide-characterize');
    buttonFullCharacterize.addEventListener('click', () => {

        hideText.classList.toggle('open-characterize');

    });
}

function showtelephonenumber(){
    let telephonnumber = document.querySelector('.telephonumber');
    let phoneNumber = document.querySelector('.hide-telehponenumber');
    telephonnumber.addEventListener("click", () => {
        phoneNumber.classList.toggle('open-telephonenumber');
        // telephonnumber.scrollIntoView({behavior: 'smooth'});


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