<template>
    <div class="restaurant-container">
      <div class="restaurant-card">
        <div class="restaurant-header">
          <img src="images/restaurantLogo.png" alt="Restaurant Logo" class="restaurant-logo" />
          <h1 class="restaurant-title">Gastronomique Delights</h1>
        </div>
  
        <div class="notification-section">
          <div class="notification-icon">
            <img src="images/notification.png" alt="Notification Icon" />
          </div>
  
          <div>
            <h2 class="notification-title">Exquisite Dining Experience</h2>
            <div v-if="orderConfirmationMessage" class="notification-message">
              <p>{{ orderConfirmationMessage }}</p>
            </div>
          </div>
  
          <h2 class="notification-title">Your Culinary Journey</h2>
          <div v-if="userSubscription && userSubscription.length > 0" class="notification-message">
            <p>
              Welcome! You are currently indulging in our {{ userSubscription[0]?.name }} culinary package.
            </p>
          </div>
  
          <div v-if="ResevationHistory && ResevationHistory.length > 0" class="reservation-history">
            <h2 class="notification-title">Memorable Reservations:</h2>
            <div v-for="reservation in ResevationHistory" :key="reservation.reservationId" class="reservation-card">
              <p class="reservation-details">
                <span>Reservation ID:</span> {{ reservation.reservationId }}<br>
                <span>Table:</span> {{ reservation.tableNumber }}<br>
                <span>Time:</span> {{ reservation.reservationDateTime }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Apply styles to the entire template */
  .restaurant-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .restaurant-card {
    background: linear-gradient(to right, #ff8c42, #ff3b30); /* Gradient background */
    color: #fff; /* Text color */
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    width: 80%;
    max-width: 600px;
  }
  
  .restaurant-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .restaurant-logo {
    width: 80px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  .restaurant-title {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
  }
  
  .notification-section {
    text-align: center;
  }
  
  .notification-icon img {
    width: 50px;
  }
  
  .notification-title {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15px;
    font-size: 24px;
  }
  
  .notification-message {
    font-weight: bold;
    margin-top: 15px;
    font-size: 18px;
  }
  
  .reservation-history {
  margin-top: 20px;
}

.reservation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.reservation-card {
  background-color: #2c3e50; /* Dark blue-gray background */
  color: #fff;
  border: 2px solid #3498db; /* Border color */
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  /* Add subtle shadow for depth */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.reservation-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.reservation-details {
  font-size: 16px;
}

  
  </style>
  
    
    <script>
    import axios from 'axios';
    const baseUri = "https://localhost:7159/api/"
    export default {
      data()
       {
          return {
              OrderHistory : [],
              BasketHistory: [],
              ResevationHistory: [],
              userSubscription: [],
              FoodItemHistory: [],
              error: null,   
              id: null,
              orderConfirmationMessage: localStorage.getItem('orderConfirmationMessage') || '',
    
          }
      },
      
      async created() {
        console.log('Notification component created. Order confirmation message:', this.orderConfirmationMessage);
  
          console.log("created method called")
          this.helperGetPostsOrder(baseUri)
          this.helperGetPostsBasket(baseUri)
          this.helperGetPostsReservation(baseUri)
          this.helperGetUserSubscription(baseUri)
          this.helperGetUserFoodItem(baseUri)
      },
      methods: {
          getAllPosts() {
              this.helperGetPostsOrder(baseUri);
              this.helperGetPostsBasket(baseUri);  
              this.helperGetPostsReservation(baseUri);
              this.helperGetUserSubscription(baseUri);
              this.helperGetUserFoodItem(baseUri)
          },
          async helperGetPostsOrder(uri) {
              try {
                 // Retrieve the token from local storage
                  const token = localStorage.getItem('token');
  
                  // Set up the request headers with the bearer token
                  const headers = {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json', // Adjust content type if needed
                  };
  
                  const response = await axios.get(uri +"Order/OrderHistory",{headers})
                  this.OrderHistory = await response.data
                  this.error = null
                    
                  
              } catch (ex) {
                  this.OrderHistory = []
                  this.error = ex.message
                  
              }
          },
          async helperGetPostsBasket(uri) {
              try {
                 // Retrieve the token from local storage
                  const token = localStorage.getItem('token');
  
                  // Set up the request headers with the bearer token
                  const headers = {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json', // Adjust content type if needed
                  };
  
                  const response = await axios.get(uri +"OrderItem/basketHistory",{headers})
                  this.BasketHistory = await response.data
                  this.error = null
                    
                  
              } catch (ex) {
                  this.BasketHistory = []
                  this.error = ex.message
                  
              }
          },
          async helperGetPostsReservation(uri) {
              try {
                 // Retrieve the token from local storage
                  const token = localStorage.getItem('token');
  
                  // Set up the request headers with the bearer token
                  const headers = {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json', // Adjust content type if needed
                  };
  
                  const response = await axios.get(uri +"Reservation/ReservationHistory",{headers})
                  this.ResevationHistory = await response.data
                  this.error = null
                    
                  
              } catch (ex) {
                  this.ResevationHistory = []
                  this.error = ex.message
                  
              }
          },
          async helperGetUserSubscription(uri) {
            try {
                const token = localStorage.getItem('token');
                const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                };

                const response = await axios.get(uri + "Subscription/SubscriptionHistory", { headers });
                this.userSubscription = await response.data;
                
                this.error = null;
            } catch (ex) {
                this.userSubscription = null;
                this.error = ex.message;
            }
        },
        async helperGetUserFoodItem(uri) {
            try {
                const token = localStorage.getItem('token');
                const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                };

                const response = await axios.get(uri + "FoodItem/OrderHistory", { headers });
                this.FoodItemHistory = await response.data;
                
                this.error = null;
            } catch (ex) {
                this.FoodItemHistory = null;
                this.error = ex.message;
            }
        },

    },   
      
  };
    </script>




    
    