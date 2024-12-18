// HTML

<template>
<div class="container mt-5">
  <div class="row text-center">
    <div class="col">
      <h2>Work Attendance Manager App</h2>
      <p>Written By: Anthony Bernard</p>
      <p>Enter a name and random employee id number. Press submit to see your assigned job duty. You can add as many employee names and ID's as you want.</p>
    </div>
  </div>
</div>

<div class="container">
  <div id="main" class="container">
    <div class="row text-center">
      <div class="col">
        <div id="inner">
          <label class="mt-5">Name</label>
          <input id="employeeName" class="form-control">
          <label class="mt-3">Employee Id</label>
          <input id="employeeId" class="form-control" type="number">
          <button id="submit" class="btn btn-secondary mt-3">Submit</button>
        </div>
        <p id="showClockIn" class="mt-3"></p>
        <button id="goBack" class="btn btn-secondary mt-3 mb-4">Go Back</button>
        <button id="showSchedule" class="btn btn-secondary mt-3 mb-4">Show Schedule</button>
        <button id="hideSchedule" class="btn btn-secondary mt-3 mb-4">Hide Schedule</button>
      </div>
    </div>
  </div>
</div>

<div id="schedule" class="container mt-5">
  <table id="newTable" class="table table-bordered table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Employee ID</th>
        <th scope="col">Employee Name</th>
        <th scope="col">Employee Duties</th>
        <th scope="col">Checked-In</th>
      </tr>
    </thead>
    <tbody id="newRow">
    </tbody>
  </table>
</div>
</template>

// JAVASCRIPT
<script>
export default {
    name: 'Employee portal',
    data() {
        return {
            employeePortal(){
                window.print
            }
            
        }
    }
}
</script>

// STYLING CSS
<style scooped>
    body {
  padding: 0;
  margin: 0;
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#main {
  margin-top: 1em;
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1em;
  background-color: lightgrey;
}

/*Buttons*/
#goBack {
  display: none;
}

#hideSchedule {
  display: none;
}

/*Schedule*/
#schedule {
  display: none;
}

</style>