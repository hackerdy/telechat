document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Expand the web app interface
  
    const user = tg.initDataUnsafe?.user || {};
  
    const welcomeElement = document.getElementById('welcome');
    if (welcomeElement) {
      welcomeElement.insertAdjacentHTML(
        'afterbegin',
        `<h1>Welcome, ${user.first_name || 'User'}!</h1>
        ${user.photo_url
          ? `<img src="${user.photo_url}" alt="${user.first_name}'s profile picture" style="width: 100px; border-radius: 50%;">`
          : `<p>No profile picture available.</p>`}`
      );
    } else {
      console.error("The #welcome element is not found in the DOM.");
    }
  
    const currentHour = new Date().getHours();
    let greeting = "Good day";
    if (currentHour < 12) greeting = "Good morning";
    else if (currentHour >= 12 && currentHour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";
  
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.textContent = user.first_name
        ? `${greeting}, ${user.first_name}!`
        : greeting;
    } else {
      console.error("The #greeting element is not found in the DOM.");
    }
  });
  