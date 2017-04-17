<template>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</template>

<script>
    export default {
        data () {
            return {};
        },
        methods: {},
    };
</script>

<style>
   *{
     padding: 0;
     margin:0; 
 }

 body {
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body,html {
  height:100%;
  width:100%;
}

</style>
