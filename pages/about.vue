<template>
  <div>
    <NavBar />
    <div class="p-5 m-auto grid xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <div v-for="(user,index) in allPosts" :key="index">
        <div
          class="flex flex-col justify-center items-center shadow-3xl shadow-cyan-500/50  text-black h-72 m-auto text-center bg-gray-50"
        >
          <div>
            {{ user.name }}
          </div>
          <div class="flex">
            <h3 class="text-xs flex items-center">
              Phone Number ---
            </h3>
            {{ user.phone }}
          </div>
          <div>
            {{ user.company.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'AboutVue',
  components: { NavBar },
  computed: mapGetters(['allPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted () {
    await this.fetchPosts()
  }
}
</script>

<style scoped>
</style>
