<template>

  
      <!-- Main Container -->
      <div class="main-container-python">
              <!-- Sidebar -->
      <div class="sidebar">
        <a href="#" class="selected-icon"><img src="@/Images/sidebar-modules-selected.svg" alt="Icon 1"></a>
        <a href="#"><img src="@/Images/sidebar-grades.svg" alt="Icon 2"></a>
    </div>
        <!-- Modules -->
        <div class="sidebar-python">
          <h2>Modules</h2>
          <ul>
            <li class="module active">
              <span>Course Introduction</span>
            </li>
            <li class="module">
              <span>Course Project</span>
            </li>
            <li class="module">
              <span>Week 1</span>
              <ul class="sub-modules">
                <li class="sub-module active">
                  <span>1.1 Introduction to Replit</span>
                  <span class="tag">Video</span>
                </li>
                <li class="sub-module">
                  <span>1.2 More on Replit, print and Common Mistakes</span>
                  <span class="tag">Video</span>
                </li>
                <li class="sub-module">
                    <router-link to="/coding" class="module">
                    <span>PA1.1: Programming Assignment 1.1 - Not Graded</span>
                    </router-link>

                  <span class="tag">Assignment</span>
                </li>
                <li class="sub-module">
                  <span>1.3 A Quick Introduction to Variables</span>
                  <span class="tag">Video</span>
                </li>
              </ul>
            </li>
            <li class="study-mat">
              <span>Study Material Recommendation</span>
              <img 
                src="@/Images/study-material.png" 
                alt="AI Assistant" 
                width="150px" 
                @click="toggleStudyRecommendations" 
                class="peer-group-img cursor-pointer" 
              />
            </li>
          </ul>
        </div>
  
        <!-- Content -->
        <div class="content-python">
          <div class="video-details">
            <h1>1.1 Introduction to Replit</h1>
            <p>Week 1: Topic: Introduction to Replit</p>
            <div class="rating">
              <span>★★★★★ - / 5 (0 reviews)</span> |
              <a href="#" style="color: #007acc;">Submit a review</a>
            </div>
          </div>
  
          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/NgZZ0HIUqbs?si=NhB85e4zcOazAeTt"
              title="YouTube video"
            ></iframe>
          </div>
        </div>
  
        <!-- Right Panel -->
        <div class="right-panel">
  
          <div class="transcript">
            <h3>Lecture Transcript</h3>
            <p>
              Topic: Introduction to Replit" IIT Madras welcomes you to the
              world’s first BSc Degree program in Programming and Data Science.
              This program was designed for students and working professionals
              from various educational backgrounds and different age groups to
              give them an opportunity to study from IIT Madras without having to
              write the JEE. Through our online programs, we help our learners to
              get access to a world-class curriculum in Data Science and
              Programming...
            </p>
          </div>
        </div>
             <!-- Popup -->
             <div v-if="isPopupOpen" class="overlay">
      <div class="popup_2">
        <button @click="toggleStudyRecommendations" class="close-btn_1">✖</button>
        <h2 class="text-xl font-semibold mb-4">Study Material Recommendation</h2>
        <p>Here you can display recommended study materials...</p>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '', // For binding input with the search functionality
        isPopupOpen: false
      };
    },
    methods: {
      // Handles AI search query
      searchAI() {
        alert('Searching AI for: ' + this.query);
      },
      // Logout function (for demonstration, this can be extended)
      logout() {
        console.log('User logged out');
        // Perform logout logic (e.g., redirect, clear session)
      },
      toggleStudyRecommendations() {
      this.isPopupOpen = !this.isPopupOpen;
      }
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  </style>
  