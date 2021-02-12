<template >
  <div class="option-input row justify-content-center no-gutters">
    <div class="input-group mb-3">
      <input type="text" class="form-control" disabled v-bind:value="option" v-bind:title="option">
      <div class="input-group-append">
        <button class="btn btn-outline-danger" type="button" @click="removeOption(option)">
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
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
    //Déclenche l'évenement removed-option en transmettant l'option à supprimer
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