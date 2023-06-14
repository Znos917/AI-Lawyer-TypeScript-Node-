import AuthHeader from './AuthHeader'
import ChatContent from './ChatContent'
import Footer from './Footer'

function Chat() {
  return (
    <div className="bg-[#fafef9]">
      <div className="mx-40 flex flex-col pt-10">
        <div className="inherit top-0 p-2">
          <AuthHeader />
        </div>
        <div className="flex flex-row">
          <ChatContent />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Chat
