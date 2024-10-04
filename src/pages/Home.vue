<script setup lang="ts">
import { ref, watch, onMounted, capitalize } from "vue";
import Card from "@/components/Card.vue";
import ListItem from "@/commons/classes/lists/listItem";
import { sprite } from "@/commons/utils/URLs";
import { getType } from "@/api/type";
import { useStore } from "vuex";

const { getters, commit, dispatch } = useStore();
const types = ref<ListItem[]>([]);
const limit = ref<number>(20);
const page = ref<number>(1);
const nameFilter = ref<string>("");
const idFilter = ref<string>("");
const typeFilter = ref<number>();
const pokemonListByType = ref<ListItem[]>([]);
const loading = ref<boolean>(false);

watch(page, (curr, _) => {
  commit(`setOffset`, getters.getLimit * (curr - 1));
});

watch(nameFilter, (curr, _) => {
  commit("setNameFilter", curr);
});

watch(idFilter, (curr, _) => {
  idFilter.value = curr.replace(/\D+/g, "");
  commit("setIdFilter", curr);
});

watch(typeFilter, (curr, _) => {
  curr
    ? getType(curr).then((res) => (pokemonListByType.value = res.pokemon))
    : (pokemonListByType.value = []);
});

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
      <v-select
        label="Limit"
        variant="outlined"
        v-model="limit"
        :items="[10, 20, 50]"
      />
      <v-autocomplete
        label="Types"
        variant="outlined"
        v-model="typeFilter"
        clearable
        :items="
          types.map((type, index) => ({
            title: type.name,
            value: index + 1,
          }))
        "
      >
      </v-autocomplete>
    </div>
    <v-sheet
      v-if="!loading"
      class="d-flex flex-wrap justify-center overflow-scroll"
      height="80vh"
    >
      <v-sheet
        class="pa-2"
        width="auto"
        min-width="20rem"
        v-for="pokemon in getters.getFilteredPokemonList"
      >
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
    </v-sheet>
    <v-pagination
      v-model="page"
      :length="Math.ceil(getters.getPokemonList.length / getters.getLimit)"
    ></v-pagination>
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
</style>
