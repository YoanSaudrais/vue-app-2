<template>
  <div class="container" style="margin-top: 150px;">
    <div class="card text-center">
      <div class="card-header">
        <h1>Sondage</h1>
      </div>
      <div class="card-body">
        <div class="row">
          <span class="lead">{{ filteredSondages.id }}</span>
        </div>
        <div>
          <ul>
            <li v-for="sondage in filteredSondages" :key="sondage.id">
                {{sondage.options}}
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="save-button btn btn-outline-info float-right">
          Enregistrer
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import sondagesData from "@/json/sondages.json";

export default {
  name: "Sondage",
  data() {
    return {
      sondages: sondagesData,
    };
  },

  computed: {
    filteredSondages() {
      return this.sondages.filter(sondages => sondages.id === this.$route.params.id );
    }
  }
}
</script>

<style scoped>

</style>