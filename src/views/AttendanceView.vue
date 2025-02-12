<template>
    <NavBarComp />
  
    <section>
      <div class="about">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Leave Date</th>
              <th>Reason for Leave</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.leave_id">
              <td>{{ employee.employee_id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.email }}</td>
              <td>{{ employee.leave_date }}</td>
              <td>{{ employee.reason }}</td>
              <td>{{ employee.status }}</td>
              <td>
                <button 
                  :disabled="employee.status === 'Approved'" 
                  @click="approveLeave(employee.leave_id)"
                  class="approve">
                  Approve
                </button>
                <button 
                  :disabled="employee.status === 'Denied'" 
                  @click="rejectLeave(employee.leave_id)"
                  class="reject">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script>
  import NavBarComp from '../components/NavBarComp.vue';
  
  export default {
    name: "AttendanceView",
    components: {
      NavBarComp,
    },
    data() {
      return {
        employees: [],
      };
    },
    created() {
      this.fetchEmployeeLeaves();
    },
    methods: {
      // Fetch employee leave data from the backend
      async fetchEmployeeLeaves() {
        try {
          const response = await fetch("http://localhost:3500/leave");
          const data = await response.json();
          this.employees = data;
        } catch (error) {
          console.error("Error fetching leaves:", error);
        }
      },
  
      // Approve a leave request
      async approveLeave(leave_id) {
        try {
          const response = await fetch(`http://localhost:3500/leave/${leave_id}/approve`, {
            method: 'PATCH',
          });
          if (response.ok) {
            this.fetchEmployeeLeaves(); // Refresh the list after approval
          } else {
            console.error("Failed to approve leave");
          }
        } catch (error) {
          console.error("Error approving leave:", error);
        }
      },
  
      // Reject a leave request
      async rejectLeave(leave_id) {
        try {
          const response = await fetch(`http://localhost:3500/leave/${leave_id}/reject`, {
            method: 'PATCH',
          });
          if (response.ok) {
            this.fetchEmployeeLeaves(); // Refresh the list after rejection
          } else {
            console.error("Failed to reject leave");
          }
        } catch (error) {
          console.error("Error rejecting leave:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
/* Table Styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #495057;
}

td {
  background-color: #fff;
  color: #6c757d;
}

/* Table row hover effect */
tr:hover {
  background-color: #f1f1f1;
}

/* Styling for buttons */
button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.approve {
  background-color: #28a745; /* Green for approval */
  color: white;
}

button.reject {
  background-color: #dc3545; /* Red for rejection */
  color: white;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  opacity: 0.8;
}

/* Responsive table for small screens */
@media (max-width: 768px) {
  table {
    font-size: 14px;
  }

  th, td {
    padding: 8px 10px;
  }

  button {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
