const MessageStore = require('./message_store.js');

const Compose = {
  render() {
    const div = document.createElement('div');
    div.addClass = 'new-message';
    div.innerHTML = this.renderForm();
    div.addEventListener('change', e => {
      let target = e.target;
      MessageStore.updateDraftField(target.name, target.value);
    });
    div.addEventListener('submit', e => {
      e.preventDefault();
      MessageStore.sendDraft();
      window.location.hash = '#inbox';
    });
    return div;
  },

  renderForm() {
    const messageDraft = MessageStore.getMessageDraft();
    const form = `<p class='new-message-header'>New Message</p>
  <form class='compose-form'>
    <input type='text' name='to' value='${messageDraft.to}' placeholder='Recipient'>
    
    <input type='text' name='subject' value='${messageDraft.subject}' placeholder='Subject'>
    
    <textarea name='body' rows='20'>${messageDraft.body}</textarea>
    
    <button class='btn btn-primary submit-message' type='submit'>Send</button>
  </form>`;
    return form;
  }
};

module.exports = Compose;
