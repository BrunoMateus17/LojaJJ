import './LinkButton.css'
import { Link } from 'react-router-dom'

function LinkButton({ to, text }) {
  return (
    <Link className="" to={to}>
      {text}
    </Link>
  )
}

export default LinkButton