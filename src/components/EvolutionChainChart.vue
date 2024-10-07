<script setup lang="ts">
import { sprite } from "@/commons/utils/URLs";
import { useStore } from "vuex";
import EvolutionDetailsTooltip from "./EvolutionDetailsTooltip.vue";

const { getters } = useStore();
</script>

<template>
  <v-sheet
    v-if="getters.getSelectedPokemon.evolution_chain.evolved_to"
    class="d-flex align-start justify-center flex-wrap"
  >
    <v-sheet
      class="d-flex flex-column pokemon-stage"
      :color="
        getters.getSelectedPokemon.evolution_chain.species.id ==
        getters.getSelectedPokemon.id
          ? 'success'
          : 'gray'
      "
    >
      <img
        width="100px"
        :src="sprite(getters.getSelectedPokemon.evolution_chain.species.id)"
        :alt="getters.getSelectedPokemon.evolution_chain.species.name"
      />
      {{ getters.getSelectedPokemon.evolution_chain.species.name }}
    </v-sheet>
    <strong>evolves to ></strong>
    <v-sheet class="d-flex flex-column align-center">
      <v-sheet
        class="d-flex justify-space-between"
        v-for="evolution in getters.getSelectedPokemon.evolution_chain
          .evolved_to"
      >
        <v-sheet
          class="pokemon-stage"
          :color="
            evolution.species.id == getters.getSelectedPokemon.id
              ? 'green'
              : 'gray'
          "
        >
          <img
            width="100px"
            :src="sprite(evolution.species.id)"
            :alt="evolution.species.name"
          />
          <p>
            {{ evolution.species.name }}
            <EvolutionDetailsTooltip
              :evolution_details="evolution.evolution_details"
            />
          </p>
        </v-sheet>
        <strong v-if="evolution?.evolved_to" class="strong-2">
          evolves to >
        </strong>
        <v-sheet class="d-flex justify-space-between flex-column">
          <v-sheet
            v-for="evolution_2 in evolution.evolved_to"
            class="pokemon-stage"
            :color="
              evolution_2.species.id == getters.getSelectedPokemon.id
                ? 'success'
                : 'gray'
            "
          >
            <img
              width="100px"
              :src="sprite(evolution_2.species.id)"
              :alt="evolution_2.species.name"
            />
            <p>
              {{ evolution_2.species.name }}
              <EvolutionDetailsTooltip
                :evolution_details="evolution_2.evolution_details"
              />
            </p>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<style lang="scss">
strong {
  margin: 3rem;
  width: 80px;
}

.pokemon-stage {
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
