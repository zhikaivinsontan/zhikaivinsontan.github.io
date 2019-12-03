
const svgLegend = d3.select("#statslegend");

svgLegend.append("circle")
        .attr("cx", 100)
        .attr("cy", 30)
        .attr("r", 30)
        .attr("fill","midnightblue");

svgLegend.append("text")
        .text("Peranakans")
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('font-size', '20px')
        .attr('fill', 'black')
        .attr('transform',
            "translate(" +
            200 + "," +
            30 + ")");

svgLegend.append("circle")
    .attr("cx", 500)
    .attr("cy", 30)
    .attr("r", 30)
    .attr("fill","darkturquoise");

svgLegend.append("text")
    .text("Other ethnicities")
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '20px')
    .attr('fill', 'black')
    .attr('transform',
        "translate(" +
        630 + "," +
        30 + ")");


const svgMalaysia = d3.select("#malaysiasvg");



for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 25; j++) {
    svgMalaysia.append("circle")
        .attr("cx", 30 + i *15)
        .attr("cy", 30 + j * 15)
        .attr("r", 5)
        .attr("fill","darkturquoise")
        .attr("opacity",0.5);
    }
}

for (var i = 0; i < 8; i++) {
    svgMalaysia.append("circle")
        .attr("cx", 30 + i *15)
        .attr("cy", 30)
        .attr("r", 5)
        .attr("fill","midnightblue");
}

const svgSingapore = d3.select("#singaporesvg");

for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 25; j++) {
        svgSingapore.append("circle")
        .attr("cx", 30 + i *15)
        .attr("cy", 30 + j * 15)
        .attr("r", 5)
        .attr("fill","darkturquoise")
        .attr("opacity",0.5);
    }
}

for (var i = 0; i < 4; i++) {
    svgSingapore.append("circle")
        .attr("cx", 30 + i *15)
        .attr("cy", 30)
        .attr("r", 5)
        .attr("fill","midnightblue");
}