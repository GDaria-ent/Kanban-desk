<template>
    <button class='column-button' @click='clickOnButton'>
        <div class='column-button__wrapper' :class="{'active': isActive}">
            <span  
                class='column-button__icon'>
                <slot name='icon'></slot>
            </span>
            <span 
                class='column-button__content'
                :class="{'active': isActive}">
                <slot name='content'></slot>
            </span>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clickOnButton() {
            this.$emit('clickOnButton');
        }
    }
};
</script>


<style lang='scss' scoped>
    .column-button {
        display: inline-block;
        height: 40px;
        color: #eee;
        background: transparent;
        border: none;
        font-family: 'Roboto', 'sans-serif';
        font-size: 15px;  
        padding: 0;
    }
    // .column-button__wrapper{
    //     display: flex;
    //     justify-content: flex-start;
    // }
    .column-button__icon{
        display: inline-block;
    }
    .active{
        background-color: #626261;
        padding: 5px;
    }
    
</style>