const Inbox = {
  render() {
    const newUl = document.createElement('ul');
    newUl.className = 'messages';
    newUl.innerHTML = 'Inbox message';
    return newUl;
  }
};

module.exports = Inbox;
