import { Link } from 'react-router-dom'
import Facion from 'asset/facion.png'
import UserAuth from './UserAuth'
function AuthHeader() {
  return (
    <div className="flex flex-row justify-between">
      <div className="block">
        <Link to="/">
          <img src={Facion} className="w-20" />
        </Link>
      </div>
      <UserAuth />
    </div>
  )
}

export default AuthHeader
