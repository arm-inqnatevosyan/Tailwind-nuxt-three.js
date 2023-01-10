<template>
  <div>
    <NavBar/>
    <div class="w-full flex items-center justify-center text-3xl text-sky-500 font-Rampart font-semibold tracking-normal">
      <h1>Site Reviews</h1>
    </div>
    <div class="p-5 m-auto mt-4 grid xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <div v-for="user in users" :key="user.id">
        <div
          class="flex flex-col justify-center items-center shadow-3xl shadow-cyan-500/50  text-black h-72 m-auto text-center bg-gray-50"
          id="bg">
          <div class="font-bold">
            {{ user.email }}
          </div>
          <div class="flex">
            {{ user.name }}
          </div>
          <div>
            {{ user.body }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center mb-4">
      <jw-pagination :items="pageOfItems" @changePage="onChangePage" class="bg-blue-500 text-black shadow-3xl shadow-sky-500 rounded-md"></jw-pagination>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'AboutVue',
  components: { NavBar },
  data () {
    return {
      pageOfItems: [],
      users: []
    }
  },
  methods: {
    onChangePage (users) {
      // update page of items
      this.users = users
    }
  },
  async mounted () {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
    const user = await res.json()
    this.pageOfItems = user;
    [user.keys()].map(i => ({
      id: (i + 1),
      name: 'Item ' + (i + 1)
    }))
  }
}
</script>

<style scoped>
#bg{
  background: url("../assets/img/img.png");
}
</style>
