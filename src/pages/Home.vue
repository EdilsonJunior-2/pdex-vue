<script setup lang="ts">
import { pokemonList } from "@/api/pokemon";
import { ref, watch, onBeforeMount, capitalize } from "vue";
import Card from "@/components/Card.vue";
import ListItem from "@/commons/classes/lists/listItem";
import PokemonListItem from "@/commons/classes/lists/pokemonListItem";
import { sprite } from "@/commons/utils/URLs";

const pokemons = ref<PokemonListItem[]>([]);
const offset = ref<number>(0);
const limit = ref<number>(20);
const total = ref<number>(0);
const page = ref<number>(1);

const catchEmAll = () =>
  pokemonList(0, 10000).then((res: any) => {
    total.value = res.count;
    pokemons.value = res.results.map(
      (poke: ListItem) => new PokemonListItem(poke)
    );
  });

watch(page, (curr, _) => {
  offset.value = limit.value * (curr - 1);
});

onBeforeMount(() => {
  catchEmAll();
});
</script>

<template>
  <main class="home-view">
    <v-select
      label="Limit"
      variant="outlined"
      v-model="limit"
      :items="[10, 20, 50]"
    />
    <v-sheet
      class="d-flex flex-wrap justify-center overflow-scroll"
      height="70vh"
    >
      <v-sheet
        class="pa-2"
        width="auto"
        min-width="20rem"
        v-for="pokemon in pokemons.slice(offset, limit + offset)"
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
            {{ capitalize(pokemon.name) }} (#{{ pokemon.number }})
          </template>
          <template v-slot:content>
            <v-sheet class="d-flex align-center justify-center">
              <img :src="sprite(pokemon.number)" :alt="pokemon.name" />
            </v-sheet>
          </template>
        </Card>
      </v-sheet>
    </v-sheet>
    <v-pagination
      v-model="page"
      :length="Math.ceil(total / limit)"
    ></v-pagination>
  </main>
</template>

<style scoped lang="scss">
.home-view {
  width: 90%;
  margin: 1rem auto;
}
</style>
