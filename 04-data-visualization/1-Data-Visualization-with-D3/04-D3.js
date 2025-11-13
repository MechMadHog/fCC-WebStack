// Working with Dynamic Data

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];


d3.select('body')
      .selectAll('h2')
      .data(dataset)
      .enter()
      .append('h2')



// My code:
      .text((d) => d + " USD");