export const login = (state, payload) => {
  state.user = payload
}

export const logout = (state) => {
  state.user = {}
}
