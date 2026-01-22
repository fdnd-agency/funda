
// SLIDER BEGIN
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach( button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1; 
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider)


// SLIDER END

// PLUS BUTTON BEGIN

var plusbutton = document.getElementById("plusbutton");
var plustekst = document.getElementById("vergroten");

plusbutton.addEventListener("click", function () {
    if (plustekst.style.display === "none" || plustekst.style.display === "") {
        plustekst.style.display = "block";
        this.innerHTML = "- Inklappen";
    } else {
        plustekst.style.display = "none";
        this.innerHTML = "+ Lees de volledige omschrijving";
    }
});

// PLUS BUTTON END

// PLATTEGROND BEGIN

    var oude1 = document.getElementById("oude")
    var nieuwe2 = document.getElementById("nieuwe")
    var plattegrondbt = document.querySelector(".plattegrond-button")

    var isSwapped = false

    plattegrondbt.addEventListener("click", function() {
        var temp = oude1.innerHTML
        oude1.innerHTML = nieuwe2.innerHTML
        nieuwe2.innerHTML = temp

        isSwapped = !isSwapped

        if(this.innerHTML === "Plattegrond") {
            this.innerHTML = "Foto's"
        }  else {
            this.innerHTML = "Plattegrond" 
        }
    })












