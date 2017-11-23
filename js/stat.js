'use strict';
window.renderStatistics = function (ctx, names, times) {
  function renderRect(color, opacity, x, y, width, height) {
    ctx.fillStyle = 'rgba(' + color + ', ' + color + ', ' + color + ', ' + opacity + ')';
    ctx.strokeRect(x, y, width, height);
    ctx.fillRect(x, y, width, height);
  }

  function drawDashboardInf() {
    ctx.fillStyle = '#000'; // black;
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов: ', 120, 60);
  }

  function findMaxValue() {
    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  }

  // Histogram parameters
  var HISTOGRAMWIDTH = 40;
  var BARHEIGHT = 150;
  var SCORE = BARHEIGHT / findMaxValue();
  var INDENT = 80;
  var INITIALX = 150;
  var INITIALY = 20;

  var BLUECOLOR = {
    r: 4,
    g: 86,
    b: 233
  };

  // Change blue color
  function getBlueBars(color) {
    ctx.fillStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + (Math.random() * (1 - 0.6) + 0.6) + ')';
  }

  // Painting
  function makeHistogram() {
    for (var j = 0; j < times.length; j++) {
      // Color bars
      if (names[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        getBlueBars(BLUECOLOR);
      }
      // Making bars
      ctx.fillRect(INITIALX + INDENT * j, 270 - times[j] * SCORE - INITIALY, HISTOGRAMWIDTH, times[j] * SCORE);
      ctx.fillStyle = 'black';
      ctx.fillText(names[j], INITIALX + INDENT * j, 270);
      ctx.fillText(Math.floor(parseInt(times[j], 10)), INITIALX + INDENT * j, 90);
    }
  }

  renderRect(0, 0.7, 110, 20, 420, 270);
  renderRect(256, 1, 100, 10, 420, 270);
  drawDashboardInf();
  makeHistogram();
};
