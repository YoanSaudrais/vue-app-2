<template >
  <div class="option-input row justify-content-center no-gutters">
    <div class="input-group mb-3">
      <input type="text" class="form-control" disabled v-bind:value="option.text" v-bind:title="option.text">
      <div class="input-group-append">
        <button class="btn btn-outline-danger" type="button" @click="removeOption(option)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateOption",
  data() {
    return {
      errorMessage: ""
    };
  },

  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeOption(option) {
      this.$emit("removed-option", option);
    }
  }
};
</script>
<style>
.option-input {
  margin-bottom: 5px;
}
</style>