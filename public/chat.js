document.addEventListener("DOMContentLoaded", () => {
  // Initialize Telegram Web App
  const tg = window.Telegram.WebApp;
  const user = tg.initDataUnsafe?.user || {};

  // Determine and set greeting
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12
    ? "Good morning"
    : currentHour < 18
    ? "Good afternoon"
    : "Good evening";
  const greetingElement = document.getElementById("greeting");
  greetingElement.innerHTML = user.first_name
    ? `${greeting}, <br> ${user.first_name}!`
    : greeting;

  // Set user photo
  const userPhotoElement = document.getElementById("user-photo");
  userPhotoElement.src = user.photo_url || "default-user.png";

  // Initialize Firebase
  const messagesContainer = document.getElementById("messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtKOzNWd-68I5wg4wHEx_9tQIqmWR0ryo",
    authDomain: "telechat-3bfaa.firebaseapp.com",
    databaseURL: "https://telechat-3bfaa-default-rtdb.firebaseio.com",
    projectId: "telechat-3bfaa",
    storageBucket: "telechat-3bfaa.firebasestorage.app",
    messagingSenderId: "1040556157757",
    appId: "1:1040556157757:web:7f2386944210615cfaf354",
  };
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Render a message
  function renderMessage(content, sender, senderName = "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = `
      <strong>${senderName}</strong>
      <p>${content}</p>
    `;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Listen for new messages in the database
  const messagesRef = database.ref("messages");
  messagesRef.on("child_added", (snapshot) => {
    const { content, sender, senderName } = snapshot.val();
    renderMessage(content, sender, senderName);
  });

  // Send a new message
  sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
      messagesRef.push({
        content: message,
        sender: user.id || "unknown",
        senderName: user.first_name || "Anonymous",
        timestamp: Date.now(),
      });
      messageInput.value = "";
    }
  });

  // Allow "Enter" key to send messages
  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendButton.click();
    }
  });
});
