<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card signup-card">
          <div class="card-body">
            <div class="signup-container">
              <div class="left-pane">
                <img class="logo" src="images/SignUpjpg.jpg" alt="signup logo">
                <h1 class="signup-title">Signup Here</h1>
                <form @submit.prevent="addCustomers" class="register">
                  <div class="form-group">
                    <label for="username">Enter Name</label>
                    <input v-model="addData.username" id="username" type="text" class="form-control vintage-input" placeholder="Enter Name">
                  </div>
                  <div class="form-group">
                    <label for="password">Enter Password</label>
                    <input v-model="addData.password" id="password" type="password" class="form-control vintage-input" placeholder="Enter Password">
                  </div>
                  <div class="form-group">
                    <label for="email">Enter Email</label>
                    <input v-model="addData.email" id="email" type="text" class="form-control vintage-input" placeholder="Enter Email">
                  </div>
                  <button type="submit" class="btn btn-success vintage-button">Sign Up</button>
                </form>
                <div class="vintage-message">{{ addMessage }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card bg-light secondary-card">
          <div class="card-body">
            <div class="secondary-container">
              <h1 class="help">See What Our Customer are saying?</h1>
              <ul class="list-style">
                <li>
                  <div class="customer-review">
                    <img src="images/customer1.jpg" alt="Customer 1" class="customer-avatar">
                    <p class="customer-comment">"Hugh Burgers love it!"</p>
                  </div>
                </li>
                <li>
                  <div class="customer-review">
                    <img src="images/customer2.jpg" alt="Customer 2" class="customer-avatar">
                    <p class="customer-comment">"Highly recommend this place."</p>
                  </div>
                </li>
                <li>
                  <div class="customer-review">
                    <img src="images/customer3.jpg" alt="Customer 3" class="customer-avatar">
                    <p class="customer-comment">"East or West noodles here is the best."</p>
                  </div>
                </li>
                <li>
                  <div class="customer-review">
                    <img src="images/customer4.jpg" alt="Customer 4" class="customer-avatar">
                    <p class="customer-comment">"This is favourite place for my kid."</p>
                  </div>
                </li>
                <li class="contact-heading">Contact our customer service center here </li>
                <li>
                  <div class="contact-info">
                    <p>Phone: 123-456-7890</p>
                    <p>Email: pizzeria@roskilde.com</p>
                  </div>
                </li>
              </ul>
              <a href="/contactUs" class="btn btn-success contact-button">Contact Us</a>
              <li class="subscribe-heading">Subscribe to our newsletter for updates.</li>
              <a href="#" class="btn btn-primary subscribe-button">Subscribe to Newsletter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <style scoped>
  
    .signup-card,
    .secondary-card{
      height : 100%
    }
    .signup-container {
      
      grid-template-columns: 1fr 1fr; /* Split into two columns */
      justify-content: center;
      align-items: center;
      height: 87vh;
      background-color: #f8e9d3;
      padding : 20px;
      flex: 1;
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }  
    .left-pane{
      display: flex;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    }
  
    .logo {
      width: 100px;
      margin-bottom: 10px;
    }
  
    .signup-title {
      color: #b87f41; /* Vintage brown title color */
      font-family: 'Dancing Script', cursive; /* Vintage-style font */
      font-size: 24px;
    }
  
    .register {
      text-align: center;
    }
    /* Style for the help pane */
  .help {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
    .vintage-input {
      display:block;
      border: 1px solid #b87f41; /* Vintage brown input border */
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 20px;
      width: 300px;
      font-size: 16px;
    }
  
    .vintage-button {
      background-color: #b87f41; /* Vintage brown button background */
      color: #fff; /* White text color */
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
    }
  
    .vintage-button:hover {
      background-color: #9a6e38; /* Darker brown on hover */
    }
  
    .vintage-message {
      color: #b87f41; /* Vintage brown message color */
      font-weight: bold;
      font-size: 16px;
      margin-top: 10px;
    }

    .secondary-container{
      background: #f8e6c5;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .help {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
   /* Style for the contact heading */
   .contact-heading {
    font-weight: bold;
    color: #b87f41; /* Vintage brown title color */
    margin-top: 20px;
  }

  /* Style for the contact button */
  .contact-button {
    background-color: #b87f41; /* Vintage brown button background */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

  .contact-button:hover {
    background-color: #9a6e38; /* Darker brown on hover */
  }

  /* Style for the subscribe heading */
  .subscribe-heading {
    font-weight: bold;
    color: #b87f41; /* Vintage brown title color */
    margin-top: 20px;
  }

  /* Style for the subscribe button */
  .subscribe-button {
    background-color: #007bff; /* Vintage brown button background */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

  .subscribe-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  .customer-review {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #b87f41; /* Vintage brown title color */
    font-family: 'Dancing Script', cursive; /* Vintage-style font */
    text-align: center;
  }

  .customer-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .customer-comment {
    font-size: 16px;
    color: #333;
  }


  .contact-info {
    text-align: center;
    margin-top: 20px;
  }

  .contact-info p {
    margin-bottom: 5px;
    color: #333;
    font-family: 'Dancing Script', cursive; /* Vintage-style font */
    text-align: center;

  }

  .list-style li {
    list-style: none;
    padding-left: 0;
    margin-bottom: 10px;
    color: #333;
  }
  </style>
  

<script>
import axios from 'axios';
const baseUri = "https://localhost:7159/api/"

export default {
  data() {
    return {
      dataSeries: [],
      filteredData: [],
      error: null,
      addData: { name: "", password: "", email: "" },
      addMessage: ""
    };
  },
  
  async created() {
    console.log("created method called");
    this.helperGetPosts(baseUri);
  },
  
  methods: {
    getAllPosts() {
      this.helperGetPosts(baseUri);
    },
    
    async helperGetPosts(uri) {
      try {
        const response = await axios.get(uri + "OrderItem");
        this.dataSeries = await response.data;
        this.error = null;
        this.filteredData = this.dataSeries;
      } catch (ex) {
        this.dataseries = [];
        this.error = ex.message;
      }
    },
    
    async addCustomers() {
      try {
        console.log("Adding customer data:", this.addData); // Log the data being sent
        const response = await axios.post(baseUri + "User", this.addData);
        console.log("Add customer response:", response); // Log the response from the server
        this.addMessage = "Response " + response.status + " " + response.statusText;
        this.getAllPosts();
        this.addData = { name: "", password: "", email: "" };
      } catch (ex) {
        alert(ex.message);
      }
    }
  }
};
</script>

<!-- <style scoped>
.signup-container {
  background-color: black; /* Match your homepage background color */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white; /* Text color */
}

.logo {
  width: 100px;
  margin-bottom: 10px;
}

.register {
  text-align: center;
}

.register input {
  display: block;
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  border: 1px solid skyblue;
  background-color: transparent; /* Make input fields transparent */
  color: white; /* Text color */
}

.register button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}

.register button:hover {
  background: #007bff; /* Change button background color on hover */
}
</style> -->
