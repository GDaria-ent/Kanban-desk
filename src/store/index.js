import { createStore } from 'vuex';

import Api from '@/services/api.js';

export default createStore({
  state() {
    return{
      cardList: [],
      cardListInStorage: '__cards_list__'

    }
  },
  getters: {
    getCardList(state) {
      return function (id) { 
        return state.cardList.filter(card => card.row === id) 
      };
    }
  
  },
  mutations: {
    ADD_CARD(state, card) {
      state.cardList.push(card);
      Api.updateDB(state.cardList);

    },
    REMOVE_CARD(state, cardId){
      state.cardList = state.cardList.filter(item => item.id != cardId);
      Api.updateDB(state.cardList);
    },
    GET_DATA_FROM_LOCALSTORAGE(state) {
      state.cardList = Api.getDBData();
    }
  },
  actions: {
  },
  modules: {
  }
})
