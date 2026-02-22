# Meine Webseite mit Galerie und Navigation

Eine anpassbare Webseite mit Bildergalerie und Navigationsleiste.

## Design anpassen (styles.css)

In `styles.css` kannst du Hintergrundfarbe und Seitenränder ändern:

:root {
    --body-background-color: black;
    --desktop-body-content-container-padding: 3% 15vw 5%;
    --mobile-body-content-container-padding: 10vw 8% 0 8%;
}

## Bildergalerie einbauen

Diesen Code in `index.html` einfügen:

<div
  class="gallery_wrapper"
  image-spacing="5px"
  maxImages="4"
  folder-path="./img/meine-bilder"
  images="bild1.jpg, bild2.jpg"
  row-stretch="1">
</div>

### Wichtige Einstellungen
- `image-spacing`: Abstand zwischen Bildern (z.B. "5px")
- `maxImages`: Maximale Bilder pro Reihe (z.B. "4")
- `folder-path`: Pfad zum Bildordner
- `images`: Bestimmte Bilder anzeigen (leer lassen = zufällige Bilder)

## Navigation anpassen (navbar/navbar.html)

So ist die Navigation aufgebaut:

<template id="navContentTemplate">
    <div class="nav-content">
        <!-- Hauptmenü -->
        <ul class="nav-section main-section">
            <li><a href="/" class="nav-link-main">Startseite</a></li>
        </ul>

        <!-- Kategorie mit Unterpunkten -->
        <ul class="nav-section">
            <li><span class="nav-category">Kategorie</span></li>
            <li><a href="/link" class="nav-link-sub">Unterpunkt</a></li>
        </ul>
    </div>
</template>

### Links setzen
In `href=""` kommt dein Link:
<li><a href="https://google.de" class="nav-link-sub">Google</a></li>

## Farben der Navigation

In `styles.css` findest du diese Einstellungen:

:root {
    --nav-bg: #202020;              /* Navbar-Hintergrund */
    --category-color: #d3d3d3;       /* Kategorien-Farbe */
    --main-link-color: white;         /* Hauptmenü-Farbe */
    --main-link-hover: #bdbdbd;       /* Hauptmenü-Hover */
    --sub-link-color: #929292;        /* Untermenü-Farbe */
    --sub-link-hover: white;          /* Untermenü-Hover */
}
