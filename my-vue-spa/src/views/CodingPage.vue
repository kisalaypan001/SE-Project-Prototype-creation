<template>
      <div class="main-container-python">
        <!-- Sidebar -->
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
                <li class="sub-module">
                  <span>1.1 Introduction to Replit</span>
                  <span class="tag">Video</span>
                </li>
                <li class="sub-module">
                  <span>1.2 More on Replit, print and Common Mistakes</span>
                  <span class="tag">Video</span>
                </li>
                <li class="sub-module active">
                  <span>PA1.2: Programming Assignment 1.2 - Not Graded</span>
                  <span class="tag">Assignment</span>
                </li>
                <li class="sub-module">
                  <span>1.3 A Quick Introduction to Variables</span>
                  <span class="tag">Video</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
  
        <!-- Content Area -->
        <div class="content-python">
          <div class="video-details">
            <h1>Practice Programming Assignment 1.1:</h1>
            <p>Topic: Introduction to Replit</p>
            <div class="rating">
              <span>★★★★★  - / 5 (0 reviews)</span> | 
              <a href="#" style="color: #007acc;">Submit a review</a>
            </div>
          </div>
  
          <div class="programming-challenge">
            <h2>Programming Challenge</h2>
            <p>Write a Python program to print the first 5 positive integers in ascending order.</p>
            <textarea v-model="userCode" placeholder="Enter your Python code here..."></textarea>
            <button @click="runCode">Run Code</button>
  
            <h3>Expected Output:</h3>
            <div id="expected-output">1<br>2<br>3<br>4<br>5</div>
  
            <h3>Actual Output:</h3>
            <div id="actual-output">{{ actualOutput }}</div>
  
            <h3>Result:</h3>
            <p id="result" :style="{ color: resultColor }">{{ resultMessage }}</p>
          </div>
        </div>
  
        <!-- Right Panel -->
        <div class="right-panel">
          <div class="search-ai">
            <img src="@/Images/robot.png" alt="AI Assistant" />
            <p>AI assistant StudyBuddy guides</p>
          </div>
          <div class="transcript">
            <h3>AI assistant says-</h3>
            <p>
              Use while loop for solving the problem...
            </p>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userCode: "",
        actualOutput: "",
        resultMessage: "",
        resultColor: "black",
        searchQuery: ""
      };
    },
    methods: {
      runCode() {
        const correctOutput = "1\n2\n3\n4\n5\n"; // Expected output format
  
        // Simulate the expected logic in the user's code
        let isCorrect = this.userCode.includes("print") &&
                        this.userCode.includes("while") &&
                        this.userCode.includes("i=1") &&
                        this.userCode.includes("i<6") &&
                        this.userCode.includes("i=i+1");
  
        // Mock output since Python cannot be run directly in the browser
        let mockOutput = "1\n2\n3\n4\n5\n"; 
  
        this.actualOutput = mockOutput;
  
        if (isCorrect) {
          this.resultMessage = "Correct! Your output matches the expected output.";
          this.resultColor = "green";
        } else {
          this.resultMessage = "Incorrect. Please try again.";
          this.resultColor = "red";
        }
      },
      searchAI() {
        alert("Searching AI for: " + this.searchQuery);
      },
      logout() {
        // Handle logout logic here
        alert("Logged out successfully!");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add all your CSS styles here */
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  /* Add all other styles from the original HTML here */
  </style>
  