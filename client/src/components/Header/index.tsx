import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div className="header-wrapper flex items-center justify-between px-4 py-2">
      <h1 className="text-[18px] text-[#37352F]">Lawtiq Legal Assistant</h1>

      <Link
        to="/chat"
        className="mr-[2rem] rounded-[5px] bg-[#37352F] py-2 px-4 text-white no-underline"
      >
        Try Lawtiq Legal Assistant
      </Link>
    </div>
  )
}

export default Header
