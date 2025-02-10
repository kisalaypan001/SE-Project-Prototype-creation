<template>
  <!-- Sidebar -->
  <div class="sidebar">
        <a href="#"><img src="@/Images/Icon-01.svg" alt="Icon 1"></a>
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
    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
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
      <router-link to="/coursespage" >VIEW ALL COURSES</router-link>
    </div>

    <!-- Peer Study Group Recommendation -->
    <div class="peer-study-group">
      <h2>Peer Study Group Recommendations</h2>
      <ul>
        <li>Group 1: Python Enthusiasts</li>
        <li>Group 2: Data Science Learners</li>
        <li>Group 3: AI Innovators</li>
      </ul>
    </div>
  </div>
</div>
  <!-- Footer -->
  <div class="footer">
    <p>&copy; 2025 StudyBuddy AI Assistant. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'StudentDashboard',
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