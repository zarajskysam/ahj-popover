/* eslint-disable no-use-before-define */
const btn = Array.from(document.querySelectorAll('.btn-toggle'));

const show = () => {
  btn.forEach((item) => {
    item.addEventListener('click', () => {
      if (!check()) {
        createElement(item);
      } else if (item.nextElementSibling && item.nextElementSibling.classList.contains('popover')) {
        deleteAll();
      } else {
        deleteAll();
        createElement(item);
      }
    });
  });
};

function createElement(e) {
  const coords = e.getBoundingClientRect();
  const popover = document.createElement('div');
  popover.innerHTML = '<h3></h3><p></p>';
  popover.classList.add('popover');
  popover.style.width = `${e.getBoundingClientRect().width}px`;
  e.insertAdjacentElement('afterEnd', popover);
  popover.style.bottom = `${coords.top + popover.offsetHeight * 2.5}px`;
  popover.style.left = `${coords.left}px`;
  popover.querySelector('h3').innerText = `${e.getAttribute('title')}`;
  popover.querySelector('p').innerText = `${e.getAttribute('data-content')}`;
}

function check() {
  if (document.querySelector('.popover')) return true;
  return false;
}

function deleteAll() {
  if (check()) {
    document.querySelector('.popover').parentNode.removeChild(document.querySelector('.popover'));
  }
}

show();
