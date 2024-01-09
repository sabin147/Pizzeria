<template>
  <div>
    <header>
      <nav class="navbar modern-navbar">
        <router-link to="/" class="navbar-brand modern-brand">Pizzeria and Restro</router-link>
        <div class="navbar-links">
          <router-link to="/shoppingCart" class="nav-link modern-link">Menu</router-link>
          <router-link to="/fooditem" class="nav-link modern-link">FoodItem</router-link>
          <router-link to="/order" class="nav-link modern-link">Order</router-link>
          <router-link to="/basket" class="nav-link modern-link">Basket</router-link>
          <router-link to="/customer" class="nav-link modern-link">Customers</router-link>
          <router-link to="/subscription" class="nav-link modern-link">Subscription</router-link>
          <!-- <router-link to="/payment" class="nav-link modern-link">Payment</router-link> -->
          <router-link to="/reservation" class="nav-link modern-link">Reservation</router-link>
          <router-link to="/contactUs" class="nav-link modern-link">Contact Us</router-link>
          <router-link to="/home" class="nav-link modern-link">About Us</router-link>
          <router-link to="/notification" class="nav-link modern-link">Notification</router-link>
          <router-link to="/customerReview" class="nav-link modern-link">Customer Review</router-link>
        </div>
        <div class="navbar-actions">
          <router-link to="/signUp" class="nav-link modern-link">Login Here</router-link>
        </div>
      </nav>
      <ShoppingCart />
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>  
</template>

<style scoped>
  /* Modern Navbar Styles */
  .modern-navbar {
    background-color: #2c3e50; /* Dark blue background */
    color: #ecf0f1; /* Light text color */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .modern-brand {
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    text-decoration: none;
    color: #ecf0f1;
  }

  .navbar-links {
    display: flex;
    gap: 20px;
  }

  .modern-link {
    text-decoration: none;
    color: #ecf0f1;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .modern-link:hover {
    color: #3498db; /* Blue on hover */
  }

  .navbar-actions {
    margin-left: auto;
  }
</style>
