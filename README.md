# Funda Design Challenge Sprint 6

<img src="https://github.com/Lmikkers/funda/assets/94455811/60f4b070-09ce-48e2-8338-ccde900e7967">
https://lmikkers.github.io/funda/


## Inhoudsopgave
- [Opdrachtgever](https://github.com/Lmikkers/funda/blob/main/README.md#opdrachtgever)
- [Gebruik website](https://github.com/Lmikkers/funda/blob/main/README.md#gebruik-van-website)
- [Kenmerken](https://github.com/Lmikkers/funda/blob/main/README.md#kenmerken)
- [Checklist](https://github.com/Lmikkers/funda/blob/main/README.md#checklist-pagina)

## Opdrachtgever 
### Funda
Funda is een vastgoedplatform voor consumenten en ondernemers. Via Funda kun je huizen kopen, verkopen en huren.

Opdrachtomschrijving

> Het maken (nabouwen) van een detailpagina en verbeteren waar nodig is in hardcode vanille html, css en javascript. En ervoor zorgen dat de code mobile first wordt gebouwd.

## Gebruik van website
Je kunt de website op Telefoon, Tablet en desktop openen op deze link: https://lmikkers.github.io/funda/
[https://lmikkers.github.io/funda/](https://lmikkers.github.io/funda/)

## Kenmerken
- HTML
- CSS
- Responsive

### HTML
Structuur: `<header>` `<main>` `<footer>`

Onderverdeeld in:  `<nav>` `<section>` `<article>` `<div>`

### CSS
De CSS heb ik gelinkt in de `<head>`

Ik heb de veel voorkomende styles genoteerd in de `root`, zodat ik dit overal makkelijk kan gebruiken
```css
:root {
    --mainFont: 'Proxima Nova', sans-serif;
    --mainHeaderFontWeight: 600;
    --mainFontWeight: 400;
    --secondFontWeight: 350;
    --thirdFontWeight: 300;
    --mainFontSize: 20px;
    --secondFontSize: 16px;
   
    --mainColor: #F7A100;
    --mainFontColor: #333333;
    --secondFontColor: #999999;
    --thirdFontColor: #0071B3;
    --hoverOrangeColor: #de9000;

    --borderLight: #ededed;
    --borderDark: #CCCCCC;
}
```

### Responsive
Om te zorgen dat de website goed functioneert op meerdere devices heb ik gebruikt gemaakt van `@media only screen and (min-width: ...px)`

## Checklist pagina

- [x] Buurt blokje
- [x] Kaart blokje
- [x] Reis blokje
- [x] Responsive nav-bar
- [x] Responsive footer
- [x] Responsive sections
- [x] Responsive main-image
- [x] Kenmerken tabel
- [ ] Kenmerken tabel op mobiel in/uit klappen
- [x] Belangrijkste kenmerken
- [x] Uitklapbare beschrijving
- [x] Ing sectie
- [x] Vergelijkbaar in de buurt sectie
- [x] Sidebar
- [ ] Menu subitems
- [ ] Mobiele dropdown
