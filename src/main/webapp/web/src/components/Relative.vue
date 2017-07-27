<template>
  <div id="cc">
    <div class="main-center">
    <div class="cdiv">
      <p>关系：</p>
      <textarea id="input" class="form-control" rows="5" placeholder="注意:人物间用'的'字分开…"></textarea>
    </div>

    <div class="cdiv text-center text-btn">
      <div class="btn-group">
        <button class="btn btn-default" data-value="爸爸">父</button>
        <button class="btn btn-default" data-value="妈妈">母</button>
      </div>

      <div class="btn-group">
        <button class="btn btn-default" data-value="老公">夫</button>
        <button class="btn btn-default" data-value="老婆">妻</button>
      </div>

      <div class="btn-group">
        <button class="btn btn-default" data-value="儿子">子</button>
        <button class="btn btn-default" data-value="女儿">女</button>
      </div>

      <div class="btn-group">
        <button class="btn btn-default" data-value="哥哥">兄</button>
        <button class="btn btn-default" data-value="弟弟">弟</button>
      </div>

      <div class="btn-group">
        <button class="btn btn-default" data-value="姐姐">姐</button>
        <button class="btn btn-default" data-value="妹妹">妹</button>
      </div>

    </div>
    <div class="cdiv text-center jsq">
      <button class="btn btn-primary jisuan" @click="cal">计算</button>
      <button class="btn btn-success jisuan" @click="back">回退</button>
      <button class="btn btn-danger jisuan" @click="clear">清空</button>
    </div>
    <div class="cdiv">
      <p>计算结果：</p>
      <textarea id="reslut" class="form-control" rows="5" readonly></textarea>
    </div>
    </div>
  </div>
</template>
<script>
  import
    {
      btnCal,btnBack,btnClear,relate
    }from '../assets/js/relativesCal.js'
export default {
  mounted(){
    this.rela();
  },
      methods:{
          cal(){
              btnCal();
          },
          back(){
              btnBack();
          },
          clear(){
              btnClear();
          },
          rela(){
            relate();
          }

      }

  }

</script>
<style scoped>

.text-btn{
  display: flex;
  margin-top: 0.4rem;
}


.cdiv>p{
  font-size: 40%;
  text-align: left;
}

.main-center{
  width: 40%;
  margin: 0 auto;
}

textarea{
  width: 100%;
  height: 3rem;
  margin-top: 0.3rem;
  border-radius: 5px;
  outline: none;
  border: 2px solid #008800;
  background-color: #b5d592;
}

.text-center{
  display: flex;
}
.btn-group{
  flex: 1;
}

.btn-group>button{
  flex: 1;
  padding: 0.3rem;
  margin: 0.1rem 0;
  background-color: #fff;
  border: 2px solid #008800;
  border-radius: 100%;
  outline: none;
}
.btn-group>button:hover{
  box-shadow: 0 0 2px 1px #008800 ;
}
.btn-group>button:hover{
  background-color: #76ff8f;
}

.jsq{
  margin: 1rem 0;
  justify-content: center;
}
.jsq>button{
  padding: 0.2rem 0.4rem ;
  margin: 0 0.5rem;
  border-radius: 50px;
  font-size: 0.3rem;
  letter-spacing:2px;
}

 .btn-primary{
   border: 2px solid #a5d585;
   background-color: #b5d592;
   color: #008800;
   box-shadow: 0 0 2px 2px #a5d585;
 }
.btn-success{
  border: 2px solid #6ac1ac;
  background-color: #51cab7;
  color: #1f7996;
  box-shadow: 0 0 2px 2px #6ac1ac;
}

.btn-danger{
  border: 2px solid #c3aa39;
  background-color: #c3ad46;
  color: #ffe87c;
  box-shadow: 0 0 2px 2px #c3aa39;

}
@media screen and (min-width: 300px) and (max-width: 1024px){
  html {
    font-size: 14px !important;
  }
  main{
    width: 100%;
  }
  #cc .main-center{
    width: 60%;
  }
}



</style>
