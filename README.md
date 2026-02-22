# Justified Portfolio
A template designed for image-heavy portfolios.

This system provides a justified layout that automatically balances differently sized images within a container to create a clean aesthetic on both mobile and desktop browsers as well as a navigation that is easy to customize.

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

### Example Customized
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td width="75%" align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_desktop_custom.png?raw=true" style="width: 100%; display: block;">
    </td>
    <td width="25%" align="center" style="border: none;">
      <img src="https://github.com/FabiPhun/Justified-Portfolio-Gallery/blob/main/examples/example_fullpage_default_mobile_custom.png?raw=true" style="width: 100%; display: block;">
    </td>
  </tr>
</table>

---

## Gallery Component
The gallery is initialized by adding a wrapper to your `index.html.`

### Implementation
```html
<div
   id="0"
   class="gallery_wrapper"
   image-spacing=""
   maxImages=""
   folder-path=""
   images=""
   fc-gallery="list"
   row-stretch="1">
</div>
```

### Configuration Table
| Setting | What it does | Example |
|---------|--------------|---------|
| `image-spacing` | Gap between images (px, vw, %) | `image-spacing="5px"` |
| `maxImages` | Max images per row | `maxImages="4"` |
| `folder-path` | Folder where images are stored | `folder-path="./images/cats"` |
| `images` | Specific images to show | `images="scruffy.png, pluto.jpg, chloe.gif, ./whitecats/dimples.png` |
| `row-stretch` | stretch images to whole row if less than `maxImages` | `row-stretch="4"` |

#### Note:


If the `images` attribute is left empty, the gallery will default to random images for preview purposes.

If the `image-spacing` and `row-stretch` are without value, they will return to a certain default.

You can have as many gallery components as you like and they will all function seperately.

---

## Navigation Component
Changes made to the structure will automatically reflect across all screen sizes, mobile and desktop.

### Structure
Edit `navbar/navbar.html` to manage your site links:
```html
<div class="nav-content">
    <ul class="nav-section main-section">
        <li><a href="/" class="nav-link-main">HOME</a></li>
    </ul>

    <ul class="nav-section">
        <li><span class="nav-category">cats</span></li>
        <li><a href="/gallery" class="nav-link-sub">white cats</a></li>
    </ul>
</div>
```

---

## Styling and Customization
The visual presentation is separated into two primary CSS files for easier management:

* Gallery Styling: Modify `styles.css` to adjust the body and its' content.
* Navbar Styling: Modify `navbar.css` to update typography, color schemes, and padding for the navigation menu.

