<template>
  <div class="container" style="margin-top: 150px;">
    <div class="card ">
      <div class="card-header text-center">
        <h1>Sondage</h1>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="lead">{{ sondage.question }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul>
                <li v-for="o in sondage.options" :key="o">
                  <div class="form-check float-left">
                    <input v-model="option" class="form-check-input" type="radio" v-bind:id="o" v-bind:value="o">
                    <label class="form-check-label" v-bind:for="o">
                      {{ o }}
                    </label>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <a href="/vue-app-2/#/result">
          <button type="button" class="save-button btn btn-outline-info float-right" @click="saveSondage(sondage.question,option)">
            Enregistrer
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Sondage",
  data() {
    return {
      sondage:{
        question:"",
        options:[],
      },
      questionS: "",
      option:"",
    };
  },
  methods: {

    saveSondage : function(questionS,option){

      var unResult = {
        questionS:"",
        option:""
      }
      var result = localStorage.getItem("unResult");
      if (result == "" || result == null) {
        localStorage.setItem("result", JSON.stringify([]));
      }
      unResult.questionS = questionS;
      unResult.option = option;
      localStorage.setItem("result", JSON.stringify(unResult));
    },
  },

  created() {
    this.sondage = JSON.parse(localStorage.getItem("sondage"));
  }
}
</script>

<style scoped>

</style>