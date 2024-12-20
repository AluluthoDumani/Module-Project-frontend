<template>
  <NavBarComp/>
  <!-- Form for employees request leave -->
    <div class="about">
    <h2>Employee Leave Form</h2>
    <form @submit.prevent="onClick">
        <br>
        <label for="employee-id" class="form-input">Employee ID</label>
        <br>
        <input  type="text" id="employee-id" name="employee_id" placeholder="Enter your employee ID" v-model="form.employeeId" required>
        <br>
        <label for="employee-name" class="form-input">Employee Name</label>
        <br>
        <input type="text" id="employee-name" name="employee_name" placeholder="Enter your name" v-model="form.employeeName" required>
        <br>
        <label for="email" class="form-input">Email</label>
        <br>
        <input type="email" id="email" name="email" placeholder="Enter your email"  v-model="form.employeeEmail" required>
        <br>
        <label for="leave-date" class="form-input">Leave Date</label>
        <br>
        <input type="date" id="leave-date" name="leave_date" v-model="form.leaveDate"  required>
        <br>
        <label for="leave-type" class="form-input">Type of Leave</label>
        <br>
        <select id="leave-type" name="leave_type"  v-model="form.leaveType"  required>
            <br>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="annual">Annual Leave</option>
            <option value="other">Other</option>
        </select>
        <br>
        <label for="reason">Reason for Leave</label>
        <br>
        <textarea id="reason" name="reason"  placeholder="Provide a reason for your leave" v-model="form.leaveReason"  required></textarea>
        <br>
        <button type="submit">Submit</button>
        <br>
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
        <!-- Looping through employees -->
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
        // Returns the user input
      employees: [],
      form: {
        employeeId: "",
        employeeName: "",
        employeeEmail: "",
        leaveDate: "",
        leaveType: "",
        leaveReason: "",
        attendanceAndLeave: [
        {
            "employeeId": 1,
            "name": "Sibongile Nkosi",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-22",
                    "reason": "Sick Leave",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-01",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 2,
            "name": "Lungile Moyo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-15",
                    "reason": "Family Responsibility",
                    "status": "Denied"
                },
                {
                    "date": "2024-12-02",
                    "reason": "Vacation",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-10",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-05",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-20",
                    "reason": "Bereavement",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-01",
                    "reason": "Childcare",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-18",
                    "reason": "Sick Leave",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-22",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-02",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-19",
                    "reason": "Childcare",
                    "status": "Denied"
                }
            ]
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-03",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        }
    ]
},
      methodNameCalled: false
    }
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
    // Method for approve button
    approved() {
      this.methodNameCalled = true;
    },
    // Method for reject button
    rejection() {
      this.methodNameCalled = false;
    }, 
//     checking() {

//     //     if (!Array.isArray(this.form.attendanceAndLeave)) {
//     //     console.error("attendanceAndLeave is undefined or not an array.");
//     //     alert("Data is not ready. Please try again.");
//     //     return;
//     // }
//         const user = this.form.attendanceAndLeave.find((value) => {
//         return value.name.toLowerCase() === this.form.employeeName.toLowerCase() && value.employeeId === parseInt( this.employeeId , 10);
//         });

//         if (user) {
//         alert("Correct Input");
//     }   else {
//         alert("Employee Does not exist!");
//     }
// }


    }
     
      

    }



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
    .about {
        background: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        width: 100%;
        text-align: center; 
    }
 .form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
} 
 .form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px; 
  
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
        font-size: 20px;
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
        margin-top: 20px;
        padding: 10px;
        background-color: #28a745;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        width: 50%;
    }
    button:hover{
        background-color: #218838;

    }
    
    table ,td ,th{
        margin-top: 20px;
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        height: auto;
        font-size: medium;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }
    th , tr ,tbody {
        border:2px solid black ;
    }
    #employee-id,#employee-name,#leave-date,#leave-type,#email{
        margin-top: 10px;
        padding: 20px;
        width: 50%;
    }#reason{
        padding: 20px;
        width: 50%;

    }


</style>