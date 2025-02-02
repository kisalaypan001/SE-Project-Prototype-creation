<template>
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="image-sidebar">
          <img src="@/Images/sidebar.jpg" alt="Sidebar Image" />
        </div>
      </div>
  
      <!-- Content -->
      <div class="content">
        <h1>My current courses</h1>
        <div class="course-card">
          <h2>Programming in Python</h2>
          <p>Course Description</p>
          <router-link to="/python" class="course-link">Go to Course</router-link>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer">
        <p>&copy; 2025 StudyBuddy AI Assistant. All rights reserved.</p>
      </div>
  </template>
  
  <script>
  export default {
    name: 'CoursesPage',
    methods: {
      logout() {
        // Add logout functionality here, e.g., clear user session or navigate to login page
        console.log('User logged out');
      }
    }
  }
  </script>
  <style scoped>
  /* General Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  </style>