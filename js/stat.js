window.renderStatistics = function (ctx, names, times) {

  // Additional (sort users)

  var users = {
    names : [],
    times : [],
  };
  users.names += names;
  users.times += times;

  console.log('Игроки:  ' + users.names);
  console.log('Время:  ' + users.times);

  // Sorting



  // SHADOW
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  // STATISTICS DASHBOARD
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  // Find max score
  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  // Histogram parametres
  var histogramWidth = 40; // px;
  var barHeigth = 150; // px;
  var score = barHeigth / (max - 0); // px
  var indent = 80;    // px;
  var initialX = 150; // px;
  var initialY = 20;  // px;
  var lineHeight = 15;// px;

  var userScore = times;

  // Painting
  for(var i = 0; i < times.length; i++) {
    // Colore the first bar
    if (i == 0) {
      console.log(i);
      ctx.fillStyle = 'rgb(0, ' + Math.floor(191 - 42.5 * i) + ', ' + Math.floor(255-42.5*i) + ')';
    }

    if (i == 0 && names[0] == 'Вы') {
      console.log(i);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(initialX + indent * i, 270 - times[i] * score - initialY, histogramWidth, times[i] * score);
    ctx.fillStyle = "black";
    ctx.fillText(names[i], initialX + indent * i, 270);
    ctx.fillText(Math.floor(parseInt(userScore[i])), initialX + indent * i, 90);

    // Colore
    if (names[i + 1] == 'Вы') {
      console.log(names[i]);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgb(0, ' + Math.floor(191 - 42.5 * i) + ', ' + Math.floor(255-42.5*i) + ')';
    }
  }

};
