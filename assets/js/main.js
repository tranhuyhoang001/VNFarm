// Login modal
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeLoginModalBtn = document.getElementsByClassName('login-box__close-btn')[0];

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

closeLoginModalBtn.onclick = function () {
  loginModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
};

// "Đăng ký đại lý" modal
const registerAgentModal = document.getElementById('registerAgentModal');
const registerAgentBtn = document.getElementById('registerAgentBtn');
const closeRegisterAgentModalBtn = document.getElementsByClassName('register-agent__close-btn')[0];

registerAgentBtn.onclick = function () {
  registerAgentModal.style.display = 'block';
};

closeRegisterAgentModalBtn.onclick = function () {
  registerAgentModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == registerAgentModal) {
    registerAgentModal.style.display = 'none';
  }
};

// Change tab "Đăng nhập/Đăng ký"
const listLoginTab = document.querySelectorAll('.login-box__tab');
const listLoginTabContent = document.querySelectorAll('.login-box__tab-content');

listLoginTab.forEach((loginTab, index) => {
  const loginTabContent = listLoginTabContent[index];

  loginTab.onclick = function () {
    document.querySelector('.login-box__tab.active').classList.remove('active');
    document.querySelector('.login-box__tab-content.active').classList.remove('active');

    this.classList.add('active');
    loginTabContent.classList.add('active');
  };
});

// Change tab "Tài khoản của tôi"
const listProfileTab = document.querySelectorAll('.profile__tab');
const listProfileTabContent = document.querySelectorAll('.profile__tab-content');

listProfileTab.forEach((profileTab, index) => {
  const profileTabContent = listProfileTabContent[index];

  profileTab.onclick = function () {
    document.querySelector('.profile__tab.active').classList.remove('active');
    document.querySelector('.profile__tab-content.active').classList.remove('active');

    this.classList.add('active');
    profileTabContent.classList.add('active');
  };
});

// Change tab "Tình trạng đơn hàng"
const listOrderTab = document.querySelectorAll('.order-status__tab');
const listOrderTabContent = document.querySelectorAll('.order-status__tab-content');

listOrderTab.forEach((orderTab, index) => {
  const orderTabContent = listOrderTabContent[index];

  orderTab.onclick = function () {
    document.querySelector('.order-status__tab.active').classList.remove('active');
    document.querySelector('.order-status__tab-content.active').classList.remove('active');

    this.classList.add('active');
    orderTabContent.classList.add('active');
  };
});
