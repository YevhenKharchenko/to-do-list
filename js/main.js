import trashIcon from '../images/Trash.svg';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const list = document.querySelector('.list');
const formBtn = document.querySelector('.form-btn');

form.addEventListener('submit', onFormBtnClick);

function onFormBtnClick(event) {
  event.preventDefault();

  if (formInput.value) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    const itemDeleteBtn = document.createElement('button');
    itemDeleteBtn.classList.add('item-delete-btn');
    listItem.textContent = formInput.value;
    const deleteBtnIcon = document.createElement('img');
    deleteBtnIcon.setAttribute('src', trashIcon);
    deleteBtnIcon.classList.add('delete-btn-icon');
    itemDeleteBtn.append(deleteBtnIcon);
    listItem.append(itemDeleteBtn);
    list.append(listItem);
    form.reset();

    itemDeleteBtn.addEventListener('click', onItemDeleteBtn);

    function onItemDeleteBtn() {
      listItem.remove();
    }
  }
}
