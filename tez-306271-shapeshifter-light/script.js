
  var svg = d3
    .select("#lines")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
    function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
      
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  function lineData() {
    var colors = d3.schemePaired;
    colors = shuffle(colors);
    var paddingX = window.innerWidth / 20;
    var paddingY = window.innerHeight / 20;
    var points = [];
    for (var i = 0; i < 7; i++) {
      points.push({
        id: i,
        x: getRandomArbitrary(paddingX, window.innerWidth - paddingX),
        y: getRandomArbitrary(paddingY, window.innerHeight - paddingY),
        color: colors[i]
      });
    }
    let lines = [];
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 7; j++) {
        lines.push({
          id: i + "." + j,
          color: points[i].color,
          x1: points[i].x,
          y1: points[i].y,
          x2: points[j].x,
          y2: points[j].y,
          strokeWidth: 4
        });
      }
    }
    return lines;
  }

  function newLines() {
    d3.selectAll("line")
      .data(lineData)
      .transition()
      .duration(3000)
      .attr("stroke", function (d) {
        return d.color;
      })
      .attr("stroke-width", function (d) {
        return d.strokeWidth;
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
        return d.x2;
      })
      .attr("y2", function (d) {
        return d.y2;
      })
      .delay(600)
      .on("end", function () {
        newLines();
      });
  }

  var line = svg
    .selectAll(".rand")
    .data(lineData)
    .enter()
    .append("line")
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("stroke-width", function (d) {
      return d.strokeWidth;
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
      return d.x2;
    })
    .attr("y2", function (d) {
      return d.y2;
    });
  // .transition()
  // .duration(5000)
  // .attr("x2", function (d) {
  //   return d.x2;
  // })
  // .attr("y2", function (d) {
  //   return d.y2;
  // });
  // .each("end", function () {
  //   newLines();
  // });

  var update = d3
    .selectAll("line")
    .data(lineData)
    .transition()
    .duration(3000)
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("stroke-width", function (d) {
      return d.strokeWidth;
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
      return d.x2;
    })
    .attr("y2", function (d) {
      return d.y2;
    })
    .delay(600)
    .on("end", function () {
      newLines();
    });

    