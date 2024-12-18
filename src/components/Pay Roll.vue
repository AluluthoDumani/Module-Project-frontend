<template>
  <div class="payroll-system">
    <h1>Payroll System</h1>
    <div class="employee-form">
      <h2>Employee Details</h2>
      <form @submit.prevent="generatePaySlip">
        <div class="form-group">
          <label>Employee Name:</label>
          <input v-model="employee.name" required>
        </div>
        <div class="form-group">
          <label>Employee ID:</label>
          <input v-model="employee.id" required>
        </div>
        <!-- Option for staff working in different departments -->
        <div class="form-group">
          <label>Department:</label>
          <select v-model="employee.department" required>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div class="form-group">
          <label>Basic Salary:</label>
          <input type="number" v-model.number="employee.basicSalary" required>
        </div>
        <div class="form-group">
          <label>Overtime Hours:</label>
          <input type="number" v-model.number="employee.overtimeHours" required>
        </div>
        <div class="form-group">
          <label>Allowances:</label>
          <input type="number" v-model.number="employee.allowances" required>
        </div>
        <button type="submit">Generate Pay Slip</button>
      </form>
    </div>

    <div v-if="showPaySlip" class="pay-slip">
      <h2>Pay Slip</h2>
      <div class="pay-slip-content" ref="paySlipContent">
        <div class="company-header">
          <h3>ModernTech Solutions</h3>
          <p>314 LC Academy, Lansdown</p>
        </div>
        <div class="employee-details">
          <p><strong>Employee Name:</strong> {{ employee.name }}</p>
          <p><strong>Employee ID:</strong> {{ employee.id }}</p>
          <p><strong>Department:</strong> {{ employee.department }}</p>
          <p><strong>Pay Period:</strong> {{ currentMonth }}</p>
        </div>
        <div class="salary-breakdown">
  <table class="pay-slip-table">
    <thead>
      <tr>
        <th colspan="2">Earnings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Basic Salary</td>
        <td class="amount">R{{ employee.basicSalary.toFixed(2) }}</td>
      </tr>
      <tr>
        <td>Overtime Pay</td>
        <td class="amount">R{{ overtimePay.toFixed(2) }}</td>
      </tr>
      <tr>
        <td>Allowances</td>
        <td class="amount">R{{ employee.allowances.toFixed(2) }}</td>
      </tr>
      <tr class="total">
        <td>Gross Pay</td>
        <td class="amount">R{{ grossPay.toFixed(2) }}</td>
      </tr>
    </tbody>

    <thead>
      <tr>
        <th colspan="2">Deductions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tax (15%)</td>
        <td class="amount">R{{ tax.toFixed(2) }}</td>
      </tr>
      <tr>
        <td>Pension Fund</td>
        <td class="amount">R{{ pensionFund.toFixed(2) }}</td>
      </tr>
      <tr class="total">
        <td>Total Deductions</td>
        <td class="amount">R{{ totalDeductions.toFixed(2) }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr class="net-pay">
        <td>Net Pay</td>
        <td class="amount">R{{ netPay.toFixed(2) }}</td>
      </tr>
    </tfoot>
  </table>
</div>
      </div>
      <div class="button-group">
        <button @click="printPaySlip" class="print-btn">Print Pay Slip</button>
        <button @click="downloadPDF" class="download-btn">Download PDF</button>
      </div>
    </div>
  </div>
</template>

<script>
// Allows me to load pdfs npm install jspdf
import { jsPDF } from 'jspdf'

export default {
  name: 'PayrollSystem',
  data() {
    return {
      employee: {
        name: '',
        id: '',
        department: '',
        basicSalary: 0,
        overtimeHours: 0,
        allowances: 0
      },
      showPaySlip: false,
      pensionFund: 100 // Fixed pension Fund amount
    }
  },
  computed: {
    currentMonth() {
      const date = new Date()
      return date.toLocaleString('default', { month: 'long', year: 'numeric' })
    },
    // Multiplies by 1.5 for time-and-a-half overtime rate
    overtimePay() {
      const overtimeRate = 37.2 * (this.employee.basicSalary / 180) 
      return this.employee.overtimeHours * overtimeRate
    },
    grossPay() {
      return this.employee.basicSalary + this.overtimePay + this.employee.allowances
    },
    tax() {
      return this.grossPay * 0.15
    },
    totalDeductions() {
      return this.tax + this.pensionFund
    },
    netPay() {
      return this.grossPay - this.totalDeductions
    }
  },
  methods: {
    generatePaySlip() {
      this.showPaySlip = true
    },
    printPaySlip() {
      window.print()
    },
    downloadPDF() {
      const doc = new jsPDF()
      
      // Company Header
      doc.setFontSize(20)
      doc.text('MordenTech Solutions', 20, 20)
      doc.setFontSize(12)
      doc.text('314 LC Academy, Lansdown', 20, 30)
      
      // Employee Details
      doc.setFontSize(14)
      doc.text('Pay Slip', 20, 45)
      doc.setFontSize(12)
      doc.text(`Employee Name: ${this.employee.name}`, 20, 60)
      doc.text(`Employee ID: ${this.employee.id}`, 20, 70)
      doc.text(`Department: ${this.employee.department}`, 20, 80)
      doc.text(`Pay Period: ${this.currentMonth}`, 20, 90)
      
      // Earnings
      doc.text('Earnings:', 20, 110)
      doc.text(`Basic Salary: R${this.employee.basicSalary.toFixed(2)}`, 30, 120)
      doc.text(`Overtime Pay: R${this.overtimePay.toFixed(2)}`, 30, 130)
      doc.text(`Allowances: R${this.employee.allowances.toFixed(2)}`, 30, 140)
      doc.text(`Gross Pay: R${this.grossPay.toFixed(2)}`, 30, 150)
      
      // Deductions
      doc.text('Deductions:', 20, 170)
      doc.text(`Tax (15%): R${this.tax.toFixed(2)}`, 30, 180)
      doc.text(`Pension Fund: R${this.pensionFund.toFixed(2)}`, 30, 190)
      doc.text(`Total Deductions: R${this.totalDeductions.toFixed(2)}`, 30, 200)
      
      // Net Pay The money after  deductions
      autotable(doc, {})
      doc.setFontSize(14)
      doc.text(`Net Pay: R${this.netPay.toFixed(2)}`, 20, 220)
      
      doc.save(`payslip_${this.employee.name}_${this.currentMonth}.pdf`)
    }
  }
}
</script>

<style scoped>
.payroll-system {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.employee-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
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
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.print-btn {
  background-color: #4CAF50;
  color: white;
}

.print-btn:hover {
  background-color: #45a049;
}

.download-btn {
  background-color: #2196F3;
  color: white;
}

.download-btn:hover {
  background-color: #1976D2;
}

.pay-slip {
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.company-header {
  text-align: center;
  margin-bottom: 20px;
}

.company-header h3 {
  margin: 0;
  color: #333;
}

.employee-details {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.pay-slip-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.pay-slip-table th {
  background-color: #f5f5f5;
  padding: 12px;
  text-align: left;
  font-size: 16px;
  border-bottom: 2px solid #ddd;
}

.pay-slip-table td {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.amount {
  text-align: right;
  font-family: monospace;
}

.total td {
  border-top: 2px solid #ddd;
  font-weight: bold;
}

.net-pay td {
  font-size: 18px;
  font-weight: bold;
  color: #2196F3;
  border-top: 2px solid #2196F3;
}
/* .salary-breakdown h4 {
  color: #2196F3;
  margin: 20px 0 10px;
} */

/* .net-pay {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

.net-pay h4 {
  color: #4CAF50;
  font-size: 1.2em;
} */

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

@media print {
  .employee-form,
  .button-group {
    display: none;
  }
  
  .pay-slip {
    border: none;
    box-shadow: none;
  }
}
</style>
