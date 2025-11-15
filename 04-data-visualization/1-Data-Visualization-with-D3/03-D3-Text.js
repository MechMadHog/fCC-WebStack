// Working with Data

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// My code:
d3.select('body')
      .selectAll('h2')
      .data(dataset)
      .enter()
      .append('h2')
      .text("New Title");