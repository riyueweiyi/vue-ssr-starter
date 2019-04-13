<template>
  <div class="home">
    <ul>
      <li v-for="item in topics" :key="item.id">
        {{item.title}} ----- {{item.create_at}}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'home',
  preFetch ({ store }) {
    return store.dispatch('getAllTopics', {
      page: 1,
      limit: 15
    })
  },
  beforeMount () {
    this.$options.preFetch({ store: this.$store })
  },
  computed: {
    ...mapState(['topics'])
  }
}
</script>
