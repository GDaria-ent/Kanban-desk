<template>
    <div class='column'>
        <column-header :amount="cardsList.length" :title='columnInfo.title' :color="columnInfo.color"></column-header>
        <div class='column-body'>
            <column-card 
                v-for='card in cardsList' 
                :key='card.id' 
                :card-info='card'
                @click-to-delete='removeCard'
            ></column-card>
        </div>
        <div class='column__footer'>
            <column-button  
                v-if='!isCreateForm' 
                @click-on-button='showInput'>
                <template v-slot:content>
                    Добавить карточку
                </template>
                <template v-slot:icon>
                    <icon type='open'></icon>
                </template>
            </column-button>
            <card-input 
                v-else 
                @click-to-close='closeWindow'                 
                @create-new-card='addCard'
                :column-row='columnInfo.row'>
            </card-input>
        </div>
        
    </div>
</template>

<script>
import Header from './Header.vue';
import CreateCard from './CreateCard.vue';
import Buttons from './Buttons.vue';
import Card from './Card.vue';
import Icon from './Icon.vue';

import { mapMutations} from 'vuex';

export default {
    props:{
        columnInfo: {
            type: Object
        },
        cardsList: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            isCreateForm: false
        }
    },
    components: {
        'column-header': Header,
        'card-input': CreateCard,
        'column-button': Buttons,
        'column-card': Card,
        'icon': Icon
    },
    methods: {
         ...mapMutations([
            'ADD_CARD',
            'REMOVE_CARD'
        ]),
        addCard(cardData) {
            this.ADD_CARD(cardData);
            this.closeWindow();
        },
        removeCard(cardId) {
            this.REMOVE_CARD(cardId);
        },
        showInput() {
            this.isCreateForm = true; 
        },
        closeWindow() {
            this.isCreateForm = false;
        }
    }
}

</script>

<style lang='scss' scoped>
.column {
    max-width: calc((100% / 4) - 20px);
    width: 100%;
    background-color: black;
    margin-bottom: 10px;
    
}
.column-body{
    width: 100%;
    background-color: black;
    
}
.column__footer{
    width: 100%;
    background-color: #2e2f34;
    padding: 10px 10px;
}

@media screen and (max-width: 869px) {
    .column{
        max-width: calc((100% / 2) - 20px);
        width: 100%;
    }
}
@media screen and (max-width: 461px) {
    .column{
        max-width: calc(100% - 8px);
        width: 100%;
    }
}

</style>