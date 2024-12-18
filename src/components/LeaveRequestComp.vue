<template >
    <!-- <section>
    <div class="form-container">
        <h2>Employee Leave Form</h2>
    <form class="form" method="post">
        <label>Employee ID : </label>
        <input type="number" id="employeeID" name="employeeID" required>

        <label>Emplyeee Name: </label>
        <input type="text" id="employeeName" name="employeeName" required>

        <label>Email : </label>
        <input type="email" id="employeeEmail" name="email" required>

        <label>Duration</label>
        <input type="number" id="leave-duration" name="leave-duration" required>


        <label>Type of Leave : </label>
        <select id="leavetype">
            <option value="annual">Annual </option>
            <option value="sick">Sick </option>
            <option value="maternity"> Maternity</option>
            <option value="paternity"> Paternity</option>
            <option value="family-responsiblility">Family Responsiblility </option>
        </select>
        <label>Leave Reason: </label>
        <input type="text" id="leave-reason" name="leave-reason" required>

        <button id="btn"> Send Request</button>
        </form>  
        </div>
    </section>

    <section class="table-container">
      <h2>Leave Requests</h2>
      <table>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Leave Reason</th>
            <th>Status</th>
          </tr>
        <tbody>
          <tr
            v-for="employee in attendanceAndLeave"
            :key="employee.employeeId"
          >
            <td>{{ employee.employeeId }}</td>
            <td>{{ employee.name }}</td>
            <td v-for="leave in employee.leaveRequests" :key="leave.date">
              <td>{{ leave.reason }}</td>
              <td>{{ leave.status }}</td>
            </td>
          </tr>
        </tbody>
      </table>
    </section> -->
</template>
<script>
// import AttendanceView from '@/views/AttendanceView.vue';
// import NavBarComp from './NavBarComp.vue';

// export default {
//     name: 'AttendanceView',
//     components:{
//         NavBarComp,
//         AttendanceView
//     },
//     data(){
//         return{
//         attendanceAndLeave: [
//         {
//             employeeId: 1,
//             name: "Sibongile Nkosi",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-22",
//                     "reason": "Sick Leave",
//                     "status": "Approved"
//                 },
//                 {
//                     "date": "2024-12-01",
//                     "reason": "Personal",
//                     "status": "Pending"
//                 }
//             ]
//         },
//         {
//             employeeId: 2,
//             name: "Lungile Moyo",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-15",
//                     "reason": "Family Responsibility",
//                     "status": "Denied"
//                 },
//                 {
//                     "date": "2024-12-02",
//                     "reason": "Vacation",
//                     "status": "Approved"
//                 }
//             ]
//         },
//         {
//             employeeId: 3,
//             name: "Thabo Molefe",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-10",
//                     "reason": "Medical Appointment",
//                     "status": "Approved"
//                 },
//                 {
//                     "date": "2024-12-05",
//                     "reason": "Personal",
//                     "status": "Pending"
//                 }
//             ]
//         },
//         {
//             employeeId: 4,
//             name: "Keshav Naidoo",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-20",
//                     "reason": "Bereavement",
//                     "status": "Approved"
//                 }
//             ]
//         },
//         {
//             employeeId: 5,
//             name: "Zanele Khumalo",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-12-01",
//                     "reason": "Childcare",
//                     "status": "Pending"
//                 }
//             ]
//         },
//         {
//             employeeId: 6,
//             name: "Sipho Zulu",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-18",
//                     "reason": "Sick Leave",
//                     "status": "Approved"
//                 }
//             ]
//         },
//         {
//             employeeId: 7,
//             name: "Naledi Moeketsi",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-22",
//                     "reason": "Vacation",
//                     "status": "Pending"
//                 }
//             ]
//         },
//         {
//             employeeId: 8,
//             name: "Farai Gumbo",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-12-02",
//                     "reason": "Medical Appointment",
//                     "status": "Approved"
//                 }
//             ]
//         },
//         {
//             employeeId: 9,
//             name: "Karabo Dlamini",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-11-19",
//                     "reason": "Childcare",
//                     "status": "Denied"
//                 }
//             ]
//         },
//         {
//             employeeId: 10,
//             name: "Fatima Patel",
//             attendance: [
//                 {
//                     "date": "2024-11-25",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "status": "Absent"
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "status": "Present"
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "status": "Present"
//                 }
//             ],
//             leaveRequests: [
//                 {
//                     "date": "2024-12-03",
//                     "reason": "Vacation",
//                     "status": "Pending"
//                 }
//             ]
//         }
//     ]
// } 
//         }

//     }

    

</script>
<style scoped>
    /* *{
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

    } */
</style>