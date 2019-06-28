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
    // the active route :)
  }

  render() {
    // render page
  }
}
