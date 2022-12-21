<template>
  <div class="password-strength-bar">
    <span class="title">Siła Hasła</span>
    <div class="password-strength">
      <span :style="passwordStrength" class="strength-color"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StrengthBar",

  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    passwordStrength() {
      if (this.value < 2) {
        return `width: ${0}%`;
      } else if (this.value >= 2 && this.value < 4) {
        return `width: ${20}%; background: red;`;
      } else if (this.value >= 4 && this.value < 6) {
        return `width: ${40}%; background: orange;`;
      } else if (this.value >= 6 && this.value < 8) {
        return `width: ${60}%; background: #c5fc91;`;
      } else if (this.value >= 8 && this.value < 10) {
        return `width: ${80}%; background: #4fd675;`;
      } else if (this.value >= 10) {
        return `width: ${100}%; background: #16ff00;`;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.password-strength-bar {
  margin-top: 10px;
}

.title {
  font-size: 14px;
  color: #385a64;
}

.password-strength {
  height: 8px;
}

.strength-color {
  transition: 0.3s all ease-out;
  border-radius: 25px;
  display: block;
  height: 100%;
}
</style>
