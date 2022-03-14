import PropTypes from 'prop-types'
import Button from "./Button"

const Header = () => {
    const onClick = () => {
        console.log("Clicking ADD")
    }
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color='green' text='ADD' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header