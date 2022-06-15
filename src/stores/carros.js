import { v4 as idGen } from "uuid";
import { defineStore } from "pinia";

export const useCarStore = defineStore("Carros", {
  state: () => ({
    cars: [{ name: "000", marca: "000", valor: "R$000,000", id: idGen() }],
  }),
  getters: {
    getCar: (state) => {
      return (carName) => state.cars.find((car) => car.name === carName);
    },
    getAllCars: (state) => {
      return state.cars;
    },
  },
  actions: {
    addCar(x) {
      this.cars.push(x);
      return `added car ${x.id}`;
    },
  },
});
