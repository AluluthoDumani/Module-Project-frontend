import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: null
  },
  getters: {},
  mutations: {
    getEmployees(state, payload) {
      state.employees = payload;
    },
    deleteEmployee(state, employee_id) {
      state.employees = state.employees.filter(emp => emp.employee_id !== employee_id);
    },
    addEmployee(state, newEmployee) {
      state.employees.push(newEmployee);  // Add new employee to the state
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        let response = await fetch('http://localhost:3500/employees');
        let data = await response.json(); // Convert response to JSON

        console.log(data); // Debugging to check API response

        commit('getEmployees', data.employee); // Assuming the API returns an array directly
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
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
        console.log('API Response:', responseData); // 🔍 Debugging: Check what the backend sends
    
        if (response.ok) {
          commit('addEmployee', responseData);
        } else {
          console.error('Failed to add employee:', responseData.error);
        }
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    }
    
  },
  modules: {}
});
