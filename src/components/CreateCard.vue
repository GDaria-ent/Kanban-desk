<template>
    <div class='textarea-wrapper'>
        <label>
            <textarea v-model='inputText' @input='inputEvent' class='textarea' type='text' placeholder="Ввести заголовок для этой карточки"></textarea>
        </label>
        <column-button  @click-on-button='createCard' :is-active='true'>
            <template v-slot:content>
                Добавить карточку
            </template>
        </column-button>
        <column-button class='icon-button' @click-on-button='closeForm'>
            <template v-slot:icon>
                <icon type='close'></icon>
            </template>
        </column-button>
    </div>
</template>

<script>
import Buttons from './Buttons.vue';
import Icon from './Icon.vue';
export default {
    data() {
        return {
            inputText: ''
        }
    },
    props: {
        columnRow: {
            type: String,
            default: ''
        }
    },
    components: {
        'column-button': Buttons,
        'icon': Icon
    }, 
    methods: {
        closeForm() {
            this.$emit('clickToClose');
        },
        createCard() {
            if(this.inputText === ''){
                return false;
            }else{
                this.$emit('createNewCard', this.createNewObject())
            }
        },
        inputEvent() {
            this.$emit('textInInput')
        },
        createNewObject() {
            return {
                id: Math.floor(Math.random() * 100000),
                row: this.columnRow,
                seq_num: 0,
                text: this.inputText
            }

        }
    }

};
</script>

<style lang='scss' scoped>
    .textarea-wrapper {
        width: 100%;
    }
    .textarea{
        width: 100%;
        background-color: #515051;
        border: none;
        height: 100px;
    }
    .icon-button{
        margin-left: 10px;
    }

</style>