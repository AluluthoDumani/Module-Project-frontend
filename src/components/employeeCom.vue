<template>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="main">
      <h1>Welcome Back Xolani Sodam</h1>
    </div>
    <div class="sidebar">
      <a href="#myPortal"><i class="fa fa-fw fa-home"></i>myPortal</a>
      <a href="#Logs"><i class="fa fa-fw fa-wrench"></i> Logs</a>
      <a href="/Payroll"><i class="fa fa-fw fa-user"></i> Requests</a>
      <a href="#myDocs"><i class="fa fa-fw fa-envelope"></i> myDocs</a>
    </div>
    <div class="card">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>Xolani Sodam</h4>
        <p>Software Analyst</p>
      </div>
    </div>
    <footer>
      <div>
        <p>
          ALL RIGHTS RESERVED || MordenTECH Industries © <br />
          2024
        </p>
      </div>
    </footer>
  </template>
  // SCRIPT
  <script>
//   import api from "@/services/api";
  export default {
    data() {
      return {
        employee: null,
      };
    },
    async created() {
      const employeeId = 1; // Replace with dynamic employee ID
      try {
        const response = await api.get(`/employee/${employeeId}`);
        this.employee = response.data;
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    },
  };
  </script>
  //CSS
  <style>
  /* My navvigation bar style */
  body {
    font-family: "Lato", sans-serif;
  }
  .sidebar {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #1112;
    overflow-x: hidden;
    padding-top: 16px;
  }
  .sidebar a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
  }
  .sidebar a:hover {
    color: #F1F1F1;
  }
  .main {
    margin-left: 160px; /* Same as the width of the sidenav */
    padding: 0px 10px;
  }
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar a {
      font-size: 18px;
    }
  }
  /* My cards  style */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.1s;
    width: 20%;
    border-radius: 10%;
    margin-left: auto;
    margin-right: auto;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .container {
    padding: 2px 16px;
  }
  h4 {
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  /* footer { */
  .footer {
    margin-bottom: 0 0 20px;
    position: absolute;
    margin: 0;
    height: 20px;
    background: black;
    width: 100%;
    clear: both;
  }
  /* margin-bottom: 100%;
    position: absolute;
    width: 100%;
    padding: 3px;
    background-color: black;
    color: white; */
  </style>