<template >
    <button class="btn-add" @click="addEmployee()"> Add Employee</button>
    <buton class="btn-remove" @click="removeEmployee()"> Remove Employee</buton>
    <table>
        <thead>
        <tr>
            <th>Id No. </th>
            <th>Name</th>
            <th>Position</th>
            <th>Departemnt</th>
            <th>Salary</th>
            <th>EmploymentHistory</th>
            <th>Contact</th>
        </tr>
        </thead>

    <tr v-for=" employee in employeeInformation" :key="employee.employeeId">
    <!-- <td>{{ index+1 }}</td> -->
        <td>{{ employee.employeeId }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.department }}</td>
        <td>{{ employee.salary }}</td>
        <td>{{ employee.employmentHistory }}</td>
        <td>{{ employee.contact }}</td>
    </tr>

    </table>

    <form>
    <div class="form-control">
            <label>Id No.</label>
            <input type="text" placeholder="jonh doe">
            <br>
            <label>Name</label>
            <input type="text" placeholder="jonh doe">
            <br>
            <label>Position</label>
            <input type="text" placeholder="jonh doe">
            <br>
            <label>Department</label>
            <input type="text" placeholder="jonh doe">
            <br>
            <label>Salary</label>
            <input type="text" placeholder="jonh doe">
            <br>
            <label>Employment History</label>
            <input type="text" placeholder="jonh doe">
            <br>
            <label>Contact</label>
            <input type="text" placeholder="jonh doe">
        </div>
        <button class="update-button" onclick="submit()"> Update</button>

    </form>
    
</template>
<script>
import NavBarComp from './NavBarComp.vue';
export default {
    name: 'AboutView',
    components: { 
        NavBarComp},

    data(){
    return{
        employeeInformation: [
        {
            "employeeId": 1,
            "name": "Sibongile Nkosi",
            "position": "Software Engineer",
            "department": "Development",
            "salary": 70000,
            "employmentHistory": "Joined in 2015, promoted to Senior in 2018",
            "contact": "sibongile.nkosi@moderntech.com"
        },
        {
            "employeeId": 2,
            "name": "Lungile Moyo",
            "position": "HR Manager",
            "department": "HR",
            "salary": 80000,
            "employmentHistory": "Joined in 2013, promoted to Manager in 2017",
            "contact": "lungile.moyo@moderntech.com"
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "position": "Quality Analyst",
            "department": "QA",
            "salary": 55000,
            "employmentHistory": "Joined in 2018",
            "contact": "thabo.molefe@moderntech.com"
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "position": "Sales Representative",
            "department": "Sales",
            "salary": 60000,
            "employmentHistory": "Joined in 2020",
            "contact": "keshav.naidoo@moderntech.com"
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "position": "Marketing Specialist",
            "department": "Marketing",
            "salary": 58000,
            "employmentHistory": "Joined in 2019",
            "contact": "zanele.khumalo@moderntech.com"
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "position": "UI/UX Designer",
            "department": "Design",
            "salary": 65000,
            "employmentHistory": "Joined in 2016",
            "contact": "sipho.zulu@moderntech.com"
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "position": "DevOps Engineer",
            "department": "IT",
            "salary": 72000,
            "employmentHistory": "Joined in 2017",
            "contact": "naledi.moeketsi@moderntech.com"
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "position": "Content Strategist",
            "department": "Marketing",
            "salary": 56000,
            "employmentHistory": "Joined in 2021",
            "contact": "farai.gumbo@moderntech.com"
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "position": "Accountant",
            "department": "Finance",
            "salary": 62000,
            "employmentHistory": "Joined in 2018",
            "contact": "karabo.dlamini@moderntech.com"
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "position": "Customer Support Lead",
            "department": "Support",
            "salary": 58000,
            "employmentHistory": "Joined in 2016",
            "contact": "fatima.patel@moderntech.com"
        },
    ]
    }
    }
    
}
</script>
<style scoped>
*{
    overflow: auto;
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
    .form-control{
        padding: 10px;
    }
</style>