<template>
  <Form autocomplete="off" @submit="onSubmit" :validation-schema="schema">
    <div class="form-header">Dołącz do Nas!</div>
    <div class="form-field-container">
      <div class="form-field">
        <label for="username">Nazwa użytkownika:</label>
        <Field name="username" type="text" />
        <ErrorMessage class="error" name="username" />
      </div>
      <div class="form-field">
        <label for="email">Email:</label>
        <Field name="email" type="text" />
        <ErrorMessage class="error" name="email" />
      </div>
      <div class="form-field">
        <label for="password">Hasło:</label>
        <Field v-model="password" name="password" type="password" />
        <ErrorMessage class="error" name="password" />
      </div>
      <div class="form-field">
        <label for="repeat-password">Potwierdź Hasło:</label>
        <Field name="repeat-password" type="password" />
        <ErrorMessage class="error" name="repeat-password" />
      </div>
    </div>
    <StrengthBar v-if="password.length >= 2" :value="password.length" />
    <button>Zarejestruj</button>
  </Form>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import StrengthBar from "../components/StrengthBar.vue";
import * as yup from "yup";
import axios from "axios";

export default {
  name: "RegisterForm",

  components: {
    Field,
    Form,
    ErrorMessage,
    StrengthBar,
  },

  data() {
    return {
      password: "",
      schema: yup.object({
        username: yup
          .string()
          .required("Nazwa użytkownika jest obowiązkowa")
          .min(5),
        email: yup.string().required("Pole email jest obowiązkowe").email(),
        password: yup.string().required("Hasło jest obowiązkowe"),
        "repeat-password": yup
          .string()
          .required("")
          .oneOf([yup.ref("password"), null], "Hasła nie pasują do siebie!"),
      }),
    };
  },

  methods: {
    onSubmit(values, { resetForm }) {
      const url = "http://localhost:3000/users";

      try {
        axios.post(url, values).then((res) => {
          if (res.status === 201) {
            alert(JSON.stringify(values, null, 2));
            resetForm();
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

.form-header {
  font-size: 50px;
  margin-bottom: 20px;
  color: #6c63ff;
  text-decoration: underline;
  text-decoration-thickness: 3px;
}
.form-field-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 15px 0 0 2px;
  width: 350px;
  border: 1px solid #385a645a;
  color: #385a64;
  outline: none;
  border-radius: 5px;
  font-size: 18px;
}
label {
  display: block;
  color: #385a64;
  font-size: 15px;
  margin-bottom: 3px;
}

button {
  display: block;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 75px;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  color: #fff;
  background: #a952a3;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all ease-out;
}

button:hover {
  background: #d268cc;
}

.error {
  display: block;
  margin-top: 3px;
  color: red;
  font-size: 15px;
}
</style>
