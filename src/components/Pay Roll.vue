<template>
  <div class="payroll-container">
    <h1>Employee Payroll</h1>
    <div class="input-section">
      <label for="employeeId">Enter Employee ID:</label>
      <input
        v-model.number="searchId"
        type="number"
        id="employeeId"
        placeholder="Enter Employee ID"
      />
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
            <tr>
              <td><strong>Employee ID:</strong></td>
              <td>{{ selectedRecord.employee_id }}</td>
            </tr>
            <tr>
              <td><strong>Payroll ID:</strong></td>
              <td>{{ selectedRecord.payroll_id }}</td>
            </tr>
            <tr>
              <td><strong>Hours Worked:</strong></td>
              <td>{{ selectedRecord.hours_worked }}</td>
            </tr>
            <tr>
              <td><strong>Leave Deduction:</strong></td>
              <td>{{ selectedRecord.leave_deduction }}</td>
            </tr>
            <tr>
              <td><strong>Base Rate (R):</strong></td>
              <td>{{ baseRate }}</td>
            </tr>
            <tr>
              <td><strong>Gross Salary (R):</strong></td>
              <td>{{ grossSalary.toFixed(2) }}</td>
            </tr>
            <tr>
              <td><strong>Final Salary (R):</strong></td>
              <td>
                <strong>{{
                  finalSalaryFormatted
                }}</strong>
              </td>
            </tr>
          </table>
        </div>
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
    };
  },
  computed: {
    grossSalary() {
      return this.selectedRecord ? this.selectedRecord.hours_worked * this.baseRate : 0;
    },
    finalSalaryFormatted() {
      // Ensure final_salary is a valid number
      return this.selectedRecord?.final_salary !== undefined && this.selectedRecord?.final_salary !== null
        ? Number(this.selectedRecord.final_salary).toFixed(2)
        : "N/A";
    }
  },
  methods: {
    async fetchEmployeeRecord() {
      this.selectedRecord = null;
      this.errorMessage = "";
      if (!this.searchId || this.searchId <= 0) {
        this.errorMessage = "Please enter a valid Employee ID.";
        return;
      }
      try {
        const response = await fetch(`http://localhost:3500/payroll/${this.searchId}`);
        if (!response.ok) {
          throw new Error("Payroll record not found");
        }
        const data = await response.json();
        // Ensure correct data structure & conversion
        this.selectedRecord = data.payroll[0]
          ? {
              ...data.payroll[0],
              final_salary: data.payroll[0].final_salary ? Number(data.payroll[0].final_salary) : null, // Convert to number
            }
          : null;
        if (!this.selectedRecord) {
          this.errorMessage = "No payroll record found for the entered Employee ID.";
        }
      } catch (error) {
        this.errorMessage = "Error fetching payroll record.";
      }
    },
    printPaySlip() {
      window.print();
    },
    downloadPDF() {
      if (!this.selectedRecord) {
        this.errorMessage = "No record to download.";
        return;
      }
      const doc = new jsPDF();
      doc.text("Payslip", 90, 10);
      doc.text(`Employee ID: ${this.selectedRecord.employee_id}`, 10, 30);
      doc.text(`Payroll ID: ${this.selectedRecord.payroll_id}`, 10, 40);
      doc.text(`Hours Worked: ${this.selectedRecord.hours_worked}`, 10, 50);
      doc.text(`Leave Deduction: ${this.selectedRecord.leave_deduction}`, 10, 60);
      doc.text(`Base Rate: R${this.baseRate}`, 10, 70);
      doc.text(`Gross Salary: R${this.grossSalary.toFixed(2)}`, 10, 80);
      doc.text(`Final Salary: R${this.finalSalaryFormatted}`, 10, 90);
      doc.save("Payslip.pdf");
    },
  },
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
  background: #F9F9F9;
}
.payslip-header,
.payslip-footer {
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
  background: #0056B3;
}
</style>






