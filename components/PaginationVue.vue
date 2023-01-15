<!--suppress ALL -->
<template>
  <div>
    <div class="offset">
      <div class="p-5 m-auto mt-4 grid xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="user in displayedPosts" :key="user.id">
          <div
            class="flex flex-col justify-center items-center shadow-3xl shadow-cyan-500/50  text-black h-72 m-auto text-center bg-gray-50"
            id="bg"
          >
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
      <nav aria-label="Page navigation example" class="mb-4">
        <ul class="pagination flex items-center m-auto justify-around w-pag bg-blue-500 text-black shadow-3xl shadow-sky-500 rounded-md">
          <li class="page-item">
            <button type="button" class="page-link" v-if="page != 1" @click="page--" id="prev"> Previous</button>
          </li>
          <li class="page-item">
            <button type="button"
                    class="page-link border-2 border-white p-2 px-3  border-y-0 border-r-0"
                    v-for="pageNumber in pages.slice(page-1, page+5)"
                    v-bind:key="pageNumber.id"
                    @click="page = pageNumber"
            > {{ pageNumber }}
            </button>
          </li>
          <li class="page-item">
            <button type="button" @click="page++" v-if="page < pages.length" class="page-link" id="next"> Next</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>

export default {
  name: 'PaginationVue',
  data () {
    return {
      posts: [''],
      page: 1,
      perPage: 10,
      pages: [],
      users: []
    }
  },
  methods: {
    async getPosts () {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
      const user = await res.json()
      this.posts = user;
      [user.keys()].map(i => ({
        id: (i + 1),
        name: 'Item ' + (i + 1)
      }))
    },
    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = (page * perPage) - perPage
      const to = (page * perPage)
      return posts.slice(from, to)
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
    }
  },
  watch: {
    posts () {
      this.setPages()
    }
  },
  created () {
    this.getPosts()
  },
  filters: {
    trimWords (value) {
      return value.split(' ').splice(0, 20).join(' ') + '...'
    }
  }
}
</script>
<style scoped>
#bg {
  background: url("static/img.png");
}
.page-link:nth-last-child(1){
  border-right:2px solid white;
  border-left: none;
}
.page-link:nth-last-child(2){
  border-right: 2px solid white;
}
#next{
  border:none;
}
#prev{
  border:none;
}
</style>
