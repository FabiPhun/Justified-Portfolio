# Justified Portfolio
A responsive gallery template designed for image-heavy portfolios. This system provides a justified layout that automatically balances image rows for a clean, professional aesthetic on both mobile and desktop browsers.

---

## Features
* Justified Grid: Dynamically scales images to fill row widths while maintaining aspect ratios.
* Unified Navigation: A single HTML structure that powers both the desktop menu and mobile drawer.
* Attribute-Based Config: Control the gallery behavior directly through HTML attributes.

---

## Gallery Component
The gallery is initialized by adding a wrapper to your index.html. 

### Implementation
    <div
      class="gallery_wrapper"
      image-spacing="5px"
      maxImages="4"
      folder-path="./img/my-images"
      images="photo1.jpg, photo2.jpg">
    </div>

### Configuration Table
Attribute: image-spacing
Function: Defines the gap between images.
Supported Units: px, vw, %

Attribute: maxImages
Function: Sets the maximum images per row.
Supported Units: Integer

Attribute: folder-path
Function: The directory path where images are stored.
Supported Units: String (Path)

Attribute: images
Function: Specific filenames to display (order matters).
Supported Units: String (CSV)

Note: If the images attribute is left empty, the gallery will default to random images for preview purposes.

---

## Navigation Component
The navigation system is designed for high maintainability. Changes made to the structure will automatically reflect across all screen sizes.

### Structure
Edit navbar/navbar.html to manage your site links:

    <div class="nav-content">
    <ul class="nav-section main-section">
        <li><a href="/" class="nav-link-main">Home</a></li>
    </ul>

    <ul class="nav-section">
        <li><span class="nav-category">Portfolio</span></li>
        <li><a href="/gallery" class="nav-link-sub">Gallery</a></li>
    </ul>
    </div>

---

## Styling and Customization
The visual presentation is separated into two primary CSS files for easier management:

* Gallery Styling: Modify styles.css to adjust image transitions, borders, and grid behavior.
* Navbar Styling: Modify navbar.css to update typography, color schemes, and padding for the navigation menu.

---
