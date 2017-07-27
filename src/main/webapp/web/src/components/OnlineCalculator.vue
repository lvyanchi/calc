<template>
  <div id="cc">
    <span class="sparkle" v-show="a" @click="closeF"><i>X</i>开启计算旅行吧！^-^ </span>
    <div id="calculator">
      <form name=result>
        <input  name=result readonly/>
        <fieldset class="btn-list">
          <div class="bun">
            <button type="button" @click="d(7)">7</button>
            <button type="button" @click="d(8)">8</button>
            <button type="button" @click="d(9)">9</button>
            <button type="button" @click="ope('+')">+</button>
          </div>
          <div class="bun">
            <button type="button" @click="d(4)">4</button>
            <button type="button" @click="d(5)">5</button>
            <button type="button" @click="d(6)">6</button>
            <button type="button" @click="ope('-')">-</button>
          </div>
          <div class="bun">
            <button type="button" @click="d(1)">1</button>
            <button type="button" @click="d(2)">2</button>
            <button type="button" @click="d(3)">3</button>
            <button type="button" @click="ope('*')">*</button>
          </div>
          <div class="bun">
            <button type="button">(</button>
            <button type="button" @click="d(0)">0</button>
            <button type="button">)</button>
            <button type="button" @click="ope('/')">/</button>
          </div>
          <div class="bun">
            <button type="button" @click="c">C</button>
            <button type="button" @click="per">.</button>
            <button type="button" @click="ope('&#x21D0')">&#x21D0;</button>
            <button type="button" @click="equ">=</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import {
  digit,operator,period,clear,equals
  }
  from "../assets/js/calculator.js"
export default {
  data(){
  return{
    a:'ture'
  }
},
    methods:{
      d(n){
        digit(n);
      },
      ope(op){
        operator(op);
      },
      per(){
        period();
      },
      c(){
        clear();
      },
      equ(){
        equals();
      },
      closeF(){
        this.a = false;
      }

    }

}
</script>

<style scoped>

.sparkle{
  display: inline-block;
  width: 3rem;
  height: 20px;
  padding: 2px;
  color:#ffffff;
  position: absolute;
  left: 8rem;
  top: 5px;
  font-size: 30%;
  line-height: 20px;
  border: 2px solid #ffffff;
  border-radius:50% ;
  background-color: #1ae61a;
  animation:pup 0.45s infinite;
}

#calculator{
  width: 40%;
  height: auto;
  padding: 2% 5%;
  background: linear-gradient(to right, rgba(128,128,128,0.8) 0%,rgba(191,210,208,0.9) 20%, rgba(191,210,208,0.9) 80%,rgba(128,128,128,0.8) 100% );
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px rgba(128,128,128,0.8);
}
  input{
    width: 100%;
    height: 40px;
    padding: 5px;
    outline: none;
    color: grey;
    font-size: 0.8rem;
    border: 1px solid #dddddd;
    border-radius:5px;
    text-align: end;
    box-shadow: inset 0 0 5px #000000;
    box-sizing: border-box;
  }
  #btn-list{
    padding: 5% 8%;
  }
  fieldset{
    width: 100%;
  }
  .bun{
    display: flex;
  }
  button{
    outline: none;
    flex: 1;
    margin: 2%;
    padding: 3%;
    border: 1px solid #ddd;
    border-radius:5px;
    color: #ffffff;
    font-size: 0.5rem;
    cursor: pointer;
    background-color:#85989F;
  }
  button:hover{
    background-color:#6B9A9F;
    transform: scale(0.9);
  }



</style>




