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
          <th>Department </th>
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
            <button @click="editEmployee(employee)" class="edit-btn">Edit</button>
            <button @click="deleteEmployee(employee.employee_id)" class="delete-btn">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      newEmployee: {
        name: '',
        position: '',
        department_id: '',
        employment_history: '',
        contact: ''
      }
    };
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter(employee => {
        return employee.name && employee.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
    employees() {
      return this.$store.state.employees;
    },
    editForm() {
      return this.$store.state.editForm;
    },
    editing() {
      return this.$store.state.editing;
    }
  },
  mounted() {
    this.$store.dispatch('getData').then(() => {
      console.log("Employees:", this.$store.state.employees);
    }).catch(error => {
      console.error("Error fetching employees:", error);
    });
  },
  methods: {
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
    editEmployee(employee) {
      this.$store.dispatch('setEditEmployee', employee);
    },
    async submitEdit() {
      const { employee_id, name, position, department_id, employment_history, contact } = this.editForm;
      try {
        await this.$store.dispatch('updateEmployee', {
          employee_id,
          name,
          position,
          department_id,
          employment_history,
          contact
        });
        // Reset the edit form and editing state
        this.$store.commit('setEditEmployee', {
          employee_id: null,
          name: '',
          position: '',
          department_id: '',
          employment_history: '',
          contact: ''
        });
        this.$store.commit('editing', false);
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    },
    toggleForm() {
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
  table-layout: auto;
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
@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: wrap;
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
