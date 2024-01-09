<template>
  <div class="container">
    <div class="card mb-4"> 
      <div class="card-body">
        <h2 class="card-title">Filter Order by Id</h2>
        <div class="input-group">
          <input placeholder="Id" type="number" class="form-control" v-model="id">
          <div class="input-group-append">
            <button v-on:click="filterById(id)" class="btn btn-primary">Filter</button>
            <button v-on:click="getAllPosts()" class="btn btn-primary">GetAll</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card mb-4">
        <div class="card-body">
          <h2 class="card-title">Order Food Item</h2>
          <div v-if="error">{{ error }}</div>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>OrderId</th>
                  <th>UserId</th>
                  <th>OrderDate</th>
                  <th>TotalAmount</th>
                </tr>  
              </thead>
              <tbody>
                <tr v-for="data in filteredData">
                  <td>{{ data.orderId }}</td>
                  <td>{{ data.userId }}</td>
                  <td>{{ data.orderDate }}</td>
                  <td>{{ data.totalAmount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
  <div class="card mb-4">
      <div class="card-body">
        <h2 class="card-title">Add Order</h2>
        <input v-model.number="addData.foodItemId" placeholder="FoodItemId" type="number" />
        <input v-model.number="addData.quantity" placeholder="Quantity" type="number" />
        <button v-on:click="addOrder()" class="btn btn-success">Add</button>
        <div>{{ addMessage }}</div>
      </div>
    </div>
  </div>
  <div>
    <h1>Notification Tab / Order History</h1>
    <ul>
      <li v-for="order in orderHistory" :key="order.orderId">
        <!-- Display order details here -->
        <div>Order ID: {{ order.orderId }}</div>
        <div>Total: {{ order.total.toLocaleString() }} DKK</div>
        <div>Date: {{ formatDate(order.date) }}</div>
        <!-- Add more details as needed -->
      </li>
    </ul>
  </div>

  
</template>
  
  <script>
  import axios from 'axios';
  const baseUri = "https://localhost:7159/api/"
  export default {
    data()
     {
        return {
            dataSeries : [],
            filteredData: [],
            error: null,   
            id: null,
            addData:{foodItemId: null, quantity: null },
            addMessage:"",
            orderHistory: [],
        }
    },
    
    async created() {
        console.log("created method called")
        this.helperGetPosts(baseUri)
    },
    methods: {
        getAllPosts() {
            this.helperGetPosts(baseUri);
            
        },
        async helperGetPosts(uri) {
            try {
               // Retrieve the token from local storage
                const token = localStorage.getItem('token');

                // Set up the request headers with the bearer token
                const headers = {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Adjust content type if needed
                };

                const response = await axios.get(uri +"Order",{headers})
                this.dataSeries = await response.data
                this.error = null
                this.filteredData = this.dataSeries
                
            } catch (ex) {
                this.dataseries = []
                this.error = ex.message
                
            }
        },
        filterById(id) {
          console.log("id (input): " + id);
          this.filteredData = this.dataSeries.filter(f => f.orderId === id);
          console.log("Filtered Data: " + JSON.stringify(this.filteredData));
        },
        async addOrder() {
          try {
              // Make sure to send an array of objects with the expected properties
              const requestData = [{ foodItemId: this.addData.foodItemId, quantity: this.addData.quantity }];

              const response = await axios.post(baseUri + "Order", requestData)
              this.addMessage = "Response " + response.status + " " + response.statusText;
              this.addData = { foodItemId: null, quantity: null };
              this.getAllPosts();
          } catch (ex) {
              console.error("Error:", ex);
              alert(ex.message);
          }
        },
  },

    
           
        
    
};
  </script>
  
  <style></style>

  