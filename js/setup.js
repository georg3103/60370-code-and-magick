'use strict';

window.setup = (function () {

  var setupBlock = document.querySelector('.setup');
  var usersBlock = document.querySelector('.setup-similar');

  var removeHiddenClass = function (target) {
    target.classList.remove('hidden');
  };

  var mages = window.data.getMages(4);

  window.data.generateMages(mages);

  removeHiddenClass(usersBlock);

  // Взаимодействие с сайтом

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupBlock.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  };

  var openPopup = function () {
    setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupBlock.classList.add('hidden');
  };

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onPopupEnterPress);

  setupClose.addEventListener('click', closePopup);

  // Изменение состояния персонажа

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireBall = document.querySelector('.setup-fireball-wrap');

  var changeCoat = function () {
    wizardCoat.style.fill = window.util.getRandomArray(window.data.MAGE_COAT_COLORS)[0];
  };

  var changeEyes = function () {
    wizardEyes.style.fill = window.util.getRandomArray(window.data.MAGE_EYE_COLORS)[0];
  };

  var changeFireBall = function () {
    wizardFireBall.style.background = window.util.getRandomArray(window.data.MAGE_FIRE_BALL_COLORS)[0];
  };

  wizardCoat.addEventListener('click', changeCoat);
  wizardEyes.addEventListener('click', changeEyes);
  wizardFireBall.addEventListener('click', changeFireBall);

})();
