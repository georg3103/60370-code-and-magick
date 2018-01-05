'use strict';

window.backend = (function () {

  var setupBlock = document.querySelector('.setup');
  var usersBlock = document.querySelector('.setup-similar');
  var similarListElement = setupBlock.querySelector('.setup-similar-list');

  var removeHiddenClass = function (target) {
    target.classList.remove('hidden');
  };

  var postURL = 'https://js.dump.academy/code-and-magick';
  var loadURL = 'https://js.dump.academy/code-and-magick/data';

  var setup = function (onSuccess, onError) {
    debugger;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          onError('Все четко!');
          break;
        case 400:
          onError('Неверный запрос');
          break;
        case 401:
          onError('Пользователь не авторизован');
          break;
        case 404:
          onError('Ничего не найдено');
          break;

        default:
          onError(xhr.status + ': ' + xhr.statusText);
      }

    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 3000; // 3s

    return xhr;
  };

  var upload = function (data, onSuccess, onError) {
    var xhr = setup(onSuccess, onError);

    xhr.open('POST', postURL);
    xhr.send(data);
  };

  var load = function (onSuccess, onError) {
    var xhr = setup(onSuccess, onError);

    xhr.open('GET', loadURL);
    xhr.send();
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(window.data.renderMage(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    removeHiddenClass(usersBlock);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);

    setTimeout(function () {
      node.remove();
    }, 3000);
  };

  return {
    upload: upload,
    load: load,
    successHandler: successHandler,
    errorHandler: errorHandler
  };

})();
