<script setup lang="ts">
import { capitalize, defineProps } from "vue";
import { sprite, typeSprite } from "@/commons/utils/URLs";
import { useStore } from "vuex";
import EvolutionChainChart from "@/components/EvolutionChainChart.vue";

const props = defineProps(["open", "onClose"]);
const { getters, dispatch } = useStore();

const barColor = (value: number) => {
  if (value <= 60) return "#da6b14";
  else if (value > 60 && value <= 80) return "#d99419";
  else if (value > 80 && value <= 100) return "#cfd122";
  else if (value > 100 && value <= 120) return "#a2d022";
  return "#3cd023";
};
const getNewPokemon = (id: number) => {
  dispatch("fetchPokemon", { id: id });
};
</script>

<template>
  <v-navigation-drawer width="20000" v-model="props.open" permanent left>
    <v-sheet v-if="getters.getSelectedPokemon" class="pa-2">
      <v-sheet class="d-flex justify-end">
        <v-btn variant="text" rounded @click="props.onClose">
          <v-icon size="2rem" icon="mdi-close-circle" />
        </v-btn>
      </v-sheet>
      <v-row class="pokemon-pagination ma-2">
        <v-col cols="6" class="pa-0">
          <v-btn
            width="100%"
            height="100%"
            variant="text"
            @click="() => getNewPokemon(getters.getSelectedPokemon.id - 1)"
            v-if="getters.getSelectedPokemon.id - 2 >= 0"
            class="d-flex pa-0"
          >
            <img
              width="60px"
              :src="
                sprite(
                  getters.getPokemonList[getters.getSelectedPokemon.id - 2].id
                )
              "
            />
            <p>
              {{
                getters.getPokemonList[getters.getSelectedPokemon.id - 2].name
              }}
              #{{
                getters.getPokemonList[getters.getSelectedPokemon.id - 2].id
              }}
            </p>
          </v-btn>
        </v-col>
        <v-divider inset vertical></v-divider>
        <v-col cols="6" class="pa-0">
          <v-btn
            width="100%"
            variant="text"
            height="100%"
            class="d-flex pa-0"
            @click="() => getNewPokemon(getters.getSelectedPokemon.id + 1)"
            v-if="getters.getSelectedPokemon.id <= getters.getTotal"
          >
            <img
              width="60px"
              :src="
                sprite(getters.getPokemonList[getters.getSelectedPokemon.id].id)
              "
            />
            <p>
              #{{ getters.getPokemonList[getters.getSelectedPokemon.id].id }}
              {{ getters.getPokemonList[getters.getSelectedPokemon.id].name }}
            </p>
          </v-btn>
        </v-col>
      </v-row>
      <v-sheet class="d-flex flex-column align-center">
        <img width="200px" :src="sprite(getters.getSelectedPokemon.id)" />
        <h2>
          <span class="pokemon-id">#{{ getters.getSelectedPokemon.id }}</span>
          {{ capitalize(getters.getSelectedPokemon.name) }}
        </h2>
        <v-sheet class="d-flex justify-center ma-4">
          <img
            class="ma-1"
            width="120px"
            v-for="type in getters.getSelectedPokemon.types"
            :src="typeSprite(type.id)"
            :alt="type.name"
          />
        </v-sheet>
        <h3>Pokedex entry</h3>
        <p>
          {{ getters.getSelectedPokemon.pokedex_entry }}
        </p>
      </v-sheet>
      <h3 class="abilities-title">Abilities</h3>
      <v-sheet class="abilities d-flex justify-space-around ma-2 flex-wrap">
        <p v-for="ability in getters.getSelectedPokemon.abilities">
          {{ ability.name }}
          <v-tooltip
            open-on-click
            v-if="ability.hidden"
            text="hidden ability"
            location="top"
          >
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" icon="mdi-eye-off" />
            </template>
          </v-tooltip>
        </p>
      </v-sheet>
      <h3 v-if="getters.getSelectedPokemon.evolution_chain.evolved_to">
        Evolution chain
      </h3>
      <EvolutionChainChart />
      <h3>Base stats</h3>
      <v-row
        class="d-flex align-center mt-2"
        v-for="stat in Object.keys(getters.getSelectedPokemon.stats)"
      >
        <v-col cols="2">
          <strong>
            {{ stat }}
          </strong>
        </v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-progress-linear
            height="20"
            class="ma-2"
            :color="barColor(getters.getSelectedPokemon.stats[stat])"
            :model-value="100 * (getters.getSelectedPokemon.stats[stat] / 255)"
          >
            <strong>{{ getters.getSelectedPokemon.stats[stat] }}</strong>
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-sheet>
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-navigation-drawer {
  text-align: center;
  transition-duration: 1s !important;
}

.pokemon-pagination {
  background-color: #eee;
  border-radius: 1rem;
  .v-btn {
    border-radius: 1rem;
    .v-btn__content {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 1rem;
    }
    p {
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
}
.pokemon-id {
  color: #999;
}

.pokedex-entry {
  text-align: center;
}
.abilities {
  p {
    margin: 0.5rem;
    opacity: 0.8;
    width: 12rem;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 1.5rem;
    font-weight: bold;
    background-color: #ccc;
  }
}
</style>
