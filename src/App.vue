<template>
  <main>
    <img src="./assets/image.jpg" alt="form-image" />
    <RegisterForm />
  </main>
</template>

<script>
import RegisterForm from "./components/RegisterForum.vue";
export default {
  name: "App",

  components: {
    RegisterForm,
  },
};
</script>

<style scoped>

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  box-sizing: border-box;
}

img {
  border-radius: 14px;
  opacity: 0.75;
  margin-bottom: 20px;
  height: 270px;
}

@media only screen and (min-width: 1000px) {
  main {
    flex-direction: row;
    gap: 100px;
  }
  img {
    height: 450px;
  }
}
</style>
