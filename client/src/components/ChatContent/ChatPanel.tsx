const ChatPanel = (props: any) => {
  return (
    <>
      {props.messageData.type === 'isbot' ? (
        <div className="flex justify-start">
          <div className="chatbot-msg m-5 max-w-[70%] p-5">
            {props.messageData.content}
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <div className="human-msg m-5 max-w-[70%] p-5">
            {props.messageData.content}
          </div>
        </div>
      )}
    </>
  )
}

export default ChatPanel
