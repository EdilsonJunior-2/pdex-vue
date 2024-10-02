<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
  title: string;
  actions: {
    text: string;
    color?: string;
    function: (p: any) => any;
  }[];
}>();

const title = ref(props.title);
const actions = ref(props.actions);
</script>

<template>
  <v-card>
    <v-card-title v-if="title">{{ title }}</v-card-title>
    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>
    <v-card-actions v-if="actions" v-for="action in actions">
      <v-btn variant="tonal" :color="action.color" @click="action.function">
        {{ action.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
