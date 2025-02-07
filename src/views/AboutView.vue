
<template>
  <NavBarComp/>
  <div class="page-container">

    <section class="hero-section">
    <div class="hero-text">
    <h1>MODERN TECH Employee Information.</h1>
    <p>Modern Tech Inc.</p>
    </div>
    </section>
    <br> 

    <!-- Search bar -->
    <input type="text" v-model="searchQuery" placeholder="Search by Name" />
    <br>

    <!-- <h2>Modern Tech Employee Information</h2> -->

    <button @click="toggleForm" class="add-employee-btn">Add New Employee</button>
     
   <div v-if="showAddForm" class="add-employee-form">
      <h3>Add New Employee</h3>
    
    <form @submit.prevent="addEmployee">
      <!-- <input v-model="newEmployee.employee_id" placeholder="Employee ID" required/> -->

    <input v-model="newEmployee.name" placeholder="Name" required/>

    <input v-model="newEmployee.position" placeholder="Position" required/>


    <input v-model="newEmployee.department_name" placeholder="Department" required/>

    <!-- <input v-model="newEmployee.departmentId" placeholder="Department ID" required/> -->

    <input v-model="newEmployee.employment_history" placeholder="Employment History" required/>

    <input v-model="newEmployee.contact" placeholder="Contact" required/>

    <button type="submit">Add Employee</button>
    <button @click.prevent="toggleForm">Cancel</button>
    
    </form>
    </div>



    <table>
      <thead>
        <tr>
          <th>EmployeeID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department Name</th>
          <th>Employment History</th>
          <th>Contact</th>
          
        </tr>
      </thead>
      <tbody>
         <!-- <tr v-for="employee in filteredEmployees" :key="employee.employeeId">  -->
             <tr v-for ="employee in $store.state.employees" :key="employee.employee_id">
          <td>{{ employee.employee_id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.department_name }}</td>
          <td>{{ employee.employment_history }}</td>
          <td>{{ employee.contact }}</td>
          
          <td>
          <button @click="deleteEmployee(employee.employee_id)" class="delete-btn">Remove</button> 
          <button @click="editEmployee(employee.employeeId)" class="delete-btn">Edit</button> 
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBarComp from '@/components/NavBarComp.vue';


export default {
  name: "AboutView",
  components:{
  NavBarComp

  },
  data() {
    return {
      employees: [],
      searchQuery: '',
      showAddForm: false,
      newEmployee: {
      name: '',
      position: '',
      department_id: '',
      
      employment_history: '',
      contact: '',
},   
      // nextEmployeeId: 11,
    };
  },
  computed: {
    // Computed property for filtering employees based on the search query
    filteredEmployees() {
      return this.employees.filter(employee =>
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    //  Call the fetchUserdata function when the component is mounted
    //  this.fetchUserData().then(data => {
    //    this.employees = data;
    //  }).catch(error => {
    //   console.error("Error fetching user data:", error);
    //  });
    // this.$store.dispatch('getData')
    this.$store.dispatch('getData').then(() => {
    console.log("Vuex Employees:", this.$store.state.employees);
  });

  },
  methods: {
    // Fetch user data with a simulated delay
    fetchUserData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
    },
  
  addEmployee(){
  const newEmployee = {
        ...this.newEmployee,
        employee_id: this.nextEmployee_id,  // Include the new employee's ID (if it's generated on the client)
      };
      this.$store.dispatch('addEmployee', newEmployee);  // Dispatch the Vuex action to add the employee
      this.nextEmployeeId++;  // Increment the next employee ID
      this.resetForm();
    },

  resetForm() { 
  this.newEmployee={
      name: '',
      position: '',
      department: '',
      employmentHistory: '',
      contact: '',
      
  };
  this.showAddForm=false;

  },
  // deleteEmployee(employeeId){
  //     this.employees = this.employees.filter(employee => employee.employeeId !== employeeId);
  deleteEmployee(employee_id) {
    this.$store.dispatch('deleteEmployee', employee_id);  // Dispatch the action with the employee_id
  
  },

  toggleForm(){
      this.showAddForm = !this.showAddForm;
  }
 }
};

</script>

<style scoped>

.hero-section {
position: relative;
width: 100%;
height: 25vh;
background-color: #003366;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white;
}
@media screen and (max-width: 650px) {
.hero-section {
  width: 100%;
}
}
table {
width: 100%;
border-collapse: collapse;
table-layout: auto; /* Allows table to resize */
}
table,
th,
td {
border: 1px solid black;
border-width: 2px;
}
th,
td {
padding: 8px;
text-align: left;
color: rgb(13, 16, 16);
font-size: 1.3em;
font-weight: 500;
}
input[type="text"] {
padding: 8px;
margin-bottom: 15px;
width: 250px;
text-align: center;
font-weight: 700;
border-width: 3px;
border-radius: 5px;
}
h2 {
color: rgb(9, 10, 10);
font-size: 1.9em;
}
tr:hover {
cursor: pointer;
}
th {
font-weight: 700;
background-color: #454984;
color: #FFFFFF;
}
.page-container {
border: 5px solid rgb(222, 237, 255);
padding: 10px;
margin: 0;
box-sizing: border-box;
background-color: rgb(222, 237, 255);
}
tr:nth-child(even) {
background-color: #FFFFFF;
}
tr:nth-child(odd) {
background-color: #ADD8E6;
}
.add-employee-btn {
position: absolute;
top: 299px;
right: 20px;
}
/* Media query for mobile screens */
@media (max-width: 768px) {
table {
  display: block;
  overflow-x: auto; /* Adds horizontal scrolling for smaller screens */
  white-space: wrap; /* Prevents text from wrapping */
}
th,
td {
  font-size: 1em;
  padding: 6px;
}
.add-employee-btn {
  position: relative;
  top: 10px;
  right: auto;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}
}
</style>