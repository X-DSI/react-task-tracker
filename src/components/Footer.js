import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Link to='/about'>About</Link>
      <p>Copyright &copy; <a href='https://github.com/X-DSI' target='_blank'>DSI</a> 2022</p>
    </footer>
  )
}

export default Footer