<template>
  <div class="container" style="margin-top: 150px;">
    <div class="card text-center">
      <div class="card-header">
        <h1>Création du Sondage</h1>
      </div>
      <div class="card-body">
        <span class="lead">Posez votre question</span>
        <div class="col-md-10 offset-md-1">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inp_question" ><font-awesome-icon :icon="['fas', 'question']" /></span>
            </div>
            <input type="text" class="form-control" aria-label="question" placeholder="Ecrivez une question..." aria-describedby="inp_question" v-model="question">
          </div>
        </div>
        <span class="lead">Ajoutez vos options</span>
        <div class="col-md-8 offset-md-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inp_option" ><font-awesome-icon :icon="['fas', 'step-forward']" /></span>
            </div>
            <input type="text" class="form-control" aria-label="question" placeholder="Ecrivez une option..." aria-describedby="inp_option" v-model="newOption" v-on:keypress.enter="addOption">
          </div>
        </div>
        <div class="row justify-content-center" v-for="optiona in options" :key="optiona.text">
          <CreateOption v-bind:option="optiona" v-on:removed-option="removedOption($event)"/>
        </div>
      </div>
      <div class="card-footer">
        <div v-show="buttonShown" class="float-left">
          <button type="button" class="clear-button btn btn-outline-danger" v-on:click="clearAllOptions">
            Supprimer toutes les options
          </button>
        </div>
        <a href="/vue-app-2/#/sondage" target="_blank">
          <button type="button" class="validate-button btn btn-outline-info float-right" v-bind:disabled="isExist()" @click="addSondage(question,options)" >
            Créer le Sondage
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import CreateOption from "@/components/CreateOption.vue";

export default {
name: "Accueil",
  components: { CreateOption },
  data() {
    return {
      question: "",
      newOption: "",
      options: [],
      errorMessage: "",
      buttonShown: false,
    };
  },
  methods: {
    removedOption(option) {
      let index = this.options.indexOf(option);
      this.options.splice(index, 1);
      this.errorMessage = "";
    },

    addOption() {
      this.options.push(
        this.newOption
      );
      this.newOption = "";
    },

    clearAllOptions() {
      this.options = [];
      this.errorMessage = "";
    },
    isExist() {
      return (
          this.options === null ||
          this.options.length < 2 ||
          this.question === ""
      );
    },
    addSondage : function(question,options){
      var unSondage = {
        question:"",
        options:[]
      }
      var sondage = localStorage.getItem("unSondage");
      if (sondage == "" || sondage == null) {
        localStorage.setItem("sondage", JSON.stringify([]));
      }
      unSondage.question = question;
      unSondage.options = options;
      localStorage.setItem("sondage", JSON.stringify(unSondage));

    },
  },
  watch: {
    //Executer à chaque fois que la valeur de options change
    options() {
      this.buttonShown = this.options != null && !(this.options.length === 0);
    }
  }
}
</script>

<style scoped>

</style>