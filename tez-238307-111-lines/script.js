import * as d3 from "https://cdn.skypack.dev/d3@7.0.1";
import $ from "https://cdn.skypack.dev/jquery@3.6.0";

function sol289() {
  var svg = d3
    .select("#lines")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function lineData() {
    var data = new Array();
    var id = 1;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var numLines = 12;
    // iterate for cells/columns inside rows
    for (var center = 0; center < numLines * 2; center++) {
      data.push({
        id: id,
        class: "center",
        x1: ww / 2,
        y1: wh / 2,
        stroke: "#785964",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var topleft = 0; topleft < numLines; topleft++) {
      data.push({
        id: id,
        class: "topleft",
        x1: 0,
        y1: 0,
        stroke: "#721817",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var topright = 0; topright < numLines; topright++) {
      data.push({
        id: id,
        class: "topright",
        x1: ww,
        y1: 0,
        stroke: "#3A7CA5",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var bottomright = 0; bottomright < numLines; bottomright++) {
      data.push({
        id: id,
        class: "bottomright",
        x1: ww,
        y1: wh,
        stroke: "#D4C1EC",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var bottomleft = 0; bottomleft < numLines; bottomleft++) {
      data.push({
        id: id,
        class: "bottomleft",
        x1: 0,
        y1: wh,
        stroke: "#AEFFD8",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var middleleft = 0; middleleft < numLines; middleleft++) {
      data.push({
        id: id,
        class: "middleleft",
        x1: 0,
        y1: wh / 2,
        stroke: "#F17F29",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var middleright = 0; middleright < numLines; middleright++) {
      data.push({
        id: id,
        class: "middleright",
        x1: ww,
        y1: wh / 2,
        stroke: "#EAD2AC",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var middletop = 0; middletop < numLines; middletop++) {
      data.push({
        id: id,
        class: "middletop",
        x1: ww / 2,
        y1: 0,
        stroke: "#14591D",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }

    for (var middlebottom = 0; middlebottom < numLines; middlebottom++) {
      data.push({
        id: id,
        class: "middlebottom",
        x1: ww / 2,
        y1: wh,
        stroke: "#333333",
        x2: getRandomArbitrary(0, ww),
        y2: getRandomArbitrary(0, wh)
      });
      id++;
    }
    return data;
  }

  var lineData = lineData();
  console.log(lineData);

  /*var row = svg.selectAll(".row")
	.data(lineData)
	.enter().append("g")
	.attr("class", "row");*/

  var line = svg
    .selectAll(".rand")
    .data(lineData)
    .enter()
    .append("line")
    .attr("class", function (d) {
      return d.class;
    })
    .attr("stroke", function (d) {
      return d.stroke;
    })
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
      return d.x1;
    })
    .attr("y2", function (d) {
      return d.y1;
    })
    .transition()
    .duration(6000)
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
    sol289();
  }
});

sol289();

$(window).resize(function () {
  if (this.resizeTO) clearTimeout(this.resizeTO);
  this.resizeTO = setTimeout(function () {
    $(this).trigger("resizeEnd");
  }, 500);
});

//resize on resizeEnd function
$(window).bind("resizeEnd", function () {
  d3.selectAll("svg").remove();
  sol289();
});
