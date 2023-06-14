import App from 'components/App'
import Chat from 'components/Chat'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function route() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default route
