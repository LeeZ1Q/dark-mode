/* eslint-disable react/no-unknown-property */
import React from 'react'
import './App.css'

function App() {
  const [mode, setMode] = React.useState('light');
  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='App' color-mode = {mode}>
      <button onClick={handleClick}>Toggle</button>
      <div className="container">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
      </div>
    </div> 
  )
}

export default App
