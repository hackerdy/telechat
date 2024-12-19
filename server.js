// require('dotenv').config();
//   const firebaseConfig = {
//     apiKey: "AIzaSyCtKOzNWd-68I5wg4wHEx_9tQIqmWR0ryo",
//     authDomain: "telechat-3bfaa.firebaseapp.com",
//     databaseURL: "https://telechat-3bfaa-default-rtdb.firebaseio.com",
//     projectId: "telechat-3bfaa",
//     storageBucket: "telechat-3bfaa.firebasestorage.app",
//     messagingSenderId: "1040556157757",
//     appId: "1:1040556157757:web:7f2386944210615cfaf354"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//     const database = firebase.database();
  

  
//   // DOM Elements
//   const messagesContainer = document.getElementById("messages");
//   const messageInput = document.getElementById("message-input");
//   const sendButton = document.getElementById("send-button");
  
//   // Function to render messages
//   function renderMessage(content, sender = "other") {
//     const messageElement = document.createElement("div");
//     messageElement.classList.add("message", sender);
//     messageElement.textContent = content;
//     messagesContainer.appendChild(messageElement);
//     messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
//   }
  
//   // Listen for messages in the database
//   const messagesRef = database.ref("messages");
//   messagesRef.on("child_added", (snapshot) => {
//     const { content, sender } = snapshot.val();
//     renderMessage(content, sender);
//   });
  
//   // Send a new message
//   sendButton.addEventListener("click", () => {
//     const message = messageInput.value.trim();
//     if (message) {
//       const newMessageRef = messagesRef.push();
//       newMessageRef.set({
//         content: message,
//         sender: "user"
//       });
//       messageInput.value = ""; // Clear input
//     }
//   });
  
//   // Allow "Enter" to send messages
//   messageInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault();
//       sendButton.click();
//     }
//   });


