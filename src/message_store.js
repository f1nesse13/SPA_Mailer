const Message {
  constructor(from="", to="", subject="", body="") {
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
    messages[field] = val
  },
  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message()
  }
};

let messageDraft = new Message()

let messages = {
  sent: [
    {
      to: 'Joe@gmail.com',
      from: 'Layla@gmail.com',
      subject: 'I love you',
      body: 'I love you so much!'
    },
    {
      to: 'phi@gmail.com',
      from: 'lihan@gmail.com',
      subject: 'Important Stuff',
      body: 'This is important - imagine its important please!'
    }
  ],
  inbox: [
    { from: 'Layla@gmail.com', subject: 'I love you too!', body: 'I love you so much!' },
    { from: 'death007@gmail', subject: '0wn3d k1D', body: 'jooR goT own3d kiiiiiiiiDD' }
  ]
};

module.exports = MessageStore;
