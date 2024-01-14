import { createStore } from "vuex";

interface SingleList {
  id: number;
  name: string;
}
interface List {
  id: number;
  title: string;
  list: Array<SingleList>;
}

export default createStore({
  state: {
    lists: [] as List[],
  },
  getters: {
    getList: (state) => (id: number) => {
      return state.lists.find((single_list) => {
        return single_list.id == id;
      });
    },
  },
  mutations: {
    addToLists(state, list: any) {
      state.lists.push(list);
    },
  },
  actions: {
    addToLists({ commit }, list) {
      commit("addToLists", list);
    },
  },
  modules: {},
});
