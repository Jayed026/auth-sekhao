<template>
  <div>
    <body class="text-center">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label for="inputname" class="sr-only">Full Name</label>
        <input
          type="name"
          class="form-control"
          placeholder="your name"
          v-model="fullname"
          required
          autofocus
        />

        <label for="inputname" class="sr-only">User Name</label>
        <input
          type="name"
          class="form-control"
          placeholder="user name"
          v-model="username"
          required
          autofocus
        />

        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Email address"
          v-model="email"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
          required
        />

        <label for="inputPassword" class="sr-only">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="confirm Password"
          v-model="confirmpassword"
          required
        />

        <label for="inputPassword" class="sr-only">phone</label>
        <input
          type="number"
          class="form-control"
          placeholder="Phone"
          v-model="phone"
          required
        />

        <label for="inputPassword" class="sr-only">Alternate phone</label>
        <input
          type="number"
          class="form-control"
          placeholder="alternate phone"
          v-model="alternatephone"
          required
        />

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click="signup"
        >
          Sign up
        </button>
        {{ error }}
        <p class="mt-5 mb-3 text-muted">&copy; sekhao-2021</p>
      </form>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      alternatephone: "",
      error: "",
    };
  },
  components: {},
  methods: {
    signup() {
      let newUser = {
        fullname: this.fullname,
        username: this.username,

        email: this.email,
        password: this.password,
        confirmpassword: this.confirmpassword,
        phone: this.phone,
        alternatephone: this.alternatephone,
      };
      axios
        .post("http://shekhao.herokuapp.com/signup/studentsignup", newUser)
        .then(
          (res) => {
            console.log(res);
            this.error = "";
            this.$router.push("/login");
          },
          (err) => {
            console.log(err.response);
            this.err = err.response.data.err;
          }
        );
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
}

/* body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5; 
} */

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
