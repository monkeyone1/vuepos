<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order">
        <!--订单栏-->
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tabdata" border show-summary style="width:100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" min-width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pos-btns">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>

              <li v-for="(item,index) in type0Goods" :key="index">
                <span>{{item.goodsName}}</span>
                <span class="o-price">￥{{item.price}}元</span>
              </li>
  
            </ul>
          </div>
        </div>
  
        <div class="goods-type">
  
          <el-tabs>
            <el-tab-pane label="汉堡">
              <Goodslist  :listdata="type0Goods"></Goodslist>
            </el-tab-pane>
            <el-tab-pane label="小食">
               <Goodslist  :listdata="type1Goods"></Goodslist>
            </el-tab-pane>
            <el-tab-pane label="饮料">
            <Goodslist  :listdata="type2Goods"></Goodslist>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <Goodslist  :listdata="type3Goods"></Goodslist>
            </el-tab-pane>
  
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import Goodslist from '../components/list'
export default {
  created () {
    // 读取分类商品列表
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response => {
        // this.oftenGoods=response.data;
        this.type0Goods = response.data[0]
        this.type1Goods = response.data[1]
        console.log(this.type1Goods)
        this.type2Goods = response.data[2]
        this.type3Goods = response.data[3]
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
  },
  data () {
    return {
      tabdata: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    }
  },
  components: {
    Goodslist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos {
  width: 100%;
}

.pos-order {
  background: #f9fafc;
  height: 100vh;
}

.pos-btns {
  margin-top: 20px;
}

.title {
  border-bottom: 1px solid #D3DCE6;
  background-color: #F9FAFC;
  padding: 10px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #E5E9F2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}

.o-price {
  color: #58B7FF;
}

.goods-type {
  clear: both;
}


</style>
