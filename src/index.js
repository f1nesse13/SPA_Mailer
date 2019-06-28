const Router = require('./router.js');
const Inbox = require('./Inbox.js');

const routes = {
  inbox: Inbox
};
window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  const router = new Router(content, routes);
  router.start();
  const sideBarItems = Array.from(document.querySelectorAll('.sidebar-nav li'));
  sideBarItems.forEach(li => {
    li.addEventListener('click', e => {
      window.location.hash = li.innerText.toLowerCase();
    });
  });
});
