# Justified Portfolio
A template designed for image-heavy portfolios.

This system provides a justified layout that automatically balances differently sized images within a container to create a clean, uncropped aesthetic on both mobile and desktop browsers as well as a navigation that is easy to customize.

## Features
* Justified Grid: Dynamically scales images to fill row widths while maintaining aspect ratios.
* Unified Navigation: A single HTML structure that powers both the desktop menu and mobile drawer.
* Attribute-Based Config: Control the gallery behavior directly through HTML attributes.



### Desktop Views

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_desktop.png?raw=true" style="width: 100%; display: block;">
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_desktop_lightbox.png?raw=true" style="width: 100%; display: block;">
    </td>
  </tr>
</table>

### Mobile Views

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_mobile.png?raw=true" style="width: 100%; display: block;">
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_mobile_navbar-visible.png?raw=true" style="width: 100%; display: block;">
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_mobile_lightbox.png?raw=true" style="width: 100%; display: block;">
    </td>
  </tr>
</table>

---

## Gallery Component
The gallery is initialized by adding a wrapper and script tag to your `index.html.`

### Implementation
```html
<body>
  <div
     id="0"
     class="gallery_wrapper"
     image-spacing=""
     maxImages=""
     folder-path=""
     images=""
     fc-gallery="list"
  </div>

  <script src="components/gallery_component.js"></script>
</body>
```

### Configuration Table
| Setting | What it does | Example |
|---------|--------------|---------|
| `image-spacing` | Gap between images (px, vw, %) | `image-spacing="5px"` |
| `maxImages` | Max images per row | `maxImages="4"` |
| `folder-path` | Folder where images are stored | `folder-path="./images/cats"` |
| `images` | Specific images to show | `images="scruffy.png, pluto.jpg, chloe.gif, ./whitecats/dimples.png` |

#### Note:


If the `images` attribute is left empty, the gallery will default to random images for preview purposes.

Adding a `*` behind a image within the `images`tag, will result in a forced break independent of the `maxImages` tag.

You can have as many gallery components as you like and they will all function seperately.

---

## Navigation Component

### Adding the compontent
Add this to your `html` code.
```html

<body>
    <div
      id="navbar-container"
      desktopNav=""
      mobileNav=""
      directoryFix="">
    </div>

    <script src="components/navbar/navbar.js"></script>
</body>
```

### Configuration Table
| Setting | What it does | Example |
|---------|--------------|---------|
| `desktopNav` | turns the desktop navbar off | `desktopNav="false"` |
| `mobileNav` | turns the mobile navbar and navmenu off | `mobileNav="false"` |
| `directoryFix`| if the script call is within another folder, you can specify the root | `directoryFix="../"` |

#### Note:

If these three attributes are left empty, they will return to a default statement.


### Structure
Edit `navbar/navbar.html` to manage your site links:
```html
    <div class="nav-content">
        <!-- main -->
        <div class="nav-main-wrapper">
            <a href="index.html" class="nav-main-section-link">Home</a>
        </div>

        <!-- category -->
        <div class="nav-category-wrapper">
            <a href="/" class="nav-category-link">Category</a>

            <!-- sub -->
            <div class="nav-category-sublink-wrapper">
                <a href="/" class="nav-category-sublink">Sub-Link</a>
            </div>

        </div>
    </div>
```
Changes made to the structure will automatically reflect across all screen sizes, mobile and desktop.

---

## Styling and Customization
The visual presentation is separated into two primary CSS files for easier management:

* Body Styling: Modify `styles.css` to adjust the body and its' content.
* Navbar Styling: Modify `navbar.css` to update typography, color schemes, and padding for the navigation menu.
* Gallery Styling: Add and modify the attributes within the `gallery-wrapper` class.

---


### Thanks
Thank you for using this template, feel free to do whatever you want with it.
