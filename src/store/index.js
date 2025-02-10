import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: null,
    editForm: {employeeId: null,
      name: '',
      position: '',
      departmentId: '',
      employmentHistory: '',
      contact: ''
    },
    editing: false    

  },
  getters: {},
  mutations: {
    getEmployees(state, payload) {
      console.log('Committing employees:', payload);  // Log to verify the data
      state.employees = payload;  // Update the state with the fetched data
    },
    deleteEmployee(state, employee_id) {
      state.employees = state.employees.filter(emp => emp.employee_id !== employee_id);
    },
    addEmployee(state, newEmployee) {
      state.employees.push(newEmployee);  // Add new employee to the state
    }, 
    // Set the employee data for editing
    setEditEmployee(state, employee) {
      state.editForm = { ...employee };  // Clone the employee object to avoid mutation
    },
    // Update the employee information in the list after editing
    updateEmployeeInformation(state, updatedEmployee) {
      const index = state.employees.findIndex(employee => employee.employee_id === updatedEmployee.employee_id);
      if (index !== -1) {
        // Replace the old employee data with the updated one
        state.employees[index] = updatedEmployee;
      }
    }
  
  },
  actions: {
    async getData({ commit }) {
      try {
        let response = await fetch('http://localhost:4000/employees');
        let data = await response.json(); // Convert response to JSON
    
        console.log(data); // Debugging to check API response
    
        if (data && Array.isArray(data.employee)) {
          commit('getEmployees', data.employee); // Access the employee array and commit it
        } else {
          console.error('Unexpected API response:', data);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
  
    async deleteEmployee({ commit }, employee_id) {
      try {
        let response = await fetch(`http://localhost:4000/employees/${employee_id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          commit('deleteEmployee', employee_id);
        }
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    },
  
    async addEmployee({ commit }, newEmployee) {
      try {
        let response = await fetch('http://localhost:4000/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEmployee),
        });
      
        let responseData = await response.json();
        console.log('API Response:', responseData); // 🔍 Debugging: Check what the backend sends
      
        if (response.ok) {
          commit('addEmployee', responseData);
        } else {
          console.error('Failed to add employee:', responseData.error);
        }
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    },
  
    async setEditEmployee({ commit }, employee) {
      commit('setEditEmployee', employee); // Setting employee data for editing
    },
  
    async updateEmployee({ commit }, { employeeId, name, position, departmentId, employmentHistory, contact }) {
      try {
        // Make the PATCH request to the backend
        const response = await fetch(`http://localhost:4000/employees/${employeeId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ employeeId, name, position, departmentId, employmentHistory, contact })
        });
  
        const updatedEmployee = await response.json();
        if (response.ok) {
          commit('updateEmployeeInformation', updatedEmployee.employee);  // Update store state
        } else {
          console.error('Error updating employee:', updatedEmployee.error);
        }
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    }
  },
})  