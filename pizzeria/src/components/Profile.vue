<template>
  <!-- Advanced Profile Form -->
  <div class="profile-container">
    <!-- Futuristic Greeting with Animation -->
    <div v-if="user" class="greeting-container">
      <h1 class="futuristic-greeting">
        Welcome, <span class="highlight">{{ user.userName }}</span>!
      </h1>
    </div>

    <!-- Futuristic User Details with Hover Effect -->
    <div v-if="user" class="details-container">
      <div class="user-detail">
        <p class="detail-label">User ID:</p>
        <p class="detail-value">{{ user.userId }}</p>
      </div>
      <div class="user-detail">
        <p class="detail-label">Contact Email:</p>
        <p class="detail-value">{{ user.email }}</p>
      </div>
      <div class="user-detail">
        <p class="detail-label">Role:</p>
        <p class="detail-value">{{ user.role }}</p>
      </div>
      <!-- Add other user details as needed -->
    </div>
  </div>
</template>

<style scoped>
  .profile-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .greeting-container {
    text-align: center;
    margin-bottom: 20px;
  }

  .futuristic-greeting {
    font-size: 28px;
    color: #333;
    letter-spacing: 1px;
  }

  .highlight {
    color: #1877f2; /* Facebook Blue */
    font-weight: bold;
  }

  .details-container {
    display: flex;
    flex-direction: column;
  }

  .user-detail {
    padding: 15px;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .user-detail:hover {
    transform: scale(1.02);
  }

  .detail-label {
    font-weight: bold;
    color: #555;
  }

  .detail-value {
    color: #333;
  }
</style>

<script>
import axios from 'axios';
const baseUri = "https://localhost:7159/api/User/";

export default {
  data() {
    return {
      user: null,
    };
  },

  async created() {
    // Check for an existing token on page load
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.token = storedToken;

      // Fetch the user details after a successful login
      await this.fetchCurrentUser();
    }
  },

  methods: {
    async fetchCurrentUser() {
      try {
        const response = await axios.get(`${baseUri}current-user`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        this.user = response.data;
      } catch (ex) {
        console.error("Error fetching current user:", ex);
      }
    },
  },
};
</script>
