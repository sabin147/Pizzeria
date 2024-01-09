<template>
  <div class="contact-us-container">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p class="sub-heading">Reach out to experience culinary excellence.</p>
    </div>
    <div class="contact-section">
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" id="name" v-model="formData.name" placeholder="Your Name" />
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="formData.email" placeholder="Your Email" />
          </div>
          <div class="form-group">
            <textarea id="message" v-model="formData.message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="info-item">
          <i class="fas fa-phone-alt"></i>
          <p>123-456-7890</p>
        </div>
        <div class="info-item">
          <i class="far fa-envelope"></i>
          <p>info@restaurant.com</p>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>123 Gourmet Street, Cityville</p>
        </div>
      </div>
    </div>
    <div class="location-map">
      <h2>Our Location</h2>
      <div class="map-placeholder">
        <iframe
        width="100%"
        height="320"
        frameborder="0"
        style="border: 0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.861840710768!2d12.086464977081178!3d55.63921760073378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525fd5b81ece3f%3A0xa9b0dcac4a8bf62e!2sRoskilde%20Station!5e0!3m2!1sen!2sdk!4v1703890569108!5m2!1sen!2sdk" 
        allowfullscreen
      ></iframe>
      </div>
    </div>
    <div class="social-media">
      <h2>Connect With Us</h2>
      <div class="social-icons">
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
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
      // Handle form submission logic here
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
/* Apply styles to the entire template */
.contact-us-container {
  background-color: #f5f5f5; /* Light gray background color */
  font-family: 'Montserrat', sans-serif; /* Elegant sans-serif font */
  color: #333; /* Dark text color */
  text-align: center;
  padding: 40px;
}

.contact-header h1 {
  font-size: 48px;
  margin-bottom: 10px;
  color: #333; /* Dark header text color */
}

.sub-heading {
  font-size: 18px;
  color: #666; /* Subdued sub-heading text color */
  margin-bottom: 30px;
}

.contact-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
}

.contact-form {
  background-color: #fff; /* White form background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Subtle box shadow for depth */
  width: 100%;
  max-width: 500px;
  text-align: left;
}

.form-group {
  margin-bottom: 30px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9; /* Light gray input background */
  margin-bottom: 10px;
}

textarea {
  resize: none;
}

button {
  background-color: #d9534f; /* Red button background */
  color: #fff; /* White text color */
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c9302c; /* Darker red on hover */
}

.contact-info {
  background-color: #fff; /* White info background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Subtle box shadow for depth */
  width: 100%;
  max-width: 400px;
  text-align: left;
}

.contact-info h2 {
  font-size: 24px;
  color: #333; /* Dark info title color */
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.info-item i {
  font-size: 24px;
  color: #d9534f; /* Red icon color */
  margin-right: 15px;
}

.location-map {
  background-color: #fff; /* White map background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Subtle box shadow for depth */
  margin-top: 40px;
  text-align: left;
}

.location-map h2 {
  font-size: 24px;
  color: #333; /* Dark map title color */
  margin-bottom: 20px;
}

.map-placeholder {
  height: 300px; /* Adjust the height of the map placeholder */
  background-color: #ddd; /* Light gray placeholder color */
  border-radius: 10px;
}

.social-media {
  background-color: #fff; /* White social media background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Subtle box shadow for depth */
  margin-top: 40px;
  text-align: left;
}

.social-media h2 {
  font-size: 24px;
  color: #333; /* Dark social media title color */
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  font-size: 36px;
  color: #d9534f; /* Red social icon color */
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #c9302c; /* Darker red on hover */
}
</style>
