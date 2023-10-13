<template>
    <div class="contact-us-container">
      <h1>Contact Us</h1>
      <div class="contact-section">
        <div class="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message"></textarea>
          </div>
          <button @click="submitForm">Submit</button>
        </div>
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> 123-456-7890</p>
          <p><strong>Email:</strong> pizzeria@roskilde.com</p>
        </div>
      </div>
      <div class="location-map">
        <h2>Our Location</h2>
        <!-- Include your map component or embed a map from a service like Google Maps here -->
        <!-- Example: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."></iframe> -->
      </div>
      <div class="social-media">
        <h2>Follow Us</h2>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        // Add code here to handle form submission
        console.log("Form Data:", this.formData);
        // Reset the form after submission
        this.formData = {
          name: "",
          email: "",
          message: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us-container {
    background-color: #f8e9d3;
    color: #333;
    text-align: center;
    padding: 40px;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #007bff;
  }
  
  .contact-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-top: 30px;
  }
  
  .contact-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .contact-info {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    flex-basis: 30%;
    text-align: left;
  }
  
  .contact-info h2 {
    font-size: 24px;
  }
  
  .location-map {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    text-align: left;
  }
  
  .location-map h2 {
    font-size: 24px;
  }
  
  .social-media {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    text-align: left;
  }
  
  .social-media h2 {
    font-size: 24px;
  }
  
  .social-icons {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  .social-icon {
    font-size: 24px;
    color: #007bff;
    transition: color 0.3s ease;
  }
  
  .social-icon:hover {
    color: #0056b3;
  }
  </style>
  