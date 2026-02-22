# Personal Website with Gallery & Navigation

## Gallery Component
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
| images | Specific images to show (leave empty = random) |

## Navigation Component
Edit `navbar/navbar.html`:

    <template id="navContentTemplate">
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
</template>


## Styling
Change colors in `styles.css`:

:root {
    /* Page background */
    --body-background-color: black;
    
    /* Navbar colors */
    --nav-bg: #202020;
    --category-color: #d3d3d3;
    --main-link-color: white;
    --main-link-hover: #bdbdbd;
    --sub-link-color: #929292;
    --sub-link-hover: white;
}
