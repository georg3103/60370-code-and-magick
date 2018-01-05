'use strict';

window.data = (function () {

  var MAGE_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var MAGE_LASTNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var MAGE_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var MAGE_EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var MAGE_FIRE_BALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderMage = function (mage) {
    var mageElement = similarWizardTemplate.cloneNode(true);

    mageElement.querySelector('.setup-similar-label').textContent = mage.name;
    mageElement.querySelector('.wizard-coat').style.fill = mage.colorCoat;
    mageElement.querySelector('.wizard-eyes').style.fill = mage.eye;

    return mageElement;
  };


  return {
    renderMage: renderMage,
    MAGE_NAMES: MAGE_NAMES,
    MAGE_LASTNAMES: MAGE_LASTNAMES,
    MAGE_COAT_COLORS: MAGE_COAT_COLORS,
    MAGE_EYE_COLORS: MAGE_EYE_COLORS,
    MAGE_FIRE_BALL_COLORS: MAGE_FIRE_BALL_COLORS
  };

})();
