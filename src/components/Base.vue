<template>
  <div class="msg-panel-wrapper">
    <div class="msg-panel abp">
      <div id="my-comment-stage" class="container" ref="items"></div>
    </div>
  </div>
</template>

<script>
  import '../ccl/ccl.min.css';

  import CCL from '../ccl/CommentCoreLibrary';

  export default {
  // data() {
  //   // return {
  //   //   CM: null,
  //   // };
  // },
  mounted () {
    this.ye();
  },
  methods: {
    ye() {
      const CM = new CCL.CommentManager(this.$refs.items);
      CM.init();
      CM.start();
      window.CM = CM;
      console.log('123');
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .msg-panel-wrapper {
    position: relative;
    box-sizing: border-box;
    width: 80%;
    height: 80%;
    padding: 2%;
    z-index: 0;
    background-color: red;
  }

  .imgs-wrapper {
    z-index: 1020;
    position: absolute;
    width: 96%;
    height: 94%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .msg-panel {
    z-index: -1;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  }
</style>
