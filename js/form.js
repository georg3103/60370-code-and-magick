'use strict';

window.form = (function () {

  var setupBlock = document.querySelector('.setup');
  var userNameInput = document.querySelector('.setup-user-name');

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

  // проверка отправки формы

  var form = document.querySelector('.setup-submit');
  form.addEventListener('click', function (evt) {
    console.log('работает');
    // window.backend.upload(new FormData(form), window.backend.successHandler, window.backend.errorHandler);
    window.backend.upload(new FormData(form), function () {
      setupBlock.classList.add('hidden');
    }, window.backend.errorHandler);
    setupBlock.classList.add('hidden');
    evt.preventDefault();
  });

})();
