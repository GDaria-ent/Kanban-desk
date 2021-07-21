import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      cardList: [],
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
    },
    REMOVE_CARD(state, cardId){
      state.cardList = state.cardList.filter(item => item.id != cardId);
    }
  },
  actions: {
  },
  modules: {
  }
})
