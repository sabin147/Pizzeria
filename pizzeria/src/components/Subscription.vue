<template>
  <div class="container">
    <div class="subscription-card">
      <div class="subscription-header">
        <h2 class="subscription-title">Choose Your Subscription</h2>
        <div v-if="error" class="error-message">{{ error }}</div>
      </div>
      <!-- Table Structure -->
      <div class="table-container">
        <table class="subscription-table">
          <thead>
            <!-- First row with heading "Offers" -->
            <tr>
              <th class="category"></th>
            
              <th>
                <div class="subscription-list">
                  <div
                    v-for="subscription in basicSubscriptions"
                    :key="subscription.subscriptionId"
                    class="subscription-item"
                  >
                    <div class="subscription-item-content">
                      <h3 class="subscription-name">{{ subscription.name }}</h3>
                      <p class="subscription-price">
                        ${{ subscription.price.toFixed(2) }}
                      </p>
                      <p class="subscription-discount">
                        {{ subscription.discountPercentage }}% Discount
                      </p>
                    </div>
                    <button
                      @click="chooseSubscription(subscription.subscriptionId)"
                      class="subscription-button basic"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </th>
              <th>
                <div class="subscription-list">
                  <div
                    v-for="subscription in premiumSubscriptions"
                    :key="subscription.subscriptionId"
                    class="subscription-item"
                  >
                    <div class="subscription-item-content">
                      <h3 class="subscription-name">{{ subscription.name }}</h3>
                      <p class="subscription-price">
                        ${{ subscription.price.toFixed(2) }}
                      </p>
                      <p class="subscription-discount">
                        {{ subscription.discountPercentage }}% Discount
                      </p>
                    </div>
                    <button
                      @click="chooseSubscription(subscription.subscriptionId)"
                      class="subscription-button premium"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </th>
              <th>
                <div class="subscription-list">
                  <div
                    v-for="subscription in exclusiveSubscriptions"
                    :key="subscription.subscriptionId"
                    class="subscription-item"
                  >
                    <div class="subscription-item-content">
                      <h3 class="subscription-name">{{ subscription.name }}</h3>
                      <p class="subscription-price">
                        ${{ subscription.price.toFixed(2) }}
                      </p>
                      <p class="subscription-discount">
                        {{ subscription.discountPercentage }}% Discount
                      </p>
                    </div>
                    <button
                      @click="chooseSubscription(subscription.subscriptionId)"
                      class="subscription-button exclusive"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Remaining rows with additional information -->
            <tr>
              <td class="category">Discount

                <p class="additional-info">
                  Exclusive: Enjoy a generous 70% discount on orders up to 500kr.
                </p>
                <p class="additional-info">
                  Premium: Benefit from a substantial 50% discount on orders up to 500kr.
                </p>
                <p class="additional-info">
                  Basic: Receive a valuable 30% discount on orders up to 200kr.
                </p>
              </td>
              <td class="discount-info">30%</td>
              <td class="discount-info">50%</td>
              <td class="discount-info">70%</td>
            </tr>
            <tr>
              <td class="category">Discount Sharing
              
                <p class="additional-info">
                  Share your discount with friends and family—valid for up to 3 individuals.
                </p>
              </td>
              <td class="check-mark"></td>
              <td class="check-mark">✔</td>
              <td class="check-mark">✔</td>
            </tr>
            <tr>
              <td class="category">Birthday Offer
              
                <p class="additional-info">
                  Celebrate your birthday with a complimentary meal, valued up to 150kr.
                </p>
              </td>
              <td class="check-mark"></td>
              <td class="check-mark">✔</td>
              <td class="check-mark">✔</td>
            </tr>
            <tr>
              <td class="category">No Binding
              
                <p class="additional-info">
                  Enjoy the flexibility of no binding—cancel your subscription anytime without commitments.
                </p>
              </td>
              <td class="check-mark">✔</td>
              <td class="check-mark">✔</td>
              <td class="check-mark">✔</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End of Table Structure -->
    </div>
  </div>
</template>

<style scoped>

body {
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  background-color: #f5f5f5; /* Set the background color */
  font-family: 'Montserrat', sans-serif;
  color: #333;
  text-align: center;
}
.container {
  display: flex;
  height: 100%;
  padding: 0;
  width: 100%; 
  box-sizing: border-box;
}

.subscription-card {
  width: max-content; 
  max-width: none; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.subscription-header {
  background: linear-gradient(to right, #66c2ff, #4d94ff);
  color: #fff;
  padding: 30px;
}

.subscription-title {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 15px;
  font-size: 28px;
}

.error-message {
  color: #ff4d4f;
  text-align: center;
  margin-top: 15px;
  font-size: 18px;
}

.table-container {
  overflow-x: auto;
  margin: 20px;
}

.subscription-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

th, td {

  text-align: center;
}

th {
  background-color: #f2f2f2;
  
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
.discount-info {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.check-mark {
  font-size: 24px;
  color: #00cc66;
}


.subscription-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.subscription-item {
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 250px;
}

.subscription-item:hover {
  transform: scale(1.05);
}

.subscription-item-content {
  padding: 20px;
}

.subscription-name {
  font-size: 20px;
  margin-bottom: 5px;
}

.subscription-price {
  color: #00cc66;
  font-size: 18px;
  margin-bottom: 5px;
}

.subscription-discount {
  font-size: 16px;
  color: #ff6600;
  margin-bottom: 15px;
}

.additional-info {
  font-size: 14px;
  margin-bottom: 10px;
  color: #666;
}

.subscription-button {
  background-color: #00cc66;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.subscription-button:hover {
  background-color: #00994d;
}

.subscription-button.basic {
  background-color: #4d94ff;
}

.subscription-button.premium {
  background-color: #f4511e;
}

.subscription-button.exclusive {
  background-color: #e53935;
}
.subscription-header {
  padding: 20px; /* Adjusted padding */
}

.table-container {
  margin: 10px;
}

.subscription-item {
  margin: 10px; /* Adjusted margin */
}

.subscription-item-content {
  padding: 15px; /* Adjusted padding */
}
.subscription-button {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}

.subscription-button:hover {
  background-color: #007033; /* Adjusted hover color */
}
.subscription-title {
  font-size: 24px;
}

.subscription-name {
  font-size: 18px;
}

.subscription-price {
  font-size: 16px;
}

.subscription-discount {
  font-size: 14px;
}

.additional-info {
  font-size: 12px;
}
@media only screen and (max-width: 768px) {
  .subscription-list {
    justify-content: center;
  }
}
/* Style for the paragraph part of the table rows */
td.category {
  text-align: left; /* Align text to the left within the cell */
  padding: 15px; /* Add padding for better spacing */
}

.additional-info {
  font-size: 14px;
  color: #555; /* Adjusted color for additional information */
  margin-bottom: 8px; /* Adjusted margin for better spacing */
}

/* Style for the discount percentages */
.discount-info {
  font-size: 18px;
  font-weight: bold;
  color: #00cc66;
}

/* Style for the check marks */
.check-mark {
  font-size: 24px;
  color: #00cc66;
  font-weight: bold;
}

/* Add a border to separate the cells */
td.category,
.discount-info,
.check-mark {
  border: 1px solid #ddd;
  padding: 15px;
}
/* Style for the 1st column elements */
td.category {
  text-align: left; /* Align text to the left within the cell */
  padding: 15px; /* Add padding for better spacing */
}

.additional-info {
  font-size: 14px;
  color: #555; /* Adjusted color for additional information */
  margin-bottom: 8px; /* Adjusted margin for better spacing */
}

/* Add a border to separate the cells */
td.category {
  border: 1px solid #ddd;
  padding: 15px;
}

/* Add a background color for better visual separation */
td.category {
  background-color: #f9f9f9;
}
/* Style for the first column of table body */
td.category {
  background-color: #f9f9f9; /* Light gray background color */
  font-weight: bold; /* Bold text for emphasis */
}

/* Additional style for the category cell in the first column */
td.category {
  text-align: left; /* Align text to the left within the cell */
  padding: 15px; /* Add padding for better spacing */
  border: 1px solid #ddd; 
  color:rgb(3, 56, 38)/* Add border to separate cells */
}






</style>



<script>
import axios from 'axios';
const baseUri = "https://localhost:7159/api/";

export default {
  data() {
    return {
      dataSeries: [],
      filteredData: [],
      error: null,
      selectedSubscription: null,
      
      
      
    };
  },

  async created() {
    console.log("created method called");
    this.helperGetPosts(baseUri);
  },
  computed: {
    basicSubscriptions() {
      return this.filteredData.filter(subscription => subscription.name === 'basic');
    },
    premiumSubscriptions() {
      return this.filteredData.filter(subscription => subscription.name === 'Premium');
    },
    exclusiveSubscriptions() {
      return this.filteredData.filter(subscription => subscription.name === 'Exclusive');
    },
  },
  methods: {
    getAllPosts() {
      this.helperGetPosts(baseUri);
    },
    async helperGetPosts(uri) {
      try {
        const token = localStorage.getItem('token');

        // Set up the request headers with the bearer token
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        const response = await axios.get(uri + "subscription", { headers });
        this.dataSeries = await response.data;
        this.error = null;
        this.filteredData = this.dataSeries;
      } catch (ex) {
        this.dataSeries = [];
        this.error = ex.message;
      }
    },

    async chooseSubscription(subscriptionId) {
      try {
        this.$router.push('/payment');
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Set up the request headers with the bearer token
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        // Send a request to your backend API to create the order
        const response = await axios.post(baseUri + `subscription/choose-subscription?subscriptionId=${subscriptionId}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Handle the response (e.g., show success message)
        console.log("Order response:", response);
        console.log("Selected Subscription:", subscriptionId);

        // Display a success message using alert
        alert('Subscription selected successfully');

        // Optionally, you can refresh the data after selecting the subscription
        this.helperGetPosts(baseUri);

       


      } catch (ex) {
        console.error("Error choosing subscription:", ex.message);
        // Handle the error as needed
        alert('Error selecting subscription');
      }
    },
  },
};
</script>
