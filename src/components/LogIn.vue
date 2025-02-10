<template>
  <HomeView/>
  <div class="login-page">
    <!-- Side Image -->
    <div class="side-image">
      <img src="@/assets/meg.jpg" alt="Side" />
    </div>

    <!-- Login Form -->
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Occupation Selector -->
        <div class="form-group1">
          <label for="user-type">Occupation</label>
          <select v-model="role" id="user-type" required>
            <option value="Admin">Administrator</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <!-- Email Input -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="button" @click="validate()">Login</button>
        <p class="opt3">————OR————</p>

        <div class="links">
          <a class="link1" href="#">FORGOT PASSWORD</a>
          <br />
          <a class="link2" href="#">CREATE STAFF ACCOUNT</a>
        </div>
      </form>
    </div>
  </div>
</template>





<script>
export default {
  name: "logIn",
  data() {
    return {
      email: "",
      password: "",
      role: "", // This will store the selected role
      loginUsers: [
        {
          email: "admin",
          role: "Admin",
          password: "admin",
        },
        {
          email: "Kudos@gmail.com",
          role: "Employee",
          password: "Fish_123",
        },
      ],
    };
  },
  methods: {
    validate() {
  console.log("Attempting to log in...");
  console.log("Entered Email:", this.email);
  console.log("Entered Password:", this.password);
  console.log("Selected Role:", this.role);

  // Check the loginUsers array for matching credentials
  const isValidUser = this.loginUsers.some(
  (user) =>
    user.email.trim() === this.email.trim() &&
    user.password.trim() === this.password.trim() &&
    user.role.trim() === this.role.trim()
);


  if (isValidUser) {
    // Redirect based on the role
    if (this.role === "Admin") {
      this.$router.push("/home"); // Admin route
    } else if (this.role === "Employee") {
      this.$router.push("/employee-dashboard"); // Employee route
    }
  } else {
    console.log("Invalid credentials or role.");
    alert("Invalid login credentials or role.");
    this.email = "";
    this.password = "";
    this.role = "";
  }
}

}

};
</script>



<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}
.side-image {
  flex: 1;
  background-color: #F4F4F4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.side-image img {
  width: 120%;
  height: 100%;
  object-fit: cover;
}
.login-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
  margin-bottom: 40px;
}
.form-group {
  margin-bottom: 15px;
  width: 100%;
  /* text-align: */
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  text-align: center;
  font-size: 16px;
}
.form-group1 select {
        width: 110%;
        padding: 10px;
        text-align: center;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 15px;
        box-sizing: border-box;
        font-size: 16px;
        background-color: #fff;
        appearance: none; /* Removes default browser styles */
    }
button {
  width: 110%;
  padding: 10px;
  background-color: lightgray;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background-color: #0056B3;
}
.opt3{
    margin-bottom: 30px;
    text-align: center;
}
.links {
    margin-top: 50px;
    text-decoration: none;
    color: lightgray;
}
.link1{
    text-decoration: none;
    color: lightblue;
    margin-top: 20px;
}
.link2{
    text-decoration: none;
    color: lightblue;
}
/* For small mobile devices */
@media (max-width: 480px) {
  h2 {
    font-size: 20px;
  }
}
/* For tablets and smaller screens */
@media (max-width: 768px) {
  .login-page {
    flex-direction: column;
  }
}
</style>












 