<template>
  <div class="customer-container">
    <section class="jumbotron text-center scroll-animation vintage-jumbotron">
      <h1 class="pizza-title">Welcome to Our Customer Page</h1>
      <p class="pizza-description">Find and manage your customers here.</p>
    </section>

    <div class="container">
      <section>
        <div class="card mb-4 scroll-animation vintage-card">
          <div class="card-body">
            <h2 class="card-title vintage-title">Search by Name</h2>
            <div class="input-group">
              <input placeholder="Name" type="text" class="form-control" v-model="name">
              <div class="input-group-append">
                <button v-on:click="filterByName(name)" class="btn btn-primary">Filter</button>
                <button v-on:click="getAllPosts()" class="btn btn-primary">GetAll</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="card mb-4 scroll-animation vintage-card">
          <div class="card-body">
            <h2 class="card-title vintage-title">Add Customer</h2>
            <div class="form-group">
              <label for="username" class="vintage-label">Customer Name:</label>
              <input v-model="addData.username" placeholder="Customer Name" type="text" class="vintage-input" />
            </div>
            <div class="form-group">
              <label for="password" class="vintage-label">Password:</label>
              <input v-model="addData.password" placeholder="Password" type="password" class="vintage-input" />
            </div>
            <div class="form-group">
              <label for="email" class="vintage-label">Email:</label>
              <input v-model="addData.email" placeholder="Email" type="email" class="vintage-input" />
            </div>
            <button v-on:click="addCustomers()" class="btn btn-success vintage-button">Add</button>
            <div class="vintage-message">{{ addMessage }}</div>
          </div>
        </div>
      </section>

      <section>
        <div class="card mb-4 scroll-animation vintage-card">
          <div class="card-body">
            <h2 class="card-title vintage-title">Update Customer</h2>
            <div class="form-group">
              <label for="customerId" class="vintage-label">Customer ID:</label>
              <input v-model.number="updateData.customerId" placeholder="ID" type="number" class="vintage-input" />
            </div>
            <div class="form-group">
              <label for="updateUsername" class="vintage-label">Customer Name:</label>
              <input v-model="updateData.username" placeholder="Customer Name" type="text" class="vintage-input" />
            </div>
            <div class="form-group">
              <label for="updatePassword" class="vintage-label">Password:</label>
              <input v-model="updateData.password" placeholder="Password" type="password" class="vintage-input" />
            </div>
            <div class="form-group">
              <label for="updateEmail" class="vintage-label">Email:</label>
              <input v-model="updateData.email" placeholder="Email" type="email" class="vintage-input" />
            </div>
            <div class="text-center">
              <button v-on:click="updateCustomer()" class="btn btn-success vintage-button">Update</button>
            </div>
            <div class="vintage-message">{{ updateMessage }}</div>
          </div>
        </div>
      </section>

      <section>
        <div class="classic-card mb-4 scroll-animation">
          <div class="classic-card-body">
            <h2 class="classic-card-title">List of Customers</h2>
            <div v-if="error" class="classic-error">{{ error }}</div>
            <div class="menu-items">
              <div class="menu-item" v-for="data in filteredData" :key="data.userId">
                <div class="menu-item-details">
                  <h3 class="menu-item-name">{{ data.username }}</h3>
                  <p class="menu-item-description">Customer ID: {{ data.userId }}</p>
                  <p class="menu-item-description">Email: {{ data.email }}</p>
                  <!-- Add more customer information here as needed -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  /* Apply styles to the entire template */
  .customer-container {
    background-color: #f8e9d3; /* Vintage beige background color */
    font-family: 'Georgia', serif; /* Vintage font */
  }

  /* Style input fields */
  .form-control {
    border: 3px solid #c84937;
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
  }

  /* Custom styles for the vintage restaurant look */
  .vintage-card {
    background-color: #f7e5d3; /* Vintage cream color */
    border: 2px solid #d9bf8e; /* Vintage brown border */
    border-radius: 10px;
    padding: 20px;
  }

  .vintage-title {
    color: #b87f41; /* Vintage brown title color */
    font-family: 'Dancing Script', cursive; /* Vintage-style font */
    text-align: center;
  }

  .vintage-label {
    color: #b87f41; /* Vintage brown label color */
  }

  .vintage-input {
    border: 1px solid #b87f41; /* Vintage brown input border */
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }

  .vintage-button {
    background-color: #b87f41; /* Vintage brown button background */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }

  .vintage-button:hover {
    background-color: #9a6e38; /* Darker brown on hover */
  }

  .vintage-message {
    color: #b87f41; /* Vintage brown message color */
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }

  /* Styles for the classic card */
  .classic-card {
    background-color: #f8e6c5;
    border: 2px solid #d2a73d;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  }

  .classic-card-title {
    color: #d2a73d;
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
  }

  .classic-error {
    color: #ff0000;
    font-weight: bold;
    margin-top: 10px;
  }

  /* Style the menu items (customers) */
  .menu-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .menu-item {
    border: 2px solid #d2a73d;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    text-align: center;
    background-color: #f8e6c5;
  }

  .menu-item-name {
    font-weight: bold;
    font-size: 20px;
  }

  .menu-item-description {
    font-size: 16px;
  }

  /* Apply animation to scroll down button */
  .scroll-animation {
    animation: fadeInUp 1.5s ease;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
            updateMessage:""

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
        filterByName(name) {
            console.log("name: "+name)
            this.filteredData = this.dataSeries.filter(f => f.username.toLowerCase().includes(name.toLowerCase()))
            console.log("Dataseries: "+this.dataSeries)
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

        async updateCustomer() {
          const url = baseUri + "user" + "/" + this.updateData.customerId;
          try {
            console.log("Updating customer data:", this.updateData); // Log the data being sent
            const response = await axios.put(url, this.updateData);
            console.log("Update customer response:", response); // Log the response from the server
            this.updateMessage = "Response " + response.status + " " + response.statusText;
            this.updateData = {customerId: 0, name: "", password: "", email: ""};
            this.getAllPosts();
          } catch (ex) {
            alert(ex.message);
          }
        }

    }
  }
</script>

<!-- <style scoped>
  .container {
    background-color: black;
    color: white;
    padding: 20px;
  }

  .card {
    background-color: #333;
    color: white;
    margin-bottom: 20px;
  }

  .card-title {
    color: white;
  }

  .form-control {
    background-color: #444;
    color: white;
  }

  .btn-primary,
  .btn-success {
    background-color: #007bff;
    color: white;
  }
</style> -->
