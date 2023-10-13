
<template>
  <div class="food-item">
    <section class="jumbotron text-center scroll-animation vintage-jumbotron">
      <h1 class="pizza-title">Welcome to Our Pizzeria</h1>
      <p class="pizza-description">Discover the taste of Italy in every bite.</p>
      <a @click="scrollToMenu" class="btn btn-lg menu-button">View Menu</a>
    </section>  
    <div class="container ">
      <div v-if="showOrderModal" class="order-modal">
      <div class="order-modal-content">
        <h2>Order Food Item: {{ selectedFoodItem.name }}</h2>
        <p>Price: {{ selectedFoodItem.price }}</p>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input v-model.number="orderQuantity" type="number" id="quantity" class="form-control" />
        </div>
        <button @click="placeOrder()" class="btn btn-success">Order</button>
        <button @click="closeOrderModal()" class="btn btn-danger">Cancel</button>
      </div>
    </div>
    <section>
    <div ref="menuSection" class="menu-container">
      <h2 class="menu-title">Our Classic Menu</h2>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="menu-items">
        <div class="menu-item" v-for="data in filteredData" :key="data.foodItemId">
          <div class="menu-item-details">
            <h3 class="menu-item-name">{{ data.name }}</h3>
            <p class="menu-item-description">{{ data.description }}</p>
          </div>
          <div class="menu-item-action">
            <span class="menu-item-price">{{ data.price }}</span>
            <button @click="openOrderModal(data)" class="order-button">Order</button>
          </div>
        </div>
      </div>
    </div>
  </section>
      <section >
        <div class="card mb-4 scroll-animation vintage-card"> 
        <div class="card-body">
          <h2 class="card-title vintage-title">Search By Food Item</h2>
          <div class="input-group">
            <input placeholder="Search for delicious food..." type="text" v-model="name"  class="form-control">
            <div class="input-group-append">
              <button v-on:click="filterByFood(name)" class="btn btn-primary">Filter</button>
              <button v-on:click="getAllPosts()" class="btn btn-primary ">GetAll</button>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <section>
        <div class="card mb-4 scroll-animation vintage-card">
          <div class="card-body">
            <h2 class="card-title vintage-title">Add Food Item</h2>
            <div class="form-group">
              <label for="name" class="vintage-label">Name:</label>
              <input
                id="name"
                v-model="addData.name"
                class="vintage-input"
                placeholder="Enter name"
                type="text"
              />
            </div>
            <div class="form-group">
              <label for="description" class="vintage-label">Description:</label>
              <input
                id="description"
                v-model="addData.description"
                class="vintage-input"
                placeholder="Enter description"
              />
            </div>
            <div class="form-group">
              <label for="price" class="vintage-label">Price:</label>
              <input
                id="price"
                v-model.number="addData.price"
                class="vintage-input"
                placeholder="Enter price"
                type="number"
              />
            </div>
            <button @click="addFoodItem()" class="btn btn-success vintage-button">
              Add
            </button>
            <div class="vintage-message">{{ addMessage }}</div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="card mb-4 scroll-animation vintage-card">
          <div class="card-body">
            <h2 class="card-title vintage-title">Update Food Item</h2>
            <div class="form-group">
              <label for="updateId" class="vintage-label">ID:</label>
              <input
                id="updateId"
                v-model.number="updateData.foodItemId"
                placeholder="ID"
                type="number"
                class="vintage-input"
              />
            </div>
            <div class="form-group">
              <label for="updateName" class="vintage-label">Name:</label>
              <input
                id="updateName"
                v-model="updateData.name"
                placeholder="Name"
                type="text"
                class="vintage-input"
              />
            </div>
            <div class="form-group">
              <label for="updateDescription" class="vintage-label">Description:</label>
              <input
                id="updateDescription"
                v-model="updateData.description"
                placeholder="Description"
                class="vintage-input"
              />
            </div>
            <div class="form-group">
              <label for="updatePrice" class="vintage-label">Price:</label>
              <input
                id="updatePrice"
                v-model.number="updateData.price"
                placeholder="Price"
                type="number"
                class="vintage-input"
              />
            </div>
            <div class="text-center">
              <button @click="updateFoodItem()" class="btn btn-success vintage-button">
                Update
              </button>
            </div>
            <div class="vintage-message">{{ updateMessage }}</div>
          </div>
        </div>
      </section>

      
      <section>
        <div class="classic-card mb-4 scroll-animation">
          <div class="classic-card-body">
            <h2 class="classic-card-title">Delete FoodItem</h2>
            <input v-model.number="deleteId" class="classic-input" placeholder="ID" type="number" />
            <button @click="deleteFoodItem()" class="classic-button">Delete</button>
            <div v-if="error" class="classic-error">{{ error }}</div>
          </div>
        </div>
      </section>
        
    <!-- <section>
      <div class="menu-container">
        <h2 class="menu-title">Our Classic Menu</h2>
        <div v-if="error" class="error-message">{{ error }}</div>
        <div class="menu-items">
          <div class="menu-item" v-for="data in filteredData" :key="data.foodItemId">
            <div class="menu-item-details">
              <h3 class="menu-item-name">{{ data.name }}</h3>
              <p class="menu-item-description">{{ data.description }}</p>
            </div>
            <div class="menu-item-action">
              <span class="menu-item-price">{{ data.price }}</span>
              <button @click="placeOrder(data.foodItemId)" class="order-button">Order</button>
            </div>
          </div>
        </div>
      </div>
    </section> -->
     <!-- Order Quantity Modal -->


 
      
    </div>
  </div>
    
  </template>
  
  <style scoped >
  /* Apply styles to the entire template */
  .food-item {
    background-color: #f8e9d3; /* Vintage beige background color */
    font-family: 'Georgia', serif; /* Vintage font */
  }
  
  /* Style section headers */
  .card-title {
    font-size: 24px;
    color: #c84937; /* Vintage red color */
    margin-bottom: 20px;
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
/* CSS for the soothing ocean design */ 

.classic-card {
  background-color: #f8e6c5;
  border: 2px solid #d2a73d;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 3px 3px 6px #000;
}

.classic-card-title {
  font-family: 'Old Standard TT', serif;
  font-size: 28px;
  color: #7b583d;
}

.classic-input {
  border: 1px solid #7b583d;
  padding: 8px;
  font-family: 'Old Standard TT', serif;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px;
}

.classic-button {
  background-color: #d2a73d;
  color: white;
  border: none;
  padding: 10px 20px;
  font-family: 'Old Standard TT', serif;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.classic-button:hover {
  background-color: #7b583d;
}

.classic-error {
  color: #ff0000;
  font-family: 'Old Standard TT', serif;
  font-size: 16px;
  margin-top: 10px;
}

  /* Styles for the modal container */
  /* Styles for the modal container */
  .order-modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background overlay */
    z-index: 1000; /* Ensure it appears above other elements */
  }

  /* Styles for the modal content */
  .order-modal-content {
    background-color: #f7e5d3; /* Vintage cream color */
    border: 2px solid #d9bf8e; /* Vintage brown border */
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  /* Style the Quantity input */
  .form-group {
    margin-bottom: 20px;
  }

  /* Style the "Order" and "Cancel" buttons */
  .btn-success {
    background-color: #b87f41; /* Vintage brown button background */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  .btn-success:hover {
    background-color: #9a6e38; /* Darker brown on hover */
  }

  .btn-danger {
    background-color: #d2a73d; /* Classic gold button background */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
  }

  .btn-danger:hover {
    background-color: #7b583d; /* Darker gold on hover */
  }
.menu-container {
  background-color: #f5f5f5;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
}

.menu-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 45%;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.menu-item-details {
  text-align: left;
}

.menu-item-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.menu-item-description {
  font-size: 16px;
  margin-bottom: 10px;
}

.menu-item-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item-price {
  font-size: 20px;
  font-weight: bold;
}

.order-button {
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.order-button:hover {
  background-color: #ff4500;
}

  /* Style buttons */
  .btn {
    background-color: #c84937;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #963426; /* Darker red on hover */
  }
  
  /* Style the table */
  .table {
    font-family: 'Georgia', serif;
  }
  
  /* Add a vintage texture or background pattern if desired */
  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('vintage_texture.jpg');
    opacity: 0.2; /* Adjust opacity as needed */
    z-index: -1;
  }
  
  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .form-control {
      width: 100%;
    }
  }

  
  .scroll-animation{
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s, transform 1s;
  }
  
  .scroll-animation.show{
    opacity: 1;
    transform: translateY(0);
  }

  .jumbotron {
      background-image: url('images/pizza-background.jpg');
      background-size: cover;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Apply styles to the entire section */


/* Style the card */


/* Style the title */
.card-title {
  font-family: 'Georgia', serif; /* Vintage font */
  font-size: 24px;
  color: #c84937; /* Vintage red color */
  margin-bottom: 20px;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
  .custom-input {
    width: 100%;
  }
}

    .pizza-title {
      font-size: 3rem;
    }

    .pizza-description {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    .menu-button {
      background-color: #ff9900;
      color: #fff;
      border: none;
      padding: 15px 30px;
      font-size: 1.2rem;
      border-radius: 5px;
     table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: lightgrey;
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
            name: "",
            addData:{name: "", description: "", price: null },
            addMessage:"",
            updateData: {foodItemId: 0, name: "", description: "", price: 0},
            updateMessage:"",
            deleteId: 0,
            deleteMessage:"",
            showOrderModal: false,
            selectedFoodItem: null,
            orderQuantity: 0,
            
        }
    },
    
    async created() {
        console.log("created method called")
        this.helperGetPosts(baseUri)
    },
    mounted() {
    // Initialize Intersection Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Observe elements with the "scroll-animation" class
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach((el) => observer.observe(el));
  },
    methods: {
        getAllPosts() {
            this.helperGetPosts(baseUri);
        },
        async helperGetPosts(uri) {
            try {
                const response = await axios.get(uri +"FoodItem")
                this.dataSeries = await response.data
                this.error = null
                this.filteredData = this.dataSeries
                
            } catch (ex) {
                this.dataseries = []
                this.error = ex.message
                
            }
        },
        filterByFood(name) {
            console.log("name: "+name)
            this.filteredData = this.dataSeries.filter(f => f.name.toLowerCase().includes(name.toLowerCase()))
            console.log("Dataseries: "+this.dataSeries)
        },
        async addFoodItem(){
            try {
                let response = await axios.post(baseUri +"fooditem", this.addData)
                this.addMessage ="response" + response.status + " " + response.statusText
                this.addData = { name: "", description: "", price: null };
                this.getAllPosts()
            }
            catch (ex){
                alert(ex.message)
            }
        },
        async updateFoodItem(){
            const url = baseUri + "fooditem" + "/" + this.updateData.foodItemId
            try {
                let response = await axios.put(url, this.updateData)
                this.updateMessage = "response " + response.status + " " + response.statusText
                this.updateData =   {foodItemId: 0, name: "", description: "", price: 0}
                this.getAllPosts()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteFoodItem() {
            const deleteId = this.deleteId; // Get the deleteId from the component's data
            const url = baseUri + "fooditem" + "/" + deleteId;
            try {
                let response = await axios.delete(url);
                this.deleteMessage = "response " + response.status + " " + response.statusText;
                this.getAllPosts();
            } catch (ex) {
                alert(ex.message);
            }
        },
          // Open the order modal with the selected food item
        openOrderModal(foodItem) {
          this.selectedFoodItem = foodItem;
          this.showOrderModal = true;
        },

        // Close the order modal
        closeOrderModal() {
          this.showOrderModal = false;
          this.selectedFoodItem = null;
          this.orderQuantity = 1; // Reset the quantity input
        },

        // Place the order for the selected food item
        async placeOrder() {
          try {
            const orderData = [{
              foodItemId: this.selectedFoodItem.foodItemId,
              quantity: this.orderQuantity,
            }];
            console.log(this.selectedFoodItem)
            console.log("Order Data:", orderData); // Log the data being sent
            // Send a request to your backend API to create the order
            const response = await axios.post(baseUri + "order", orderData);
            
            // Handle the response (e.g., show success message)
            console.log("Order response:", response);
            
            // Close the order modal
            this.closeOrderModal();
          } catch (ex) {
            // Handle any errors (e.g., display an error message)
            console.error("Order error:", ex);
            alert("Failed to place the order.");
          }
        },
        scrollToMenu() {
          // Use Vue's $refs to get a reference to the menu section
          const menuSection = this.$refs.menuSection;

          // Check if the menu section exists
          if (menuSection) {
            // Use JavaScript's scrollIntoView method to scroll to the menu section
            menuSection.scrollIntoView({ behavior: "smooth" });
    }
  },

        

    
           
        
    }
};
</script>
