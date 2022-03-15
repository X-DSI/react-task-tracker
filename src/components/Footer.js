import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Link to='/about'>About</Link>
      <p>Copyright &copy; DSI 2022</p>
    </footer>
  )
}

export default Footer