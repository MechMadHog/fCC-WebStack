//  SVG in D3
/*

<style>
    svg {
        background-color: pink;
    }
</style>

*/ 

    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select('body')

// My Code:

    .append('svg')
        .style("height", h)
        .style("width", w);