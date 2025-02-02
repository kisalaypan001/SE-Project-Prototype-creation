<!-- home.vue -->
<template>
  <div>
    <Navbar />
    <a href="#" class="styled-link">
      Applications Open now for January 2025 Batch | Applications Close: January 02, 2025
      <button class="button">Apply Now</button>
    </a>
    <div class="share-section">
      <span>Share this page with your friends and family on</span>
    </div>
    <div class="share-section">
      <a href="#"><img src="@/Images/fb.png" alt="Facebook" /></a>
      <a href="#"><img src="@/Images/t.png" alt="Twitter" /></a>
      <a href="#"><img src="@/Images/li.png" alt="LinkedIn" /></a>
      <a href="#"><img src="@/Images/tg.png" alt="Telegram" /></a>
      <a href="#"><img src="@/Images/wa.png" alt="WhatsApp" /></a>
      <a href="#"><img src="@/Images/ig.png" alt="Instagram" /></a>
    </div>
    <div class="container">
      <div class="video-section">
        <iframe width="350" height="197" src="https://www.youtube.com/embed/lEMtlAqlJww"></iframe>
      </div>
      <div class="text-section">
        <h1>
          IIT Madras, India's top technical institute, welcomes you to the
          <span class="text-yellow">world's first 4-year Bachelor of Science (BS) Degree in Data Science and Applications</span>
        </h1>
        <p>MFor the first time, you can work towards an undergraduate degree / diploma from an IIT regardless of your age, location, or academic backgrounds.
          More than 36000 students currently studying with us in the program.</p>
      </div>
    </div>
    <div class="slideshow-container">
      <img src="@/Images/display1.png" alt="Image 1" class="active" />
      <img src="@/Images/display2.png" alt="Image 2" />
      <img src="@/Images/display3.png" alt="Image 3" />
      <img src="@/Images/display4.png" alt="Image 4" />
      <img src="@/Images/display5.png" alt="Image 5" />
    </div>
    <!-- Popup container -->
    <div class="popup" id="aiPopup" v-if="showPopup">
    <button class="close-btn" @click="togglePopup">&times;</button>
    <img src="@/Images/robot.png" alt="AI Assistant">
    <h3>Welcome!</h3>
    <p>Hi there! I’m StudyBuddy! Your AI assistant. I am here to guide you.</p>
    <div class="chat-container">
      <div class="chat-box" v-for="(message, index) in chatMessages" :key="index">
        <span :class="{'user-message': message.user, 'bot-message': !message.user}">{{ message.text }}</span>
      </div>
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Ask me anything..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
  <button class="open-btn" @click="togglePopup">Chat with StudyBuddy</button>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
  mounted() {
    this.startSlideshow();
    // Show popup for new users
    const popup = document.getElementById('aiPopup');
    const closeBtn = document.getElementById('closePopup');

    // Show popup after a slight delay
    setTimeout(() => {
      popup.style.display = 'block';
    }, 1000); // Show after 1 second

    // Close popup on button click
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    
    // Start the slideshow
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      const images = document.querySelectorAll('.slideshow-container img');
      let currentIndex = 0;
      setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 3000);
    },
  },
};
</script>

