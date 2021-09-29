let userName = '';

const ref = {
  loginForm: document.getElementById('welcome-form'),
  messagesSection: document.getElementById('messages-section'),
  messagesList: document.getElementById('messages-list'),
  addMessageForm: document.getElementById('add-messages-form'),
  userNameInput: document.getElementById('username'),
  messageContentInput: document.getElementById('message-content'),
};

const login = e => {
  if(!ref.userNameInput.value){
    alert('Please write your login!')
  }else{
    userName = ref.userNameInput.value;
    console.log('ref', ref.loginForm)
    ref.loginForm.classList.remove('show');
    ref.messagesSection.classList.add('show');
  }
};

const addMessage = (author, content) => {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if (author === userName) message.classList.add('message--self');
  if(author === 'ChatBot') message.classList.add('message--bot');

  message.innerHTML = `
      <h3 class="message__author">${userName === author ? 'You' : author}</h3>
      <div class="message__content">
        ${content}
      </div>
    `;
  ref.messagesList.appendChild(message);
};

const sendMessage = e => {
  if(!ref.messageContentInput.value){
    alert('Please write your message!');
  }else{
    addMessage(userName, ref.messageContentInput.value);
  }
};

ref.loginForm.addEventListener('submit', e => {
  e.preventDefault();
  login(e);
});

ref.addMessageForm.addEventListener('submit', e => {
  e.preventDefault();
  sendMessage(e);
});