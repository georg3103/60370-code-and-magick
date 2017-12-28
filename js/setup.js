'use strict';

window.setup = (function () {
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

  var setupBlock = document.querySelector('.setup');
  var usersBlock = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setupBlock.querySelector('.setup-similar-list');

  var removeHiddenClass = function (target) {
    target.classList.remove('hidden');
  };

  removeHiddenClass(setupBlock);

  var randomBoolean = function () {
    return Math.random() >= 0.5;
  };

  var getRandomArray = function (array) {
    return array.slice().sort(function () {
      return 0.5 - Math.random();
    }).filter(randomBoolean);
  };

  var getMages = function (mageNumber) {
    var mageArray = [];

    for (var i = 0; i < mageNumber; i++) {
      mageArray.push({});

      mageArray[i].name = getRandomArray(MAGE_NAMES)[i] + ' ' + getRandomArray(MAGE_LASTNAMES)[i];
      mageArray[i].coat = getRandomArray(MAGE_COAT_COLORS)[i];
      mageArray[i].eye = getRandomArray(MAGE_EYE_COLORS)[i];
    }
    return mageArray;
  };

  var mages = getMages(4);

  var renderMage = function (mage) {
    var mageElement = similarWizardTemplate.cloneNode(true);

    mageElement.querySelector('.setup-similar-label').textContent = mage.name;
    mageElement.querySelector('.wizard-coat').style.fill = mage.coat;
    mageElement.querySelector('.wizard-eyes').style.fill = mage.eye;

    return mageElement;
  };

  var generateMages = function (mageList) {
    var fragment = document.createDocumentFragment();

    mageList.forEach(function (element) {
      fragment.appendChild(renderMage(element));
    });
    similarListElement.appendChild(fragment);
  };

  generateMages(mages);

  removeHiddenClass(usersBlock);

})();
