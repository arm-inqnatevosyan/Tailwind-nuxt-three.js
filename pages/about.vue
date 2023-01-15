<template>
  <div>
    <NavBar/>
    <div
      class="w-full flex items-center justify-center text-3xl text-sky-500 font-Rampart font-semibold tracking-normal"
    >
      <h1>Site Reviews</h1>
    </div>
    <PaginationVue />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'AboutVue',
  components: { NavBar }
}
</script>
