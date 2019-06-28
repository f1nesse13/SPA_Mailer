const Router = require('./router.js');

window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  router = new Router(content);
  router.start();
  const sideBarItems = Array.from(document.querySelectorAll('.sidebar-nav li'));
  sideBarItems.forEach(li => {
    li.addEventListener('click', e => {
      window.location.hash = li.innerText.toLowerCase();
    });
  });
});
