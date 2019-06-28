const Inbox = require('./Inbox.js');

class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    window.addEventListener('hashchange', () => {
      this.render();
    });
  }

  activeRoute() {
    let route = window.location.hash.substr(1, window.location.hash.length - 1);
    return this.routes[route];
  }

  render() {
    let component = this.activeRoute();
    if (component === undefined) {
      this.node.innerHTML = '';
    } else {
      this.node.innerHTML = '';
      const componentNode = component.render();
      this.node.appendChild(componentNode);
    }
  }
}

module.exports = Router;
