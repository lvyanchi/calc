<template>
  <div class="nav">
  <div class="nav-r">
    <router-link to="/OnlineCalculator"><span>在线计算器<i></i></span></router-link>
  </div>
    <div class="nav-r">
      <router-link to="/Relative"><span>亲属关系计算器<i></i></span></router-link>
    </div>
    <div class="nav-r" @mouseover="show()" @mouseout="hide()">
      <router-link to="/YieldCal" ><span class="yield">理财收益率计算<i></i>
      <div class='yield-sub' v-show="a">
        <ul>
          <li><router-link tag='a' to="/Yeb">余额宝</router-link></li>
          <li><router-link tag='a' to="/ZZ">朝朝盈</router-link></li>
          <li><router-link tag='a' to="/MG">盈满贯</router-link></li>
        </ul>
      </div>
      </span>
      </router-link>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'nav',
    data(){
      return{
        a:false
      }
    },
    methods:{
      show(){
        this.a='true';
      },
      hide(){
        this.a=false;
      }
    }
  }
</script>
<style>
.nav{
    width: 100%;
  display: flex;
  }
.nav .nav-r{
  display: inline-block;
  flex: 1;
}
.nav-r a span{
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #125d5d;
  position: relative;
  font-size: 0.5rem;
  text-shadow:#07cde6 0 0  20px;
}

span>i{
  display: inline-block;
  width: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color:teal;
}
.nav-r a span:hover i{
  width: 100%;
  transition: 1.5s;
}
/*下拉菜单------------*/
 .yield{
   position: relative;
 }
.yield-sub{
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
  z-index: 999;
/*  display: none;*/
}
.yield-sub{
  width: 40%;
  background-color:#A0EA0F;
  border-bottom: 2px solid #1A665A;
  height: auto;
  border-radius: 4px;
}
.yield-sub ul li{
  width: 100%;
}
.yield-sub ul li >a:hover{
  transition: 1s;
  background-color: #ffffff;

}
.yield-sub ul li a{
  font-size: 0.4rem;
  color:#1A665A;
  padding: 5%;
  border-radius: 5%;
  text-shadow:#000 0 5px  5px;
}

</style>
