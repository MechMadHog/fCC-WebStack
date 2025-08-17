# Intermediate CSS -- Cat Painting (Comments)

## Key Learnings

### CSS Positioning

-   **`static`**: Default positioning; ignores `top`, `left`, `right`,
    `bottom`.\
-   **`relative`**: Keeps the element in normal document flow but allows
    shifting using `top`/`left`/etc.\
-   **`absolute`**: Removes the element from document flow and positions
    it relative to the nearest positioned ancestor.
    -   Example: In the cat, the ears, eyes, and whiskers are placed
        with absolute positioning so they can sit exactly where needed
        on the head.\
-   **Centering with absolute + margin auto**: Using
    `top: 0; right: 0; bottom: 0; left: 0; margin: auto;` centers an
    element both vertically and horizontally (requires set
    width/height).

### Borders and Shapes

-   **Border triangles**: By setting an element's `width`/`height` to
    `0` and making three sides' borders `transparent`, the remaining
    border creates a triangle.\
-   **Diagonal shapes**: Borders naturally meet at 45° angles, allowing
    for triangular shapes without images.

### Transformations

-   **`transform`**: A powerful property to change an element's shape,
    position, or orientation without affecting other elements in the
    layout.
    -   **`rotate()`**: Rotates an element by a set degree (positive =
        clockwise, negative = counterclockwise). Used for the cat's
        ears, eyes, and whiskers.\
    -   Other functions: `translate()` (move), `scale()` (resize),
        `skew()` (slant).\
-   **Transform origin**: The pivot point around which transformations
    occur (default is center).

### Layering & Overlap

-   **`z-index`**: Controls the stacking order of elements when they
    overlap.
    -   Higher values appear in front, lower values behind.\
    -   Example: The inner ears and eyes have higher z-index than the
        head, so they stay visible.

### Gradients & Styling

-   **Linear gradients**: Example ---
    `background: linear-gradient(#5e5e5e 85%, #45454f 100%);` to shade
    the cat head.\
-   **Border-radius**: Used to soften corners and create organic shapes
    (ears, nose, eyes, mouth).

### Other Details

-   **Nested divs for features**: Inner ears, pupils, whiskers, etc. are
    smaller divs styled and positioned inside larger ones.\
-   **Fine adjustments**: Rotation angles, pixel offsets, and border
    manipulation combine to form complex, realistic shapes.
