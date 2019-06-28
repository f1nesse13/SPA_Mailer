const Router = require('./router.js');
const Inbox = require('./Inbox.js');
const Sent = require('./sent.js');
const Compose = require('./Compose.js');

const routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
};
window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  const router = new Router(content, routes);
  router.start();
  window.location.hash = '#inbox';
  const sideBarItems = Array.from(document.querySelectorAll('.sidebar-nav li'));
  sideBarItems.forEach(li => {
    li.addEventListener('click', () => {
      window.location.hash = li.innerText.toLowerCase();
    });
  });
});
