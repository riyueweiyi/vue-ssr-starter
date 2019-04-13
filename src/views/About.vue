<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="container"></div>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'
export default {
  mounted () {
    const Component = Vue.extend(HelloWorld) // 动态挂载组件
    this.component = new Component().$mount('#container')
  },
  destroyed () {
    this.component.$destroy()
    console.log(this.component)
  }
}
</script>
