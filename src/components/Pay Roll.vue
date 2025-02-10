<template>
  <div class="payroll-container">
    <h1>Employee Payroll</h1>
    <div class="input-section">
      <label for="employeeId">Enter Employee ID:</label>
      <input v-model.number="searchId" type="number" id="employeeId" placeholder="Enter Employee ID">
      <button @click="fetchEmployeeRecord">Search</button>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div v-if="selectedRecord" class="payroll-details">
      <h2>Payslip</h2>
      <div class="payslip">
        <div class="payslip-header">
          <h3>Modern Tech Solutions</h3>
          <p>314 Imam Haron Road, Landowne, Cape Town, SA</p>
        </div>
        <div class="payslip-body">
          <table>
            <tr><td><strong>Employee ID:</strong></td><td>{{ selectedRecord.employee_id }}</td></tr>
            <tr><td><strong>Payroll ID:</strong></td><td>{{ selectedRecord.payroll_id }}</td></tr>
            <tr><td><strong>Hours Worked:</strong></td><td>{{ selectedRecord.hours_worked }}</td></tr>
            <tr><td><strong>Leave Deduction:</strong></td><td>{{ selectedRecord.leave_deduction }}</td></tr>
            <tr><td><strong>Base Rate (R):</strong></td><td>{{ baseRate }}</td></tr>
            <tr><td><strong>Gross Salary (R):</strong></td><td>{{ grossSalary.toFixed(2) }}</td></tr>
            <tr><td><strong>Final Salary (R):</strong></td><td><strong>{{ selectedRecord.final_salary.toFixed(2) }}</strong></td></tr>
          </table>
        </div>
        <!-- <div class="payslip-footer">
          <p><strong>Performance:</strong> {{ selectedRecord.performance }}</p>
          <p>Authorized Signature: ______________________</p>
        </div> -->
      </div>
      <div class="button-group">
        <button @click="printPaySlip">Print Pay Slip</button>
        <button @click="downloadPDF">Download PDF</button>
      </div>
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
export default {
  data() {
    return {
      searchId: null,
      errorMessage: "",
      selectedRecord: null,
      baseRate: 400, // Example base rate per hour
      payrollRecords: [
        { payroll_id: 1000, employee_id: 1, hours_worked: 160, leave_deduction: 8, final_salary: 65000, performance: "Good" },
        { payroll_id: 1001, employee_id: 2, hours_worked: 150, leave_deduction: 10, final_salary: 79000, performance: "Good" },
        { payroll_id: 1002, employee_id: 3, hours_worked: 170, leave_deduction: 4, final_salary: 54800, performance: "Good" },
        { payroll_id: 1003, employee_id: 4, hours_worked: 165, leave_deduction: 6, final_salary: 59700, performance: "Bad" },
        { payroll_id: 1004, employee_id: 5, hours_worked: 158, leave_deduction: 5, final_salary: 57850, performance: "Bad" }
      ]
    };
  },
  computed: {
    grossSalary() {
      return this.selectedRecord ? this.selectedRecord.hours_worked * this.baseRate : 0;
    }
  },
  methods: {
    fetchEmployeeRecord() {
      this.selectedRecord = null;
      this.errorMessage = "";
      if (!this.searchId || this.searchId <= 0) {
        this.errorMessage = "Please enter a valid Employee ID.";
        return;
      }
      const record = this.payrollRecords.find(emp => emp.employee_id === this.searchId);
      if (record) {
        this.selectedRecord = record;
      } else {
        this.errorMessage = "No payroll record found for the entered Employee ID.";
      }
    },
    printPaySlip() {
      window.print();
    },
    downloadPDF() {
      const doc = new jsPDF();
      doc.text("Payslip", 90, 10);
      doc.text(`Employee ID: ${this.selectedRecord.employee_id}`, 10, 30);
      doc.text(`Payroll ID: ${this.selectedRecord.payroll_id}`, 10, 40);
      doc.text(`Hours Worked: ${this.selectedRecord.hours_worked}`, 10, 50);
      doc.text(`Leave Deduction: ${this.selectedRecord.leave_deduction}`, 10, 60);
      doc.text(`Base Rate: R${this.baseRate}`, 10, 70);
      doc.text(`Gross Salary: R${this.grossSalary.toFixed(2)}`, 10, 80);
      doc.text(`Final Salary: R${this.selectedRecord.final_salary.toFixed(2)}`, 10, 90);
      doc.text(`Performance: ${this.selectedRecord.performance}`, 10, 100);
      doc.save("Payslip.pdf");
    }
  }
};
</script>

<style scoped>
.payroll-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}
.payslip {
  border: 2px solid #333;
  padding: 15px;
  border-radius: 10px;
  background: #f9f9f9;
}
.payslip-header, .payslip-footer {
  text-align: center;
  margin-bottom: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #007BFF;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background: #0056b3;
}
</style>
