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
      evt.preventDefault();
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      evt.preventDefault();
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

  // перетаскивание предметов

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var clone = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      clone = draggedItem.cloneNode(true);
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
    if (evt.target.tagName.toLowerCase() === 'img' === false && evt.target.hasChildNodes() === false) {
      evt.target.appendChild(clone);
    }
    if (evt.target.tagName.toLowerCase() === 'img' === true) {
      clone = null;
    }
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();
