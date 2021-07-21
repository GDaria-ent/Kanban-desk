<template>
    <div class='header' :style='{backgroundColor: color}'>
        <h2>{{title}}</h2>
        <p>({{amount}})</p>
    </div>
</template>

<script>

export default{
    props: {
        title: {
            type: String,
            default: 'on-hold'
        },
        amount: {
            type: Number,
            default: 0
        },
        color: {
            type: String
        }
    }
}


</script>

<style lang='scss' scoped>
    .header{
        width: 100%;
        background-color: #f88b4a;
        display: flex;
        align-content: flex-start;
        color: white;
        text-transform: uppercase;
        font-family: Roboto, sans-serif;
        padding: 10px 10px;
    }
    p{
        display: block;
        font-size: 16px;
        margin: 0;
        margin-left: 10px;
    }
    h2{
        margin: 0;
        font-size: 18px;
    }
</style>