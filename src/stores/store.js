import { defineStore } from "pinia";
import config from "@/assets/json/config.json";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    gameConfig: {
      theme: 0,
      players: 0,
      size: 0,
    },
    config: config,
  }),
  getters: {},
  actions: {
  }
});