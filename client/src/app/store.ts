import { configureStore } from '@reduxjs/toolkit'
import messages from '../features/messages/messages'

export default configureStore({
  reducer: {
    messages: messages
  }
})
