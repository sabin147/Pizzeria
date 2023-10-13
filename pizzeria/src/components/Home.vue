<template>
    <div class="about-us-container">
      <section class="jumbotron text-center vintage-jumbotron">
        <h1 class="vintage-title">About Us</h1>
      </section>
  
      <div class="container">
        <section>
          <div class="card mb-4 scroll-animation vintage-card">
            <div class="card-body">
              <p class="about-us-description">
                We are a vintage-inspired restaurant that brings you the finest culinary experience in town. Our
                passion for great food and exceptional service has been our driving force since the beginning.
              </p>
              <p class="about-us-description">
                At Restaurant System, we believe in preserving the timeless charm of classic recipes and flavors.
                Join us on a journey through taste and tradition.
              </p>
            </div>
          </div>
        </section>
  
        <section>
          <div class="card mb-4 scroll-animation vintage-card">
            <div class="card-body">
              <h2 class="vintage-subtitle">Our Team</h2>
              <p class="about-us-description">
                Our team of dedicated chefs, waitstaff, and management work tirelessly to ensure your dining
                experience is nothing short of extraordinary. Each member brings their unique expertise and passion to
                create memorable moments for you.
              </p>
            </div>
          </div>
        </section>
  
        <section>
          <div class="card mb-4 scroll-animation vintage-card">
            <div class="card-body">
              <h2 class="vintage-subtitle">Our History</h2>
              <p class="about-us-description">
                Restaurant System has a rich history that spans decades. Founded in [year], we've been serving
                generations of diners with the same commitment to quality and tradition. Discover the milestones of
                our journey.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Your script logic here
  };
  </script>
  
  <style scoped>
  /* Apply styles to the entire template */
  .about-us-container {
    background-color: #f8e9d3; /* Vintage beige background color */
    font-family: 'Georgia', serif; /* Vintage font */
  }
  
  /* Custom styles for the vintage restaurant look */
  .vintage-jumbotron {
    background-color: #f7e5d3; /* Vintage cream color */
    border: 2px solid #d9bf8e; /* Vintage brown border */
    border-radius: 10px;
    padding: 20px;
  }
  
  .vintage-title {
    color: #b87f41; /* Vintage brown title color */
    font-family: 'Dancing Script', cursive; /* Vintage-style font */
    text-align: center;
    font-size: 36px; /* Adjust the font size as needed */
  }
  
  .vintage-card {
    background-color: #f7e5d3; /* Vintage cream color */
    border: 2px solid #d9bf8e; /* Vintage brown border */
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px; /* Add spacing from the top */
  }
  
  .vintage-subtitle {
    color: #b87f41; /* Vintage brown title color */
    font-family: 'Dancing Script', cursive; /* Vintage-style font */
    text-align: center;
    font-size: 28px; /* Adjust the font size as needed */
    margin-bottom: 20px; /* Add spacing below the subtitle */
  }
  
  .about-us-description {
    color: #b87f41; /* Vintage brown text color */
    font-size: 18px; /* Adjust the font size as needed */
    margin-bottom: 20px; /* Add spacing between paragraphs */
  }
  
  /* Apply animation to scroll down button */
  .scroll-animation {
    animation: fadeInUp 1.5s ease;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  