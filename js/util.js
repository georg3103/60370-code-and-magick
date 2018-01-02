'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var randomBoolean = function () {
    return Math.random() >= 0.5;
  };

  var getRandomArray = function (array) {
    return array.slice().sort(function () {
      return 0.5 - Math.random();
    }).filter(randomBoolean);
  };

  return {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    getRandomArray: getRandomArray
  };

})();
