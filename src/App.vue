<template>
  <div class='root-component'>
    <div class='columns-container'>
      <column 
        v-for='column in columnList'
        :cards-list="getCardList(column.row)" 
        :key='column.row' 
        :column-info='column'
      ></column>
    </div>
  </div>
</template>

<script>
import Column from './components/Column.vue';
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  components: {
    'column':  Column
  },
  data() {
    return{
      columnList: [
        {
          title: 'on-hold',
          color: '#f88b4a',
          row: '0'
        },
        {
          title: 'in progress',
          color: '#3c8bbe',
          row: '1'
        },
        {
          title: 'needs review',
          color: '#f5c852',
          row: '2'
        },
        {
          title: 'approved',
          color: '#4ba468',
          row: '3'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCardList'
    ]),
    ...mapState([
      'cardList'
    ]),
  },
  methods: {
    ...mapMutations([
      'GET_DATA_FROM_LOCALSTORAGE'
    ]),
  },
  mounted() {
    this.GET_DATA_FROM_LOCALSTORAGE();
  }
  
}
</script>

<style lang="scss">
html,body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  p,h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
  #app {
    height: 100%;
  }
  *,*:before,*:after {
    box-sizing: inherit;
  }
  .root-component {
    width: 100%;
    height: 100%;
    background-color: #777;
  }
  .columns-container{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 15px 8px;
  }
  
  @media screen and (max-width: 869px) {
    .columns-container{
      flex-wrap: wrap;
    }
  }
</style>
