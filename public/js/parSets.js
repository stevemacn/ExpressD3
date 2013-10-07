$( document ).ready(function() {
    console.log("ENTER");

    var chart = d3.parsets()
          .dimensions(["GPA", "Gender", "Graduation", "Grade"]);
    
    var vis = d3.select("#vis").append("svg")
          .attr("width", 1000) //chart.width())
          .attr("height", 600);//chart.height());
    
          d3.csv("data/titanic.csv", function(csv) {
              vis.datum(csv).call(chart);
          });
})
