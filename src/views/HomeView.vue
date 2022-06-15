<script>
import { RouterLink } from "vue-router";
import ListItems from "@/components/listComponent.vue";
export default {
  data() {
    return {
      array: [{ name: "teste1" }, { name: "teste3" }, { name: "teste2" }],
    };
  },
  components: {
    ListItems,
    RouterLink,
  },
};
</script>

<template>
  <main>
    <h1>Estes são os carros do Shaquille O'Neal:</h1>
    <ListItems> </ListItems>

    <div>
      você é o shaq? gerencie seus carros clicando:
      <router-link :to="{ name: 'cadastrar' }">aqui </router-link>
    </div>
  </main>
</template>
