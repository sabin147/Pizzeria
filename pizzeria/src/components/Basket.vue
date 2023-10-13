<template>
    <div class="container">
      <div class="card mb-4">
        <div class="card-body">
          <h2 class="card-title">Basket</h2>
          <div v-if="error">{{ error }}</div>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>OrderItemId</th>
                  <th>OrderId</th>
                  <th>FoodItemId</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in dataSeries">
                  <td>{{ data.orderItemId }}</td>
                  <td>{{ data.orderId }}</td>
                  <td>{{ data.foodItemId }}</td>
                  <td>{{ data.quantity }}</td>
                  <td>{{ data.subtotal }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
                  const response = await axios.get(uri +"OrderItem")
                  this.dataSeries = await response.data
                  this.error = null
                  this.filteredData = this.dataSeries
                  
              } catch (ex) {
                  this.dataseries = []
                  this.error = ex.message
                  
              }
          },
    },
  
      
             
          
      
  };
    </script>
    
    <style>
</style>