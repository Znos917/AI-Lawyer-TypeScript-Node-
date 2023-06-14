import ChatBotIcon from 'asset/chatbot.png'
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../../features/messages/messages'
import ChatPanel from './ChatPanel'
import './style.css'

function ChatContent() {
  const dispatch = useDispatch()
  const bottomRef = useRef<null | HTMLDivElement>(null)
  const [prompt, setPrompt] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messages = useSelector((state: any) => state.messages.value)
  // const messages = [{}]

  const sendMessage = async (prompt: any) => {
    setContent('')
    setContent(prompt)
    const msg = { content: prompt, type: 'user' }
    dispatch(addMessage(msg))

    setPrompt('')
    setIsLoading(true)

    // console.log('type of messages', typeof messages)
    if (prompt !== '') {
      const response = await fetch(
        `https://api.openai.com/v1/chat/completions`,
        {
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content:
                  'I want you to act as a Lawyer. I will write you sentences and you will only reply with legal sencentes. And your name is just and actually Lawtiq Legal Assistant. You have personal name and it is also Lawtiq Legal Assistant.'
              },
              { role: 'user', content: 'What is your name?' },
              {
                role: 'assistant',
                content:
                  'My name is Lawtiq Legal Assistant. I am here to help you.'
              },
              { role: 'user', content: prompt }
            ],
            temperature: 0.3,
            max_tokens: 2000
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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'
          }
        }
      )
      // setGptLoading(false)
      const res = await response.json()
      const anw = { content: res.choices[0].message.content, type: 'isbot' }
      dispatch(addMessage(anw))
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setPrompt('')
      alert('Please input the question..')
    }
  }

  useEffect(() => {
    // console.log('message list', messages)
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleChange = (e: any) => {
    // console.log('handlechage', e.target.value)
    setPrompt(e.target.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key == 'Enter') {
      sendMessage(prompt)
    }
  }

  return (
    <>
      <div className="card m-5 w-1/4">
        <span className="text-[22px]">Hello, Metaknow Ya 👋</span>
        <button className="card new-btn my-8">+ New Chat</button>
        <span className="text-[22px]">Bookmarks:</span>
        <div className="card desc-box mt-4">No bookmarks yet :(</div>
        <span className="text-[22px]">History:</span>
        <div className="card desc-box mt-4">No history yet :(</div>
      </div>
      <div className="card p-0-important m-5 w-1/2">
        <div className="card-title border-b p-5 text-center">
          <img src={ChatBotIcon} className="w-10 rounded-full" />
          AI Lawyer ✍️
        </div>
        <div className="flex max-h-80 min-h-[50vh] flex-col overflow-y-auto">
          {/* {messages.map((message, index) => (
            <ChatPanel
              prompt={message.prompt}
              answer={message.answer}
              key={index}
            />
          ))} */}

          {messages.map((message: any, idx: any) => (
            <ChatPanel
              key={idx}
              messageData={message}
              className="scroll-smooth md:scroll-auto"
            />
          ))}
          <div ref={bottomRef} />
        </div>
        <div className="relative bottom-0 m-3 rounded-2xl border-b bg-[#f5f5f5] p-3 text-center">
          <div className="sticky flex flex-row items-center">
            <button className="add-icon-btn absolute rounded-full"></button>
            <textarea
              className="min-w-full bg-transparent pr-10 pl-7 outline-none"
              rows={1}
              cols={1}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={prompt}
              placeholder="Please write your Question."
              disabled={isLoading}
            ></textarea>
            <button
              className="arrow-btn absolute rounded-full"
              onClick={sendMessage}
            ></button>
          </div>
        </div>
      </div>
      <div className="m-5 flex w-1/4 flex-col">
        <div className="card mb-5">
          <span className="text-[22px]">Other features 🦾:</span>
        </div>
        <div className="card mb-5">
          <span className="text-[22px]">Earn with AI Lawyer 💸</span>
        </div>
        <div className="card mb-5">
          <span className="text-[22px]">
            Connect AI Lawyer to your website 🤖
          </span>
        </div>
      </div>
    </>
  )
}

export default ChatContent
