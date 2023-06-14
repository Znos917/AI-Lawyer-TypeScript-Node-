import { createSlice, current } from '@reduxjs/toolkit'

export const messages = createSlice({
  name: 'messages',
  initialState: {
    value: []
  },
  reducers: {
    addMessage: (state, action) => {
      let messageList = current(state).value
      state.value = [...messageList, action.payload]
    },
    initMessage: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { addMessage, initMessage } = messages.actions

export default messages.reducer
