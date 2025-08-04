
# 1.3-Coloured-Markers

## 🎨 Color Models

### RGB
Primary colors: Red, Green, Blue  
Secondary colors: Made by combining two primaries (e.g., Red + Blue = Magenta)  
Tertiary colors: Mix a primary with a nearby secondary  
Example: Red (primary) + Green (secondary) = Orange (tertiary)  
For orange: red = 255 (max), green = 127 (half), blue = 0  

### Hex
Primary colors in hex: Red (#FF0000), Green (#00FF00), Blue (#0000FF)  
Secondary colors: Cyan (#00FFFF), Magenta (#FF00FF), Yellow (#FFFF00)  
Tertiary colors: Mix a primary with a nearby secondary  
Example: Orange (#FF7F00) = Red + some Green  
#007F00 is a darker green  

### HSL
HSL = Hue, Saturation, Lightness  
Hue: 0–360 degrees (0 = red, 120 = green, 240 = blue)  
Saturation: 0% = gray, 100% = full color  
Lightness: 0% = black, 50% = normal color, 100% = white  
Example: hsl(240, 100%, 50%) = pure blue  

## 🌈 Gradients & Transitions

### Basic Gradients
Gradients are created with linear-gradient(), which acts like a background image.  
linear-gradient needs at least two colors to display.  
Example: linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 255, 0))  

### Gradient Direction
90deg = horizontal (left to right)  
180deg = vertical (top to bottom)  

### Gradient with Stops
Example:  
background: linear-gradient(90deg, rgb(255, 0, 0) 75%, rgb(0, 255, 0), rgb(0, 0, 255));

- Red spans 75% of the element width  
- Green blends into blue over the remaining 25%  
- Color stops control how far each color stretches  

---

## 🧱 CSS Shorthand: Border-Left

Instead of writing separate properties for the width, style, and color of a left border, you can use the `border-left` shorthand.

### Example:
```css
border-left: 10px solid black;
```

This replaces:
```css
border-left-width: 10px;
border-left-style: solid;
border-left-color: black;
```

This shorthand keeps your code cleaner and easier to read.  
In this chapter, it was used in the `.sleeve` class to simplify the left border styling.

---

## ✂️ CSS Shorthand Properties

CSS shorthand lets you write cleaner, more efficient styles by combining multiple related properties into one line.

### Margin & Padding (TRBL order)
Shorthand syntax for both `margin` and `padding` follows this order:

```css
/* Top, Right, Bottom, Left */
margin: 10px 20px 30px 40px;
```

This would apply:
- Top: 10px
- Right: 20px
- Bottom: 30px
- Left: 40px

### Shortcut Variations:
- `margin: 10px;` → all four sides get 10px
- `margin: 10px 20px;` → top & bottom = 10px, left & right = 20px
- `margin: 10px 20px 30px;` → top = 10px, left & right = 20px, bottom = 30px

The same rules apply to `padding`.

---

## 🌫️ RGBA Color

RGBA is an extension of RGB that includes **Alpha** (opacity).

```css
rgba(red, green, blue, alpha)
```

- Red, Green, Blue: 0–255
- Alpha: 0 (completely transparent) to 1 (fully opaque)

### Example:
```css
background-color: rgba(255, 0, 0, 0.5);  /* Semi-transparent red */
```

Useful for overlays, translucent backgrounds, or hover effects where layered visibility is needed.

---

## 🔳 CSS Shorthand: Box Shadow

The `box-shadow` property adds shadows to elements. You can control position, blur, spread, and color.

### Syntax:
```css
box-shadow: offsetX offsetY [blurRadius] [spreadRadius] color;
```

### Parameters:
- **offsetX**: Horizontal shadow position
  - Positive = right, Negative = left
- **offsetY**: Vertical shadow position
  - Positive = down, Negative = up
- **blurRadius** *(optional)*: Amount of blur (default = 0 = sharp)
- **spreadRadius** *(optional)*: Size of the shadow beyond the element’s size
- **color**: Shadow color

### Example:
```css
box-shadow: 5px 5px 5px green;
```
This creates a **green** shadow that:
- Is offset 5px right and 5px down
- Has a blur radius of 5px for softer edges

You can also use negative values to shift the shadow up or left.

---

## 🌫️ Color Transparency: RGBA, 8-digit Hex, and HSLA

### RGBA (Red, Green, Blue, Alpha)
Extends RGB with an Alpha (opacity) value.

```css
rgba(255, 0, 0, 0.5);  /* Semi-transparent red */
```

- Alpha ranges from 0 (transparent) to 1 (fully opaque)
- Useful for overlays, transitions, or layered effects

---

### 8-Digit Hex (Hex with Alpha)
Hex color codes can include transparency using an 8-digit format: `#RRGGBBAA`

```css
#3B7E20CC
```

- `3B` = Red, `7E` = Green, `20` = Blue, `CC` = Alpha (~80% opacity)
- `00` is fully transparent, `FF` is fully opaque
- This was previously unknown to many developers since "hex" implies 6 digits

---

### HSLA (Hue, Saturation, Lightness, Alpha)
Extends HSL with an Alpha value for transparency.

```css
hsla(120, 100%, 50%, 0.25);  /* Transparent green */
```

- Alpha ranges from 0 (transparent) to 1 (opaque)
- Great for color theming with transparency effects
