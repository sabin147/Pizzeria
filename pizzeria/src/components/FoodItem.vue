
<template>
  <div class="restaurant-container">
    <header class="hero-section">
      <h1 class="restaurant-title">Exquisite Flavors</h1>
      <p class="restaurant-subtitle">Indulge in a Culinary Journey</p>
      <button @click="scrollToMenu" class="btn btn-lg explore-menu">Explore Menu</button>
    </header>

    <section class="menu-section">
      <div class="menu-search">
        <input placeholder="Search for delicious dishes..." type="text" v-model="name" class="form-control" />
        <button @click="filterByFood(name)" class="btn btn-primary">Search</button>
        <button @click="getAllPosts()" class="btn btn-primary">Show All</button>
      </div>

      <div class="menu-grid">
        <div v-for="(data, index) in filteredData" :key="data.foodItemId" class="menu-item">
          <img :src="getImageSrc(index)" alt="Food Image" class="food-image" />
          <div class="menu-item-details">
            <h3 class="menu-item-name">{{ data.name }}</h3>
            <p class="menu-item-description">{{ data.description }}</p>
            <p class="menu-item-price"><span>{{ data.price }}</span> <button @click="openOrderModal(data)" class="btn btn-outline-dark">Order</button></p>
          </div>
        </div>
      </div>
    </section>

    <div v-if="showOrderModal" class="order-modal">
      <div class="order-modal-content">
        <h2>Order {{ selectedFoodItem.name }}</h2>
        <p>Price: {{ selectedFoodItem.price }}</p>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input v-model.number="orderQuantity" type="number" id="quantity" class="form-control" />
        </div>
        <button @click="placeOrder()" class="btn btn-success">Order Now</button>
        <button @click="closeOrderModal()" class="btn btn-danger">Cancel</button>
      </div>
    </div> 

      <section class="admin-section">
        <div class="card mb-4 scroll-animation vintage-add-form">
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

      <section class="admin-section">
        <div class="card mb-4 scroll-animation vintage-update-form">
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
        <div class="admin-section">
          <div class="classic-card mb-4 scroll-animation classic-delete-form">
            <h2 class="classic-card-title">Delete FoodItem</h2>
            <input v-model.number="deleteId" class="classic-input" placeholder="ID" type="number" />
            <button @click="deleteFoodItem()" class="classic-button">Delete</button>
            <div v-if="error" class="classic-error">{{ error }}</div>
          </div>
        </div>
      </section>      
    </div>
</template>


<style scoped>
  /* Reset some default styles */
  body, html {
    margin: 0;
    padding: 0;
  }

  /* Apply a modern and elegant overall style */
  .restaurant-container {
    font-family: 'Poppins', sans-serif;
    color: #333;
    background-color: #f9f9f9;
  }

  /* Hero Section Styles */
  .hero-section {
    background-image: url('images/piz1.webp');
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 100px 0;
  }

  .restaurant-title {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .restaurant-subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .explore-menu {
    background-color: #ff6600;
    color: #fff;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Menu Section Styles */
  .menu-section {
    padding: 50px 20px;
  }

  .menu-search {
    text-align: center;
    margin-bottom: 30px;
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .menu-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .menu-item:hover {
    transform: scale(1.05);
  }

  .food-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .menu-item-details {
    text-align: left;
  }

  .menu-item-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .menu-item-description {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .menu-item-price {
    font-size: 1.2rem;
    font-weight: bold;
  }

  /* Order Modal Styles */
  .order-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .order-modal-content {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  /* Admin Section Styles */
  .admin-section {
    padding: 50px;
    background-color: #f9f9f9;
  }

  /* ... (your existing styles for admin forms) ... */

  /* Global Button Styles */
  .btn {
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn:hover {
    filter: brightness(90%);
  }
  .vintage-add-form {
    background-color: #f7e5d3; /* Vintage cream color */
    border: 2px solid #d9bf8e; /* Vintage brown border */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }

  .vintage-add-form:hover {
    transform: scale(1.05);
  }

  /* Update Food Item Form */
  .vintage-update-form {
    background-color: #f7e5d3;
    border: 2px solid #d9bf8e;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }

  .vintage-update-form:hover {
    transform: scale(1.05);
  }

  /* Delete Food Item Form */
  .classic-delete-form {
    background-color: #f8e6c5;
    border: 2px solid #d2a73d;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 3px 3px 6px #000;
    transition: transform 0.3s ease-in-out;
  }

  .classic-delete-form:hover {
    transform: scale(1.05);
  }

  /* Shared Styles for Forms */
  .form-title {
    font-size: 24px;
    color: #b87f41; /* Vintage brown title color */
    margin-bottom: 20px;
  }

  .vintage-label {
    color: #b87f41; /* Vintage brown label color */
  }

  .vintage-input {
    border: 1px solid #b87f41; /* Vintage brown input border */
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
  }

  .vintage-button {
    background-color: #b87f41; /* Vintage brown button background */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
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
          selectedSubscription: null,
          images: [         
          { src: "images/bug2.avif", alt: "1" },
          { src: "images/piz1.webp", alt: "2" },
          { src: "images/nod2.webp", alt: "3" },
          { src: "images/coke.jpg", alt: "4" },
          { src: "images/bug1.webp", alt: "5" },
          { src: "images/nod2.webp", alt: "6" },
      ]
         
          
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
              // Retrieve the token from local storage
            const token = localStorage.getItem('token');

            // Set up the request headers with the bearer token
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', // Adjust content type if needed
            };

          const orderData = [{
            foodItemId: this.selectedFoodItem.foodItemId,
            quantity: this.orderQuantity,
          }];
          console.log(this.selectedFoodItem)
          console.log("Order Data:", orderData); // Log the data being sent
          // Send a request to your backend API to create the order
          const response = await axios.post(baseUri + "order", orderData, {headers});
          
          // Handle the response (e.g., show success message)
          console.log("Order response:", response);
          
          // Close the order modal
          this.closeOrderModal();
        } catch (ex) {
          // Handle any errors (e.g., display an error message)
          console.error("Order error:", ex);
          alert("You must login to place an order");
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
    // Handle the subscription selection event
    handleSubscriptionSelected(subscriptionId) {
      this.selectedSubscription = subscriptionId;
      this.updateFoodItems();
    },

    // Update food items based on the selected subscription
    async updateFoodItems() {
      if (this.selectedSubscription !== null) {
        try {
          const response = await axios.get(baseUri + `fooditems/${this.selectedSubscription}`);
          this.filteredData = await response.data;
          this.error = null;
        } catch (ex) {
          this.filteredData = [];
          this.error = ex.message;
        }
      }
    },
    getImageSrc(index) {
  if (this.images && this.images.length > index && this.images[index].src) {
    return this.images[index].src;
  }
  // Handle the case where the image source is not available.
  // You can return a default image source or an empty string.
  return 'default-image-source.jpg';
},

},
};
</script>
  

