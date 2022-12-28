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
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    ctx.commit('updatePosts', users)
  }
}
export const mutations = {
  updatePosts: (state, users) => {
    state.users = users
  }
}
