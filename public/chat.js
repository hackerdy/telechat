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
      greetingElement.innerHTML = `${greeting}, <br> ${user.first_name}!`;
    } else {
      greetingElement.innerHTML = greeting;
    }
  
    // Display user's profile picture
    const userPhotoElement = document.getElementById("user-photo");
    if (user.photo_url) {
      userPhotoElement.src = user.photo_url;
    } else {
      
      userPhotoElement.src = "default-user.png"; // Replace with your default image path
    }
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    // Function to add a message to the chat
    function addMessage(content, sender = "user") {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = content;
      messagesContainer.appendChild(messageElement);
  
      // Scroll to the bottom of the messages
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Event listener for the send button
    sendButton.addEventListener("click", () => {
      const message = messageInput.value.trim();
      if (message) {
        addMessage(message, "user"); // Add the user's message
        messageInput.value = ""; // Clear the input field
  
        // Simulate a response from the "other" side
        setTimeout(() => {
          addMessage("This is an auto-reply!", "other");
        }, 1000);
      }
    });
  
    // Allow sending messages with the Enter key
    messageInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendButton.click();
      }
    });
  });
  