<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  import createProxy from 'proxy-storage-api'
  
  export default {
    data() {
      return {
        msg: 'hello world!'
      }
    },
    mounted () {
      const storage = createProxy(localStorage, {
        onChange(key, value) {
          console.log(key, value)
        }
      })
      storage.setItem('data', {})
      console.log('data' in storage)
    }
  }
</script>

<style scoped>

</style>