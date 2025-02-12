<template>
  <div class="main">
    <h1>Welcome Back Employee</h1>
  </div>

  <div class="sidebar">
    <a href="#myPortal"><i class="fa fa-fw fa-home"></i> myPortal</a>
    <button @click="logout">Logout</button>
  </div>

  <div class="card">
    <img
      src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
      alt="Avatar"
      style="width: 100%"
    />
    <div class="container">
      <h4>Employee</h4>
      <p>Software Analyst</p>
    </div>
  </div>
  <div>
    <button class ='but'>Present</button>
    <button class = 'but'>Absent</button>
  </div>

  <!-- Employee Leave Form Section -->
  <div class="about">
    <h2>Employee Leave Form</h2>
    <form @submit.prevent="submitLeaveRequest">
      <div class="form-group">
        <label for="employee-id" class="form-input">Employee ID</label>
        <input type="text" id="employee-id" placeholder="Enter your employee ID" v-model="form.employeeId" required />
      </div>

      <div class="form-group">
        <label for="leave-date" class="form-input">Leave Date</label>
        <input type="date" id="leave-date" v-model="form.leaveDate" required />
      </div>

      <div class="form-group">
        <label for="leave-type">Reason</label>
        <select id="leave-type" v-model="form.leaveType" required>
          <option value="sick">Sick Leave</option>
          <option value="casual">Casual Leave</option>
          <option value="annual">Annual Leave</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>

  <footer>
    <div>
      <p>ALL RIGHTS RESERVED || MordenTECH Industries © 2024</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      form: {
        employeeId: "",
        leaveDate: "",
        leaveType: "sick", // default to sick leave
      },
      leaves: [],
    };
  },
  async created() {
    // Fetching leave data (if needed)
    try {
      const response = await fetch("http://localhost:3500/leave");
      if (response.ok) {
        this.leaves = await response.json();
      } else {
        console.error("Failed to fetch leave data");
      }
    } catch (error) {
      console.error("Error fetching leave data:", error);
    }
  },
  methods: {
    // Method to submit a new leave request
    async submitLeaveRequest() {
      const leaveData = {
        employee_id: this.form.employeeId,
        leave_date: this.form.leaveDate,
        reason: this.form.leaveType, // Using leaveType for reason
        status: 'Pending', // Default status as Pending when submitted
      };

      console.log("Leave data to be sent:", leaveData);

      try {
        const response = await fetch('http://localhost:3500/leave', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leaveData),
        });

        if (response.ok) {
          console.log("Leave request submitted successfully");
          const newLeave = await response.json();
          this.leaves.push(newLeave); // Add the new leave to the leaves list
          this.resetForm(); // Reset the form after submission
        } else {
          const errorData = await response.json();
          console.error("Backend Error:", errorData);
        }
      } catch (error) {
        console.error("Error submitting leave request:", error);
      }
    },
    // Reset form fields after submission
    resetForm() {
      this.form = {
        employeeId: "",
        leaveDate: "",
        leaveType: "sick",
      };
    }, 
    logout() {
      // You can clear user session data here, like removing tokens from localStorage or sessionStorage
      localStorage.removeItem('user'); // Example, clear the user info
      this.$router.push('/'); // Redirect to login page
    }
  },
};
</script>


<style scoped>
/* General Body Style */
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Sidebar Style */
.sidebar {
  height: 100%;
  width: 200px; /* Make sidebar wider */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #1112;
  padding-top: 16px;
}

.sidebar a {
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  border-bottom: 1px solid #444;
}

.sidebar a:hover {
  color: #F1F1F1;
  background-color: #444;
}

/* Main Content Area */
.main {
  margin-left: 200px; /* Adjust for the sidebar width */
  padding: 20px;
  background-color: #f4f4f4;
}

/* Employee Card Style */
.card {
  width: 20%;
  border-radius: 10%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  margin: 20px auto;
  background-color: white;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  border-radius: 10%;
}

.container {
  padding: 16px;
  text-align: center;
}

h4 {
  font-size: 18px;
  color: #333;
  margin: 10px 0;
}

p {
  color: #777;
  font-size: 16px;
}

/* Employee Leave Form */
.about {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 20px auto;
}

h2 {
  text-align: center;
  color: #333;
}

.form-input {
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

input[type="text"],
input[type="email"],
input[type="date"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0 20px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

/* Footer Style */
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1112;
  color: white;
  padding: 10px;
  text-align: center;
}

footer p {
  margin: 0;
  font-size: 14px;
}
.but {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.4s; /* Animation */
  }
  
  .but:hover {
    background-color: white; /* White background on hover */
    color: black;
    border: 2px solid #4CAF50; /* Green border */
  }
</style>
