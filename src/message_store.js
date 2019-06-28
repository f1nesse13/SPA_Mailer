const user = 'f1nesse@gmail.com';
class Message {
  constructor(from = user, to = '', subject = '', body = '') {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

const MessageStore = {
  getInboxMessages() {
    return messages.inbox;
  },
  getSentMessages() {
    return messages.sent;
  },
  updateDraftField(field, val) {
    messageDraft[field] = val;
  },
  getMessageDraft() {
    return messageDraft;
  },
  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message();
  }
};

let messageDraft = new Message();

let messages = {
  sent: [
    {
      to: 'coe@gmail.com',
      from: 'dla@gmail.com',
      subject: 'test 1 subject',
      body: 'test 1 body'
    },
    {
      to: 'phi@gmail.com',
      from: 'lihan@gmail.com',
      subject: 'test subject',
      body: 'test body'
    }
  ],
  inbox: [
    { from: 'Lla@gmail.com', subject: 'Hello!', body: 'Helloorld' },
    { from: 'death007@gmail', subject: '0wn3d k1D', body: 'jooR goT own3d kiiiiiiiiDD' }
  ]
};

module.exports = MessageStore;
