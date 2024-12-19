import React, { useState } from 'react'

const PageColor = () => {
    const [color,setColor] = useState('blue')
    const red = () => {
        setColor('red')
    }
    const yellow = () => {
        setColor('yellow')
    }
    const green = () => {
        setColor('green')
    }
  return (
    <div className='backScreen' style={{backgroundColor:color}}>
      <button onClick={red} className='button red'>Red</button>
      <button onClick={yellow} className='button yellow'>Yellow</button>
      <button onClick={green} className='button green'>Green</button>
    </div>
  )
}

export default PageColor
