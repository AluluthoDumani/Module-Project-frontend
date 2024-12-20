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

      <div class="form-group1">
      <label for="user-type">Occupation</label>
      <select name="user-type" id="user-type">
        <option value="Admin">Administrator</option>
        <option value="employee">Employee</option>
      </select required>
      </div>

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
            <br>
            <a class="link2" href="#">CREATE STAFF ACCOUNT</a>
        </div>
      </form>

  </div>
</div>
</template>




<script>
// import TableComp from './TableComp.vue';
// import NavBarComp from './NavBarComp.vue';
// import HomeView from '../views/HomeView.vue'
// import HomeView from '../views/HomeView.vue';

export default {
  name: "logIn",
    components: {
    //   NavBarComp,
    // TableComp,
    // HomeView
      
    },
    data() {
    return {
      email: '',
      password: '',
      loginUsers: [
        {
          email: 'admin',
          password: 'admin'
        },
        {
          email: 'Kudos@gmail.com',
          password: 'Fish_123'
        }
      ]
    };
  },
  methods: {
    validate() {
      console.log('hehte');
      
      const isValidUser = this.loginUsers.some(
        (user) => user.email === this.email && user.password === this.password
      );
      console.log(isValidUser, this.email, this.password);
      
      if (isValidUser) {
        console.log(isValidUser, this.email, this.password);

        // Navigate to another page (assuming Vue Router is used)
        this.$router.push("/home");
      } else {
        alert('Login failed');
      }
    },
        // Navigate to another page (assuming Vue Router is used)
        // this.$router.push({ name: 'HomeView' });
      
    }
    }
    



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


Message Xolani Sodam









