document.addEventListener("DOMContentLoaded", () => {
    // Fetch user data from Telegram Web App API
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user || {}; // Get user object from Telegram Web App
  
    // Determine greeting based on time
    const currentHour = new Date().getHours();
    let greeting = "Good day";
    if (currentHour < 12) greeting = "Good morning";
    else if (currentHour >= 12 && currentHour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";
  
    // Display greeting with user's first name
    const greetingElement = document.getElementById("greeting");
    if (user.first_name) {
      greetingElement.textContent = `${greeting}, ${user.first_name}!`;
    } else {
      greetingElement.textContent = greeting;
    }
  
    // Display user's profile picture
    const userPhotoElement = document.getElementById("user-photo");
    if (user.photo_url) {
      userPhotoElement.src = user.photo_url;
    } else {
      
      userPhotoElement.src = "default-user.png"; // Replace with your default image path
    }
  });
  