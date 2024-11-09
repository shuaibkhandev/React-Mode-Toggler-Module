import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  } 
  return (
    <div className='cont'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App