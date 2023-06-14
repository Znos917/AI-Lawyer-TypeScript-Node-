import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { useDispatch } from 'react-redux'
import { initMessage } from '../features/messages/messages'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initMessage([]))
  }, [])

  return (
    <div className="flex flex-col bg-white">
      <div className="sticky top-0 bg-white p-2">
        <Header />
      </div>
      <div className="flex justify-center">
        <div className="max-w-5xl">
          <Content />
        </div>
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  )
}

export default App
