const data = [
  {
    url: '/images/image1.jpg',
    title: 'Ревматологія',
    id: '3',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    url: '/images/image3.jpg',
    title: 'Масаж',
    id: '2',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    url: '/images/image2.jpg',
    title: 'Неврологія',
    id: '1',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
];

const img = document.querySelector('.select-right__img');
const menuList = document.querySelector('.features-menu');
const title = document.querySelector('.select-left__title');
const text = document.querySelector('.select-left__text');
const triangles = Array.from(document.querySelectorAll('.triangle'));

const onLoad = e => {
  img.src = `http://localhost:1234${data[0].url}`;
  title.textContent = data[0].title;
  text.textContent = data[0].text;
};

const onSelect = ({ target, currentTarget }) => {
  if (target === currentTarget) return;
  const selected = data.find(el => el.id === target.id);

  const nodes = Array.from(target.childNodes);
  const canvas = nodes.find(el => el.nodeName === 'CANVAS');
  triangles.map(el => el.classList.remove('visible'));

  if (canvas) {
    canvas.classList.add('visible');
  }

  if (selected) {
    title.textContent = selected.title;
    text.textContent = selected.text;
    img.src = `http://localhost:1234${selected.url}`;
  }
};

window.addEventListener('load', onLoad);
menuList.addEventListener('click', onSelect);
