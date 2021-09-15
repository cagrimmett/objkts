import * as d3 from "https://cdn.skypack.dev/d3@7.0.1";
import $ from "https://cdn.skypack.dev/jquery@3.6.0";

function connected() {
  var svg = d3
    .select("#lines")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  function lineData() {
    var colors = [
      "#F94144",
      "#F3722C",
      "#D7ADEB",
      "#F9C74F",
      "#90BE6D",
      "#43AA8B",
      "#577590",
      "#6E4555"
    ];
    colors = shuffle(colors);
    var paddingX = window.innerWidth / 10;
    var paddingY = window.innerHeight / 10;
    var points = [];
    for (var i = 0; i < 8; i++) {
      points.push({
        id: i,
        x: getRandomArbitrary(paddingX, window.innerWidth - paddingX),
        y: getRandomArbitrary(paddingY, window.innerHeight - paddingY),
        color: colors[i]
      });
    }
    let lines = [];
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        lines.push({
          id: i + "." + j,
          color: points[i].color,
          x1: points[i].x,
          y1: points[i].y,
          x2: points[j].x,
          y2: points[j].y
        });
      }
    }
    return lines;
  }

  function lineData2() {
    var colors = [
      "#F94144",
      "#F3722C",
      "#D7ADEB",
      "#F9C74F",
      "#90BE6D",
      "#43AA8B",
      "#577590",
      "#6E4555"
    ];
    colors = shuffle(colors);
    var paddingX = window.innerWidth / 10;
    var paddingY = window.innerHeight / 10;
    var points = [];
    for (var i = 0; i < 8; i++) {
      points.push({
        id: i,
        x: getRandomArbitrary(paddingX, window.innerWidth - paddingX),
        y: getRandomArbitrary(paddingY, window.innerHeight - paddingY),
        color: colors[i]
      });
    }
    let lines = [];
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        lines.push({
          id: i + "." + j,
          color: points[i].color,
          x1: points[i].x,
          y1: points[i].y,
          x2: points[j].x,
          y2: points[j].y
        });
      }
    }
    return lines;
  }

  var line = svg
    .selectAll(".rand")
    /*.data(points)
    .enter()
    .append("circle")
    .style("fill", function (d) {
      return d.color;
    })
    .attr("r", 5)
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })*/
    .data(lineData)
    .enter()
    .append("line")
    .attr("stroke", function (d) {
      return d.color;
    })
    /*    .attr("stroke-width", function (d) {
      return d.id;
    })*/
    .attr("id", function (d) {
      return d.id;
    })
    .attr("x1", function (d) {
      return d.x1;
    })
    .attr("y1", function (d) {
      return d.y1;
    })
    .attr("x2", function (d) {
      return d.x2;
    })
    .attr("y2", function (d) {
      return d.y2;
    })
    .transition()
    .duration(5000)
    .attr("x2", function (d) {
      return d.x2;
    })
    .attr("y2", function (d) {
      return d.y2;
    });

  var update = d3
    .selectAll("line")
    .data(lineData2)
    .transition()
    .duration(1000)
    .attr("stroke", function (d) {
      return d.color;
    })
    /*    .attr("stroke-width", function (d) {
      return d.id;
    })*/
    .attr("id", function (d) {
      return d.id;
    })
    .attr("x1", function (d) {
      return d.x1;
    })
    .attr("y1", function (d) {
      return d.y1;
    })
    .attr("x2", function (d) {
      return d.x2;
    })
    .attr("y2", function (d) {
      return d.y2;
    });
}

// clear
$(window).keypress(function (e) {
  if (e.key == "c") {
    d3.selectAll("svg").remove();
  }
});

//print
$(window).keypress(function (e) {
  if (e.key == "p") {
    var run = window.setInterval(function () {
      //d3.selectAll("svg").remove();
      connected();
    }, 2000);

    setTimeout(function () {
      clearInterval(run);
    }, 20000);
  }
});
