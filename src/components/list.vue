<template>
    <ul  class='cookList'>
        <li  v-for="(goods,index) in listdata"  :key="index">
            <span class="foodImg">
                <img :src="goods.goodsImg" width="100%">
            </span>
            <span class="foodName">{{goods.goodsName}}</span>
            <span class="foodPrice">￥{{goods.price}}元</span>
        </li>
    </ul>
</template>

<script type='jsx'>
export default {
    props: ['listdata'],
    data () {
        return {
        }
    },
}

</script>
<style>
.cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
}

.cookList li span {

    display: block;
    float: left;
}

.foodImg {
    width: 40%;
}

.foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
}

.foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}
</style>

