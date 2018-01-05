'use strict';

window.colorize = (function () {

  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var fillElement = function (element, color) {
    element.style.fill = window.util.getRandomArray(color)[0];
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = window.util.getRandomArray(color)[0];
  };

  var colorizeElement = function (element, colorArray, callback) {
    if (typeof callback === 'function') {
      callback(element, colorArray);
    }
  };

  var colorizeCoat = function () {
    colorizeElement(coat, window.data.MAGE_COAT_COLORS, fillElement);
  };

  var colorizeEye = function () {
    colorizeElement(eyes, window.data.MAGE_EYE_COLORS, fillElement);
  };

  var colorizeFireball = function () {
    colorizeElement(fireball, window.data.MAGE_FIRE_BALL_COLORS, changeElementBackground);
  };

  coat.addEventListener('click', colorizeCoat);
  eyes.addEventListener('click', colorizeEye);
  fireball.addEventListener('click', colorizeFireball);

})();
