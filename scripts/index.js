const inputSelect = document.querySelector('.order__form-select_opened');
const optionSelect = document.querySelector('.order__input-group');
const listInputs = document.querySelectorAll('.order__input-item');
const hiddenInput = document.querySelector('.order__select-input-hidden');
const sliderValue = document.querySelector('.order__progress-line');
const sliderCount = document.querySelector('.order__count');

const menuButton = document.querySelector('.header__menu-button');
const menuList = document.querySelector('.header__menu');

sliderCount.textContent = sliderValue.value;

sliderValue.oninput = function() {

  let value = sliderValue.value;
  sliderCount.textContent = value;
}

function activeSelect() {
  inputSelect.classList.toggle('order__form-select_type_opened');
  optionSelect.classList.toggle('order__input-group_opened');
};

function deleteActiveSelect() {
  inputSelect.classList.remove('order__form-select_type_opened');
  optionSelect.classList.remove('order__input-group_opened');
}

listInputs.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.stopPropagation();
    inputSelect.textContent = item.textContent;
    hiddenInput.value = item.textContent;
    deleteActiveSelect()
  })
});

inputSelect.addEventListener('click', activeSelect);

document.addEventListener('click', (event) => {
  if (event.target !== inputSelect) {
    deleteActiveSelect();
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab' || event.key === 'Escape') {
    deleteActiveSelect();
  }
})

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('header__menu-button_type_opened');
  menuList.classList.toggle('header__menu_type_mobile');
})