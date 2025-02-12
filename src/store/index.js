import { createStore } from 'vuex'

export default createStore({
  state: {
    // Stores employee data
    employees: [],
    // Stores form data when an employee is being edited
    editForm: {
      employee_id: null,
      name: '',
      position: '',
      department_id: '',
      employment_history: '',
      contact: ''
    },
    // Boolean flag to track if edit mode is active
    editing: false    
  },
  
  getters: {},

  mutations: {
    // Mutation to store employees in state
    getEmployees(state, payload) {
      console.log('Committing employees:', payload);
      state.employees = payload;  
    },

    // Deletes an employee from state after successful backend deletion
    deleteEmployee(state, employee_id) {
      state.employees = state.employees.filter(emp => emp.employee_id !== employee_id);
    },

    // Adds a new employee to the list
    addEmployee(state, newEmployee) {
      state.employees.push(newEmployee);
    },

    // Stores the employee data that needs to be edited
    setEditEmployee(state, employee) {
      state.editForm = { ...employee };  // Creates a copy to prevent direct mutations
      state.editing = true;  // Activates edit mode
    },

    // Updates an employee’s information in the state after an edit
    updateEmployeeInformation(state, updatedEmployee) {
      const index = state.employees.findIndex(emp => emp.employee_id === updatedEmployee.employee_id);
      if (index !== -1) {
        state.employees[index] = updatedEmployee;
      }
      state.editing = false;  // Disable edit mode after update
    },

    // Toggles editing mode on/off
    SET_EDITING(state, status) {
      state.editing = status;
    }
  },

  actions: {
    // Fetches all employees from the backend API
    async getData({ commit }) {
      try {
        let response = await fetch('http://localhost:3500/employees');
        let data = await response.json(); 
    
        console.log(data); // Debugging API response
    
        if (data && Array.isArray(data.employee)) {
          commit('getEmployees', data.employee);
        } else {
          console.error('Unexpected API response:', data);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },

    // Deletes an employee from the database
    async deleteEmployee({ commit }, employee_id) {
      try {
        let response = await fetch(`http://localhost:3500/employees/${employee_id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          commit('deleteEmployee', employee_id);
        }
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    },

    // Adds a new employee to the database
    async addEmployee({ commit }, newEmployee) {
      try {
        let response = await fetch('http://localhost:3500/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEmployee),
        });

        let responseData = await response.json();
        console.log('API Response:', responseData);
      
        if (response.ok) {
          commit('addEmployee', responseData);
        } else {
          console.error('Failed to add employee:', responseData.error);
        }
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    },

    // Sets an employee for editing
    setEditEmployee({ commit }, employee) {
      commit('setEditEmployee', employee);
      commit('SET_EDITING', true);  // Activate edit mode
    },

    // Updates an employee in the database and Vuex state
    async updateEmployee({ commit }, updatedEmployee) {
      try {
        const response = await fetch(`http://localhost:3500/employees/${updatedEmployee.employee_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedEmployee)
        });

        const responseData = await response.json();
        if (response.ok) {
          commit('updateEmployeeInformation', responseData.employee);
          commit('SET_EDITING', false);  // Exit edit mode after successful update
        } else {
          console.error('Error updating employee:', responseData.error);
        }
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    }
  },
});
