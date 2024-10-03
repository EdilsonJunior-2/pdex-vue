<script setup lang="ts">
import { pokemonList } from "@/api/pokemon";
import { ref, watch, onBeforeMount } from "vue";
import Card from "@/components/Card.vue";
import ListItem from "@/commons/classes/lists/listItem";
import PokemonListItem from "@/commons/classes/lists/pokemonListItem";

const pokemons = ref<PokemonListItem[]>([]);
const offset = ref<number>(0);
const limit = ref<number>(20);
const total = ref<number>(0);
const page = ref<number>(1);

const catchEmAll = () =>
  pokemonList(offset.value, limit.value).then((res: any) => {
    total.value = res.count;
    pokemons.value = res.results.map(
      (poke: ListItem) => new PokemonListItem(poke)
    );
  });

watch(page, (curr, _) => {
  offset.value = limit.value * (curr - 1);
  catchEmAll();
});

onBeforeMount(() => {
  catchEmAll();
});
</script>

<template>
  <main>
    <v-container>
      <v-pagination v-model="page" :length="total / limit"></v-pagination>
      <v-sheet class="d-flex flex-wrap justify-center">
        <v-sheet
          class="pa-2"
          width="auto"
          min-width="15rem"
          v-for="(pokemon, index) in pokemons"
        >
          <Card
            :title="`#${pokemon.number} ${pokemon.name}`"
            :actions="[
              {
                text: 'details',
                function: () => false,
              },
            ]"
          >
            <template v-slot:content>
              <v-sheet class="d-flex align-center justify-center">
                <img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    offset + index + 1
                  }.png`"
                  :alt="(pokemon as any).name"
                />
              </v-sheet>
            </template>
          </Card>
        </v-sheet>
      </v-sheet>
    </v-container>
  </main>
</template>

<style scoped></style>
