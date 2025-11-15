// Changing the Presentation of a Bar Chart
/*

<style>
  .bar {
    width: 25px;
    height: 100px;

// My Code:
    margin: 2px;

    display: inline-block;
    background-color: blue;
  }
</style>

*/ 

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select('body')
        .selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')

// My Code:

    .style("height", (d) => (10*d + "px"));