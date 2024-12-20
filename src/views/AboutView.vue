
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

    <input v-model="newEmployee.name" placeholder="Name" required/>

    <input v-model="newEmployee.position" placeholder="Position" required/>


    <input v-model="newEmployee.department" placeholder="Department" required/>

    <input v-model="newEmployee.salary" type="number" placeholder="Salary" required/>

    <input v-model="newEmployee.employmentHistory" placeholder="Employment History" required/>

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
          <th>Department</th>
          <th>Salary</th>
          <th>EmploymentHistory</th>
          <th>Contact</th>
          <th>Performance</th>
          <th>--</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in filteredEmployees" :key="employee.employeeId">
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.employmentHistory }}</td>
          <td>{{ employee.contact }}</td>
          <td>{{ employee.performance }}</td>
          <td>
          <button @click="deleteEmployee(employee.employeeId)" class="delete-btn">Remove</button> 
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
          department: '',
          salary: '',
          employmentHistory: '',
          contact: '',
          performance: '',
      }, 
      nextEmployeeId: 11,
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
    // Call the fetchUserdata function when the component is mounted
    this.fetchUserData().then(data => {
      this.employees = data;
    }).catch(error => {
      console.error("Error fetching user data:", error);
    });
  },
  methods: {
    // Fetch user data with a simulated delay
    fetchUserData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = [
          { employeeId: 1, name: "Sibongile Nkosi", position: "Software Engineer", department: "Development", salary: 70000, employmentHistory: "Joined in 2015, promoted to Senior in 2018", contact: "sibongile.nkosi@moderntech.com", performance: "Excellent and good  problem-solver" },
              { employeeId: 2, name: "Lungile Moyo", position: "HR Manager", department: "HR", salary: 80000, employmentHistory: "Joined in 2013, promoted to Manager in 2017", contact: "lungile.moyo@moderntech.com" , performance: "Teamplayer and exceptional communicator"},
              { employeeId: 3, name: "Thabo Molefe", position: "Quality Analyst", department: "QA", salary: 55000, employmentHistory: "Joined in 2018", contact: "thabo.molefe@moderntech.com"  , performance : "Good work Ethic"},
              { employeeId: 4, name: "Keshav Naidoo", position: "Sales Representative", department: "Sales", salary: 60000, employmentHistory: "Joined in 2020", contact: "keshav.naidoo@moderntech.com" , performance : " Eager to learn and always" },
              { employeeId: 5, name: "Zanele Khumalo", position: "Marketing Specialist", department: "Marketing", salary: 58000, employmentHistory: "Joined in 2019", contact: "zanele.khumalo@moderntech.com",  performance : " Excellent Punctiality" },
              { employeeId: 6, name: "Sipho Zulu", position: "UI/UX Designer", department: "Design", salary: 65000, employmentHistory: "Joined in 2016", contact: "sipho.zulu@moderntech.com",  performance : "Vibrant and Outgoing " },
              { employeeId: 7, name: "Naledi Moeketsi", position: "DevOps Engineer", department: "IT", salary: 72000, employmentHistory: "Joined in 2017", contact: "naledi.moeketsi@moderntech.com"  ,  performance : "Kind" },
              { employeeId: 8, name: "Farai Gumbo", position: "Content Strategist", department: "Marketing", salary: 56000, employmentHistory: "Joined in 2021", contact: "farai.gumbo@moderntech.com"  , performance: "Always  late  and does not reach the deadline"},
              { employeeId: 9, name: "Karabo Dlamini", position: "Accountant", department: "Finance", salary: 62000, employmentHistory: "Joined in 2018", contact: "karabo.dlamini@moderntech.com", performance:"Attention-seeker" },
              { employeeId: 10, name: "Fatima Patel", position: "Customer Support Lead", department: "Support", salary: 58000, employmentHistory: "Joined in 2016", contact: "fatima.patel@moderntech.com", performance: "Passionate and Quet" },
          ];
          resolve(data);
        }, 1000);
      });
    },
  
  addEmployee(){
      const newEmployee ={
          ...this.newEmployee,
          employeeId: this.nextEmployeeId,
      };
      this.employees.push(newEmployee);
      this.nextEmployeeId++;
      this.resetForm();
  },
  resetForm() { 
  this.newEmployee={
      name: '',
      position: '',
      department: '',
      salary: '',
      employmentHistory: '',
      contact: '',
      performance: '',
  };
  this.showAddForm=false;

  },
  deleteEmployee(employeeId){
      this.employees = this.employees.filter(employee => employee.employeeId !== employeeId);
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