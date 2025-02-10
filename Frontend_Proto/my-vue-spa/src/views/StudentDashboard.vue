<template>
  <div>
    <!-- Sidebar -->
    <div class="sidebar">
        <a href="/coursespage"><img src="@/Images/Icon-01.svg" alt="Icon 1"></a>
        <a href="#"><img src="@/Images/Icon-02.svg" alt="Icon 2"></a>
        <a href="#"><img src="@/Images/Icon-03.svg" alt="Icon 3"></a>
        <a href="#"><img src="@/Images/Icon-04.svg" alt="Icon 4"></a>
        <a href="#"><img src="@/Images/Icon-05.svg" alt="Icon 5"></a>
        <a href="#"><img src="@/Images/Icon-06.svg" alt="Icon 6"></a>
        <a href="#"><img src="@/Images/Icon-07.svg" alt="Icon 7"></a>
        <a href="#"><img src="@/Images/Icon-08.svg" alt="Icon 8"></a>
        <a href="#"><img src="@/Images/Icon-09.svg" alt="Icon 9"></a>
        <a href="#"><img src="@/Images/Icon-10.svg" alt="Icon 10"></a>
        <a href="#"><img src="@/Images/Icon-11.svg" alt="Icon 11"></a>
    </div>

    <!-- Main Content -->
    <div class="main-content_1">
      <!-- Search Bar with AI Assistant -->
      <div class="search-bar">
        <input type="text" v-model="userInput" placeholder="Search courses..." @click="showPopup = true" @keyup.enter="sendMessage" />
      </div>
      
      <!-- Chatbot Popup below Search Bar -->
      <div  v-if="showPopup" class="overlay_1">
        <div class="popup_1">
        <div class="chat-container_1">
        <button class="close-btn_1" @click="togglePopup">&times;</button>
        <h3>Welcome!</h3>
        <p>Hi there! I’m StudyBuddy! Your AI assistant. I am here to guide you.</p>
        <img src="@/Images/robot.png" alt="AI Assistant">
        <div v-for="(message, index) in chatMessages" :key="index">
  <div v-if="message.user" class="chat-box_1">
    <span class="user-message_1">{{ message.text }}</span>
  </div>
  <div v-else class="chat-box_2">
    <span class="bot-message_1">{{ message.text }}</span>
  </div>
</div>

        </div>
      </div>
      </div>
      
      <div class="sub-content">
        <!-- Latest Updates -->
        <div class="latest-updates">
          <h2>Latest Updates</h2>
          <ul>
            <li>Update 1: New course on Data Science available now!</li>
            <li>Update 2: Python course has new assignments.</li>
            <li>Update 3: Join the upcoming webinar on AI.</li>
          </ul>
        </div>

        <!-- Current Courses -->
        <div class="content_1">
          <h1>My current courses</h1>
          <div class="course-card_1">
            <h2>Programming in Python</h2>
            <p>Course Description</p>
            <router-link to="/python" class="button">Go to Course</router-link>
          </div>
          <div class="course-card_1">
            <h2>English for DS</h2>
            <p>Course Description</p>
            <router-link to="/english" class="button">Go to Course</router-link>
          </div>
          <router-link to="/coursespage">VIEW ALL COURSES</router-link>
        </div>

        <!-- Peer Study Group Recommendation -->
        <div>
      <img src="@/Images/peer-group.png" alt="AI Assistant" width="150px" @click="togglePeerRecommendations" class="peer-group-img" />
      <div  class="peer-study-group" v-if="showPeerRecommendations" >
        <h2>Peer Study Group Recommendations</h2>
        <ul>
          <li>Peer 1: Kisalay</li>
          <li>Peer 2: Digpal</li>
          <li>Peer 3: Tarun</li>
        </ul>
      </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>&copy; 2025 StudyBuddy AI Assistant. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      userInput: '',
      chatMessages: [],
      showPeerRecommendations: false
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    sendMessage() {
      if (this.userInput.trim() === '') return;
      this.chatMessages.push({ text: this.userInput, user: true });
      this.getBotResponse(this.userInput);
      this.userInput = '';
    },
    getBotResponse(input) {
      setTimeout(() => {
        this.chatMessages.push({ text: `You asked: ${input}`, user: false });
      }, 1000);
    },
    togglePeerRecommendations() {
      this.showPeerRecommendations = !this.showPeerRecommendations;
    }
  }
};
</script>


