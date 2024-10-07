<script setup lang="ts">
import { EvolutionDetails } from "@/commons/classes/attributes/evolutionDetails";

const gender = ["female", "male"];

const props = defineProps<{
  evolution_details: EvolutionDetails;
}>();
</script>

<template>
  <v-tooltip open-on-click location="bottom">
    <template v-slot:activator="{ props }">
      <v-icon v-bind="props" icon="mdi-information-slab-circle-outline" />
    </template>
    <v-sheet class="d-flex flex-column evolution-details-tooltip">
      <span v-if="props.evolution_details.trigger.name === 'shed'">
        Evolve your nincada with a free slot in your team
      </span>
      <span v-else>
        {{ `Evolution trigger: ${props.evolution_details.trigger.name}` }}
      </span>

      <span v-if="props.evolution_details.min_level">
        {{ `Min level required: ${props.evolution_details.min_level}` }}
      </span>
      <span v-if="props.evolution_details.gender">
        {{ `Required gender: ${gender[props.evolution_details.gender - 1]}` }}
      </span>
      <span v-if="props.evolution_details.min_affection">
        {{ `Min afection required: ${props.evolution_details.min_affection}` }}
      </span>
      <span v-if="props.evolution_details.min_beauty">
        {{ `Min beauty required: ${props.evolution_details.min_beauty}` }}
      </span>
      <span v-if="props.evolution_details.min_happiness">
        {{ `Min happiness required: ${props.evolution_details.min_happiness}` }}
      </span>
      <span v-if="props.evolution_details.item">
        {{ `Using the item ${props.evolution_details.item.name}` }}
      </span>
      <span v-if="props.evolution_details.held_item">
        {{ `Holding the item ${props.evolution_details.held_item.name}` }}
      </span>
      <span v-if="props.evolution_details.know_move">
        {{
          `Leveling up after learn ${props.evolution_details.know_move.name}`
        }}
      </span>
      <span v-if="props.evolution_details.know_move_type">
        {{
          `Leveling up after learn a ${props.evolution_details.know_move_type.name} type move`
        }}
      </span>
      <span v-if="props.evolution_details.location">
        {{ `Required location: ${props.evolution_details.location.name}` }}
      </span>
      <span v-if="props.evolution_details.needs_overworld_rain">
        Needs overworld rain
      </span>
      <span v-if="props.evolution_details.party_species">
        {{
          `Requires a ${props.evolution_details.party_species.name} in your team`
        }}
      </span>
      <span v-if="props.evolution_details.party_type">
        {{
          ` Requires a ${props.evolution_details.party_type.name} type pokemon in your team`
        }}
      </span>
      <span v-if="props.evolution_details.time_of_day !== ''">
        {{ `Time of day: ${props.evolution_details.time_of_day}` }}
      </span>
      <span v-if="props.evolution_details.trade_species">
        {{
          `Requires a trade with ${props.evolution_details.trade_species.name}`
        }}
      </span>
      <span v-if="props.evolution_details.turn_upside_down">
        You need to turn your console upside down
      </span>
    </v-sheet>
  </v-tooltip>
</template>

<style lang="scss">
.evolution-details-tooltip {
  background: transparent !important;
  color: white !important;
}
</style>
