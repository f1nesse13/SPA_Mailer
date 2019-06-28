const MessageStore = require('./message_store.js');

const Inbox = {
  render() {
    const newUl = document.createElement('ul');
    newUl.className = 'messages';
    const messages = MessageStore.getInboxMessages();
    messages.forEach(message => {
      const newMessage = this.renderMessage(message);
      newUl.appendChild(newMessage);
    });
    return newUl;
  },

  renderMessage(message) {
    const messageItem = document.createElement('li');
    messageItem.addClass = 'message';
    messageItem.innerHTML = `<span class='from'>${message.from}</span> <span class='subject'>${message.subject}</span> <span class='body'>${message.body}</span>`;
    return messageItem;
  }
};

module.exports = Inbox;
