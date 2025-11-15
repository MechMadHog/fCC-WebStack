// Updating the Height Dynamically
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select('body')
        .selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')

// My Code:

    .style("height", (d) =>{
        return d + "px";
    });
    