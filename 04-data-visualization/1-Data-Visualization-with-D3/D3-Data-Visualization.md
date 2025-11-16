# 📊 Data Visualization with D3 - What I Learned (D3.js, SVG, & Data Binding)

## 🧩 What Data Visualization Is  
The FCC Data Visualization curriculum teaches how to turn raw datasets into **visual stories** using **D3.js** - a low-level JavaScript library for manipulating SVG, HTML, and Canvas through data binding.

Instead of using prebuilt chart libraries, D3 teaches how to **build every part** of a visualization manually:
- Scales  
- Axes  
- Shapes (rect, circle, path)  
- Legends  
- Color mappings  
- Tooltips  
- Layout algorithms (treemap, choropleth, heatmap)

The skill isn’t “how to draw one chart”…  
It’s **how visual encoding works**, so I can build *any* chart from scratch.

---

# **1. 🛠️ Core D3 Concepts**

## ✅ **Selections**
D3 selections create DOM references with superpowers:
```js
d3.select("svg")
d3.selectAll("rect")
```
They behave like query selectors but support **data binding** and chained manipulations.

---

## ✅ **Data Binding (`.data()`)**
Attaching a dataset to elements:
```js
svg.selectAll("rect")
  .data(myData)
  .enter()
  .append("rect")
```
`enter()` creates elements per data point (the foundation of dynamic charts).

---

## ✅ **Scales (`d3.scaleLinear`, `d3.scaleTime`, `d3.scaleOrdinal`)**
Scales convert **data → pixels**, allowing consistent spacing and accurate visuals:

Examples:
- Map GDP → bar height  
- Convert years → x-axis  
- Map temp variance → color

Scales output values that fit the SVG coordinate space.

---

## ✅ **Axes (`d3.axisBottom`, `d3.axisLeft`)**
D3 can auto-generate axes using scales:
```js
svg.append("g").call(d3.axisBottom(xScale));
```
Supports tick formatting, rotations, and gridlines.

---

## ✅ **SVG Basics**
D3 relies heavily on SVG shapes:

| Shape | What it's used for |
|-------|---------------------|
| `<rect>` | bars, heatmap cells, treemap blocks |
| `<circle>` | scatterplot points |
| `<path>` | geographic maps (TopoJSON → path) |
| `<text>` | labels, titles, tooltips |

Understanding SVG positioning is essential for accuracy.

---

# **2. 🔍 Interactivity & Visual Mapping**

## 🎯 **Tooltips**
Tooltips use:
- `mouseover`  
- `mousemove`  
- `mouseout`  

And a floating `<div id="tooltip">`.

Elements store metadata using:
```js
.attr("data-date", d.date)
```

---

## 🎨 **Color Scales**
Using:
- `d3.scaleSequential`
- `d3.scaleThreshold`
- `d3.interpolateWarm`
- `d3.interpolateCool`
- `d3.scaleOrdinal`

Colors encode:
- temperature  
- education levels  
- categories  
- intensity  

---

# **3. 📊 Layout Algorithms (Advanced D3)**

## 🔲 **Treemap (`d3.treemap()`)**
For hierarchical data:
1. Convert → `d3.hierarchy`
2. Apply `.sum()`  
3. Use `treemap()`  
4. Draw each node as `<rect>`

---

## 🗺️ **Choropleth Maps**
Requires:
- TopoJSON map  
- Statistical dataset  
- FIPS-based merging  

Tools:
- `d3.json`  
- `d3.geoPath`  
- `d3.scaleThreshold`  

Each county is a `<path>` with tooltip data.

---

## 🔥 **Heat Maps**
A matrix grid where:
- X = year  
- Y = month  
- Color = temperature variance  

Usually 100+ cells → ideal for practicing data-binding.

---

# **4. 🕹️ FCC Projects & Skills Reinforced**

### **4.1 Bar Chart – GDP**
- Time parsing  
- Bar positioning  
- Tooltip accuracy  

### **4.2 Scatterplot – Cyclist Performance**
- Circles & axes  
- Categorical coloring  
- Legend creation  

### **4.3 Heatmap – Global Temps**
- Sequential color scales  
- Grid generation  
- Hover interaction  

### **4.4 Choropleth – US Education**
- Geodata (TopoJSON)  
- Threshold scales  
- Geographic paths  

### **4.5 Treemap – Video Game Sales**
- Hierarchical data → geometry  
- Nested rectangles  
- Category color mapping  

---

# **5. 💡 Reflection**
This section taught me how to transform *any* dataset into a readable visual by understanding:
- mapping data to geometry  
- how SVG & D3 interact  
- how color encodes meaning  
- how interactivity adds context  
- how dashboards are structured  

D3 is low-level but powerful, it teaches **how visual thinking works**, not just how to use a chart library.

