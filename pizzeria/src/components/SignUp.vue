<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <!-- Login Form -->
        <div v-if="showLoginForm && !token" class="card form-card">
          <div class="card-body">
            <div class="form-container">
              <img class="logo" src="images/Login.jpg" alt="login logo">
              <h1 class="form-title">Login</h1>
              <form @submit.prevent="loginUser" class="login-form">
                <div class="form-group">
                  <label for="loginEmail">Email</label>
                  <input v-model="loginData.email" id="loginEmail" type="email" class="form-control" placeholder="Enter your email" >
                </div>
                <div class="form-group">
                  <label for="loginPassword">Password</label>
                  <input v-model="loginData.password" id="loginPassword" type="password" class="form-control" placeholder="Enter your password" >
                </div>
                <p class="form-switch">Don't have an account? <span @click="switchToSignupForm" class="clickable-text">Signup Here</span></p>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
              <div class="form-message">{{ loginMessage }}</div>
            </div>
          </div>
        </div>

        <!-- Signup Form -->
        <div v-if="showSignupForm && !token" class="card form-card">
          <div class="card-body">
            <div class="form-container">
              <img class="logo" src="images/SignUp.jpg" alt="signup logo">
              <h1 class="form-title">Sign Up</h1>
              <form @submit.prevent="registerCustomers" class="signup-form">
                <div class="form-group">
                  <label for="username">Name</label>
                  <input v-model="registerData.username" id="username" type="text" class="form-control" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input v-model="registerData.email" id="email" type="email" class="form-control" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input v-model="registerData.password" id="password" type="password" class="form-control" placeholder="Create a password" required>
                </div>
                <p class="form-switch">Already have an account? <span @click="switchToLoginForm" class="clickable-text">Login Here</span></p>
                <button type="submit" class="btn btn-success btn-block">Sign Up</button>
              </form>
              <div class="form-message">{{ registerMessage }}</div>
            </div>
          </div>
        </div>

        <!-- Profile Page -->
        <div v-if="token" class="card profile-card">
          <div class="card-body">
            <profile />
            <button @click="logout" class="btn btn-danger btn-block logout-button">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Global Styles */
  body {
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  /* Card Styles */
  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.02);
  }

  /* Form Container Styles */
  .form-container {
    text-align: center;
  }

  /* Logo Styles */
  .logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
  }

  /* Form Title Styles */
  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  /* Form Styles */
  .form-group {
    margin-bottom: 24px;
  }

  .form-control {
    padding: 14px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }

  .form-control:focus {
    border-color: #007bff;
  }

  /* Form Switch Styles */
  .form-switch {
    color: #6c757d;
    font-size: 14px;
  }

  .clickable-text {
    cursor: pointer;
    color: #007bff;
    font-weight: bold;
  }

  /* Button Styles */
  .btn {
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
  }

  .btn-success {
    background-color: #28a745;
    color: #fff;
    border: none;
  }

  .btn-danger {
    background-color: #dc3545;
    color: #fff;
    border: none;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  /* Message Styles */
  .form-message {
    color: #dc3545;
    margin-top: 10px;
  }

  /* Profile Page Styles */
  .profile-card,
  .form-card {
    margin-top: 50px;
    text-align: center;
  }

  .profile-card:hover,
  .form-card:hover {
    transform: scale(1.02);
  }

  /* Logout Button Styles */
  .logout-button {
    margin-top: 20px;
    border-radius: 5px;
    padding: 14px 20px;
    cursor: pointer;
    outline: none;
  }

  .logout-button:hover {
    background-color: #c82333;
  }

  @media (max-width: 768px) {
    /* Responsive Styles */
    .card {
      margin-bottom: 20px;
    }
  }
</style>

<script>
  import Profile from './Profile.vue';
  import axios from 'axios';
  const baseUri = "https://localhost:7159/api/User"
  
  export default {
    components: {
    Profile,
    
  },
    data() {
      return {
        dataSeries: [],
        filteredData: [],
        error: null,
        registerData: { username: "", email: "", password: "" },
        registerMessage: "",
        loginData: { email: "", password: "" },
        loginMessage: "",
        showLoginForm: true,
        showSignupForm: false,
        token: null, // Added token state
        userEmail: "",
        
      };
    },
    
    async created() {
      console.log("created method called");
      this.helperGetPosts(baseUri);
  
      // Check for an existing token on page load
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        this.token = storedToken;
        // Perform additional actions if needed
      }
    },
    
    
    
    methods: {
      getAllPosts() {
        this.helperGetPosts(baseUri);
      },
      
      async helperGetPosts(uri) {
        try {
          const response = await axios.get(uri, { headers: { Authorization: `Bearer ${this.token}` } });
          this.dataSeries = await response.data;
          this.error = null;
          this.filteredData = this.dataSeries;
        } catch (ex) {
          this.dataseries = [];
          this.error = ex.message;
        }
      },
      switchToSignupForm() {
        this.showLoginForm = false;
        this.showSignupForm = true;
      },
  
      switchToLoginForm() {
        this.showLoginForm = true;
        this.showSignupForm = false;
      },
      
      
      async registerCustomers() {
        try {
          console.log("Registering customer data:", this.registerData); // Log the data being sent
          const response = await axios.post(baseUri + "/register-customer", this.registerData);
          console.log("Add customer response:", response); // Log the response from the server
          this.registerMessage = "Response " + response.status + " " + response.statusText;
          this.getAllPosts();
          this.registerData = { username: "", password: "", email: "" };
        } catch (ex) {
          alert(ex.message);
        }
      },
      async loginUser() {
        try {
          console.log("Logging in user data:", this.loginData);
          const response = await axios.post(baseUri + "/login", this.loginData);
          console.log("Login user response:", response);
          this.loginMessage = "Login successful!"; // You can handle the login response as needed
  
          // Set the user's email for greeting message
          this.userEmail = this.loginData.email;
          console.log("email: ", this.userEmail);
  
          // Store the token on successful login
          this.token = response.data;
          console.log('Token before storing in local storage:', this.token);
          localStorage.setItem('token', this.token);
          console.log(localStorage);
  
          // Reset login data
          this.loginData = { email: "", password: "" };
  
        } catch (ex) {
          this.loginMessage = "Login failed. " + ex.message;
        }
      },
      logout() {
        localStorage.removeItem('token');
        this.token = null;
        this.userEmail = "";
        console.log("User logged out.");
      },
      
  
    }
  };
</script>
  


