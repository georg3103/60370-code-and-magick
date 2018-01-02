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

  var MAGE_FIRE_BALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setupBlock = document.querySelector('.setup');
  var usersBlock = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setupBlock.querySelector('.setup-similar-list');

  var removeHiddenClass = function (target) {
    target.classList.remove('hidden');
  };

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

  // Взаимодействие с сайтом

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupBlock.querySelector('.setup-close');

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
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

  var userNameInput = setupBlock.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    }
    if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    }
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // решение валидации для Edge (не поддерживает атрибут minlength)

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  // Изменение состояния персонажа

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireBall = document.querySelector('.setup-fireball-wrap');

  var changeCoat = function () {
    wizardCoat.style.fill = getRandomArray(MAGE_COAT_COLORS)[0];
  };

  var changeEyes = function () {
    wizardEyes.style.fill = getRandomArray(MAGE_EYE_COLORS)[0];
  };

  var changeFireBall = function () {
    wizardFireBall.style.background = getRandomArray(MAGE_FIRE_BALL_COLORS)[0];
  };

  wizardCoat.addEventListener('click', changeCoat);
  wizardEyes.addEventListener('click', changeEyes);
  wizardFireBall.addEventListener('click', changeFireBall);

})();
