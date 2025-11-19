**FreeCodeCamp Certificate 04: Data Visualization (Planned)**  
[View Certificate](#)

🧠 This will be my fourth FreeCodeCamp certificate.  
If the first proved I could **build** the house (HTML/CSS), the second wired it with **logic** (JavaScript), and the third **lit it up** with libraries, this one is about turning everything that happens inside into **stories on the wall**... charts, maps, and diagrams that make the data obvious at a glance.

Here I move into **D3.js**, SVG, and JSON data sets. The focus is on **scales**, **layouts**, and **interaction**... how numbers become shapes, how colors encode meaning, and how tooltips and legends turn raw stats into something a human can actually read.

Like before, I treat the base assignments as **scaffolds** or foundations. Each project is a chance to build a small, focused data experience that feels like part of a future dashboard or analytics suite, not just a one-off exercise.

---

# Data Visualization Projects

## 1. 📊 Bar Chart - Global GDP  
**Origin:** FCC *Visualize Data with a Bar Chart*  
**Project:** [US GDP Bar-Chart](https://codepen.io/Mike-MacDonagh/pen/qEZqvLP)

**What I learned / will demonstrate:**  
- Fetching external JSON data and rendering a **D3-driven SVG bar chart**.  
- Mapping GDP values to **scaled x and y axes** and positioning SVG `<rect>` bars precisely.  
- Creating an interactive **tooltip** that reveals value and date on hover.  
- Designing a clean dark or light theme with readable labels and smooth hover transitions.  
- Keeping all FCC-required hooks intact (`#title`, `#tooltip`, `#x-axis`, `#y-axis`).  

---

## 2. 🔵 Scatterplot Graph - Doping in Cycling  
**Origin:** FCC *Visualize Data with a Scatterplot Graph*  
**Project:** [Doping Scatterplot](https://codepen.io/Mike-MacDonagh/pen/EaKmgwN)

**What I learned / will demonstrate:**  
- Plotting **paired numerical data** (year vs time) as SVG circles using D3 scales.  
- Encoding categorical differences (for example, doping vs non-doping) through color or iconography.  
- Building a responsive **legend**, gridlines, and properly formatted axes.  
- Implementing a dynamic **tooltip** that surfaces rider info and performance details.  
- Ensuring FCC test compliance: correct circle attributes, accessible IDs, and tooltip transitions.  

---

## 3. 🔥 Heat Map - Monthly Global Temperatures  
**Origin:** FCC *Visualize Data with a Heat Map*  
**Project:** [Surface Temperature Heat Map](https://codepen.io/Mike-MacDonagh/pen/MYymvdj)

**What I learned / will demonstrate:**  
- Transforming a dataset into a **color-mapped two dimensional grid** (month vs year, temperature variance).  
- Creating a **custom color scale** from cool to warm for clear pattern recognition.  
- Using D3 to build a responsive SVG layout with a large number of small cells.  
- Adding hover interaction that highlights the active cell and shows precise temperature variance.  
- Passing all FCC tests: `#legend`, cell data attributes, color scale accuracy, axis formatting.  

---

## 4. 🗺️ Choropleth Map - US Education Levels  
**Origin:** FCC *Visualize Data with a Choropleth Map*  
**Project:** [US Education Choropleth](https://codepen.io/Mike-MacDonagh/pen/QwNvOBB)

**What I learned / will demonstrate:**  
- Using **TopoJSON** with D3 to render a scalable, zoom free **US county map**.  
- Mapping education percentages to a **color gradient** and binding properties by FIPS code.  
- Constructing a clear, readable **legend** that matches the choropleth scale.  
- Implementing smooth hover tooltips that reveal county name and educational attainment.  
- Meeting all FCC mapping requirements: correct IDs, paths, legend, and accessible tooltips.  

---

## 5. 🍃 Treemap Diagram - Top Video Game Sales  
**Origin:** FCC *Visualize Data with a Treemap Diagram*  
**Project:** [Game Sales Tree Map](https://codepen.io/Mike-MacDonagh/pen/vEGZjxZ)

**What I learned / will demonstrate:**  
- Parsing categorical data into a **hierarchical structure** for D3 treemap layout.  
- Rendering nested rectangles sized by sales volume, grouped by console category.  
- Adding color coding per category and hover tooltips with game info.  
- Ensuring a readable layout with clear boundaries and responsive scaling.  
- Passing FCC requirements: `#legend`, `#tooltip`, category listing, and accurate `data-*` bindings.  
