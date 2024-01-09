<template>
  <div>
    <div class="container">
      <header>
        <h1>Your Shopping Cart</h1>
        <div class="shopping" @click="openShopping">
          <img src="images/shopping.svg">
          <span class="quantity">{{ cartQuantity }}</span>
        </div>
      </header>

      <div class="list">
        <div v-for="(product, index) in filteredData" :key="product.foodItemId" class="item">
          <img :src="ImageSrc(index)" />
          <div class="title">{{ product.name }}</div>
          <div class="title">{{ product.description }}</div>
          <div class="price">{{ product.price.toLocaleString() }}</div>
          <button @click="addToCard(index)">Add To Cart</button>
        </div>
      </div>
    </div>

    <div class="card" v-if="isCardOpen">
      <h1>Card</h1>
      <ul class="listCard">
        <li v-for="(item, index) in listCards" :key="index">
          <div><img :src="item.image"/></div>
          <div>{{ item.name }}</div>
          <div>{{ item.description }}</div>
          <div>{{ item.price.toLocaleString() }}</div>
          <div>
            <button @click="changeQuantity(index, item.quantity - 1)">-</button>
            <div class="count">{{ item.quantity }}</div>
            <button @click="changeQuantity(index, item.quantity + 1)">+</button>
          </div>
        </li>
      </ul>
      <div class="checkOut">
        <div class="total">{{ total.toLocaleString() }} DKK</div>
        <div class="actionButtons">
          <div class="orderButton" @click="placeOrder">Order</div>
          <div class="closeShopping" @click="closeShopping">Close</div>
        </div>
      </div>
      <Toast :message="toastMessage" :isSuccess="isSuccessToast" :isError="isErrorToast" />
       <!-- Add Notification component here -->
    
    </div>
    <!-- <Notification :orderConfirmationMessage="orderConfirmationMessage" /> -->
  </div>
</template>

<script>
export const baseUri = "https://localhost:7159/api/"

import Notification from './Notification.vue';

import Toast from './Toasts.vue';
export default {
  components: {
    Toast,
    Notification,
    
  },
  data() {
    return {
      dataSeries : [],
      filteredData: [],
      listCards: [],
      error: null,
      isCardOpen: false,
      images: [         
            { src: "images/bug2.avif", alt: "1" },
            { src: "images/piz1.webp", alt: "2" },
            { src: "images/nod2.webp", alt: "3" },
            { src: "images/coke.jpg", alt: "4" },
            { src: "images/bug1.webp", alt: "5" },
            { src: "images/nod2.webp", alt: "6" },
        ],
      
      total: 0,
      toastMessage: '',
      isSuccessToast: false,
      isErrorToast: false,
      orderConfirmationMessage: '',
    };
  },
  async created() {
        // console.log("created method called")
        this.helperGetPosts(baseUri)
        // Add imageIndex property to each foodItem based on its index
        this.dataSeries.forEach((item, index) => {
        item.imageIndex = index;
    });
    },
  computed: {
    cartQuantity() {
      return this.listCards.reduce((acc, item) => acc + item.quantity, 0);
    },
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
  
        // filterByFood(name) {
        //     console.log("name: "+name)
        //     this.filteredData = this.dataSeries.filter(f => f.name.toLowerCase().includes(name.toLowerCase()))
        //     console.log("Dataseries: "+this.dataSeries)
        // },
    ImageSrc(index) {
      const foodItem = this.filteredData[index];

      // Use the image property directly if available
      if (foodItem && foodItem.image) {
          return foodItem.image;
      }

      // Find the corresponding image for the food item
      const foodItemImage = this.images.find(img => img.alt === foodItem.foodItemId.toString());

      if (foodItemImage) {
          return foodItemImage.src;
      }

      // Handle the case where the image source is not available.
      // You can return a default image source or an empty string.
      return '';
    },        
    openShopping() {
    // Check if there are items in the cart before opening it
      if (this.listCards.length > 0) {
        this.isCardOpen = true;
        document.body.classList.add('active'); // Add the 'active' class to the body
      }
    },
    closeShopping() {
      this.isCardOpen = false;
      document.body.classList.remove('active'); // Remove the 'active' class from the body
    },
    addToCard(index) {
      const foodItem = this.filteredData[index];
      const foodItemImage = this.images.find(img => img.alt === foodItem.foodItemId.toString());

      if (!this.listCards.some(item => item.foodItemId === foodItem.foodItemId)) {
        this.listCards.push({
          ...foodItem,
          quantity: 1,
          image: foodItemImage ? foodItemImage.src : '',
        });
      } else {
        const existingItem = this.listCards.find(item => item.foodItemId === foodItem.foodItemId);
        existingItem.quantity++;
      }

      this.reloadCard();
    },
    reloadCard() {
      this.total = this.listCards.reduce((acc, item) => acc + item.price, 0);
    },
    changeQuantity(index, quantity) {
      if (quantity === 0) {
        this.listCards.splice(index, 1);
      } else {
        const item = this.listCards[index];
        item.quantity = quantity;
        item.price = quantity * this.filteredData[index].price;
      }

      this.reloadCard();
    }, 
    async placeOrder() {
      try {
        const token = localStorage.getItem('token'); // Replace with your actual access token

        // Check if the cart is empty
        if (this.listCards.length === 0) {
          alert('Your cart is empty. Add items before placing an order.');
          this.showToast('Your cart is empty. Add items before placing an order.', false, true);
          return;
        }

        // Prepare the order data based on your cart items
        const orderData = this.listCards.map(item => ({
          foodItemId: item.foodItemId,
          quantity: item.quantity,
        }));

        // Make the API request
        const response = await axios.post(`${baseUri}Order`, orderData, {
          headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('order data:',  orderData);

        // Handle the response accordingly
        if (response.status === 200) {
          console.log('Order placed successfully!');
          this.showToast('Order placed successfully!', true, false);
          
         // Store the order confirmation message in local storage
         localStorage.setItem('orderConfirmationMessage', this.orderConfirmationMessage);

             // Set the orderConfirmationMessage based on your logic
          this.orderConfirmationMessage = `Hi, you have ordered ${this.getOrderedItems()} for ${this.total.toLocaleString()} DKK.`;
          console.log(this.orderConfirmationMessage);
          localStorage.setItem('orderConfirmationMessage', this.orderConfirmationMessage);

          //  clear the cart or perform other actions upon successful order placement
          this.clearCart();

        } else {
          console.error('Order placement failed:', response.data);
          this.showToast('Order placement failed. Please try again.', false, true);
          // Handle the error response
        }
        } catch (error) {
          console.error('Error placing order:', error);
          this.showToast('Error placing order. Please try again.', false, true);
          // Handle the error
        }
    },
    showToast(message, isSuccess, isError) {
      this.toastMessage = message;
      this.isSuccessToast = isSuccess;
      this.isErrorToast = isError;

      // Reset toast properties after a delay (adjust the delay as needed)
      setTimeout(() => {
        this.toastMessage = '';
        this.isSuccessToast = false;
        this.isErrorToast = false;
      }, 3000); // Adjust the delay in milliseconds (e.g., 3000 for a 3-second delay)
    },
    clearCart() {
    // Clear the cart by resetting the listCards array
    this.listCards = [];

    // Reset the total to zero
    this.total = 0;

   
  },
  getOrderedItems() {
    // Create a string listing the ordered items and quantities
    return this.listCards.map(item => `${item.quantity} ${item.name}`).join(', ');
  },
  },
};
</script>

<style scoped>

/* Your styles here */
body{
    background-color: #2a8ba3;
    font-family: system-ui;
}
.container{
    width: 1000px;
    margin: auto;
    transition: 0.5s;
}
header{
    display: grid;
    grid-template-columns: 1fr 50px;
    margin-top: 50px;
}
header .shopping{
    position: relative;
    text-align: right;
}
header .shopping img{
    width: 40px;
}
header .shopping span{
    background: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    top: -5px;
    left: 80%;
    padding: 3px 10px;
}
.list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 50px;
}
.list .item{
    text-align: center;
    background-color: #DCE0E1;
    padding: 20px;
    box-shadow: 0 50px 50px #757676;
    letter-spacing: 1px;
}
.list .item img{
    width: 90%;
    height: 430px;
    object-fit: cover;
}
.list .item .title{
    font-weight: 600;
}
.list .item .price{
    margin: 10px;
}
.list .item button{
    background-color: #1C1F25;
    color: #fff;
    width: 100%;
    padding: 10px;
}
.card{
    position: fixed;
    top:0;
    left: 100%;
    width: 500px;
    background-color: #453E3B;
    height: 100vh;
    transition: 0.5s;
}
.active .card{
    left: calc(100% - 500px);
}
.active .container{
   transform: translateX(-200px);
}
.card h1{
    color: #E8BC0E;
    font-weight: 100;
    margin: 0;
    padding: 0 20px;
    height: 80px;
    display: flex;
    align-items: center;
}
.card .checkOut{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}
.card .checkOut div{
    background-color: #E8BC0E;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
}
.card .checkOut div:nth-child(2){
    background-color: #1C1F25;
    color: #fff;
}
.listCard li{
    display: grid;
    grid-template-columns: 100px repeat(3, 1fr);
    color: #fff;
    row-gap: 10px;
}
.listCard li div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.listCard li img{
    width: 90%;
}
.listCard li button{
    background-color: #fff5;
    border: none;
}
.listCard .count{
    margin: 0 10px;
}
.card .checkOut {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex; /* Use flex display for better alignment */
    justify-content: space-between; /* Distribute items to the ends */
}

.card .checkOut .total {
    background-color: #1C1F25; /* Set a background color for better visibility */
    color: #E8BC0E; /* Set the text color to yellow */
    width: 33.33%; /* Adjust the width as needed */
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
}

.card .checkOut .actionButtons {
    display: flex;
    width: 66.66%; /* Adjust the width as needed */
}

.card .checkOut .orderButton {
    background-color: #E8BC0E; /* Set the button color */
    color: #1C1F25; /* Set the button text color */
    width: 50%; /* Adjust the width as needed */
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
}

.card .checkOut .closeShopping {
    background-color: #1C1F25;
    color: #fff;
    width: 50%; /* Adjust the width as needed */
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
}
</style>
