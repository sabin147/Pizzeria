<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light vintage-navbar">
        <router-link to="/" class="navbar-brand vintage-brand">Pizzeria and Restro </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/fooditem" class="nav-link vintage-link">FoodItem</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order" class="nav-link vintage-link">Order</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/basket" class="nav-link vintage-link">Basket</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactUs" class="nav-link vintage-link">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/home" class="nav-link vintage-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/customer" class="nav-link vintage-link">Customers</router-link>
            </li>
          </ul>
        </div>
        <div class="ml-auto">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/signUp" class="nav-link vintage-link">Become a Customer</router-link>
            </li>
          </ul>      
        </div>
      </nav>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>  
</template>

<script>
  // Your script logic here
</script>

<style scoped>
  /* Vintage Navbar Styles */
  .vintage-navbar {
    background-color: #f7e5d3; /* Vintage cream color */
    border-bottom: 2px solid #d9bf8e; /* Vintage brown border */
  }

  .vintage-brand {
    color: #b87f41; /* Vintage brown title color */
    font-family: 'Dancing Script', cursive; /* Vintage-style font */
    font-size: 24px; /* Adjust the font size as needed */
  }

  .vintage-link {
    color: #b87f41; /* Vintage brown link color */
    font-weight: bold;
  }

  .vintage-link:hover {
    color: #9a6e38; /* Darker brown on hover */
  }
</style>
