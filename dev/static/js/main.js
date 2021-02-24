(function () {
  'use strict';
  const getSimplePhoneMask = function () {
    const simplePhones = document.querySelectorAll('._simple-phone');
    const maskOptions = {
      mask: '+{7} (000) 000-00-00',
    };
    for (let i = 0; i < simplePhones.length; i++) {
      const mask = IMask(simplePhones[i], maskOptions);
      simplePhones[i].addEventListener('click', () => {
        if (!simplePhones[i].value) {
          simplePhones[i].value = '+7 ';
          mask.updateValue();
        }
      });
      simplePhones[i].addEventListener('focus', () => {
        if (!simplePhones[i].value) {
          simplePhones[i].value = '+7 ';
          mask.updateValue();
        }
      });
      simplePhones[i].addEventListener('blur', () => {
        if (simplePhones[i].value === '+7 ') {
          simplePhones[i].value = '';
          mask.updateValue();
        }
      });
    }
  };
  getSimplePhoneMask();
})();
