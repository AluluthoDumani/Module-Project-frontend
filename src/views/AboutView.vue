<template>
  <TableComp/>
<table>
  <tbody>
  <tr>
    <th>Id No. </th>
    <th>Name</th>
    <th>Position</th>
    <th>Departemnt</th>
    <th>Salary</th>
    <th>EmploymentHistory</th>
    <th>Contact</th>
  </tr>
  <tr v-for=" employee, index in employeeInformation" :key="employee">
    <td>{{ index+1 }}</td>
    <td>{{ employee.employeeId }}</td>
    <td>{{ employee.name }}</td>
    <td>{{ employee.position }}</td>
    <td>{{ employee.department }}</td>
    <td>{{ employee.employeeHistory }}</td>
    <td>{{ employee.contact }}</td>

  </tr>
</tbody>
</table>
</template>

<script>
import TableComp from '@/components/TableComp.vue';
export default{
  components:{
    TableComp,
    
  }
}
</script>

<style>
table{
  border: 30px;
} 
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
</style>