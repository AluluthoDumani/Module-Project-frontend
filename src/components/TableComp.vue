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
  
      <button @click="toggleForm" class="add-employee-btn">Add New Employee</button>
       
      <div v-if="showAddForm" class="add-employee-form">
        <h3>Add New Employee</h3>
        <form @submit.prevent="addEmployee">
          <input v-model="newEmployee.name" placeholder="Name" required/>
          <input v-model="newEmployee.position" placeholder="Position" required/>
          <input v-model="newEmployee.department_id" placeholder="Department" required/>
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
            <th>Department</th>
            <th>Employment History</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in filteredEmployees" :key="employee.employee_id">
            <td>{{ employee.employee_id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.department_id }}</td>
            <td>{{ employee.employment_history }}</td>
            <td>{{ employee.contact }}</td>
            <td>
              <button @click="deleteEmployee(employee.employee_id)" class="delete-btn">Remove</button>
              <button @click="editEmployee(employee.employee_id)" class="delete-btn">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit Form -->
      <div v-if="editing" class="edit-form">
        <h3>Edit Employee</h3>
        <form @submit.prevent="submitEdit">
          <label for="name">Name:</label>
          <input type="text" v-model="editForm.name" required />
  
          <label for="position">Position:</label>
          <input type="text" v-model="editForm.position" required />
  
          <label for="department_id">Department:</label>
          <input type="text" v-model="editForm.department_id" required />
  
          <label for="employment_history">Employment History:</label>
          <input type="text" v-model="editForm.employment_history" required />
  
          <label for="contact">Contact:</label>
          <input type="text" v-model="editForm.contact" required />
  
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import NavBarComp from '@/components/NavBarComp.vue';
  
  export default {
    name: "AboutView",
    components: {
      NavBarComp
    },
    data() {
      return {
        searchQuery: '',
        showAddForm: false,
        editing: false,
        newEmployee: {
          name: '',
          position: '',
          department_id: '',
          employment_history: '',
          contact: '',
        },
        editForm: {
          employee_id: null,
          name: '',
          position: '',
          department_id: '',
          employment_history: '',
          contact: ''
        },
      };
    },
    computed: {
      filteredEmployees() {
        return this.$store.state.employees.filter(employee =>
          employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    mounted() {
      this.$store.dispatch('getData');
    },
    methods: {
      toggleForm() {
        this.showAddForm = !this.showAddForm;
      },
      addEmployee() {
        const newEmployee = { ...this.newEmployee };
        this.$store.dispatch('addEmployee', newEmployee);
        this.resetForm();
      },
      resetForm() {
        this.newEmployee = {
          name: '',
          position: '',
          department_id: '',
          employment_history: '',
          contact: ''
        };
        this.showAddForm = false;
      },
      deleteEmployee(employee_id) {
        this.$store.dispatch('deleteEmployee', employee_id);
      },
      editEmployee(employee_id) {
        const employee = this.$store.state.employees.find(emp => emp.employee_id === employee_id);
        this.$store.dispatch('setEditEmployee', employee);
        this.editing = true;
      },
      async submitEdit() {
        const { employee_id, name, position, department_id, employment_history, contact } = this.editForm;
        await this.$store.dispatch('updateEmployee', {
          employee_id,
          name,
          position,
          department_id,
          employment_history,
          contact
        });
        this.editing = false;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Style definitions */
  </style>
  