<template>
  <div class="about-us-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">Our Culinary Journey</h1>
      </div>
    </section>

    <div class="container">
      <section class="about-section">
        <div class="card about-card">
          <div class="card-body">
            <h2 class="section-title">Crafting Experiences</h2>
            <p class="about-description">
              Embark on a culinary journey where passion meets innovation. At Restaurant System, we don't just create meals; we craft experiences. Our philosophy revolves around the art of blending flavors, creating memories, and setting new standards in the world of gastronomy.
            </p>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="card about-card">
          <div class="card-body">
            <h2 class="section-title">The Heart of Our Success</h2>
            <p class="about-description">
              Meet the dedicated team behind every exceptional dining experience at Restaurant System. Our chefs, waitstaff, and management are the heart and soul of our establishment. With a commitment to excellence, they work seamlessly to deliver a dining experience that goes beyond expectations.
            </p>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="card about-card">
          <div class="card-body">
            <h2 class="section-title">Our Evolution</h2>
            <p class="about-description">
              Established in [year], Restaurant System has evolved into a symbol of culinary excellence. From humble beginnings to becoming a culinary destination, our story is a testament to our relentless pursuit of quality and innovation. Join us as we continue to create new chapters in our gastronomic journey.
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
  background-color: #f9f9f9; /* Light gray background color */
  font-family: 'Arial', sans-serif; /* Modern sans-serif font */
  color: #333; /* Dark text color */
}

.hero-section {
  background-color: #35424a; /* Dark blue background color */
  color: #fff; /* White text color */
  text-align: center;
  padding: 80px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.main-title {
  font-size: 36px;
  font-weight: bold;
}

.container {
  padding: 40px 0;
}

.about-section {
  margin-bottom: 40px;
}

.about-card {
  background-color: #fff; /* White card background */
  border: 1px solid #ddd; /* Light gray border */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle box shadow for depth */
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px); /* Add a slight lift on hover */
}

.section-title {
  color: #35424a; /* Dark blue section title color */
  font-size: 24px;
  font-weight: bold;
}

.about-description {
  font-size: 16px;
  line-height: 1.5;
  color: #555; /* Medium gray text color */
}
</style>
