<template>
    <div class="main-container">
      <!-- Left White Container -->
      <div class="left-container">
        <h2>Sign-In</h2>
        <p>Sign in using your email and password to access your dashboard.</p>
        <form @submit.prevent="handleSubmit">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign In</button>
        </form>
        <router-link to="/signup" class="sign-up-link">Don't have an account? Sign up here</router-link>
      </div>

      <!-- Right Announcements Section -->
      <div class="right-container">
        <h2>Latest Updates / Announcements</h2>

        <div class="announcement">
          <span>Quiz Dates for Jan 2025 Term</span>
          <p>Quiz 1: 23 Feb 2025<br />Quiz 2: 16 Mar 2025<br />End Term: 13 Apr 2025</p>
        </div>

        <div class="announcement">
          <span>Announcement for Jan 2025 Term Course Registration Form</span>
          <p>January 2025 Term Course Registration Form is now open.<br />Deadline: 3rd January 2025</p>
        </div>

        <div class="announcement">
          <span>Important Announcement for Course Registration</span>
          <p>https://docs.google.com/document/d/e/2PACX-1vS_...</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage', // Changed the name to multi-word
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
  handleSubmit() {
    // Handle form submission logic, e.g., API request
    console.log('Form submitted', { email: this.email, password: this.password });

    // Perform your authentication logic here (e.g., API request to check credentials)
    // If successful, navigate to the CoursesPage

    this.$router.push({ name: 'CoursesPage' }); // Navigates to the CoursesPage route
  }
  },
};
</script>

