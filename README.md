# Personal Website with Gallery & Navigation

A customizable website with an automatic image gallery and a clean navigation bar.

## Getting Started

Just edit the CSS variables to match your style and add your images.

## Customize Design (styles.css)

Change colors and spacing in the `styles.css` file:

    :root {
        /* Background color */
        --body-background-color: black;
        
        /* Spacing around content */
        --desktop-body-content-container-padding: 3% 15vw 5%;
        --mobile-body-content-container-padding: 10vw 8% 0 8%;
    }

## Add Image Gallery

Insert this code in your `index.html` (inside the <body> tag):

    <div
      class="gallery_wrapper"
      image-spacing="5px"
      maxImages="4"
      folder-path="./img/my-images"
      images="photo1.jpg, photo2.jpg"
      row-stretch="1">
    </div>

### Settings Explained

| Setting | What it does | Example |
|---------|--------------|---------|
| image-spacing | Gap between images | "5px", "2vw" |
| maxImages | Max images per row | "3", "4", "5" |
| folder-path | Where your images are | "./img/vacation" |
| images | Specific images to show | "sunset.jpg, beach.jpg" |

**Note:** Leave `images` empty to show random images from the folder.

## Customize Navigation (navbar/navbar.html)

The navigation structure looks like this:

    <template id="navContentTemplate">
    <div class="nav-content">
        <!-- Main menu items -->
        <ul class="nav-section main-section">
            <li><a href="/" class="nav-link-main">Home</a></li>
            <li><a href="/about" class="nav-link-main">About</a></li>
        </ul>

        <!-- Category with sub-items -->
        <ul class="nav-section">
            <li><span class="nav-category">Projects</span></li>
            <li><a href="/web" class="nav-link-sub">Web Design</a></li>
            <li><a href="/photo" class="nav-link-sub">Photography</a></li>
        </ul>

        <!-- Another category -->
        <ul class="nav-section">
            <li><span class="nav-category">Contact</span></li>
            <li><a href="/email" class="nav-link-sub">Email</a></li>
        </ul>
    </div>
</template>

### Add Your Links

Put your URLs in the `href=""` attributes:

    <li><a href="https://google.com" class="nav-link-sub">Google</a></li>
    <li><a href="/imprint" class="nav-link-sub">Imprint</a></li>

## Navigation Colors (styles.css)

These are the main color settings for the navbar:

    :root {
     /* Navbar background */
     --nav-bg: #202020;
     --mobile-header-bg: #707070;
    
    /* Category text */
    --category-color: #d3d3d3;
    
    /* Main menu links */
    --main-link-color: white;
    --main-link-hover: #bdbdbd;
    
    /* Sub menu links */
    --sub-link-color: #929292;
    --sub-link-hover: white;
    }

## Questions?

Just ask if something is unclear or doesn't work.
