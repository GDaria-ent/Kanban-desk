<template>
    <div class='card-wrapper'>
        <close-button class='card__button' @click='deleteCard'>
            <template v-slot:icon>
                <icon clas='card__icon' type='close'></icon>
            </template>
        </close-button>
        <div class='card'>
            <p class='card__id'>id: {{ cardInfo.id }}</p>
            <p class='card__content'>{{cardInfo.text}}</p>
        </div>
    </div>
</template>
<script>
import Buttons from './Buttons.vue';
import Icon from './Icon.vue';
    export default {
       props: {
           cardInfo: {
               type: Object
           }
        },
        components: {
            'close-button': Buttons,
            'icon': Icon
        },
        methods: {
            deleteCard() {
                this.$emit('clickToDelete', this.cardInfo.id);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .card-wrapper{
        width: 100%;
        padding: 5px;
        position: relative;
    }
    .card{
        width: 100%;
        background-color: #626261;
        color:#a1a6a5;
        padding: 10px 8px;
    }
    .card__id{
       margin-bottom: 5px;
    }
    .card__button{
        position: absolute;
        right: 5px;
        top: -5px;
        color:#a1a6a5;
    }
</style>