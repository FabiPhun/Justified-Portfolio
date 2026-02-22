# Justified Portfolio
This is a template for the gallery side of a portfolio page for images.

It works on mobile and desktop, with a responsive gallery and navigation bar.



# Gallery Component
A justified gallery with additional settings.


Add this to your `index.html`:

    <div
      class="gallery_wrapper"
      image-spacing="5px"
      maxImages="4"
      folder-path="./img/my-images"
      images="photo1.jpg, photo2.jpg">
    </div>

| Setting | What it does |
|---------|--------------|
| image-spacing | Gap between images (px, vw, %) |
| maxImages | Max images per row |
| folder-path | Folder where images are stored |
| images | Specific images to show, the order matters! (leave empty = random images for preview) |

## Styling
You will find all the styling within the `stlyes.css`


# Navigation Component
Changing `ANYTHING`, will affect both mobile and desktop versions!


Edit `navbar/navbar.html`:

    <div class="nav-content">
        <!-- Main menu -->
        <ul class="nav-section main-section">
            <li><a href="/" class="nav-link-main">Home</a></li>
        </ul>

        <!-- Category with subpages -->
        <ul class="nav-section">
            <li><span class="nav-category">Category</span></li>
            <li><a href="/page" class="nav-link-sub">Subpage</a></li>
        </ul>
    </div>

## Styling
Change colors for the navbar as well as fonts' and padding within `navbar.css`
