<template>
  <body>
    <div class="restaurant-container">
      <section class="hero">
        <h1 class="hero-title">Savor Culinary Delights</h1>
        <p class="hero-subtitle">An Unforgettable Dining Experience</p>
      </section>

      <div
        id="image-track"
        :style="{ transform: `translate(${percentage}%, -50%)` }"
        @mousedown="handleOnDown"
        @touchstart="handleOnDown"
        @mouseup="handleOnUp"
        @touchend="handleOnUp"
        @mousemove="handleOnMove"
        @touchmove="handleOnMove"
        data-mouse-down-at="0"
        :data-prev-percentage="prevPercentage"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          class="image"
          :src="image.src"
          :alt="image.alt"
          draggable="false"
          :style="{ objectPosition: `${100 + percentage}% center` }"
          @dblclick="handleImageDoubleClick"
        />
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
  background-color: #e6f1f1;
  margin: 0;
  overflow: hidden;
}

.restaurant-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.hero {
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10vh 0 60px;
  z-index: 1;
}

.hero-title {
  font-size: 42px;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 20px;
  color: #00695c;
  margin-bottom: 30px;
}

#image-track {
  display: flex;
  gap: 2vmin;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
}

#image-track > .image {
  width: 40vmin;
  height: 56vmin;
  object-fit: cover;
  object-position: 100% center;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>


  
  <script>
  // Import the router from your router file
import router from '@/router'; // Adjust the path accordingly

  export default {
    data() {
      return {
        percentage: 0,
        prevPercentage: 0,
        images: [
          { src: "images/bug1.webp", alt: "1" },
          { src: "images/bug2.avif", alt: "2" },
          { src: "images/nod1.webp", alt: "3" },
          { src: "images/nod2.webp", alt: "4" },
          { src: "images/nod3.webp", alt: "5" },
          { src: "images/piz1.webp", alt: "6" },
          { src: "images/piz2.avif", alt: "7" },
          { src: "images/piz3.avif", alt: "8" },
        ],
      };
    },
    methods: {
      handleOnDown(e) {
        this.$data.mouseDownAt = e.clientX || e.touches[0].clientX;
      },
      handleOnUp() {
        this.$data.mouseDownAt = 0;
        this.$data.prevPercentage = this.$data.percentage;
      },
      handleOnMove(e) {
        if (this.$data.mouseDownAt === 0) return;
  
        const mouseDelta = parseFloat(this.$data.mouseDownAt) - (e.clientX || e.touches[0].clientX);
        const maxDelta = window.innerWidth / 2;
  
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(this.$data.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
        this.$data.percentage = nextPercentage;
  
        const track = this.$el.querySelector("#image-track");
        track.animate(
          [
            {
              transform: `translate(${this.$data.percentage}%, -50%)`,
            },
          ],
          {
            duration: 1200,
            fill: "forwards",
          }
        );
  
        const images = track.getElementsByClassName("image");
        for (const image of images) {
          image.animate(
            [
              {
                objectPosition: `${100 + this.$data.percentage}% center`,
              },
            ],
            {
              duration: 1200,
              fill: "forwards",
            }
          );
        }
      },
      handleImageDoubleClick() {
    // Navigate to ShoppingCart.vue
    router.push('/shoppingcart'); // Adjust the route path accordingly
  },
    },
  };
  </script>
  

  