export const state = {
  users: []
}
export const getters = {
  allPosts: (state) => {
    return state.users
  }
}
export const actions = {
  async fetchPosts (ctx) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
    const users = await res.json()
    ctx.commit('onChangePage', users)
  }
}
export const mutations = {
  onChangePage: (state, users) => {
    state.users = users
  }
}
