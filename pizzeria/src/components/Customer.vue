<template>
  <div class="restaurant-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="restaurant-title">Gastronomic Wonderland</h1>
        <p class="restaurant-description">Embark on a culinary journey like never before.</p>
      </div>
    </section>

    <section class="customer-list-section">
      <div class="customer-list">
        <div v-if="error" class="error-message">{{ error }}</div>
        <div class="customer-item" v-for="data in filteredData" :key="data.userId">
          <div class="customer-details">
            <h2 class="customer-name">{{ data.username }}</h2>
            <p class="customer-info">ID: {{ data.userId }}</p>
            <p class="customer-info">Email: {{ data.email }}</p>
            <p class="customer-info">Subscription: {{ data.subscriptionId }}</p>
          </div>
        </div>
      </div>
    </section>

    

    <section class="add-update-section">
      <!-- Filter Customer Form -->
      <div class= "filter-delete-container">
        <div class="customer-form">
        <h3 class="section-title">Find Your Customer</h3>
        <form @submit.prevent="filterByName">
          <div class="form-group">
            <label for="filterUsername" class="form-label">Customer Name:</label>
            <input v-model="filteredData.name" type="text" class="form-input" />
          </div>
          <button type="submit" class="btn btn-primary">Find Customer</button>
          <button @click="getAllPosts" class="btn btn-info">Get All Customers</button>
        </form>
      </div>

      <!-- Delete Customer Form -->
      <div class="customer-form">
        <h3 class="section-title">Delete Customer</h3>
        <form @submit.prevent="deleteCustomer">
          <div class="form-group">
            <label for="deleteCustomerId" class="form-label">Customer ID:</label>
            <input v-model="deleteData.customerId" type="text" class="form-input" />
          </div>
          <button type="submit" class="btn btn-danger">Delete Customer</button>
          <div class="error-message">{{ deleteMessage }}</div>
        </form>
      </div>
      </div>
      <div class="add-update-container">
        <div class="add-customer-section">
          <h2 class="section-title">Savor New Delights</h2>
          <div class="customer-form">
            <form @submit.prevent="addCustomers">
              <div class="form-group">
                <label for="username" class="form-label">Customer Name:</label>
                <input v-model="addData.username" placeholder="Enter Name" type="text" class="form-input" />
              </div>
              <div class="form-group">
                <label for="password" class="form-label">Password:</label>
                <input v-model="addData.password" placeholder="Enter Password" type="password" class="form-input" />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email:</label>
                <input v-model="addData.email" placeholder="Enter Email" type="email" class="form-input" />
              </div>
              <button type="submit" class="btn btn-success">Add Customer</button>
              <div class="success-message">{{ addMessage }}</div>
            </form>
          </div>
        </div>
        <div class="update-customer-section">
          <h2 class="section-title">Elevate Your Palate</h2>
          <div class="customer-form">
            <form @submit.prevent="updateCustomer">
              <div class="form-group">
                <label for="customerId" class="form-label">Customer ID:</label>
                <input v-model.number="updateData.customerId" placeholder="Enter ID" type="number" class="form-input" />
              </div>
              <div class="form-group">
                <label for="updateUsername" class="form-label">New Name:</label>
                <input v-model="updateData.username" placeholder="Enter New Name" type="text" class="form-input" />
              </div>
              <div class="form-group">
                <label for="updatePassword" class="form-label">New Password:</label>
                <input v-model="updateData.password" placeholder="Enter New Password" type="password" class="form-input" />
              </div>
              <div class="form-group">
                <label for="updateEmail" class="form-label">New Email:</label>
                <input v-model="updateData.email" placeholder="Enter New Email" type="email" class="form-input" />
              </div>
              <button type="submit" class="btn btn-success">Update Customer</button>
              <div class="success-message">{{ updateMessage }}</div>
            </form>
          </div>
        </div>
      </div>      
    </section>
  </div>
</template>

<style scoped>
  /* Apply advanced CSS styles for an attractive design */
  .restaurant-container {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #ffafbd, #ffc3a0);
    color: #4a4e69;
    text-align: center;
  }

  .hero-section {
    padding: 100px 0;
    background: linear-gradient(to right, #a18cd1, #fbc2eb);
    color: #ffffff;
  }

  .restaurant-title {
    font-size: 3em;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .restaurant-description {
    font-size: 1.5em;
  }

  .customer-list-section {
    padding: 50px 0;
  }

  .customer-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
  }

  .customer-item {
    background: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }

  .customer-details {
    padding: 20px;
  }

  .customer-name {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .customer-info {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 8px;
  }

  .search-section {
    background: #f3e9d2;
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.5em;
    color: #4a4e69;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-input {
    width: 100%;
    padding: 15px;
    font-size: 1em;
    border: none;
    border-bottom: 2px solid #4a4e69;
    margin-bottom: 20px;
    background: transparent;
    color: #4a4e69;
  }

  .search-buttons button {
    font-size: 1em;
    padding: 15px 30px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .search-buttons button:first-child {
    background-color: #f76c6c;
    color: #ffffff;
  }

  .search-buttons button:last-child {
    background-color: #4a4e69;
    color: #ffffff;
  }

  .add-update-section {
    background: #ffffff;
    padding: 100px 0;
  }

  .add-update-container {
    display: flex;
    justify-content: space-around;
    gap: 50px;
  }

  .customer-form {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .customer-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  .form-label {
    font-size: 1.2em;
    margin-bottom: 10px;
    display: block;
  }

  .form-input {
    width: 100%;
    padding: 15px;
    font-size: 1em;
    border: none;
    border-bottom: 2px solid #4a4e69;
    margin-bottom: 20px;
    background: transparent;
    color: #4a4e69;
  }

  .btn-success {
    background-color: #2ecc71;
    color: #ffffff;
  }
  .add-update-section {
    background: #ffffff;
    padding: 100px 0;
  }

  .add-update-container {
    display: flex;
    justify-content: space-around;
    gap: 50px;
  }

  .filter-delete-container {
    display: flex;
    justify-content: space-around;
    gap: 50px;
    margin-top: 50px; /* Adjust as needed */
  }

  .customer-form {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .filter-delete-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }

  /* Style for Find Customer button */
  
  
</style>
 

<script>
   const baseUri = "https://localhost:7159/api/"
  export default {
    data()
     {
        return {
            dataSeries : [],
            filteredData: [],
            error: null,
            addData: {name: "", password: "", email: ""},
            addMessage: "",
            updateData: {customerId: 0, name: "", password: "", email: ""},
            updateMessage:"",
            deleteData: { customerId : null},
            deleteMessage: "",






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
                const response = await axios.get(uri +"User")
                this.dataSeries = await response.data
                this.error = null
                this.filteredData = this.dataSeries
                
            } catch (ex) {
                this.dataseries = []
                this.error = ex.message
                
            }
        },
                filterByName() {
            // Update the filter to use filteredData.name
            this.filteredData = this.dataSeries.filter(f => f.username.includes(this.filteredData.name));
        },
        async addCustomers() {
          try {
            console.log("Adding customer data:", this.addData); // Log the data being sent
            const response = await axios.post(baseUri + "User", this.addData);
            console.log("Add customer response:", response); // Log the response from the server
            this.addMessage = "Response " + response.status + " " + response.statusText;
            this.getAllPosts();
          } catch (ex) {
            alert(ex.message);
          }
        },
        async deleteCustomer() {
          try {
            const authToken = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${authToken}` };
            const response = await axios.delete(baseUri + `user/${this.deleteData.customerId}`,{ headers });
            this.dataSeries = this.dataSeries.filter(
              (customer) => customer.customerId !== this.deleteData.customerId
            );
            this.deleteMessage = "response " + response.status + " " + response.statusText;
            this.getAllPosts();
          } catch (ex) {
            this.error = ex.message;
          }
        },

        async updateCustomer() {
          const url = baseUri + "user" + "/" + this.updateData.customerId;
          try {
            console.log("Updating customer data:", this.updateData); // Log the data being sent
            const response = await axios.put(url, this.updateData);
            console.log("Update customer response:", response); // Log the response from the server
            this.updateMessage = "response " + response.status + " " + response.statusText;
            this.updateData = {customerId: 0, name: "", password: "", email: ""};
            this.getAllPosts();
          } catch (ex) {
            alert(ex.message);
          }
        }

    }
  }
</script>