addEventListener('load', () => {
  const button = document.querySelector('.footer__button');
  const fillIn = document.querySelector('.footer__fill-in');
  const items = document.querySelector('.items');

  function addElement() {
    const itemsList = document.createElement('li');
    itemsList.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.textContent = fillIn.value;

    const itemDelete = document.createElement('button');
    itemDelete.setAttribute('class', 'item__delete');
    itemDelete.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    itemDelete.addEventListener('click', () => {
      items.removeChild(itemsList);
    });

    itemsList.appendChild(itemName);
    itemsList.appendChild(itemDelete);

    return itemsList;
  }

  button.addEventListener('click', () => {
    const itemNew = addElement();
    if (!fillIn.value.trim()) {
      alert('내용을 입력해주세요!');
    } else {
      items.appendChild(itemNew);
      fillIn.value = '';
    }
  });
});
