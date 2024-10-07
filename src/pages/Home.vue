<script setup lang="ts">
import { ref, watch, onMounted, capitalize } from "vue";
import Card from "@/components/Card.vue";
import ListItem from "@/commons/classes/lists/listItem";
import { sprite } from "@/commons/utils/URLs";
import { useStore } from "vuex";
import Pokemon from "./pokemon/Pokemon.vue";

const { getters, commit, dispatch } = useStore();
const nameFilter = ref<string>("");
const idFilter = ref<number>();
const typeFilter = ref<number>();
const loading = ref<boolean>(false);
const open = ref<boolean>(false);

watch(nameFilter, (curr, _) => {
  loading.value = true;
  commit("setNameFilter", curr);
  setTimeout(() => (loading.value = false), 1000);
});

watch(idFilter, (curr, _) => {
  loading.value = true;
  commit("setIdFilter", curr);
  setTimeout(() => (loading.value = false), 1000);
});

watch(typeFilter, (curr, _) => {
  loading.value = true;
  setTimeout(() => {
    dispatch("fetchType", curr);
    loading.value = false;
  }, 1000);
});

const openDrawer = (e: any, id: number) => {
  e.preventDefault();
  dispatch("fetchPokemon", { id: id }).then(() => (open.value = true));
};

const closeDrawer = (e: any) => {
  e.preventDefault();
  open.value = false;
  setTimeout(() => {
    dispatch("fetchPokemon");
  }, 500);
};

const load = ({ done }: any) => {
  setTimeout(() => {
    if (getters.getLimit >= getters.getTotal) done("empty");
    else {
      commit("setLimit", getters.getLimit + 50);
      done("ok");
    }
  }, 1000);
};

onMounted(() => {
  Promise.all([
    dispatch(`fetchPokemonList`, { offset: 0, limit: 10000 }),
    dispatch(`fetchTypeList`),
  ]).then(() => (loading.value = false));
});
</script>

<template>
  <main class="home-view">
    <Pokemon :open="open" :onClose="closeDrawer" />
    <div class="filters">
      <v-text-field
        variant="outlined"
        v-model="nameFilter"
        label="Name filter"
      />
      <v-number-input
        variant="outlined"
        v-model="idFilter"
        :min="1"
        :max="getters.getTotal"
        label="Id filter"
      />
      <v-autocomplete
        label="Type filter"
        variant="outlined"
        v-model="typeFilter"
        clearable
        :items="
          getters.getTypeList.map((type: ListItem, index: number) => ({
            title: type.name,
            value: index + 1,
          }))
        "
      >
      </v-autocomplete>
    </div>
    <v-sheet
      v-if="loading"
      height="80vh"
      class="d-flex align-center justify-center"
    >
      <v-progress-circular indeterminate></v-progress-circular>
    </v-sheet>
    <v-infinite-scroll v-else class="fade-in" height="80vh" @load="load">
      <v-sheet class="d-flex flex-wrap justify-center pa-2">
        <template
          v-for="pokemon in getters.getFilteredPokemonList"
          :key="pokemon.id"
        >
          <v-sheet class="pa-2 flex-grow-1 flex-shrink-0" width="15rem">
            <Card
              :actions="[
                {
                  text: 'details',
                  function: (e) => openDrawer(e, pokemon.id),
                },
              ]"
            >
              <template v-slot:title>
                {{ capitalize(pokemon.name) }} (#{{ pokemon.id }})
              </template>
              <template v-slot:content>
                <v-sheet class="d-flex align-center justify-center">
                  <img :src="sprite(pokemon.id)" :alt="pokemon.name" />
                </v-sheet>
              </template>
            </Card>
          </v-sheet>
        </template>
      </v-sheet>
    </v-infinite-scroll>
  </main>
</template>

<style scoped lang="scss">
.home-view {
  width: 90%;
  margin: 1rem auto;

  .filters {
    display: flex;
  }
}
.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 400ms;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
