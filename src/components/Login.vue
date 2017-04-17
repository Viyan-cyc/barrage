<!-- <template>
  <div class="login-wrapper">
    <div class="input-wrapper">
      <input type="text" placeholder="请输入您的昵称" v-model="uname" @keyup.enter="setUserName">
      <button @click="setUserName">JOIN IN</button>
    </div>
  </div>
</template> -->

<template>
  <div class="login-wrapper flex-container horiz-center vertl-center ">
    <div class="input-wrapper flex-container horiz-center vertl-center box-container">
      <input type="text" placeholder="请输入您的昵称">
      <button><router-link to='emit'>JOIN IN</router-link></button>
    </div>
  </div>
</template>


<script>
  export default {
    components: {
    },

  // data() {
  //   return {
  //     uname: null,
  //   };
  // },

  // methods: {
  //   setUserName() {
  //     if (!this.uname) return;
  //     MsgManage.login(this.uname);
  //   }
  // }
  
};
</script>

<style lang="less" scoped>
 /*flex布局*/
 .flex-container {
  display: -webkit-box; 
  display: -moz-box; 
  display: -ms-flexbox; 
  display: -webkit-flex; 
  display: flex;
}

/*水平居中*/
.horiz-center {
  -webkit-box-pack: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  justify-content: center;    
}

/*垂直居中*/
.vertl-center {
  -webkit-box-align: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  align-items: center;
}

.box-container{
  box-sizing:border-box;
  -moz-box-sizing:border-box; 
  -webkit-box-sizing:border-box; 
}

.login-wrapper {
  width: 100%;
  height:100%;
  background-color:#2a2727;
  flex-direction: column;
  flex-wrap:wrap;
  min-width: 520px;
}

.input-wrapper {
  width: 40%;
  height: 80px;
  flex-direction:row;
  flex-wrap:wrap;
  min-width: 400px;
  > * {
    height: 100%;
    box-sizing:border-box;
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    border: 1px solid #fff;
    color: #0ff;
    background-color: transparent;
  }
  > input {
    font-size: 1.2em;
    text-align: center;
    flex: 0 0 80%;
    border-right: none;
    border-radius: 8px 0 0 8px;
  }
  > button {
    flex: 0 0 20%;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      font-size: 1.2em;
    }
  }
}
</style>
