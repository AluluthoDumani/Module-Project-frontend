<template>
    <div class="about">
    <h2>Employee Leave Form</h2>
    <form @submit.prevent="onClick">
        <label for="employee-id">Employee ID</label>
        <input type="text" id="employee-id" name="employee_id" placeholder="Enter your employee ID" v-model="form.employeeId" required>

        <label for="employee-name">Employee Name</label>
        <input type="text" id="employee-name" name="employee_name" placeholder="Enter your name" v-model="form.employeeName" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"  v-model="form.employeeEmail" required>

        <label for="leave-date">Leave Date</label>
        <input type="date" id="leave-date" name="leave_date" v-model="form.leaveDate"  required>

        <label for="leave-type">Type of Leave</label>
        <select id="leave-type" name="leave_type"  v-model="form.leaveType"  required>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="annual">Annual Leave</option>
            <option value="other">Other</option>
        </select>

        <label for="reason">Reason for Leave</label>
        <textarea id="reason" name="reason"  placeholder="Provide a reason for your leave" v-model="form.leaveReason"  required></textarea>

        <button type="submit">Submit</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Leave Date</th>
          <th>Type of Leave</th>
          <th>Reason for Leave</th>
          <th>Action</th>
          <th>Attendance</th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.employeeId">
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.leaveDate }}</td> 
          <td>{{ employee.leaveType }}</td>
          <td>{{ employee.reason }}</td>
          <td>
            <button id="approve-button" @click="approved()">Approve</button> <button class="reject-button" @click="rejection()">Reject</button>
          </td>
          <td>{{ methodNameCalled ? "Absent": "Present" }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>


 <script>
import NavBarComp from '../components/NavBarComp.vue';
import LeaveRequestComp from '@/components/LeaveRequestComp.vue';
export default {
    name: 'AttendanceView',
    components:{
       LeaveRequestComp,
       NavBarComp,
    },
  data() {
    return {
      employees: [],
      form: {
        employeeId: "",
        employeeName: "",
        employeeEmail: "",
        leaveDate: "",
        leaveType: "",
        leaveReason: ""
      },
      methodNameCalled: false
    };
  },
  methods: {
    onClick() {
      this.employees.push({
        employeeId: this.form.employeeId,
        name: this.form.employeeName,
        email: this.form.employeeEmail,
        leaveDate: this.form.leaveDate,
        leaveType: this.form.leaveType,
        reason: this.form.leaveReason
      });

      // Resetting the input fields
      this.form = {
        employeeId: "",
        employeeName: "",
        employeeEmail: "",
        leaveDate: "",
        leaveType: "",
        leaveReason: ""
      };
    },
    approved() {
      this.methodNameCalled = true;
    },
    rejection() {
      this.methodNameCalled = false;
    }

  }}


</script>

<style scoped>
    *{
        box-sizing: border-box;
        overflow: auto;
    }
    section{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .form-container{
        background: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba((0), 0, 0, 0,1);
        border-radius: 8px;
        width: 600px;
    }
    h2{
        margin-bottom: 20px;
        font-size: 24px;
        color: #333;
    }
    .form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    label{
        margin-bottom: 5px;
        font-weight: bold;
        color: #555;
    }
    input[type="text"],
    input[type="password"],
    input[type="password"]
    select{
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        width: 100%;

    }
    button{
        padding: 10px;
        background-color: #28a745;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
    }
    button:hover{
        background-color: #218838;

    }
    
    table ,td ,th{
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        height: auto;
        font-size: medium;
        font-family: Georgia, 'Times New Roman', Times, serif;
        box-sizing: border-box;
    }
    th , tr ,tbody {
        border:2px solid black ;
    }
    @media only screen and (max-width: 600px) {
    body {
    background-color: lightblue;
    }
}

</style>