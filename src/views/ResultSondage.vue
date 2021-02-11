<template>
  <div class="container" style="margin-top: 150px;">
    <div class="card ">
      <div class="card-header text-center">
        <h1>Résultat</h1>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="lead">Question : {{ result.questionS }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="lead">Option choisi : {{ result.option }}</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultSondage",
  data() {
    return {
      result:{
        questionS:"",
        option:"",
      },
    };
  },
  created() {
    this.result = JSON.parse(localStorage.getItem("result"));
  }
}
</script>

<style scoped>

</style>