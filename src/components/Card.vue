<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
  actions: {
    text: string;
    color?: string;
    function: (p: any) => any;
  }[];
}>();

const actions = ref(props.actions);
</script>

<template>
  <v-card>
    <v-card-title>
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>
    <v-card-actions v-if="actions" v-for="action in actions" class="d-flex">
      <v-btn
        variant="tonal"
        :color="action.color"
        @click="action.function"
        width="100%"
      >
        {{ action.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
