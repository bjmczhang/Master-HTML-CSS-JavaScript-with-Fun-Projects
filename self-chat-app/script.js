// 1. User Toggle

const img = document.querySelector('.chat-input img');
const sysTime = document.querySelector('.topbar-left');
const currentTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

sysTime.innerHTML = currentTime;

img.addEventListener('click', () => {
  img.src = img.src.includes('user1')
    ? './images/user2.jpg'
    : './images/user1.jpg';
});

// 2. Send Message Function

const btn = document.querySelector('#btn');
const txt = document.querySelector('#txt');

const sendMsg = () => {
  const value = txt.value;

  const chatHtml = `<div class="chat-user ${
    img.src.includes('user1') ? 'user1' : 'user2'
  }">
      <div class="user-img">
        <img src="./images/${
          img.src.includes('user1') ? 'user1' : 'user2'
        }.jpg" alt="" />
      </div>
      <div class="user-msg">
        <p>${value}</p>
        <span class="time">${currentTime}</span>
      </div>
    </div>`;

  const chats = document.querySelector('.chats');
  const chatPage = document.querySelector('.chat-page');

  if (value !== '') {
    chats.innerHTML += chatHtml;
    txt.value = '';
    txt.focus();

    // Auto Scroll to Page Bottom
    chatPage.scrollTop = chatPage.scrollHeight - chatPage.clientHeight;
  }
};

btn.addEventListener('click', () => {
  sendMsg();
});

// Send Message upon Pressing Enter

txt.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    // Enter's keyCode is 13
    sendMsg();
  }
});
