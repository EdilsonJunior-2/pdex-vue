<script setup lang="ts">
import { ref, watch, onMounted, capitalize } from "vue";
import Card from "@/components/Card.vue";
import ListItem from "@/commons/classes/lists/listItem";
import { sprite } from "@/commons/utils/URLs";
import { useStore } from "vuex";

const { getters, commit, dispatch } = useStore();
const nameFilter = ref<string>("");
const idFilter = ref<string>("");
const typeFilter = ref<number>();
const loading = ref<boolean>(false);

watch(nameFilter, (curr, _) => {
  commit("setNameFilter", curr);
});

watch(idFilter, (curr, _) => {
  idFilter.value = curr.replace(/\D+/g, "");
  commit("setIdFilter", curr);
});

watch(typeFilter, (curr, _) => {
  loading.value = true;
  setTimeout(() => {
    dispatch("fetchType", curr);
    loading.value = false;
  }, 1000);
});

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
    <div class="filters">
      <v-text-field v-model="nameFilter" label="Name filter" />
      <v-text-field v-model="idFilter" label="Index filter" />
      <v-autocomplete
        label="Types"
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
    <v-infinite-scroll
      v-if="!loading"
      class="fade-in"
      height="80vh"
      @load="load"
    >
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
                  function: () => false,
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
