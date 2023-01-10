<template>
  <App/>
</template>

<script>
import Vue from 'vue'
import JwPagination from 'jw-vue-pagination'
import 'tw-elements'

Vue.component('jw-pagination', JwPagination)

export default {
  name: 'IndexPage'
}
</script>
