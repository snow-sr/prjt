<script>
import { useCarStore } from "../stores/carros.js";
import { mapState, mapStores } from "pinia";
export default {
  setup() {
    const store = useCarStore();
    return { store, getCar: store.getCar, getAllCars: store.getAllCars };
  },
  computed: {
    ...mapState(useCarStore, ["cars", "getCar"]),
  },
  methods: {
    ...mapStores(useCarStore),
  },
};
</script>

<template>
  <main>
    <div v-for="item in getAllCars" v-bind:key="item.id">
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <img class="rounded-t-lg" src="{{item.link}}" alt="" />

          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            {{ item.name }}
          </h5>
          <p class="text-gray-700 text-base mb-4">
            {{ `Valor de mercado: ${item.valor}` }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
