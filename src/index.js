const Router = require('./router.js');

window.addEventListener('DOMContentLoaded', () => {
  let sideBarLi = Array.from(document.querySelectorAll('.sidebar-nav li'));

  sideBarLi.forEach(li => {
    li.addEventListener('click', e => {
      window.location.hash = li.innerText.toLowerCase();
    });
  });
});
