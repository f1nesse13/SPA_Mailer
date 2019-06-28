const MessageStore = require('./message_store.js');

const Sent = {
  render() {
    const newUl = document.createElement('ul');
    newUl.className = 'messages';
    const messages = MessageStore.getSentMessages();
    messages.forEach(message => {
      const newMessage = this.renderMessage(message);
      newUl.appendChild(newMessage);
    });
    return newUl;
  },

  renderMessage(message) {
    const messageItem = document.createElement('li');
    messageItem.addClass = 'message';
    messageItem.innerHTML = `<span class='to'>To: ${message.to}</span> <span class='subject'>Subject: ${message.subject}</span> <span class='body'>${message.body}</span>`;
    return messageItem;
  }
};

module.exports = Sent;
