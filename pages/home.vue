<template>
  <div class="bg">
    <NavBar />
    <div class="w-full h-2x flex justify-center items-center flex-col uppercase relative ">
      <h1 class="text-6xl text-center ">
        Welcome Our <b class="text-sky-600">Website</b>
      </h1>
      <p class="text-2xl mt-2 text-center">
        Lorem ipsum Dolar sit amet
      </p>
      <div class="btns-div mt-5 text-white">
        <button class="w-40 h-10 bg-sky-600 rounded uppercase">
          Watch Video
        </button>
        <button class="w-40 h-10 border-2 border-solid border-gray-500 rounded uppercase">
          Subscipe Us
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeVue',
  components: { NavBar }
}
</script>

<style scoped>
.bg{
  width: 100%;
  height: 100vh;
  background: url("../../vuex-project/assets/img/bg.jpg") no-repeat !important;
}
</style>
