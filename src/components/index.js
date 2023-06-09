import('../pages/index.css');
import './menu';
import {scrollToAnchors} from './navigation';
import('./gallery')
import {enableValidation, hasInvalidInput} from './validate.js';
export const config = {
  formSelector: '.subscribe__form',
  inputSelector: '.form-input',
  submitButtonSelector: '.subscribe__submit',
  inactiveButtonClass: 'subscribe__submit_inavailible',
  inputErrorClass: 'subscribe__input_error',
  errorClass: 'subscribe__error_visible',
  errorElementSelector: '.subscribe__error'
};

document.addEventListener('DOMContentLoaded', () => {
  enableValidation(config);
});

const buttonElement = document.querySelector(config.submitButtonSelector);
const formElement = document.querySelector(config.formSelector);
const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
const consentCheckbox = document.querySelector(config.formSelector + ' input[name="consent"]');


buttonElement.addEventListener('click', () => {
  if (hasInvalidInput(inputList) || !consentCheckbox.checked) {
    evt.preventDefault();
  } else {
    formElement.submit();
  }
});

formElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    if (hasInvalidInput(inputList) || !consentCheckbox.checked) {
      evt.preventDefault();
    } else {
      formElement.submit();
    }
  }
});


scrollToAnchors();