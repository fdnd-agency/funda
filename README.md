# Funda design challenge sprint 6
Het maken (nabouwen) van een detailpagina en verbeteren waar nodig is in hardcode vanille html, css en javascript. Je bent vrij in het aanpassen van de website, zowel als kleuren als lay-out. Zorg ervoor dat de code mobile first wordt gebouwd.

<img width="650px" alt="image" src="https://github.com/rutgerkock/funda/assets/114153177/69501f6b-d721-46f0-8bc0-25b049de7d51">
<img width="200px" alt="image" src="https://github.com/rutgerkock/funda/assets/114153177/628e7ddb-3547-4468-ad68-10c82078f5fd">


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Checklist](#checklist)

## Beschrijving

De pagina werd opnieuw gebouwd door een intern team, zijn er dingen die ze mee kunnen nemen waar wij mee komen. Onze ideeën kunnen eventueel toegevoegd worden. Funda heeft veel teams die eigen pagina’s maken, wij voegen dus iets toe aan deze pagina die recentelijk herbouwd is.

De pagina is responsive en is Mobile first ontworpen en gemaakt. 

Hier staat de website: [rutgerkock.github.io/funda](https://rutgerkock.github.io/funda/)

## Gebruik

De website is bedoeld voor een brede doelgroep van verschillende soorten mensen. Denk hier bijvoorbeeld aan verkopers, kopers en huurders, maar ook nieuwsgierige mensen die de website gebruiken voor entertainment en vrije tijd.

## Kenmerken

De website is gebouwd met [HTML](#html) en [CSS](#CSS), alle interacties zijn volledig zonder [JAVASCRIPT](#JAVASCRIPT) gerealiseerd, door gebruik te maken van ```<detail>``` elementen en ```popover``` elementen.

### HTML

Hieronder staat de basis structuur uitgelegd met de setting in de [HEAD](#HEAD) en opmaak van de [BODY](#BODY):

#### HEAD
  
  In de `<head>` wordt een CSS file geladen. De algemene styleguide met basis settings en kleuren. 
  ```html
      <link rel="stylesheet" href="styles/styles.css">
  ```

#### BODY

  De structuur van de body is [HEADER](#HEADER), [MAIN](#MAIN) en [FOOTER](#FOOTER), onderverdeeld in [SECTIONS](#SECTIONS)
  
### CSS

In de CSS staat een `scroll-behavior: smooth;` op de html voor een animatie als iemand op de links klikt.

#### Font-size

De font sizes zijn:
```css
:root {
    --main-font: 'Proxima Nova', sans-serif;
    --main-font-weight: 400;
    --second-font-weight: 350;
    --third-font-weight: 300;
    --main-font-size: 20px;
    --second-font-size: 16px;
    --main-color: #F7A100;
    --main-font-color: #333333;
    --second-font-color: #999999;
    --third-font-color: #0071B3;
    --background-color-footer: #EDEDED;
}

```

#### @media 700px

De kenmerken lijst veranderd van layout, de footer veranderd van layout en wat andere kleine dingen.

#### @media 1200px

De nav veranderd, de footer verandered weer van layout en de sections krijgen een margin aan de zijkant. 


## Checklist

Checklist pagina

- [ ] Makelaar blokje
- [ ] Buurt blokje
- [ ] Kaart blokje
- [ ] Reis blokje
- [ ] Inklapbare kenmerken lijst
- [x] Responsive nav-bar
- [x] Responsive footer
- [x] Responsive sections
- [x] Responsive main-image
- [x] Kenmerken tabel
- [x] Belangrijkste kenmerken
- [x] Uitklapbare beschrijving
- [x] Ing sectie
- [x] Vergelijkbaar in de buurt sectie
- [x] Mobiele dropdown
