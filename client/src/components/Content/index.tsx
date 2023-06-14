import { Outlet, Link } from 'react-router-dom'
import './style.css'
import FingerTip from 'asset/fingertip.svg'
import ChatPhone from 'asset/chatphone.avif'
import BookTip from 'asset/booktip.svg'
import ProtectYou from 'asset/protectyou.svg'
import Features from './features'

const Content = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="fingertip-wrapper flex flex-row">
        <div className="w-3/5">
          <h1 className="text-5xl">
            Personal AI lawyer at <br />
            your fingertips🦾
          </h1>
          <p className="mt-4 text-base font-normal">
            Say goodbye to expensive consultations, long waits for
            <br />
            appointments, and confusing legal texts. AI-lawyer ready to help you
            <br />
            with expert legal help anytime, anywhere.
          </p>

          <Link to="/chat">
            <button type="button" className="btn-type">
              Try for free
            </button>
          </Link>

          <div className="rating-wrapper">
            <span>★★★★★ </span>
            <span>5 stars from 252 users</span>
          </div>
        </div>
        <div className="w-2/5">
          <img src={FingerTip} />
        </div>
      </div>

      <div className="fingertip-wrapper flex flex-row">
        <div className="w-1/2">
          <h2 className="text-5xl">AI Lawyer Сonnect is Here!</h2>
          <p className="mt-4 text-base font-normal">
            <div className="mb-px">
              Attention Lawyers, we have great news for you!
            </div>
            <br />
            Online user support has never been easier or more efficient.
            <br />
            You can now reach all users quickly and easily without
            <br />
            wasting a single minute of your precious time.
          </p>
          <div className="rating-wrapper">
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="w-1/2">
          <img src={ChatPhone} width="55%" />
        </div>
      </div>

      <div className="fingertip-wrapper flex flex-col">
        <h2 className="text-5xl">Some cool features we have:</h2>
        <Features />
      </div>
      <div className="fingertip-wrapper">
        <h2 className="text-5xl">Why we are awesome</h2>
        <div className="flex">
          <div className="card m-2 inline w-1/4">
            <span className="text-xl">⚡</span>
            <h3 className="mt-2">Fast</h3>
            <span>
              The AI-lawyer
              <br />
              platform is ability to
              <br />
              provide instant
              <br />
              legal advice and
              <br />
              document creation
              <br />
              is a significant
              <br />
              advantage.
            </span>
          </div>
          <div className="card m-2 inline w-1/4">
            <span className="text-xl">📱</span>
            <h3 className="mt-2">Accessible</h3>
            <span>
              The AI-lawyer
              <br />
              platform is online
              <br />
              accessibility makes
              <br />
              it easier for clients
              <br />
              to access legal
              <br />
              help, regardless of
              <br />
              their location or
              <br />
              schedule.
            </span>
          </div>
          <div className="card m-2 inline w-1/4">
            <span className="text-xl">🔐</span>
            <h3 className="mt-2">Private</h3>
            <span>
              The AI-lawyer
              <br />
              platform provides
              <br />
              privacy and
              <br />
              anonymity to
              <br />
              clients seeking
              <br />
              legal assistance.
            </span>
          </div>
          <div className="card m-2 inline w-1/4">
            <span className="text-xl">💸</span>
            <h3 className="mt-2">Cost-effective</h3>
            <span>
              Law market is
              <br />
              prohibitively
              <br />
              expensive for many
              <br />
              people, but the AI-
              <br />
              lawyer platform
              <br />
              offers affordable
              <br />
              legal solutions.
            </span>
          </div>
        </div>
      </div>

      <div className="fingertip-wrapper flex flex-row">
        <div className="w-3/5">
          <h2 className="text-5xl">Are you a lawyer?</h2>
          <p className="text-base font-normal">
            Focus on important tasks like representing clients, networking, and
            <br />
            business development, and let our platform handle the daily
            <br />
            routines. We can provide a solution for you:
            <ul className="list-disc pl-5">
              <li className="my-1">Instant legal advices</li>
              <li className="my-1">Drafting legal documents</li>
              <li className="my-1">Documents review and comparison</li>
              <li className="my-1">legal research</li>
            </ul>
          </p>
        </div>
        <div className="w-2/5">
          <img src={BookTip} />
        </div>
      </div>

      <div className="fingertip-wrapper flex flex-col">
        <h2 className="text-5xl">What our users think</h2>
        <div className="relative flex flex-row">
          <div className="quote-content w-1/2">
            <p className="half-part text-base font-normal">
              The AI-lawyer platform amazed me!
              <br />
              The instant legal advice feature was a game-changer.
              <br />
              It gave me quick answers to my legal
              <br />
              questions without waiting for a lawyer.
              <br />
              The AI-powered legal document creation
              <br />
              and checking tools saved me time and hassle.
              <br />
              Plus, the platform is plain language
              <br />
              explanations of legal jargon were a real
              <br />
              lifesaver. I highly recommend the AI-lawyer
              <br />
              platform for quick and reliable legal help.
              <br />
              <br />
              James Daels
              <p className="rates">★★★★★ </p>
            </p>
          </div>
          <div className="quote-content w-1/2">
            <p className="half-part text-base font-normal">
              I was unsure about using an AI platform for
              <br />
              my legal needs, but the AI-lawyer platform
              <br />
              exceeded my expectations. The legal advice
              <br />
              questions without waiting for a lawyer.
              <br />
              was accurate, the tools were easy to use and
              <br />
              saved me time, and the platform was user-
              <br />
              friendly with helpful resources. Overall, the
              <br />
              AI-lawyer platform provided me with a
              <br />
              convenient, cost-effective, and high-quality
              <br />
              legal solution. I would use it again and
              <br />
              recommend it to others
              <br />
              <br />
              Emma Harow
              <p className="rates">★★★★★ </p>
            </p>
          </div>
        </div>
      </div>

      <div className="fingertip-wrapper flex flex-row">
        <div className="w-2/3">
          <h4 className="text-5xl">
            AI Lawyer protects your rights and
            <br />
            wallet 🛡️
          </h4>
          <p className="mt-4 text-base font-normal">
            Say goodbye to expensive consultations, long waits for
            <br />
            appointments, and confusing legal texts. AI-lawyer ready to help you
            <br />
            with expert legal help anytime, anywhere.
          </p>
          <button type="button">Try for free</button>
          <div className="rating-wrapper">
            <span>★★★★★ </span>
            <span>5 stars from 252 users</span>
          </div>
        </div>
        <div className="w-1/3">
          <img src={ProtectYou} />
        </div>
      </div>
    </div>
  )
}

export default Content
