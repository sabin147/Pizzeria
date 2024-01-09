<template>
    <div :key="toastKey" v-if="visible" class="toast" :class="{ success: isSuccess, error: isError }">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
      isSuccess: Boolean,
      isError: Boolean,
    },
    data() {
      return {
        visible: false,
        toastKey: 0, // Change from toastkey to toastKey
      };
    },
    watch: {
    message() {
      this.toastKey += 1; // Change the key to force re-render
      this.show();
    },
    },
    methods: {
      show() {
        this.toastKey += 1; // Increment the key to force re-render
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000); // Adjust the duration as needed
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adjust styles as needed */
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
    opacity: 0.9;
    transition: opacity 0.3s;
  }
  
  .toast.success {
    background-color: #4CAF50; /* Green */
  }
  
  .toast.error {
    background-color: #f44336; /* Red */
  }
  </style>
  