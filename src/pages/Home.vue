<script setup lang="ts">
import { getPokemonList } from "@/api/pokemon";
import { ref, watch, onBeforeMount, capitalize } from "vue";
import Card from "@/components/Card.vue";
import ListItem from "@/commons/classes/lists/listItem";
import { sprite } from "@/commons/utils/URLs";
import { getTypeList, getType } from "@/api/type";
import { createPokemonListByType } from "@/commons/utils/lists";
import { removingForbiddenTypes } from "@/commons/utils/type";

const pokemonList = ref<ListItem[]>([]);
const types = ref<ListItem[]>([]);
const offset = ref<number>(0);
const limit = ref<number>(20);
const total = ref<number>(0);
const page = ref<number>(1);
const nameFilter = ref<string>("");
const numberFilter = ref<string>("");
const typeFilter = ref<number>();
const pokemonListByType = ref<ListItem[]>([]);

const catchEmAll = () => {
  const promises = [getPokemonList(0, 10000), getTypeList()];
  Promise.all(promises).then((res) => {
    total.value = res[0].count;
    pokemonList.value = res[0].results;
    types.value.push(
      ...res[1].results.filter((type) => !removingForbiddenTypes(type))
    );
  });
};

const filteredPokemonList = (): ListItem[] =>
  createPokemonListByType(pokemonListByType.value, pokemonList.value).filter(
    (poke) =>
      poke.name.toLowerCase().includes(nameFilter.value.toLowerCase()) &&
      poke.id.toString().includes(numberFilter.value)
  );

watch(page, (curr, _) => {
  offset.value = limit.value * (curr - 1);
});

watch(numberFilter, (curr, _) => {
  numberFilter.value = curr.replace(/\D+/g, "");
});

watch(typeFilter, (curr, _) => {
  curr
    ? getType(curr).then((res) => (pokemonListByType.value = res.pokemon))
    : (pokemonListByType.value = []);
});

onBeforeMount(() => {
  catchEmAll();
});
</script>

<template>
  <main class="home-view">
    <div class="filters">
      <v-text-field v-model="nameFilter" label="Name filter" />
      <v-text-field v-model="numberFilter" label="Index filter" />
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
      class="d-flex flex-wrap justify-center overflow-scroll"
      height="80vh"
    >
      <v-sheet
        class="pa-2"
        width="auto"
        min-width="20rem"
        v-for="pokemon in filteredPokemonList().slice(offset, limit + offset)"
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
      :length="Math.ceil(filteredPokemonList().length / limit)"
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
