<template>
  <div>
    <NavBar/>
    <div>
      <div class="flex items-center justify-center font-Rampart">
        <h1 class="text-3xl text-sky-500 font-semibold">Cards For Jobs</h1>
      </div>
      <div class="p-5 m-auto mt-4 grid xl:grid-cols-4 gap-4 truncate md:grid-cols-2 sm:grid-cols-1">
        <div v-for="user in allPosts" :key="user.id">
          <div
            class="relative w-full flex flex-col justify-center items-center shadow-3xl shadow-cyan-500/50  text-black h-72 m-auto text-center opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
            id="bg"
          >
            <div class="absolute top-0 left-0 w-full">
              <img src="https://mdbootstrap.com/img/new/slides/034.jpg" class="w-full h-[288px] sm:w-full" alt="..."/>
            </div>
            <div class="absolute text-white">
              <div class="font-bold">
                {{ user.name }}
              </div>
              <div class="flex font-bold flex justify-center">
                {{ user.phone }}
              </div>
              <div class="font-bold">
                {{ user.website }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-4 mb-4 text-3xl">
      <h1 class="font-Rampart text-sky-500">Loved Jobs</h1>
    </div>
    <div
      id="carouselExampleCrossfade"
      class="carousel slide carousel-fade relative md:w-5/12 sms:w-9/12 mx-auto mb-4"
      data-bs-ride="carousel"
    >
      <div
        class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 md:w-9/12 sms:w-9/12"
      >
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden md:w-full sms:w-full">
        <div class="carousel-item active float-left w-full">
          <img
            src="../assets/img/slider1.jpg"
            class="block w-full"
            alt="Wild Landscape"
          />
          <div class="carousel-caption hidden md:block absolute text-center text-sky-500 font-bold">
            <h5 class="text-xl">Abella Dayman</h5>
            <p>He is very smart and friendly.</p>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="../assets/img/slider2.jpg"
            class="block w-full"
            alt="Camera"
          />
          <div class="carousel-caption hidden md:block absolute text-center text-sky-500 font-bold">
            <h5 class="text-xl">Cosmo Cillian</h5>
            <p>He is a master at his craft.</p>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="../assets/img/slider3.jpg"
            class="block w-full"
            alt="Exotic Fruits"
          />
          <div class="carousel-caption hidden md:block absolute text-center text-sky-500 font-bold">
            <h5 class="text-xl font-bold">Jamse Slaiver</h5>
            <p>He is very positive and very smiley.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ProductVue',
  components: NavBar,
  computed: mapGetters(['allPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted () {
    await this.fetchPosts()
  }
}
</script>

<style scoped>
#btn-back-to-top {
  position: fixed;
  display: none;
}
</style>
