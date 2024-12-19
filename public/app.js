const tg = window.Telegram.WebApp;

tg.expand();


const user = tg.initDataUnsafe?.user || {};


document.getElementById('welcome').insertAdjacentHTML(
    'afterbegin',
    `<h1>Welcome, ${user.first_name || 'User'}!</h1>
    ${user.photo_url
      ? `<img src="${user.photo_url}" alt="${user.first_name}'s profile picture">`
      : `<p>No profile picture available.</p>`}`
);

