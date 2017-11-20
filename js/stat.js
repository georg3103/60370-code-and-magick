window.renderStatistics = function (ctx, names, times) {

  // SHADOW + function

  function shadow() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);
  }

  shadow();

  // STATISTICS DASHBOARD + function

  function dashboard() {
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000'; // black;
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов: ', 120, 60);
  }

  dashboard();

  // Find max SCORE

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }


  // Histogram parametres + uppercase
  var HISTOGRAMWIDTH = 40;
  var BARHEIGHT = 150;
  var SCORE = BARHEIGHT / max;
  var INDENT = 80;
  var INITIALX = 150;
  var INITIALY = 20;

  var BLUECOLOR = {
    r: 4,
    g: 86,
    b: 233
  };

  // Change blue color
  function blueBars() {
    ctx.fillStyle = 'rgba(' + BLUECOLOR.r + ', ' + BLUECOLOR.g + ', ' + BLUECOLOR.b + ', ' + (Math.random() * (1 - 0.6) + 0.6) + ')';
  }

  // Painting
  function makeHistogram() {
    for (var j = 0; j < times.length; j++) {
      // Colore bars
      if (names[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        blueBars();
      }
      // Making bars
      ctx.fillRect(INITIALX + INDENT * j, 270 - times[j] * SCORE - INITIALY, HISTOGRAMWIDTH, times[j] * SCORE);
      ctx.fillStyle = 'black';
      ctx.fillText(names[j], INITIALX + INDENT * j, 270);
      ctx.fillText(Math.floor(parseInt(times[j], 10)), INITIALX + INDENT * j, 90);
    }
  }
  makeHistogram();
};
