document.addEventListener('DOMContentLoaded', function () {
    var articles = document.querySelectorAll('.readmore');
    var buttons = document.querySelectorAll('.toggle');

    for (var i = 0; i < articles.length; i++) {
        // Initially hide all but the first paragraph
        var paragraphs = articles[i].querySelectorAll('p');
        for (var j = 1; j < paragraphs.length; j++) {
            paragraphs[j].style.display = 'none';
        }

        buttons[i].addEventListener('click', function () {
            var article = this.closest('.readmore');
            var paragraphs = article.querySelectorAll('p');

            if (this.textContent === '+ Lees meer beschrijving') {
                for (var j = 1; j < paragraphs.length; j++) {
                    paragraphs[j].style.display = 'block';
                }
                this.textContent = '- Lees minder beschrijving';
            } else {
                for (var j = 1; j < paragraphs.length; j++) {
                    paragraphs[j].style.display = 'none';
                }
                this.textContent = '+ Lees meer beschrijving';
            }
        });
    }
});



// window.onload = function () {
//     var articles = document.querySelectorAll('.readmore');
//     var buttons = document.querySelectorAll('.toggle');

//     for (var i = 0; i < articles.length; i++) {
//         // Initially hide all but the first paragraph
//         var paragraphs = articles[i].querySelectorAll('p');
//         for (var j = 1; j < paragraphs.length; j++) {
//             paragraphs[j].style.display = 'none';
//         }

//         buttons[i].addEventListener('click', function () {
//             var article = this.closest('.readmore');
//             var paragraphs = article.querySelectorAll('p');

//             if (this.textContent === '+ Lees meer beschrijving') {
//                 for (var j = 1; j < paragraphs.length; j++) {
//                     paragraphs[j].style.display = 'block';
//                 }
//                 this.textContent = '- Lees minder beschrijving';
//             } else {
//                 for (var j = 1; j < paragraphs.length; j++) {
//                     paragraphs[j].style.display = 'none';
//                 }
//                 this.textContent = '+ Lees meer beschrijving';
//             }
//         });
//     }
// }