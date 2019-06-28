class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    document.addEventListener('hashchange', e => {
      this.render();
    });
  }

  activeRoute() {
    return window.location.hash.substr(1, window.location.hash.length - 1);
  }

  render() {
    this.node.innerHtml = '';
    const $p = document.createElement('p');
    $p.innerHTML = this.activeRoute();
    this.node.appendChild($p);
  }
}

module.exports = Router;
