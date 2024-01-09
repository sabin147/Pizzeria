<template>
  <div class="restaurant-container">
    <div class="reservation-form">
      <h1 class="luxury-title">Reservation Form</h1>
      <div class="form-group">
        <label for="guestName" class="luxury-label">Guest Name: *</label>
        <input type="text" v-model="guestName" class="luxury-input" required />
      </div>

      <fieldset>
        <legend class="luxury-label">Dining Preference</legend>
        <div class="preference-options">
          <label>
            <input type="radio" name="preference" value="private" v-model="preference" />
            Private Dining
          </label>
          <label>
            <input type="radio" name="preference" value="terrace" v-model="preference" />
            Terrace View
          </label>
        </div>
      </fieldset>

      <div class="form-group">
        <label for="occasion" class="luxury-label">Occasion:</label>
        <textarea v-model="occasion" class="luxury-input" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label for="contactEmail" class="luxury-label">Contact Email:</label>
        <input type="email" v-model="contactEmail" class="luxury-input" />
      </div>

      <div class="form-group">
        <label for="contactNumber" class="luxury-label">Contact Number:</label>
        <input type="tel" v-model="contactNumber" class="luxury-input" />
      </div>

      <h2 class="luxury-title">Payment Information</h2>

      <div class="form-group">
        <label for="cardType" class="luxury-label">Card Type:</label>
        <select v-model="cardType" class="luxury-input">
          <option value="">--Select a Card Type--</option>
          <option value="amex">American Express</option>
          <option value="diners">Diners Club</option>
          <option value="jcb">JCB</option>
        </select>
      </div>

      <div class="form-group">
        <label for="cardNumber" class="luxury-label">Card Number:</label>
        <input type="number" v-model="cardNumber" class="luxury-input" />
      </div>

      <div class="form-group">
        <label for="expDate" class="luxury-label">Expiration Date:</label>
        <input type="date" v-model="expDate" class="luxury-input" />
      </div>

      <div class="form-group">
        <label for="cvv" class="luxury-label">CVV:</label>
        <input type="password" v-model="cvv" class="luxury-input" />
      </div>

      <button @click.prevent="submitReservation" class="btn luxury-button">
        CONFIRM RESERVATION
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Luxury Title Style */
.luxury-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #4a4a4a; /* Dark Gray */
  margin-bottom: 20px;
}

/* Luxury Label Style */
.luxury-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #666; /* Darker Gray */
}

/* Luxury Input Style */
.luxury-input {
  font-family: 'Lato', sans-serif; /* Use a sophisticated font */
  font-size: 16px;
  color: #4a4a4a;
  padding: 14px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px; /* Rounded corners */
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.luxury-input:focus {
  border-color: #9b4dca; /* Highlight on focus */
  box-shadow: 0 0 10px rgba(155, 77, 202, 0.4);
}

/* Refined Button Style */
.luxury-button {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: #fff;
  background: linear-gradient(to right, #9b4dca, #673888); /* Gradient background */
  padding: 16px 32px; /* Increase padding for a larger button */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.luxury-button:hover {
  background: linear-gradient(to right, #673888, #452963);
}

/* Additional styles for the overall container */
.restaurant-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f6f4; /* Creamy White */
}

/* Form Container Style */
.reservation-form {
  width: 80%;
  max-width: 650px; /* Increased max-width for a wider form */
  padding: 24px;
  margin: 40px auto; /* Center the form horizontally and add top/bottom margin */
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Dining Preference Options Style */
.preference-options {
  margin-top: 8px;
}

.preference-options label {
  display: block;
  margin-bottom: 8px;
}
</style>

<script>
export default {
  data() {
    return {
      guestName: "",
      preference: "",
      occasion: "",
      contactEmail: "",
      contactNumber: "",
      cardType: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
    };
  },
  methods: {
    submitReservation() {
      // Handle reservation submission logic
      console.log("Reservation submitted:", this.$data);
      // Add your logic to handle the reservation data
      // Call the chooseSubscription method from the subscription component
    this.$root.$emit('confirm-payment', /* pass necessary data */);

    // Optionally, you can redirect to a success page or display a success message
    // this.$router.push('/success');
      },
  },
};
</script>

 <!-- <div class="subscription-list">
          <div v-for="data in filteredData" :key="data.subscriptionId" class="subscription-item">
            <div class="subscription-item-content">
              <h3 class="subscription-name">{{ data.name }}</h3>
              <p class="subscription-price">${{ data.price.toFixed(2) }}</p>
              <p class="subscription-discount">{{ data.discountPercentage }}% Discount</p>
            </div>
            <button @click="chooseSubscription(data.subscriptionId)" class="btn btn-primary subscription-button">Select</button>
          </div>
        </div> -->