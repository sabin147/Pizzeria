<template>
  <div class="restaurant-reservation">
    <div class="reservation-card">
      <h2 class="card-title">Fine Dining Reservations</h2>
      <div v-if="error" class="error-message">{{ error }}</div>

      <div class="reservation-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>User ID</th>
              <th>Date & Time</th>
              <th>Table Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataSeries" :key="data.reservationId">
              <td>{{ data.reservationId }}</td>
              <td>{{ data.userId }}</td>
              <td>{{ data.reservationDateTime }}</td>
              <td>{{ data.tableNumber }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Filter Reservations Form -->
      <div class="reservation-form">
        <h3>Find Your Reservation</h3>
        <form @submit.prevent="filterReservations">
          <div class="form-group">
            <label for="filterUserId">Your ID:</label>
            <input v-model="filterData.userId" type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Find Reservation</button>
        </form>
      </div>

      <!-- Make a Reservation Form -->
      <div class="reservation-form">
        <h3>Make a Reservation</h3>
        <form @submit.prevent="addReservation">
          <div class="form-group">
            <label for="addDateTime">Preferred Date & Time:</label>
            <input v-model="addData.reservationDateTime" type="datetime-local" class="form-control" />
          </div>
          <div class="form-group">
            <label for="addTableNumber">Table Size:</label>
            <input v-model="addData.tableNumber" type="number" class="form-control" />
          </div>
          <button type="submit" class="btn btn-success">Confirm Reservation</button>
        </form>
      </div>

      <!-- Cancel Reservation Form -->
      <div class="reservation-form">
        <h3>Cancel Reservation</h3>
        <form @submit.prevent="deleteReservation">
          <div class="form-group">
            <label for="deleteReservationId">Reservation ID:</label>
            <input v-model="deleteData.reservationId" type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-danger">Cancel Reservation</button>
        </form>
      </div>

      <!-- Modify Reservation Form -->
      <div class="reservation-form">
        <h3>Modify Reservation</h3>
        <form @submit.prevent="updateReservation">
          <div class="form-group">
            <label for="updateReservationId">Reservation ID:</label>
            <input v-model="updateData.reservationId" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="updateDateTime">New Date & Time:</label>
            <input v-model="updateData.reservationDateTime" type="datetime-local" class="form-control" />
          </div>
          <div class="form-group">
            <label for="updateTableNumber">New Table Size:</label>
            <input v-model="updateData.tableNumber" type="number" class="form-control" />
          </div>
          <button type="submit" class="btn btn-warning">Modify Reservation</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Apply styles to the entire template */
  .restaurant-reservation {
    background-color: #f2f2f2; /* Light gray background color */
    font-family: 'Roboto', sans-serif; /* Modern sans-serif font */
    padding: 20px;
    margin: auto;
    max-width: 800px;
  }

  /* Style input fields */
  .form-control {
    border: 2px solid #3498db; /* Blue border */
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    width: 100%;
  }

  /* Custom styles for the modern restaurant look */
  .reservation-card {
    background-color: #ffffff; /* White card background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .card-title {
    color: #e74c3c; /* Red title color */
    font-family: 'Playfair Display', serif; /* Elegant serif font */
    text-align: center;
    margin-bottom: 20px;
  }

  /* Style form labels */
  label {
    color: #3498db; /* Blue label color */
    margin-bottom: 5px;
    display: block;
  }

  /* Style form buttons */
  button {
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
  }

  .btn-primary {
    background-color: #3498db; /* Blue color for primary button */
  }

  .btn-success {
    background-color: #2ecc71; /* Green color for success button */
  }

  .btn-danger {
    background-color: #e74c3c; /* Red color for danger button */
  }

  .btn-warning {
    background-color: #f39c12; /* Orange color for warning button */
  }

  /* Apply animation to form sections */
  .reservation-form {
    margin-bottom: 20px;
  }
</style>

<script>
    import axios from 'axios';
    import '@fortawesome/fontawesome-free/css/all.css';
    const baseUri = 'https://localhost:7159/api/';
    
    export default {
      data() {
        return {
          dataSeries: [],
          error: null,
          filterData: { userId: '' },
          addData: { reservationDateTime: '', tableNumber: '' },
          deleteData: { reservationId: 0 },
          updateData: {
            reservationId: 0,
            userId: '',
            reservationDateTime: '',
            tableNumber: '',
          },
        };
      },
    
      async created() {
        console.log('created method called');
        this.helperGetPosts(baseUri);
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
                  'Content-Type': 'application/json', // Adjust content type if needed
              };
  
            const response = await axios.get(uri + 'reservation',{headers});
            this.dataSeries = await response.data;
            this.error = null;
          } catch (ex) {
            this.dataSeries = [];
            this.error = ex.message;
          }
        },
        async addReservation() {
          try {
            const authToken = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${authToken}` };
  
            console.log('Request Payload:', this.addData);
            const response = await axios.post(baseUri + 'reservation', this.addData, { headers });
  
            console.log("Order response:", response);
            this.getAllPosts();
  
          
          } catch (ex) {
            console.error('Error adding reservation:', ex);
            console.log('Server Response:', ex.response); // Log the server response for more details
            this.error = ex.message || 'An error occurred while adding the reservation.';
          }
        },
  
        async deleteReservation() {
          try {
            await axios.delete(baseUri + `reservation/${this.deleteData.reservationId}`);
            this.dataSeries = this.dataSeries.filter(
              (reservation) => reservation.reservationId !== this.deleteData.reservationId
            );
          } catch (ex) {
            this.error = ex.message;
          }
        },
        async updateReservation() {
          try {
            const response = await axios.put(
              baseUri + `reservation/${this.updateData.reservationId}`,
              this.updateData
            );
            const index = this.dataSeries.findIndex(
              (reservation) => reservation.reservationId === this.updateData.reservationId
            );
            this.$set(this.dataSeries, index, response.data);
          } catch (ex) {
            this.error = ex.message;
          }
        },
        filterReservations() {
          // Implement your filtering logic based on the provided filterData
          // You can filter this.dataSeries and update this.filteredData accordingly
          // Example: this.filteredData = this.dataSeries.filter(item => item.someCondition);
        },
      },
    };
</script>

  